import React from 'react';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-cyan-100 to-white text-center px-6"
    >
      <h1 className="text-5xl font-bold text-gray-800 mb-4">
        Hi, I'm <span className="text-cyan-600">Keerthana</span> 👋
      </h1>
      <p className="text-xl max-w-xl text-gray-700 mb-6">
        Passionate UI Developer building beautiful, accessible, and secure web experiences using React & Tailwind CSS.
      </p>
      <div className="flex space-x-4">
        <a
          href="#projects"
          className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg transition-all"
        >
          View Projects
        </a>
        <a
          href="/keerthana_UI.pdf"
          download
          className="border border-cyan-600 text-cyan-600 hover:bg-cyan-50 px-6 py-3 rounded-lg transition-all"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Home;


