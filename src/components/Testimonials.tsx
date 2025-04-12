
import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    content: "This platform has been a lifeline during my most difficult times. The resources and community support have made a tremendous difference in my mental health journey.",
    author: "Emily R.",
    role: "Member for 1 year",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5
  },
  {
    content: "I was skeptical at first, but the personalized approach and professional guidance have helped me develop coping strategies I use every day. Truly transformative.",
    author: "Marcus T.",
    role: "Member for 8 months",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 5
  },
  {
    content: "The educational resources combined with the supportive community create a perfect environment for growth and healing. I'm grateful to have found this platform.",
    author: "Sophia L.",
    role: "Member for 6 months",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Community Says</h2>
          <p className="text-muted-foreground">
            Read about how our mental health support system has helped others on their journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-card bg-card rounded-xl p-6 border border-border shadow-sm relative"
            >
              <div className="absolute top-6 right-6">
                <Quote className="h-8 w-8 text-primary/20" />
              </div>
              <p className="text-foreground/80 mb-6 pt-6">{testimonial.content}</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <div className="flex mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
