"use client"

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function PropertiesWidgetPage() {
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
                {/* IDX Broker widget - Try iframe method for localhost development */}
                <div className="space-y-4">
                  {/* Alternative: Direct iframe embed (works on localhost without domain approval) */}
                  <div className="border-t border-border pt-6">
                    <iframe
                      src="https://kristinaeckteam.idxbroker.com/i/newest-listings"
                      width="100%"
                      height="600"
                      frameBorder="0"
                      className="border border-border rounded-lg"
                      title="IDX Property Search"
                    />
                    <p className="text-xs text-muted-foreground mt-2">
                      This iframe loads the search directly from IDX Broker and works without domain approval.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
