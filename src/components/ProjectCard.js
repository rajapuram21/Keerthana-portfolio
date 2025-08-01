import React from 'react';

const ProjectCard = ({ title, description, github, live }) => (
  <div className="border p-4 rounded-lg shadow hover:shadow-lg">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="mb-4">{description}</p>
    <div className="space-x-4">
      <a href={github} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">GitHub</a>
      <a href={live} target="_blank" rel="noreferrer" className="text-green-600 hover:underline">Live Demo</a>
    </div>
  </div>
);

export default ProjectCard;
