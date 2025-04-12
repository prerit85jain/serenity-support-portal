
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What kind of support does the platform offer?",
    answer: "Our platform provides multiple forms of support including educational resources, community forums, guided exercises, mood tracking tools, and crisis resources. We aim to provide holistic support for various mental health needs."
  },
  {
    question: "Is my information kept private and secure?",
    answer: "Yes, we take privacy and security very seriously. All personal information is encrypted, and we adhere to strict data protection standards. You control what information you share and with whom."
  },
  {
    question: "Can I access professional mental health support through the platform?",
    answer: "While our platform provides valuable resources and peer support, it's not a replacement for professional therapy. However, we do provide information about accessing professional help and can guide you in finding appropriate services."
  },
  {
    question: "How much does it cost to use the service?",
    answer: "We offer both free and premium tiers. Our free tier provides access to basic resources and community features, while our premium subscription offers additional tools, advanced resources, and personalized support options."
  },
  {
    question: "Is the platform accessible on mobile devices?",
    answer: "Yes, our platform is fully responsive and works on desktop, tablet, and mobile devices. We also offer dedicated mobile apps for iOS and Android for an optimized experience."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">
            Find answers to common questions about our mental health support system.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
