import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import WebpageLocator from './components/Breadcrumbs';
import MyProfileSection from './components/My-profile';
import MyBookings from './components/My-bookings';
import SavedPackages from './components/Saved-packages';
import './styles.css' // Import the SavedPackages component (check the import path)

const App = () => {
  const [currentPage, setCurrentPage] = useState('Home');
  const [showProfileSection, setShowProfileSection] = useState(true);
  const [showBookingsSection, setShowBookingsSection] = useState(false);
  const [showSavedPackages, setShowSavedPackages] = useState(false); // State for Saved Packages visibility

  const handleTabClick = (tabName) => {
    setCurrentPage(tabName);
    setShowProfileSection(tabName === 'My profile');
    setShowBookingsSection(tabName === 'My bookings');
    setShowSavedPackages(tabName === 'Saved packages');
  };

  const handleSavedPackagesClick = () => {
    setCurrentPage('Saved packages');
    setShowProfileSection(false);
    setShowBookingsSection(false);
    setShowSavedPackages(true);
  };

  return (
    <div>
      
      <Navbar />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2">
          <Sidebar setCurrentPage={handleTabClick} handleSavedPackagesClick={handleSavedPackagesClick} />
        </div>
        <div className="col-span-10 mt-14">
          <WebpageLocator currentPage={currentPage} />
          {showProfileSection && <MyProfileSection />}
          {showBookingsSection && <MyBookings />}
          {showSavedPackages && <SavedPackages />}
        </div>
      </div>
    </div>
  );
};

export default App;
