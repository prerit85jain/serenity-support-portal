
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import GetStartedDialog from "./GetStartedDialog";

const CTA = () => {
  return (
    <section className="py-20 hero-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
          
          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Begin Your Mental Health Journey Today
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands who have found support, community, and resources to improve their mental wellbeing. Your journey towards better mental health starts here.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <GetStartedDialog 
                trigger={
                  <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                }
              />
              <Button variant="outline" className="rounded-full px-8 py-6 text-lg border-2">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
