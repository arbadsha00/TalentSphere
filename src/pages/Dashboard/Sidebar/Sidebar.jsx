import React from 'react';
import EmployeeMenu from './Menu/EmployeeMenu';
import useRole from '@/hooks/useRole';
import HrMenu from './Menu/HrMenu';

const Sidebar = () => {
  const [role, isLoading] = useRole()
    return (
        <div>
              <div className='flex flex-col justify-between flex-1 shadow md:min-h-screen bg-banner'>
          <nav>
            {role==='employee' && <EmployeeMenu></EmployeeMenu>}
            {role==='hr' && <HrMenu></HrMenu>}
            </nav>
          </div>
        </div>
    );
};

export default Sidebar;