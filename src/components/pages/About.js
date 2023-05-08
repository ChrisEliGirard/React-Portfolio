import React from 'react';
import profile from '../images/chris_girard_profile.jpg'

function About() {
  return (
    <main id='about' className='pb-2 flex flex-col bg-background font-code'>
      <div className='mainHeader py-2 px-6 text-white'>About Me</div>
      <div className='mainBody w-11/12 md:w-1/2 2xl:w-1/3 rounded border border-white flex flex-wrap self-center text-white'>
        <div className='rounded-t'>
          <img src={profile} alt='' className='rounded-t object-cover h-full w-full' />
        </div>
        <div className='p-2 rounded-b bg-gray-700'>
          A Full Stack Web Developer with a background in resturaunt and retail leadership providing me with excellent customer service skills, an understanding of effective communication, superb performance under stress, and of course a desire to hustle. I enjoy building functional but stylistic applications and am a creative problem solver always looking for unique ways to solve challenges. I have experience working with a diverse range of web technologies, the important bunch including HTML, CSS, JavaScript, jQuery, Node.js, Express.js, MySQL, MongoDB, React, and more. I live by continous improvement who is always looking for new mountains to climb as well as opportunities to improve and build myself.
        </div>
      </div>
  </main>
  );
};

export default About;