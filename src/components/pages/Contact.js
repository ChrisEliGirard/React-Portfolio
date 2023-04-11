import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const form = useRef();

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'userName') {
      setUserName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };
  
  const sendEmail = (e) => {
    if (submitted) {return};
    setSubmitted(true);
    e.preventDefault();

    emailjs.sendForm('service_6owohdq', 'template_2jf8s8t', form.current, 'f9_e3GykRiyc1mAuM')
      .then((result) => {
        console.log(result.text);
        setUserName('');
        setEmail('');
        setMessage('');
      }, (error) => {
        console.log(error.text);
      });

  };
  
  return (
    <main id='contact' className='pb-2 bg-background font-code'>
      <div className='py-2 px-6 text-white'>Contact</div>
      <div className='w-full py-6 flex place-content-center'>
        <form className='w-10/12 md:w-3/4 lg:w-7/12 flex flex-col gap-y-4 text-center place-content-center bg-gray-700 border p-4' ref={form} onSubmit={sendEmail}>
          <p className='text-2xl pb-2'>Contact Form</p>
          <div className='flex flex-col md:flex-row gap-4'>
            <div className='flex flex-col w-full text-center gap-y-2 border rounded p-2 bg-gradient-to-l from-primary-100 to-primary-300'>
              <label className='px-4 text-xl '>Name</label>
              <input className='w-full px-2 rounded' value={userName} onChange={handleInputChange} type="text" placeholder='Enter Name...' name="userName" />
            </div>
            <div className='flex flex-col w-full text-center gap-y-2 border rounded p-2 bg-gradient-to-r from-primary-100 to-primary-300'>
              <label className='px-4 text-xl'>Email</label>
              <input className='w-full px-2 rounded' value={email} onChange={handleInputChange} type="email" placeholder='Enter Email...' name="email" />
            </div>
          </div>
          <div className='flex flex-col w-full text-center gap-y-2 border rounded p-2 bg-gradient-to-r from-primary-300 via-primary-100 to-primary-300'>
            <label className='px-4 text-xl'>Message</label>
            <textarea className='w-full px-2 rounded' value={message} onChange={handleInputChange} placeholder='Enter Message...' name="message" />
          </div>
          <input className='w-fit mt-2 py-1 px-8 place-self-center border rounded-full bg-gradient-to-r from-primary-100 to-primary-300 cursor-pointer text-lg' type="submit" value="Send" />
        </form>
      </div>
    </main>
  );
};

export default Contact;