
import React from "react";
import { 
  Users, 
  Medal, 
  Calendar, 
  BookOpen, 
  MessageSquare, 
  Shield 
} from "lucide-react";

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType, 
  title: string, 
  description: string 
}) => {
  return (
    <div className="feature-card bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md">
      <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Supportive Community",
      description: "Connect with peers who understand your experiences in a safe, moderated environment."
    },
    {
      icon: Medal,
      title: "Expert Guidance",
      description: "Access resources and guidance from licensed mental health professionals."
    },
    {
      icon: Calendar,
      title: "Scheduled Check-ins",
      description: "Set regular check-ins to track your progress and maintain accountability."
    },
    {
      icon: BookOpen,
      title: "Educational Resources",
      description: "Expand your understanding with our library of evidence-based educational content."
    },
    {
      icon: MessageSquare,
      title: "Crisis Support",
      description: "Immediate access to crisis resources when you need additional support."
    },
    {
      icon: Shield,
      title: "Privacy Focused",
      description: "Your data is protected with industry-leading security and privacy measures."
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Comprehensive Mental Health Support</h2>
          <p className="text-muted-foreground">
            Our platform offers a range of features designed to support every aspect of your mental health journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
