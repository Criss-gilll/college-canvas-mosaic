
import React from 'react';

interface StatItemProps {
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label }) => {
  return (
    <div className="text-center px-4 sm:px-6 py-6 sm:py-8">
      <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 font-serif">{value}</div>
      <div className="text-white/80 text-base sm:text-lg">{label}</div>
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="bg-college-blue py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-4 sm:mb-6">Evergreen By The Numbers</h2>
          <div className="w-20 sm:w-24 h-1 bg-college-gold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <StatItem value="15:1" label="Student-Faculty Ratio" />
          <StatItem value="95%" label="Graduation Rate" />
          <StatItem value="$42M+" label="Research Funding" />
          <StatItem value="25,000+" label="Alumni Network" />
        </div>
      </div>
    </section>
  );
};

export default Stats;
