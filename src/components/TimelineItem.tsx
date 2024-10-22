import React from 'react';

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
}

export default function TimelineItem({ title, company, period, description }: TimelineItemProps) {
  return (
    <div className="animate relative pl-8 border-l-2 border-gray-700">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-400" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-blue-400">{company}</p>
      <p className="text-gray-400 text-sm mb-2">{period}</p>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}