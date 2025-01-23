import React from 'react';
import EmployeeMenu from './Menu/EmployeeMenu';

const Sidebar = () => {
    return (
        <div>
              <div className='flex flex-col justify-between flex-1 shadow md:min-h-screen bg-banner'>
            <nav>
              <EmployeeMenu></EmployeeMenu>
            </nav>
          </div>
        </div>
    );
};

export default Sidebar;