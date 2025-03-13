
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Users, GraduationCap, Beaker } from 'lucide-react';

interface ProgramItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ProgramItem: React.FC<ProgramItemProps> = ({ title, description, icon }) => {
  return (
    <Card className="card-hover border-t-4 border-t-college-blue">
      <CardHeader>
        <div className="mb-4 text-college-blue">
          {icon}
        </div>
        <CardTitle className="font-serif text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">Learn More</Button>
      </CardFooter>
    </Card>
  );
};

const Programs: React.FC = () => {
  const programs = [
    {
      title: "Arts & Humanities",
      description: "Explore literature, philosophy, history, and the fine arts in our renowned humanities programs.",
      icon: <BookOpen size={32} />
    },
    {
      title: "Business & Economics",
      description: "Develop the skills to lead in global business environments with our cutting-edge business programs.",
      icon: <Users size={32} />
    },
    {
      title: "Science & Engineering",
      description: "Advance scientific knowledge and solve complex problems with our innovative STEM programs.",
      icon: <Beaker size={32} />
    },
    {
      title: "Graduate Studies",
      description: "Take your expertise to the next level with our comprehensive graduate and professional programs.",
      icon: <GraduationCap size={32} />
    }
  ];

  return (
    <section className="py-16 bg-college-light-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-college-blue mb-4">Academic Excellence</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our diverse range of undergraduate and graduate programs designed to prepare you for the challenges of tomorrow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <ProgramItem 
              key={index}
              title={program.title}
              description={program.description}
              icon={program.icon}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-college-blue hover:bg-college-light-blue text-white px-8 py-6 text-lg">
            View All Programs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
