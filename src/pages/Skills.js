import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="p-10 text-center">
      <h2 className="text-3xl font-semibold mb-6">Technical Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto text-left">
        <ul>
          <li>HTML5, CSS3, JavaScript (ES6+)</li>
          <li>Responsive Design, UI/UX</li>
          <li>Tailwind CSS</li>
        </ul>
        <ul>
          <li>React.js, Git & GitHub</li>
          <li>Firebase, Postman</li>
          <li>Figma, Chrome DevTools</li>
        </ul>
        <ul>
          <li>Java, Python, C++</li>
          <li>MySQL, MongoDB</li>
          <li>REST APIs, Agile, OOP</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;

