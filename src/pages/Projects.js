import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
       title: "Secure Password Manager App",
    description: "Android app to store/retrieve passwords securely using Firebase and AES encryption. Includes email-based MFA.",
    github: "https://github.com/rajapuram21/secure-password-manager.git",
    live: "#"
    },
     {
    title: "COVID-19 Detection with Deep Learning",
    description: "Built a CNN model using TensorFlow to detect COVID-19 from CT scan images. Includes result visualization.",
    live: "#"
  },
    {
      title: "Movie Explorer",
      description: "Browse movies using the TMDb API with React.",
      live: "https://movieexplorer.vercel.app"
    },
    {
      title: "Responsive Landing Page",
      description: "Built with HTML, CSS, and JavaScript.",
      live: "https://landing.vercel.app"
    }
  
  ];

  return (
    <section id="projects" className="p-10">
      <h2 className="text-3xl font-semibold text-center mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, index) => (
          <ProjectCard key={index} {...proj} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
