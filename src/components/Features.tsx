
import React from 'react';
import { CheckCircle } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    "World-class faculty dedicated to teaching and research excellence",
    "State-of-the-art facilities including modern laboratories and libraries",
    "Vibrant campus life with over 200 student organizations",
    "Robust career services with connections to leading employers",
    "Diverse and inclusive community from over 60 countries",
    "Opportunities for undergraduate research and internships"
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-8 lg:pr-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-college-blue mb-4 sm:mb-6">
              Why Choose Evergreen University?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
              For over 75 years, we've been committed to providing an exceptional education that prepares students for success in a rapidly changing world.
            </p>
            
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-college-gold h-5 w-5 sm:h-6 sm:w-6 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-48 h-48 sm:w-64 sm:h-64 bg-college-blue/10 rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=6000&q=80" 
                alt="Students collaborating on campus" 
                className="relative z-10 rounded-lg shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute -right-4 -bottom-4 w-36 h-36 sm:w-48 sm:h-48 bg-college-gold/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
