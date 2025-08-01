import React from 'react';

const About = () => {
  return (
    <section id="about" className="p-10 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center mb-4">About Me</h2>
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <p>
          💼 M.S. in Computer Science, Oklahoma City University (Aug 2023 – May 2025)<br/>
          🎓 B.Tech in Computer Science, Mahaveer Institute of Science & Technology (2018–2022)
        </p>
        <p>
          💡 I'm passionate about clean UI, accessible design, and building secure apps. I’m constantly exploring modern front-end frameworks and UX strategies.
        </p>
      </div>
    </section>
  );
};

export default About; // ✅ This line is required

