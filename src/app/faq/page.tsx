import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, Mail } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Real Estate FAQ",
  description: "Find answers to common questions about buying, selling, and working with Kristina Eck Real Estate Team. Get expert insights on the Cache Valley real estate market.",
  keywords: ["real estate FAQ", "home buying questions", "selling home questions", "Logan Utah real estate", "Cache Valley housing"],
  openGraph: {
    title: "FAQ - Kristina Eck Real Estate Team",
    description: "Get answers to your real estate questions from experienced professionals in Cache Valley.",
  },
};

export default function FAQPage() {
  const faqCategories = [
    {
      title: "Buying a Home",
      questions: [
        {
          q: "How much do I need for a down payment?",
          a: "Down payment requirements vary by loan type. Conventional loans typically require 3-20% down, FHA loans require as little as 3.5%, VA loans often require 0% down for qualified veterans, and USDA loans may offer 0% down for rural properties. We can connect you with lenders to discuss the best option for your situation."
        },
        {
          q: "What's the difference between pre-qualification and pre-approval?",
          a: "Pre-qualification is an informal estimate of how much you might be able to borrow based on self-reported information. Pre-approval is a formal commitment from a lender after they've verified your income, assets, and credit. Pre-approval makes your offer much stronger when competing for a home."
        },
        {
          q: "How long does it take to buy a home?",
          a: "From making an offer to closing typically takes 30-45 days, though this can vary. The home search process before that can take anywhere from a few weeks to several months depending on your criteria and market conditions."
        },
        {
          q: "Should I buy or rent in Cache Valley?",
          a: "This depends on your financial situation, how long you plan to stay in the area, and current market conditions. Generally, if you're planning to stay for at least 3-5 years, buying can build equity and provide stability. We can help you run the numbers for your specific situation."
        },
        {
          q: "What closing costs should I expect?",
          a: "Buyers typically pay 2-5% of the home's purchase price in closing costs. This includes loan origination fees, appraisal, title insurance, inspections, and other fees. Some costs may be negotiable with the seller."
        },
        {
          q: "Can I back out of a home purchase after making an offer?",
          a: "Yes, during contingency periods (inspection, financing, appraisal), you can typically back out and get your earnest money back. Once contingencies are removed, backing out may result in losing your earnest money deposit."
        }
      ]
    },
    {
      title: "Selling a Home",
      questions: [
        {
          q: "How do I determine my home's value?",
          a: "We provide a comprehensive Comparative Market Analysis (CMA) that looks at recent sales of similar homes in your area, current market conditions, your home's condition, and unique features. We'll help you price competitively to attract buyers while maximizing your return."
        },
        {
          q: "What repairs should I make before selling?",
          a: "Focus on minor repairs, deep cleaning, fresh paint in neutral colors, and enhancing curb appeal. Major renovations often don't provide a good return on investment. We'll walk through your home and provide specific recommendations based on current buyer expectations."
        },
        {
          q: "How long will it take to sell my home?",
          a: "In Cache Valley's current market, well-priced homes typically sell within 30-60 days. However, this varies based on price point, condition, location, and time of year. Spring is typically the busiest season."
        },
        {
          q: "Do I need to stage my home?",
          a: "Staging helps buyers visualize themselves in the space and can lead to faster sales and higher offers. Even simple staging like decluttering, depersonalizing, and arranging furniture can make a big difference. We can provide staging recommendations or connect you with professional stagers."
        },
        {
          q: "What are the costs of selling a home?",
          a: "Typical selling costs include real estate commission (usually 5-6% split between both agents), title insurance, transfer taxes, any agreed-upon repairs, and potential staging costs. We'll provide a detailed net proceeds estimate before you list."
        },
        {
          q: "Can I sell my home if I still owe more than it's worth?",
          a: "If you owe more than your home's value (underwater), a short sale might be an option, though it requires lender approval and can affect your credit. Let's discuss your specific situation to explore all options."
        }
      ]
    },
    {
      title: "Working with an Agent",
      questions: [
        {
          q: "Why should I use a real estate agent?",
          a: "A good agent provides market expertise, handles complex paperwork, negotiates on your behalf, has access to the MLS and off-market properties, coordinates inspections and appraisals, and guides you through every step. For buyers, our services are typically free as we're paid by the seller."
        },
        {
          q: "How does your commission work?",
          a: "For sellers, commission is typically 5-6% of the sale price, split between the listing agent and buyer's agent. For buyers, the seller typically pays your agent's commission, so our services cost you nothing directly."
        },
        {
          q: "What makes your team different?",
          a: "We combine 20+ years of Cache Valley expertise, personalized service, cutting-edge technology through Keller Williams, and deep local market knowledge. We're committed to communication, transparency, and achieving the best outcomes for our clients."
        },
        {
          q: "Do I need to sign an exclusive contract?",
          a: "Listing agreements for sellers are typically exclusive for a set period (usually 6 months). Buyer representation agreements vary - we're happy to discuss terms that make you comfortable while allowing us to work effectively on your behalf."
        },
        {
          q: "How often will I hear from you during the process?",
          a: "We believe in proactive communication. You'll receive regular updates, immediate notification of showings and offers, and can reach us by phone, text, or email whenever you have questions."
        }
      ]
    },
    {
      title: "Cache Valley Market",
      questions: [
        {
          q: "What's the current market like in Logan and Cache Valley?",
          a: "Cache County's median home price is around $506,000, with homes averaging 77 days on market. We're seeing steady demand from families and USU-affiliated buyers. Contact us for the most current market analysis for your specific area of interest."
        },
        {
          q: "What areas do you serve?",
          a: "We specialize in all of Cache Valley, including Logan, North Logan, Smithfield, Hyrum, Providence, Millville, Nibley, and surrounding areas. We also work throughout Northern Utah and Southern Idaho."
        },
        {
          q: "Are there good schools in the area?",
          a: "Cache Valley has excellent schools, including Logan City School District and Cache County School District, plus access to Utah State University. We can provide information about schools near any property you're considering."
        },
        {
          q: "What's the average price per square foot?",
          a: "Currently averaging around $207 per square foot in Cache County, though this varies significantly by location, home age, and condition. Newer construction and desirable neighborhoods typically command premium prices."
        },
        {
          q: "Is it a buyer's or seller's market?",
          a: "Market conditions vary by price point and location. Currently, with about 5 months of inventory, we're seeing a more balanced market than recent years. Contact us for current conditions in your specific price range and area."
        }
      ]
    },
    {
      title: "Financing & Legal",
      questions: [
        {
          q: "What credit score do I need to buy a home?",
          a: "Minimum credit scores vary by loan type: FHA loans require 580+, conventional loans typically 620+, and VA loans around 620+. Higher scores get better interest rates. We can connect you with lenders who work with various credit situations."
        },
        {
          q: "What is PMI and can I avoid it?",
          a: "Private Mortgage Insurance (PMI) is required on conventional loans with less than 20% down. It typically costs 0.5-1% of the loan amount annually. You can avoid it by putting 20% down, using a piggyback loan, or choosing an FHA loan (which has its own insurance)."
        },
        {
          q: "Should I get a fixed or adjustable-rate mortgage?",
          a: "Fixed-rate mortgages provide payment stability and are generally recommended if you plan to stay long-term. Adjustable-rate mortgages (ARMs) may offer lower initial rates but can increase. Your lender can help you compare options based on your situation."
        },
        {
          q: "What is title insurance and do I need it?",
          a: "Title insurance protects you from claims against your property ownership due to past liens, errors in public records, or fraud. Lenders require it, and owner's title insurance (protecting you) is highly recommended and relatively inexpensive."
        },
        {
          q: "What happens if the appraisal comes in low?",
          a: "If the appraisal is below the offer price, you can negotiate with the seller to lower the price, pay the difference in cash, challenge the appraisal, or walk away (if you have an appraisal contingency). We'll help you navigate the best option."
        },
        {
          q: "Do I need a real estate attorney?",
          a: "In Utah, real estate attorneys aren't required for most transactions - title companies handle closings. However, complex situations (disputes, unique contracts, estate sales) may benefit from legal counsel."
        }
      ]
    },
    {
      title: "Home Inspections & Condition",
      questions: [
        {
          q: "Should I get a home inspection?",
          a: "Absolutely! A professional inspection (costing $400-600) can reveal issues that may cost thousands to repair. Even new construction should be inspected. We'll help you interpret the report and negotiate repairs if needed."
        },
        {
          q: "What does a home inspection cover?",
          a: "Standard inspections cover the structure, roof, foundation, HVAC, plumbing, electrical, and major appliances. Specialized inspections (radon, sewer scope, mold) may be recommended based on the home's age and condition."
        },
        {
          q: "Can I attend the home inspection?",
          a: "Yes, and we encourage it! Being present allows you to ask questions, better understand the home's systems, and see potential issues firsthand. It's a valuable learning experience."
        },
        {
          q: "What if the inspection reveals problems?",
          a: "After inspection, you can request repairs, ask for credits, negotiate a price reduction, or walk away (if you have an inspection contingency). We'll help you decide what's reasonable to request based on the issues found."
        },
        {
          q: "How old should a roof be before replacement?",
          a: "Most roofs last 20-30 years depending on material and weather exposure. Cache Valley's snow and sun take their toll. If a roof is over 15 years old, budget for replacement. Lenders may require certification for older roofs."
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Badge variant="secondary" className="text-sm px-4 py-1">
              FAQ
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about buying, selling, and working with our team in Cache Valley.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqCategories.flatMap((category, idx) =>
                category.questions.map((item, qIdx) => (
                  <AccordionItem
                    key={`${idx}-${qIdx}`}
                    value={`${idx}-${qIdx}`}
                    className="border-b border-border last:border-b-0"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <span className="text-foreground pr-4 text-lg">
                        {item.q}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))
              )}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card className="border-border/50 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">Still Have Questions?</CardTitle>
                <CardDescription className="text-lg">
                  We're here to help! Reach out and we'll be happy to answer any questions you have.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Us
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+14357577259">
                    <Phone className="mr-2 h-5 w-5" />
                    Call (435) 757-7259
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
