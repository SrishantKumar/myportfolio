import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ProjectCard({ title, description, image, link }: ProjectCardProps) {
  return (
    <div className="animate group relative overflow-hidden rounded-2xl">
      <img src={image} alt={title} className="w-full h-64 object-cover transition-transform group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent p-6 flex flex-col justify-end">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <a href={link} className="btn-primary self-start">View Project</a>
      </div>
    </div>
  );
}