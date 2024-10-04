import React from 'react';

const Home = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white">Hi, I'm Narayana Rao Lingamaneni</h1>
        <p className="mt-4 text-xl text-white">DevOps | MLOps | Data Analytics</p>
        <button className="mt-6 px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-purple-700 hover:text-white transition-all">
          Explore My Work
        </button>
      </div>
    </section>
  );
};

export default Home;
