
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <div className="min-h-screen py-16 pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get Started with Serenity
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Welcome to the first step of your mental health journey. Fill out the form below to create your account and begin accessing our resources and support.
          </p>
          
          <div className="bg-card rounded-lg p-8 shadow-md border border-border">
            <h2 className="text-2xl font-semibold mb-6">Create Your Account</h2>
            <p className="mb-8">
              This page would typically contain a sign-up form or other onboarding elements. For now, this is a placeholder page demonstrating navigation from the landing page.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
