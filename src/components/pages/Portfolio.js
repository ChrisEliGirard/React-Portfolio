import React from 'react';
import ProjectsCards from '../subComponents/ProjectCards';


function Portfolio() {
  return (
    <main id='pageMain' className='block bg-background pb-2'>
      <div className='font-code py-2 px-6 text-white'>Projects</div>
      <ProjectsCards />
    </main>
  );
}

export default Portfolio;