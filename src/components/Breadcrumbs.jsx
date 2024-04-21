// WebpageLocator.jsx
import React from 'react';

const WebpageLocator = ({ currentPage }) => {
  return (
    <div className="bg-[#FFFFFF]    px-8 py-4 flex items-center">
      <span className="text-xs text-[#787878] font-normal">Home</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-3 w-3 mx-2 text-[#787878]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
      <span className="text-xs text-[#000000] font-medium">{currentPage}</span>
    </div>
  );
};

export default WebpageLocator;
