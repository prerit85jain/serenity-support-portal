
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-background/90 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Serenity
              </span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#features" className="text-foreground/80 hover:text-primary font-medium transition-colors">Features</a>
              <a href="#how-it-works" className="text-foreground/80 hover:text-primary font-medium transition-colors">How It Works</a>
              <a href="#testimonials" className="text-foreground/80 hover:text-primary font-medium transition-colors">Testimonials</a>
              <a href="#faq" className="text-foreground/80 hover:text-primary font-medium transition-colors">FAQ</a>
            </div>
          </div>
          
          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
              Get Started
            </Button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#features" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#testimonials" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#faq" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <div className="mt-4 px-3">
              <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
