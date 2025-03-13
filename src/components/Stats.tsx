
import React from 'react';

interface StatItemProps {
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label }) => {
  return (
    <div className="text-center px-6 py-8">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-serif">{value}</div>
      <div className="text-white/80 text-lg">{label}</div>
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="bg-college-blue py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Evergreen By The Numbers</h2>
          <div className="w-24 h-1 bg-college-gold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
