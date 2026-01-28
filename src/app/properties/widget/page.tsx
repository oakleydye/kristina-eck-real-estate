"use client"

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useEffect } from "react";
import { Code, Zap, Settings } from "lucide-react";

// Note: Metadata in src/app/properties/widget/layout.tsx

export default function PropertiesWidgetPage() {
  useEffect(() => {
    // Load IDX Broker widget script
    const script = document.createElement('script');
    script.src = 'https://www.idxbroker.com/idx/omnisearch.js?widgetid=XXXXX'; // Replace XXXXX with your widget ID
    script.async = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Badge variant="secondary" className="text-sm px-4 py-1">
              Widget Integration
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Available Properties (IDX Broker Widget)
            </h1>
            <p className="text-lg text-muted-foreground">
              Search and browse properties using embedded IDX Broker widgets.
            </p>
          </div>
        </div>
      </section>

      {/* Widget Container */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* IDX Broker Omnisearch Widget */}
          <div className="max-w-6xl mx-auto mb-12">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>Search Properties</CardTitle>
                <CardDescription>
                  Use the search tool below to find your perfect home
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* IDX Broker widget will be injected here */}
                <div id="idxStart"></div>

                {/* Instructions for configuring widgets */}
                <div className="mt-8 p-6 bg-muted/30 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    Widget Configuration
                  </h3>
                  <div className="space-y-4 text-sm text-muted-foreground">
                    <p>To activate IDX Broker widgets on this page:</p>
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                      <li>
                        Log in to your IDX Broker dashboard at{' '}
                        <a
                          href="https://middleware.idxbroker.com/mgmt/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          middleware.idxbroker.com
                        </a>
                      </li>
                      <li>Go to Design {'>'} Widgets section</li>
                      <li>Create or select a widget (Omnisearch, Results, Map, etc.)</li>
                      <li>Copy the widget embed code</li>
                      <li>Update the script source in <code className="bg-background px-2 py-1 rounded">src/app/properties/widget/page.tsx</code></li>
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Widget Options */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Available Widget Types
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-border/50">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Omnisearch Widget</CardTitle>
                  <CardDescription>
                    Comprehensive search form with filters for price, beds, baths, and more.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
{`<script src="https://www.idxbroker.com/
idx/omnisearch.js?widgetid=YOUR_ID">
</script>`}
                  </pre>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Results Widget</CardTitle>
                  <CardDescription>
                    Display property results in a grid or list format with customizable styling.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
{`<script src="https://www.idxbroker.com/
idx/resultswidget.js?widgetid=YOUR_ID">
</script>`}
                  </pre>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Settings className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Map Search Widget</CardTitle>
                  <CardDescription>
                    Interactive map-based search allowing users to browse properties by location.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
{`<script src="https://www.idxbroker.com/
idx/mapsearch.js?widgetid=YOUR_ID">
</script>`}
                  </pre>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Widget Integration Active
            </h2>
            <p className="text-muted-foreground">
              This page uses embedded IDX Broker widgets for a quick, no-code integration.
              Widgets are fully managed by IDX Broker and automatically stay in sync with your MLS.
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Button variant="outline" asChild>
                <Link href="/properties/api">View API Version</Link>
              </Button>
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
