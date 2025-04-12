
import React from "react";
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Create Your Account",
    description: "Sign up in minutes with a secure, private profile tailored to your needs.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  },
  {
    number: "02",
    title: "Complete Assessment",
    description: "Take our comprehensive assessment to help us understand your specific needs.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  },
  {
    number: "03",
    title: "Access Personalized Support",
    description: "Receive tailored resources, tools, and community connections based on your needs.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground">
            Getting started with our mental health support system is simple and straightforward.
          </p>
        </div>
        
        <div className="space-y-20">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16`}
            >
              <div className="lg:w-1/2">
                <div className="bg-muted/30 rounded-2xl p-1.5">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="rounded-xl object-cover w-full h-[300px]"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="inline-block bg-primary/10 text-primary font-semibold px-4 py-1 rounded-full mb-4">
                  Step {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground mb-6">{step.description}</p>
                <ul className="space-y-3">
                  {[1, 2, 3].map((item) => (
                    <li key={item} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-foreground/80">
                        {index === 0 && item === 1 && "Secure, encrypted personal information"}
                        {index === 0 && item === 2 && "Customizable privacy settings"}
                        {index === 0 && item === 3 && "Easy profile setup in minutes"}
                        
                        {index === 1 && item === 1 && "Science-based evaluation tools"}
                        {index === 1 && item === 2 && "Comprehensive but brief questionnaires"}
                        {index === 1 && item === 3 && "Regularly updated to track progress"}
                        
                        {index === 2 && item === 1 && "Personalized resource recommendations"}
                        {index === 2 && item === 2 && "Matched with relevant community groups"}
                        {index === 2 && item === 3 && "Ongoing support and check-ins"}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
