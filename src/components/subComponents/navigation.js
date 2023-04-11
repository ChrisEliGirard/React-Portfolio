import React from 'react';

function Navigation({ currentPage, handlePageChange }) {

  const navStyle = 'inline-block p-4 rounded-t-lg border-b-2 border-transparent';
  const navActive = 'text-blue-600 border-blue-600 active';
  const navInactive = 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300';

  return (
    <div className='text-sm font-medium text-center text-white border-b border-gray-200 dark:text-gray-400 dark:border-gray-700'>
      <ul className='flex flex-wrap -mb-px'>
        <li className='mr-2 cursor-pointer'>
          <a 
            href='#about-me' 
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? navStyle+' '+navActive : navStyle+' '+navInactive}
            >About Me
          </a>
        </li>
        <li className='mr-2 cursor-pointer'>
          <a 
            href='#portfolio'
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? navStyle+' '+navActive : navStyle+' '+navInactive}
            >Portfolio
          </a>
        </li>
        <li className='mr-2 cursor-pointer'>
          <a 
            href='#Contact'
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? navStyle+' '+navActive : navStyle+' '+navInactive}
            >Contact
          </a>
        </li>
        <li className='mr-2 cursor-pointer'>
          <a 
            href='#resume'
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? navStyle+' '+navActive : navStyle+' '+navInactive}
            >Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;