import { notFound } from "next/navigation";
import { Calendar, Clock, User, ArrowLeft, Tag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getPostBySlug, getAllPostSlugs, formatDate, getRecentPosts } from "@/lib/blog";
import { Metadata } from "next";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { generateBreadcrumbSchema } from "@/lib/seo";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for each post
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: post.image ? [post.image] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const recentPosts = getRecentPosts(3).filter((p) => p.slug !== post.slug);

  // Breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${post.slug}` },
  ]);

  // Article schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Kristina Eck Real Estate Team',
      logo: {
        '@type': 'ImageObject',
        url: 'https://kristinaeck.com/logo.png',
      },
    },
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="flex flex-col">
        {/* Header Section */}
        <section className="py-12 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Button variant="ghost" size="sm" className="mb-6" asChild>
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>

              <Badge variant="secondary" className="mb-4">
                {post.category}
              </Badge>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(post.date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readingTime}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        {post.image && (
          <section className="relative h-96 w-full">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-contain"
              priority
              sizes="100vw"
            />
          </section>
        )}

        {/* Content Section */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Main Content */}
              <article className="lg:col-span-8">
                <div className="prose prose-lg max-w-none
                  prose-headings:font-bold prose-headings:text-foreground prose-headings:mt-8 prose-headings:mb-4
                  prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
                  prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-foreground
                  prose-ul:text-muted-foreground prose-ul:my-4 prose-ol:text-muted-foreground prose-ol:my-4
                  prose-li:marker:text-primary prose-li:my-2
                  prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground
                  prose-code:text-primary prose-code:bg-muted prose-code:px-1 prose-code:rounded
                  prose-pre:bg-muted prose-pre:border prose-pre:border-border
                  prose-img:rounded-lg prose-img:shadow-lg"
                >
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h1: ({node, ...props}) => <h1 className="text-4xl font-bold mt-8 mb-4 text-foreground" {...props} />,
                      h2: ({node, ...props}) => <h2 className="text-3xl font-bold mt-8 mb-4 text-foreground" {...props} />,
                      h3: ({node, ...props}) => <h3 className="text-2xl font-bold mt-6 mb-3 text-foreground" {...props} />,
                      h4: ({node, ...props}) => <h4 className="text-xl font-bold mt-4 mb-2 text-foreground" {...props} />,
                      p: ({node, ...props}) => <p className="text-muted-foreground leading-relaxed mb-4" {...props} />,
                      ul: ({node, ...props}) => <ul className="list-disc pl-6 my-4 space-y-2 text-muted-foreground" {...props} />,
                      ol: ({node, ...props}) => <ol className="list-decimal pl-6 my-4 space-y-2 text-muted-foreground" {...props} />,
                      li: ({node, ...props}) => <li className="text-muted-foreground" {...props} />,
                      a: ({node, ...props}) => <a className="text-primary hover:underline" {...props} />,
                      strong: ({node, ...props}) => <strong className="font-bold text-foreground" {...props} />,
                      em: ({node, ...props}) => <em className="italic" {...props} />,
                      blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4" {...props} />,
                      img: ({node, src, alt, ...props}) => {
                        if (!src || typeof src !== 'string') return null;
                        return (
                          <span className="block my-8">
                            <Image
                              src={src}
                              alt={alt || ''}
                              width={800}
                              height={600}
                              className="rounded-lg shadow-lg w-full h-auto"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
                            />
                            {alt && (
                              <span className="block text-center text-sm text-muted-foreground mt-2 italic">
                                {alt}
                              </span>
                            )}
                          </span>
                        );
                      },
                    }}
                  >
                    {post.content}
                  </ReactMarkdown>
                </div>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-12 pt-8 border-t border-border">
                    <div className="flex items-center gap-2 mb-4">
                      <Tag className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium text-foreground">Tags:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </article>

              {/* Sidebar */}
              <aside className="lg:col-span-4">
                {recentPosts.length > 0 && (
                  <Card className="p-6 sticky top-24">
                    <h3 className="text-xl font-bold text-foreground mb-6">Recent Posts</h3>
                    <div className="space-y-6">
                      {recentPosts.map((recentPost) => (
                        <Link
                          key={recentPost.slug}
                          href={`/blog/${recentPost.slug}`}
                          className="block group"
                        >
                          <div className="space-y-2">
                            {recentPost.image && (
                              <div className="relative h-32 w-full rounded-lg overflow-hidden">
                                <Image
                                  src={recentPost.image}
                                  alt={recentPost.title}
                                  fill
                                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                                  sizes="300px"
                                />
                              </div>
                            )}
                            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                              {recentPost.title}
                            </h4>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              {recentPost.excerpt}
                            </p>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Calendar className="h-3 w-3" />
                              <span>{formatDate(recentPost.date)}</span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <Button className="w-full mt-6" variant="outline" asChild>
                      <Link href="/blog">View All Posts</Link>
                    </Button>
                  </Card>
                )}
              </aside>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
