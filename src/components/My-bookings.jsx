import React from "react";
import "../styles.css"

const MyBookings = () => {
  const handleResetFilters = () => {
    console.log("Reset filters");
  };

  const handleFilterChange = (filterType, value) => {
    console.log(`Filter ${filterType} changed to ${value}`);
  };

  const cards = [
    {
      id: 1,
      title: "Munnar : Honeymoon Package",
      imageUrl: "card-1.png",
      bookingStatus: "Booked",
    },
    {
      id: 2,
      title: "Munnar : Honeymoon Package",
      imageUrl: "card-2.png",
      bookingStatus: "Cancelled",
    },
    {
      id: 3,
      title: "Munnar : Honeymoon Package",
      imageUrl: "card-3.png",
      bookingStatus: "Booked",
    },
    {
      id: 4,
      title: "Munnar : Honeymoon Package",
      imageUrl: "card-4.png",
      bookingStatus: "Refunded",
    },
    {
      id: 5,
      title: "Munnar : Honeymoon Package",
      imageUrl: "card-5.png",
      bookingStatus: "Booked",
    },
    {
      id: 6,
      title: "Munnar : Honeymoon Package",
      imageUrl: "card-5.png",
      bookingStatus: "Booked",
    },
  ];

  return (
    <div className="flex justify-between items-start h-full  ml-10 mr-10 px-4 border border-[#D9D9D9] rounded-lg">
      <div className="pr-2 w-1/4 h-full border-r border-[#D9D9D9] ">
        <div className="flex items-center justify-between mb-4 ">
          <h2 className="text-base font-medium text-[#181824] mt-4 mr-14 ml-2">
            Filters
          </h2>
          <button
            onClick={handleResetFilters}
            className="text-sm text-[#161EDD] font-medium underline mt-4 ml-6"
          >
            Reset all
          </button>
        </div>
        <hr className="border-b border-[#D9D9D9] border-[1px]  mb-2 w-full" />
        {/* Filter Section */}
        <div className="mb-4 p-2">
          {/* Filter Heading */}
          <h3 className="text-base font-semibold text-[#181824] mb-2">
            Booking Status
          </h3>
          {/* Checkbox Filters */}
          <div className="flex flex-col">
            <label
              htmlFor="confirmed"
              className="inline-flex text-sm font-normal text-[#181824] items-center mb-4"
            >
              <input
                type="checkbox"
                id="confirmed"
                name="statusFilter"
                value="confirmed"
                onChange={(e) => handleFilterChange("status", e.target.value)}
                className="mr-2 h-5 w-5"
              />
              All
            </label>
            <label
              htmlFor="confirmed"
              className="inline-flex text-sm font-normal text-[#181824] items-center mb-4"
            >
              <input
                type="checkbox"
                id="confirmed"
                name="statusFilter"
                value="confirmed"
                onChange={(e) => handleFilterChange("status", e.target.value)}
                className="mr-2 h-5 w-5"
              />
              Booked
            </label>
            <label
              htmlFor="confirmed"
              className="inline-flex text-sm font-normal text-[#181824] items-center mb-4"
            >
              <input
                type="checkbox"
                id="confirmed"
                name="statusFilter"
                value="confirmed"
                onChange={(e) => handleFilterChange("status", e.target.value)}
                className="mr-2 h-5 w-5"
              />
              Cancelled
            </label>
            <label
              htmlFor="confirmed"
              className="inline-flex text-sm font-normal text-[#181824] items-center mb-4"
            >
              <input
                type="checkbox"
                id="confirmed"
                name="statusFilter"
                value="confirmed"
                onChange={(e) => handleFilterChange("status", e.target.value)}
                className="mr-2 h-5 w-5"
              />
              Refunded
            </label>
            {/* Add more checkbox filters as needed */}
          </div>
          <hr className="border-b border-[#F1F0F6] border-[1px]  mb-2 w-full" />
          <h3 className="text-base font-semibold text-[#181824] mb-2">
            Package Type
          </h3>
          {/* Checkbox Filters */}
          <div className="flex flex-col">
            <label
              htmlFor="confirmed"
              className="inline-flex text-sm font-normal text-[#181824] items-center mb-4"
            >
              <input
                type="checkbox"
                id="confirmed"
                name="statusFilter"
                value="confirmed"
                onChange={(e) => handleFilterChange("status", e.target.value)}
                className="mr-2 h-5 w-5"
              />
              All
            </label>
            <label
              htmlFor="confirmed"
              className="inline-flex text-sm font-normal text-[#181824] items-center mb-4"
            >
              <input
                type="checkbox"
                id="confirmed"
                name="statusFilter"
                value="confirmed"
                onChange={(e) => handleFilterChange("status", e.target.value)}
                className="mr-2 h-5 w-5"
              />
              Honeymoon
            </label>
            <label
              htmlFor="confirmed"
              className="inline-flex text-sm font-normal text-[#181824] items-center mb-4"
            >
              <input
                type="checkbox"
                id="confirmed"
                name="statusFilter"
                value="confirmed"
                onChange={(e) => handleFilterChange("status", e.target.value)}
                className="mr-2 h-5 w-5"
              />
              Family/Friends
            </label>
            <label
              htmlFor="confirmed"
              className="inline-flex text-sm font-normal text-[#181824] items-center mb-4"
            >
              <input
                type="checkbox"
                id="confirmed"
                name="statusFilter"
                value="confirmed"
                onChange={(e) => handleFilterChange("status", e.target.value)}
                className="mr-2 h-5 w-5"
              />
              Solo
            </label>
            {/* Add more checkbox filters as needed */}
          </div>
          <hr className="border-b border-[#F1F0F6] border-[1px]  mb-2 w-full" />

          <h3 className="text-base font-semibold text-[#181824] mb-2">
            Booked Time
          </h3>
          {/* Checkbox Filters */}
          <div className="flex flex-col">
            <label
              htmlFor="confirmed"
              className="inline-flex text-sm font-normal text-[#181824] items-center mb-4"
            >
              <input
                type="checkbox"
                id="confirmed"
                name="statusFilter"
                value="confirmed"
                onChange={(e) => handleFilterChange("status", e.target.value)}
                className="mr-2 text-[#000000] h-5 w-5"
              />
              Any
            </label>
            <label
              htmlFor="confirmed"
              className="inline-flex text-sm font-normal text-[#181824] items-center mb-4"
            >
              <input
                type="checkbox"
                id="confirmed"
                name="statusFilter"
                value="confirmed"
                onChange={(e) => handleFilterChange("status", e.target.value)}
                className="mr-2 h-5 w-5"
              />
              Last 30 days
            </label>
            <label
              htmlFor="confirmed"
              className="inline-flex text-sm font-normal text-[#181824] items-center mb-4"
            >
              <input
                type="checkbox"
                id="confirmed"
                name="statusFilter"
                value="confirmed"
                onChange={(e) => handleFilterChange("status", e.target.value)}
                className="mr-2 h-5 w-5"
              />
              2023
            </label>
            <label
              htmlFor="confirmed"
              className="inline-flex text-sm font-normal text-[#181824] items-center mb-4"
            >
              <input
                type="checkbox"
                id="confirmed"
                name="statusFilter"
                value="confirmed"
                onChange={(e) => handleFilterChange("status", e.target.value)}
                className="mr-2 h-5 w-5"
              />
              Older
            </label>
            {/* Add more checkbox filters as needed */}
          </div>
          <hr className="border-b border-[#F1F0F6] border-[1px]  mb-2 w-full" />
        </div>
        {/* Add more filter sections with headings and checkboxes */}
      </div>
      <div className="   ">
            <div className="flex flex-col">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="bg-white m-4 rounded-3xl border border-gray-300 relative flex w-100% overflow-hidden"
                >
                  <div className="relative rounded-lg overflow-hidden p-2 w-[401px] h-[243px] ">
                    <img
                      src={card.imageUrl}
                      alt={`Package ${card.id}`}
                      className="object-cover rounded-tl-2xl rounded-bl-2xl w-full h-full"
                    />
                  </div>

                  <div className="flex flex-col ml-2 w-full">
                    <div className="flex items-center mt-[17px] justify-between">
                      <h4 className="text-xl font-semibold tracking-normal leading-8">
                        {card.title}
                      </h4>

                      {card.id === 1 || card.id === 2 ? (
                        <div className="bg-[#53E80D] text-black text-xs font-medium px-3 py-2 rounded-tl-2xl rounded-bl-2xl flex items-center">
                          <img
                            src="premium-icon.png"
                            alt="Premium Icon"
                            className="w-3 h-3 mr-1"
                          />
                          Premium
                        </div>
                      ) : card.id === 3 ? (
                        <div className="bg-[#E8AB0D9C] text-black text-xs font-medium px-3 py-2 rounded-tl-2xl rounded-bl-2xl flex items-center">
                          <img
                            src="midrange-icon.png"
                            alt="Mid-Range Icon"
                            className="w-3 h-3 mr-1"
                          />
                          Mid-Range
                        </div>
                      ) : (
                        <div className="bg-[#0DC1E859] text-black text-xs font-medium px-3 py-2 rounded-tl-2xl rounded-bl-2xl flex items-center">
                          <img
                            src="budget-icon.png"
                            alt="Budget Icon"
                            className="w-3 h-3 mr-1"
                          />
                          Budget
                        </div>
                      )}
                    </div>

                    <div className="flex items-center mt-4 text-[#000000] mt-2">
                      <div className="flex items-center">
                        {card.bookingStatus === "Booked" ? (
                          <div className="w-3 h-3 bg-[#26A541] rounded-full mr-1" />
                        ) : card.bookingStatus === "Cancelled" ? (
                          <div className="w-3 h-3 bg-red-500 rounded-full mr-1" />
                        ) : card.bookingStatus === "Refunded" ? (
                          <div className="w-3 h-3 bg-yellow-500 rounded-full mr-1" />
                        ) : null}
                        <span className="text-sm text-[#000000] font-medium">
                          {card.bookingStatus} on Jan 22, 2023
                        </span>
                      </div>
                    </div>
                    <div className="mt-1 text-xs font-normal text-[#787878]">
                    Booking ID CMP 23456
                    </div>
                    {card.id === 1 || card.id === 3 ? (
                      <div className="text-xs text-[#000000] font-normal mt-1">
                        Upcoming Journey with Our Package
                      </div>
                    ) : card.id === 2 ? (
                        <div className="text-xs text-[#000000] font-normal mt-1">
                        Journey Cancellation for our package completed
                      </div>
                    ) : card.id === 4 ? (
                        <div className="text-xs text-[#000000] font-normal mt-1">
                        Refund Process Completed fo Our Package
                      </div>
                    ) : (
                        <div className="text-xs text-[#000000] font-normal mt-1">
                       Journey Completed with Our Package
                      </div>
                    )}
                    {card.id === 5 || card.id === 6 ? (
                      <div className="flex items-center mt-2">
                        <img
                          src="blue-star-icon.png"
                          alt="Star Icon"
                          className="w-4 h-4 mr-1"
                        />
                        <a href="#" className="text-[#2874F0] text-sm font-medium underline mt-2">
                        Rate and review the package
                        </a>
                      </div>
                    ) : null}

                    <div className="mt-4 flex items-center">
                      <div>
                        <span className="text-[#000000] font-medium text-2xl">
                          ₹7500{" "}
                        </span>
                      </div>

                      
                    </div>
                    {card.id === 1 ? (
                      <a
                        href="#"
                        className="text-[#787878] underline text-sm font-medium mt-4"
                      >
                       Click here to cancel
                      </a>
                    ) : card.id === 3 ? (
                      <a
                        href="#"
                        className="text-[#FF9F00] underline text-sm font-medium mt-4"
                      >
                        Click here to cancel and refund
                      </a>
                    ) : null}
                    <div className="ml-auto text-[#787878] mr-2 text-sm">
                        #Honeymoon Package
                      </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
      
      
    </div>
  );
};

export default MyBookings;
