import React from 'react';

const projects = [
  {
    title: 'Real-Time Predictive Maintenance System',
    description: 'Predictive maintenance for IoT-enabled industrial equipment.',
    link: 'https://github.com/narayana-3005/predictive-maintenance',
  },
  {
    title: 'CI/CD Pipeline with Jenkins, Docker, and Kubernetes',
    description: 'An end-to-end DevOps project.',
    link: 'https://github.com/narayana-3005/cicd-pipeline',
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
