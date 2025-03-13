
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface NewsItemProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageSrc: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ title, excerpt, date, category, imageSrc }) => {
  return (
    <Card className="overflow-hidden card-hover border-0">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute top-0 right-0 bg-college-blue text-white text-xs font-medium px-3 py-1 z-10">
          {category}
        </div>
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-6">
        <div className="text-sm text-gray-500 mb-2">{date}</div>
        <h3 className="text-xl font-serif font-bold mb-2 text-college-blue line-clamp-2">{title}</h3>
        <p className="text-gray-600 line-clamp-3">{excerpt}</p>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0">
        <Button variant="outline" className="w-full">Read More</Button>
      </CardFooter>
    </Card>
  );
};

const News: React.FC = () => {
  const newsItems = [
    {
      title: "Evergreen University Ranks in Top 20 for Research Innovation",
      excerpt: "Our institution has been recognized for pioneering research across multiple disciplines, earning a prestigious ranking in the National University Assessment.",
      date: "October 15, 2023",
      category: "Academics",
      imageSrc: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "New Scholarship Program Launched for First-Generation Students",
      excerpt: "The Evergreen Foundation announces a $5 million commitment to support qualified first-generation college students with financial aid and mentoring.",
      date: "September 28, 2023",
      category: "Financial Aid",
      imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Evergreen Women's Soccer Team Advances to National Championship",
      excerpt: "After an undefeated season, our women's soccer team will compete for the national title for the first time in university history.",
      date: "September 10, 2023",
      category: "Athletics",
      imageSrc: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-college-blue mb-4">
            Latest News & Events
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest happenings, breakthroughs, and events at Evergreen University.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <NewsItem 
              key={index}
              title={item.title}
              excerpt={item.excerpt}
              date={item.date}
              category={item.category}
              imageSrc={item.imageSrc}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="text-college-blue border-college-blue hover:bg-college-blue hover:text-white">
            View All News & Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default News;
