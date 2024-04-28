import "../styles.css";
import React, { useState } from "react";

const MyBookings = () => {
  const handleResetFilters = () => {
    console.log("Reset filters");
  };
  const [selectedSortOption, setSelectedSortOption] = useState("");

  const handleFilterChange = (value) => {
    console.log(`Sort option changed to ${value}`);
    setSelectedSortOption(value);
  };

  const cards = [
    {
      id: 1,
      title: "Munnar : Honeymoon Package",
      imageUrl: "card-1.png",
      rating: "4.5/5",
      ratingsCount: "1K+ ratings",
      memberPriceAvailable: true,
    },
    {
      id: 2,
      title: "Munnar : Honeymoon Package",
      imageUrl: "card-2.png",
      rating: "4.5/5",
      ratingsCount: "1K+ ratings",
      memberPriceAvailable: true,
    },
    {
      id: 3,
      title: "Munnar : Honeymoon Package",
      imageUrl: "card-3.png",
      rating: "4.5/5",
      ratingsCount: "1K+ ratings",
      memberPriceAvailable: true,
    },
    {
      id: 4,
      title: "Munnar : Honeymoon Package",
      imageUrl: "card-4.png",
      rating: "4.5/5",
      ratingsCount: "1K+ ratings",
      memberPriceAvailable: true,
    },
    {
      id: 5,
      title: "Munnar : Honeymoon Package",
      imageUrl: "card-5.png",
      rating: "4.5/5",
      ratingsCount: "1K+ ratings",
      memberPriceAvailable: true,
    },
  ];

  return (
    <div className="flex justify-between items-start h-full  ml-10 mr-10 px-4 border border-[#D9D9D9] rounded-lg">
      <div className=" h-full pr-2 w-1/4 border-r border-[#D9D9D9]">
        <div className="flex items-center justify-between mb-4">
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
          <h3 className="text-base font-semibold text-[#181824] mb-2">
            Package Type
          </h3>
          {/* Checkbox Filters */}
          <div className="flex flex-col">
            <label
              htmlFor=""
              className="inline-flex text-sm font-normal text-[#181824] items-center mb-4"
            >
              <input
                type="checkbox"
                id=""
                name=""
                value=""
                onChange={(e) => handleFilterChange("", e.target.value)}
                className="mr-2 h-5 w-5"
              />
              All
            </label>
            <label
              htmlFor=""
              className="inline-flex text-sm font-normal text-[#181824] items-center mb-4"
            >
              <input
                type="checkbox"
                id=""
                name=""
                value=""
                onChange={(e) => handleFilterChange("", e.target.value)}
                className="mr-2 h-5 w-5"
              />
              Honeymoon
            </label>
            <label
              htmlFor=""
              className="inline-flex text-sm font-normal text-[#181824] items-center mb-4"
            >
              <input
                type="checkbox"
                id=""
                name=""
                value=""
                onChange={(e) => handleFilterChange("", e.target.value)}
                className="mr-2 h-5 w-5"
              />
              Family/Friends
            </label>
            <label
              htmlFor=""
              className="inline-flex text-sm font-normal text-[#181824] items-center mb-4"
            >
              <input
                type="checkbox"
                id=""
                name=""
                value=""
                onChange={(e) => handleFilterChange("", e.target.value)}
                className="mr-2 h-5 w-5"
              />
              Solo
            </label>
          </div>
          <hr className="border-b border-[#F1F0F6] border-[1px]  mb-2 w-full" />
          <h3 className="text-base font-semibold text-[#181824] mb-2">
            Sort By
          </h3>
          <div className="flex flex-col">
            <label
              htmlFor=""
              className="inline-flex text-sm font-normal text-[#181824] items-center mb-4"
            >
              <input
                type="radio"
                id=""
                name="sortOption"
                value=""
                onChange={() => handleFilterChange("rating")}
                checked={selectedSortOption === "rating"}
                className="mr-2 h-5 w-5"
              />
              Guest Rating
            </label>
            <label
              htmlFor=""
              className="inline-flex text-sm font-normal text-[#181824] items-center mb-4"
            >
              {" "}
              <input
                type="radio"
                id=""
                name="sortOption"
                value=""
                onChange={() => handleFilterChange("rating")}
                checked={selectedSortOption === "rating"}
                className="mr-2 h-5 w-5"
              />
              Popularity
            </label>
            <label
              htmlFor=""
              className="inline-flex text-sm font-normal text-[#181824] items-center mb-4"
            >
              <input
                type="radio"
                id=""
                name="sortOption"
                value=""
                onChange={() => handleFilterChange("rating")}
                checked={selectedSortOption === "rating"}
                className="mr-2 h-5 w-5"
              />
              Price High-Low
            </label>
            <label
              htmlFor=""
              className="inline-flex text-sm font-normal text-[#181824] items-center mb-4"
            >
              <input
                type="radio"
                id=""
                name="sortOption"
                value=""
                onChange={() => handleFilterChange("rating")}
                checked={selectedSortOption === "rating"}
                className="mr-2 h-5 w-5"
              />
              Price Low-High
            </label>
          </div>
          <hr className="border-b border-[#F1F0F6] border-[1px]  mb-2 w-full" />

          <h3 className="text-base font-semibold text-[#181824] mb-2">
            Budget
          </h3>
          {/* Checkbox Filters */}
          <div className="flex flex-col">
            <label
              htmlFor=""
              className="inline-flex text-sm font-normal text-[#181824] items-center mb-4"
            >
              <input
                type="checkbox"
                id=""
                name=""
                value=""
                onChange={(e) => handleFilterChange("", e.target.value)}
                className="mr-2 text-[#000000] h-5 w-5"
              />
              Any
            </label>
            <label
              htmlFor=""
              className="inline-flex text-sm font-normal text-[#181824] items-center mb-4"
            >
              <input
                type="checkbox"
                id=""
                name=""
                value=""
                onChange={(e) => handleFilterChange("", e.target.value)}
                className="mr-2 h-5 w-5"
              />
              Premium
            </label>
            <label
              htmlFor=""
              className="inline-flex text-sm font-normal text-[#181824] items-center mb-4"
            >
              <input
                type="checkbox"
                id=""
                name=""
                value=""
                onChange={(e) => handleFilterChange("", e.target.value)}
                className="mr-2 h-5 w-5"
              />
              Mid Range
            </label>
            <label
              htmlFor=""
              className="inline-flex text-sm font-normal text-[#181824] items-center mb-4"
            >
              <input
                type="checkbox"
                id=""
                name=""
                value=""
                onChange={(e) => handleFilterChange("", e.target.value)}
                className="mr-2 h-5 w-5"
              />
              Low Budget
            </label>
          </div>
          <hr className="border-b border-[#F1F0F6] border-[1px]  mb-2 w-full" />
        </div>
      </div>

      <div className=" ">
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

                <div className="absolute top-0 right-0 m-4 flex flex-col items-center">
                  <div className="w-6 h-6 bg-white rounded-full mb-2 flex items-center justify-center">
                    <img
                      src="bookmark-icon.png"
                      alt="Bookmark Icon"
                      className="w-4 h-4"
                    />
                  </div>
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <img
                      src="share-icon.png"
                      alt="Share Icon"
                      className="w-4 h-4"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col ml-2 w-full">
                <div className="flex items-center mt-[17px] justify-between">
                  <h4 className="text-xl font-semibold tracking-normal leading-8">
                    {card.title}
                  </h4>

                  {card.id === 1 || card.id === 2 ? (
                    <div className="bg-[#53E80D] text-black text-xs font-medium px-3 py-2 rounded-tl-2xl rounded-bl-2xl flex items-center">
                      <img
                        src="premium.png"
                        alt="Premium Icon"
                        className="w-3 h-3 mr-1"
                      />
                      Premium
                    </div>
                  ) : card.id === 3 ? (
                    <div className="bg-[#E8AB0D9C] text-black text-xs font-medium px-3 py-2 rounded-tl-2xl rounded-bl-2xl flex items-center">
                      <img
                        src="midrange.png"
                        alt="Mid-Range Icon"
                        className="w-3 h-3 mr-1"
                      />
                      Mid-Range
                    </div>
                  ) : (
                    <div className="bg-[#0DC1E859] text-black text-xs font-medium px-3 py-2 rounded-tl-2xl rounded-bl-2xl flex items-center">
                      <img
                        src="budget.png"
                        alt="Budget Icon"
                        className="w-3 h-3 mr-1"
                      />
                      Budget
                    </div>
                  )}
                </div>

                <div className="flex items-center mt-4 text-gray-500 mt-2">
                  <img
                    src="star.png"
                    alt="Star Icon"
                    className="w-4 h-4 mr-2 mb-1"
                  />
                  <span className="font-medium text-lg text-black mr-2">
                    {card.rating}
                  </span>{" "}
                  (
                  <span className="text-[#787878] text-xs">
                    {card.ratingsCount}
                  </span>{" "}
                  )
                  <div className="bg-white border border-[#787878] rounded-full w-4 h-4 flex items-center justify-center ml-1">
                    <span className="text-gray-400 text-xs font-thin">i</span>
                  </div>
                  {card.memberPriceAvailable && (
                    <div className="bg-[#161EDD26] text-black text-xs font-medium px-4 py-2 rounded-tl-2xl rounded-bl-2xl flex items-center ml-auto">
                      <img
                        src="member-price.png"
                        alt="Member-Price Icon"
                        className="w-4 h-4 mr-1"
                      />
                      Member Price Available
                    </div>
                  )}
                </div>

                <div className="flex flex-col mt-4">
                  <h5 className="text-sm font-semibold tracking-wider">
                    What's Included
                  </h5>
                  <div className="flex flex-wrap">
                    <div className="flex items-center text-sm mt-2 text-[#404040] mr-4 mb-2">
                      <img
                        src="days-night.png"
                        alt="Included Icon"
                        className="w-4 h-4 mr-1"
                      />
                      5 Days or 6 Nights
                    </div>
                    <div className="flex items-center text-sm text-[#404040] mr-4 mb-2">
                      <img
                        src="food.png"
                        alt="Included Icon"
                        className="w-4 h-4 mr-1"
                      />
                      Food Included
                    </div>
                    <div className="flex items-center text-sm text-[#404040] mr-4 mb-2">
                      <img
                        src="transportation.png"
                        alt="Included Icon"
                        className="w-4 h-4 mr-1"
                      />
                      Transportation
                    </div>
                    <div className="flex text-sm text-[#404040] items-center">
                      <img
                        src="tickets.png"
                        alt="Included Icon"
                        className="w-4 h-4 mr-1"
                      />
                      All Tickets
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center">
                  <div className="bg-white border border-[#FF0000] text-[#FF0000] text-sm px-2 py-1 rounded-full">
                    25% off
                  </div>
                  <div className="ml-2">
                    <span className="text-[#787878] text-sm mr-2 ml-1">
                      From
                    </span>
                    <span className="text-black font-medium text-xl">
                      ₹7500{" "}
                    </span>
                    <span className="text-[#787878] text-sm line-through ml-1">
                      ₹10000
                    </span>
                  </div>

                  <div className="ml-auto text-[#787878] mr-2 text-sm">
                    #Honeymoon Package
                  </div>
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
