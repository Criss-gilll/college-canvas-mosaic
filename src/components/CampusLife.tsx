
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface CampusActivityProps {
  title: string;
  description: string;
  imageSrc: string;
}

const CampusActivity: React.FC<CampusActivityProps> = ({ title, description, imageSrc }) => {
  return (
    <Card className="overflow-hidden card-hover border-0 bg-white shadow-md h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-serif font-bold mb-2 text-college-blue">{title}</h3>
        <p className="text-gray-600 text-sm sm:text-base">{description}</p>
      </CardContent>
    </Card>
  );
};

const CampusLife: React.FC = () => {
  const activities = [
    {
      title: "Student Organizations",
      description: "Join one of our 200+ student clubs and organizations to pursue your interests and develop leadership skills.",
      imageSrc: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=6052&q=80"
    },
    {
      title: "Athletics & Recreation",
      description: "From varsity sports to intramural leagues, stay active and build team spirit through our athletic programs.",
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=3543&q=80"
    },
    {
      title: "Arts & Culture",
      description: "Experience vibrant cultural events, performances, exhibitions, and concerts throughout the academic year.",
      imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=4076&q=80"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-college-blue mb-3 sm:mb-4">
            Vibrant Campus Life
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            At Evergreen, learning extends beyond the classroom. Discover the many ways to get involved and make your college experience memorable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {activities.map((activity, index) => (
            <CampusActivity 
              key={index}
              title={activity.title}
              description={activity.description}
              imageSrc={activity.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusLife;
