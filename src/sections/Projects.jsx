import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects-container">
        <h2>My Works</h2>
        <ul>
          <li>
            <strong>To-Do List App</strong>: A real-time collaborative task manager with SignalR and ASP.NET Core.
          </li>
          <li>
            <strong>Mini CRM System</strong>: Built with clean architecture and RESTful APIs.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;