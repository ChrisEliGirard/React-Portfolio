import React from 'react';
import resumeImg from '../images/Resume_Full.png'
import resumePDF from '../images/Resume.pdf'

function Resume() {

  return (
    <main id='resume' className='flex flex-col pb-2 bg-background font-code'>
      <div className='flex flex-row py-2 px-6 text-white justify-between'>
        <div>Resume</div>
        <a href={resumePDF}>View Resume PDF</a>
      </div>
      <center className='overflow-y-scroll'>
        <img className='object-cover' src={resumeImg} />
      </center>
    </main>
  )
}

export default Resume;