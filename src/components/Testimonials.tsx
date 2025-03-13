
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  imageSrc: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, title, imageSrc }) => {
  return (
    <Card className="shadow-lg border-0 h-full">
      <CardContent className="p-8 flex flex-col h-full">
        <div className="text-college-gold mb-6">
          <Quote size={40} />
        </div>
        <p className="text-gray-700 italic mb-8 flex-grow">{quote}</p>
        <div className="flex items-center">
          <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
            <img 
              src={imageSrc} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold text-college-blue">{name}</h4>
            <p className="text-sm text-gray-500">{title}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "My time at Evergreen University transformed my perspective and opened doors I never imagined possible. The faculty's dedication to student success is truly exceptional.",
      name: "Sarah Johnson",
      title: "Class of 2022, Computer Science",
      imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      quote: "The research opportunities at Evergreen provided me with hands-on experience that was invaluable for my career. I'm grateful for the mentorship and guidance I received.",
      name: "David Chen",
      title: "Class of 2021, Environmental Science",
      imageSrc: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      quote: "Beyond academics, Evergreen's vibrant community helped me develop leadership skills and lifelong friendships. My college experience exceeded all expectations.",
      name: "Maya Patel",
      title: "Class of 2023, Business Administration",
      imageSrc: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-16 bg-college-light-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-college-blue mb-4">
            Student & Alumni Voices
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from our community about their experiences at Evergreen University.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              imageSrc={testimonial.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
