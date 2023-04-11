import React from 'react';
import profile from '../images/chris_girard_profile.jpg'

function About() {
  return (
    <main id='about' className='pb-2 flex flex-col bg-background font-code'>
      <div className='mainHeader py-2 px-6 text-white'>About Me</div>
      <div className='mainBody w-11/12 md:w-1/2 rounded border border-white flex flex-wrap self-center text-white'>
        <div className='rounded-t'>
          <img src={profile} alt='' className='rounded-t object-cover h-full w-full' />
        </div>
        <div className='p-2 rounded-b bg-gray-700'>
          Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
          Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
          mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
          lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
          imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
          in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
        </div>
      </div>
  </main>
  );
};

export default About;