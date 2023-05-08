import React from 'react';
import Navigation from './navigation';

function Header({ currentPage, handlePageChange }) {
  return (
    <header className='bg-gray-700'>
      <nav className="h-fit border-b">
        <div x-data="{showMenu : false}" className="container relative h-max max-w-screen-lg mx-auto flex flex-wrap justify-between">
          {/*<!-- Brand-->*/}
          <a href="/" className="flex items-center cursor-pointer hover:bg-gray-400 px-2 ml-3">
            {/*<!-- Logo-->*/}
            <div className="rounded bg-primary-100 text-white font-bold w-10 h-10 flex justify-center text-3xl pt-0.5">CG</div>
            <div className="text-white font-semibold ml-2">Christopher Girard</div>
          </a>
          {/*<!-- Nav Links-->*/}
          <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
      </nav>
    </header>
  )
};

export default Header;