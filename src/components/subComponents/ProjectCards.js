import React from 'react';
import projects from './projectlist.json';
import Image from './Image';
import CardTags from './cardTags';

function ProjectCard() {
  function cardLoop() {
    
    return (projects.map((project) =>
    <a className='project-card' href={project.url}>
      <div className="mx-auto rounded flex flex-col flex-auto h-full shadow-lg border overflow-hidden bg-gray-700 hover:ring hover:ring-primary-100">
        <div className="image-container relative pb-[60%]">
          <Image name={project.image} />
        </div>
        <div className="details-bg flex flex-col gap-y-1 h-full py-2 px-4 text-sm font-medium text-gray-700">
          <h2 className='h-min font-bold text-white'>{project.title}</h2>
          <p className='h-min font-code text-green-500 py-2'>{project.description}</p>
          <div className='h-full flex'>
            <CardTags props={project.tags} />
          </div>
        </div>
      </div>
    </a>
    ))
  }
  return (
    <div className="project-container px-4 my-5 grid grid-cols-1 md:grid-cols-2 gap-4">
      {cardLoop()}
    </div>
  );
}

export default ProjectCard;