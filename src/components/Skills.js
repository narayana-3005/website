import React from 'react';

const skills = [
  { name: 'AWS', icon: 'fab fa-aws' },
  { name: 'Azure', icon: 'fab fa-microsoft' },
  { name: 'GCP', icon: 'fab fa-google' },
  { name: 'Python', icon: 'fab fa-python' },
  // Add more skills here
];

const Skills = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="p-4 bg-gray-800 rounded-lg">
              <i className={`${skill.icon} text-4xl`}></i>
              <p className="mt-4 text-lg">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
