// import React from "react";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Heart, Shield, HeadphonesIcon } from "lucide-react";
// const Hero = () => {
//   return <section className="pt-28 pb-16 hero-gradient">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col lg:flex-row items-center">
//           <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
//               Supporting Your <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Mental Health</span> Journey
//             </h1>
//             <p className="text-lg text-foreground/80 mb-8 max-w-lg">
//               A safe, supportive space to nurture your mental wellbeing with professional guidance, community support, and personalized resources.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4">
              
              
//             </div>
            
//             <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
//               <div className="flex items-center">
//                 <div className="rounded-full bg-primary/10 p-2 mr-3">
//                   <Heart className="h-5 w-5 text-primary" />
//                 </div>
//                 <span className="font-medium">Caring Support</span>
//               </div>
//               <div className="flex items-center">
//                 <div className="rounded-full bg-secondary/10 p-2 mr-3">
//                   <Shield className="h-5 w-5 text-secondary" />
//                 </div>
//                 <span className="font-medium">Safe Space</span>
//               </div>
//               <div className="flex items-center">
//                 <div className="rounded-full bg-primary/10 p-2 mr-3">
//                   <HeadphonesIcon className="h-5 w-5 text-primary" />
//                 </div>
//                 <span className="font-medium">24/7 Access</span>
//               </div>
//             </div>
//           </div>
          
//           <div className="lg:w-1/2 relative">
//             <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border animate-float">
//               <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Person using mental health support system" className="w-full h-auto" />
//               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
//                 <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg max-w-xs">
//                   <p className="text-sm font-medium">
//                     "This platform has been transformative for my mental health journey."
//                   </p>
//                   <p className="text-xs text-foreground/70 mt-2">
//                     — Sarah M., Member since 2023
//                   </p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10"></div>
//             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
//           </div>
//         </div>
//       </div>
//     </section>;
// };
// export default Hero;

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Flower, Moon, Sun } from "lucide-react";
const Hero = () => {
  return <section className="pt-20 pb-16 bg-gradient-to-b from-violet-50 to-white dark:from-violet-950 dark:to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0 -mt-4">
            <p className="text-2xl md:text-3xl text-violet-600 dark:text-violet-400 mb-8 font-bold text-center">
              कृष्णाय वासुदेवाय देवकीनन्दनाय च।<br />
              नन्दगोपकुमाराय गोविन्दाय नमो नमः॥
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Find Inner <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">Peace</span> and Balance
            </h1>
            <p className="text-lg text-foreground/80 mb-8 max-w-lg">
              Begin your journey to spiritual wellness with guided meditation, mindfulness practices, and a supportive community dedicated to inner growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-violet-600 hover:bg-violet-700 text-white">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center">
                <div className="rounded-full bg-violet-100 dark:bg-violet-900/30 p-2 mr-3">
                  <Flower className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                </div>
                <span className="font-medium">Inner Peace</span>
              </div>
              <div className="flex items-center">
                <div className="rounded-full bg-indigo-100 dark:bg-indigo-900/30 p-2 mr-3">
                  <Moon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <span className="font-medium">Mindfulness</span>
              </div>
              <div className="flex items-center">
                <div className="rounded-full bg-violet-100 dark:bg-violet-900/30 p-2 mr-3">
                  <Sun className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                </div>
                <span className="font-medium">Daily Practice</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-violet-200 dark:border-violet-800 animate-float">
              <img 
                src="/images/krishna.jpg" 
                alt="Lord Krishna" 
                className="w-full h-auto" 
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
                <div className="bg-white/90 dark:bg-violet-950/90 backdrop-blur-sm rounded-xl p-4 shadow-lg max-w-xs">
                  <p className="text-sm font-medium">
                    "Lord Krishna's teachings guide us towards inner peace and spiritual enlightenment."
                  </p>
                  <p className="text-xs text-foreground/70 mt-2">
                    — Spiritual Seeker
                  </p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-violet-400/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-400/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;