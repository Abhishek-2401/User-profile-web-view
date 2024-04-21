import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBriefcase, faBookmark } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ setCurrentPage }) => {
  const [activeTab, setActiveTab] = useState('My profile');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setCurrentPage(tabName.charAt(0).toUpperCase() + tabName.slice(1));
  };

  return (
    <div className="bg-[#FFFFFF] h-screen w-1/6 border-r-[1px] border-[#D9D9D9] fixed top-[65px] left-6  flex flex-col justify-start">
      <button
        className={`py-4 px-3 mr-4 mt-10 rounded-xl text-base font-nomral  ${
          activeTab === 'My profile' ? 'bg-black text-[#FFFFFF] font-medium' : 'text-[#454545]'
        } flex items-center space-x-2`}
        onClick={() => handleTabClick('My profile')}
      >
        <FontAwesomeIcon icon={faUser} />
        <span>My Profile</span>
      </button>
      <button
        className={`py-4 px-3 mr-4 text-base font-normal  rounded-xl ${
          activeTab === 'My bookings' ? 'bg-black text-[#FFFFFF] font-medium' : 'text-[#454545]'
        } flex items-center space-x-2 mt-2`}
        onClick={() => handleTabClick('My bookings')}
      >
        <FontAwesomeIcon icon={faBriefcase} />
        <span>My Bookings</span>
      </button>
      <button
        className={`py-4 px-3 mr-4 text-base font normal rounded-xl  ${
          activeTab === 'Saved packages' ? 'bg-black text-white font-medium' : 'text-[#454545]'
        } flex items-center space-x-2 mt-2`}
        onClick={() => handleTabClick('Saved packages')}
      >
        <FontAwesomeIcon icon={faBookmark} />
        <span>Saved Packages</span>
      </button>
    </div>
  );
};

export default Sidebar;