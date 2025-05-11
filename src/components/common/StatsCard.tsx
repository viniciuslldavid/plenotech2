import React from 'react';

interface StatsCardProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const StatsCard: React.FC<StatsCardProps> = ({ value, label, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="flex items-start">
        <div className="mr-4 p-3 bg-primary-100 rounded-full">
          {icon}
        </div>
        <div>
          <p className="text-3xl font-bold text-primary-700">{value}</p>
          <p className="text-gray-600 mt-1">{label}</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;