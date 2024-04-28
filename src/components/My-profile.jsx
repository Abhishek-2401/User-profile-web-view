import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import enGB from "date-fns/locale/en-GB";
import {
  faEdit,
  faSignOutAlt,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
registerLocale("en-GB", enGB);

const MyProfileSection = () => {
  const [editMode, setEditMode] = useState(false);
  const [exitClicked, setExitClicked] = useState(false);
  const [selectedGender, setSelectedGender] = useState("Male");
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");
  const [selectedDateOfBirth, setSelectedDateOfBirth] = useState(
    new Date("2001-07-16")
  ); // Default date of birth
  const handleEditClick = () => {
    setEditMode(!editMode);
  };
  const handleDateOfBirthChange = (e) => {
    setSelectedDateOfBirth(e.target.value);
  };
  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };
  const handleExitClick = () => {
    setExitClicked(!exitClicked);
  };

  const handleCountryCodeChange = (e) => {
    setSelectedCountryCode(e.target.value);
  };

  return (
    <div className="flex justify-between items-start h-screen mt-10 ml-10 px-4">
      <div className="p-4 ">
        <div className="bg-white rounded-lg border border-gray-300 p-6 relative">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img
                src="Myprofile.png"
                alt="User"
                className="w-[133px] h-[133px] rounded-full "
              />
              {editMode && (
                <div className="absolute top-0 left-0 bg-black bg-opacity-50 h-full rounded-full w-full flex items-center justify-center cursor-pointer">
                  <FontAwesomeIcon
                    icon={faCamera}
                    className="text-white text-xl"
                  />
                </div>
              )}
            </div>
            <div>
              <h2 className="text-xl text-[#000000] font-medium">John Doe</h2>
            </div>
          </div>
          <div className="-mt-[40px] ml-[147px] flex items-center whitespace-nowrap">
            <p className="text-[#787878]  mr-10 text-sm font-normal">UI/UX designer</p>
            <div className="flex items-center space-x-2 max-w-xs mr-10">
              <FontAwesomeIcon icon={faPhone} className="text-[#000000]" />
              {editMode ? (
                <input
                  type="text"
                  className="text-[#787878] mr-10 text-sm font-normal"
                  value="+91 9087 6543 21"
                  required
                />
              ) : (
                <p className="text-[#787878] mr-10 text-sm font-normal">+91 9087 6543 21</p>
              )}
            </div>
            <div className="flex items-center space-x-4 max-w-xs mr-10">
              <FontAwesomeIcon icon={faEnvelope} className="text-[#000000]" />
              {editMode ? (
                <input
                  type="text"
                  className="text-[#787878]  mr-10 text-sm font-normal"
                  value="johnwick@gmail.com"
                  required
                />
              ) : (
                <p className="text-[#787878] mr-10 text-sm font-normal">
                  johnwick@gmail.com
                </p>
              )}
            </div>
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-[#000000]"
              />
              {editMode ? (
                <input
                  type="text"
                  className="text-[#787878]  mr-10 text-sm font-normal"
                  value="Thiruvananthapuram, Kerala"
                  required
                />
              ) : (
                <p className="text-[#787878] mr-10 text-sm font-normal">
                 Thiruvananthapuram, Kerala
                </p>
              )}
            </div>
          </div>
          <hr className="my-4 mt-10 border-gray-300" />
          
          <div className=" labels grid grid-cols-3 mt-14 ml-16 gap-4">
            <div className="mb-6 border-[1px] border-[#C2C2C2] rounded-lg h-12 w-[271px] relative flex items-center">
              <label
                htmlFor="First Name"
                className="absolute left-4 text-xs -top-2 font-normal bg-white px-1 text-[#AEACAC]"
              >
                First Name
              </label>
              <input
                type="First Name"
                id="First Name"
                className="w-full p-2 border-none text-xs ml-3 font-medium text-[#222222] focus:outline-none bg-transparent "
                placeholder=""
                value="John"
                readOnly={!editMode}
                required
              />
            </div>
            <div className="mb-6 border-[1px] border-[#C2C2C2] rounded-lg h-12 w-[271px] relative flex items-center">              <label
                htmlFor="Last Name"
                className="absolute left-4 text-xs -top-2 font-normal bg-white px-1 text-[#AEACAC]"
              >
                Last Name
              </label>
              <input
                type="Last Name"
                id="Last Name"
                className="w-full p-2 border-none text-xs ml-3 font-medium text-[#222222] focus:outline-none bg-transparent "
                placeholder=""
                value="Wick"
                readOnly={!editMode}
                required
              />
            </div>
            <div className="mb-6 border-[1px] border-[#C2C2C2] rounded-lg h-12 w-[271px] relative flex items-center">              <label
                htmlFor="Occupation"
                className="absolute left-4 text-xs -top-2 font-normal bg-white px-1 text-[#AEACAC]"
              >
                Occupation
              </label>
              <input
                type="Occupation"
                id="Occupation"
                className="w-full p-2 border-none text-xs ml-3 font-medium text-[#222222] focus:outline-none bg-transparent "
                placeholder=""
                value="UI/UX Designer"
                readOnly={!editMode}
                required
              />
            </div>
            <div className="mb-6 border-[1px] border-[#C2C2C2] rounded-lg h-12 w-[271px] relative flex items-center">              <label
                htmlFor="Phone Number"
                className="absolute left-4 text-xs -top-2 font-normal bg-white px-1 text-[#AEACAC]"
              >
                Phone Number
              </label>
              <div className="relative flex items-center">
                {editMode ? (
                  <select
                    value={selectedCountryCode}
                    onChange={handleCountryCodeChange}
                    className="w-18 p-2  border-none text-xs font-medium text-[#787878] focus:outline-none bg-transparent"
                  >
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                  </select>
                ) : (
                  <p className="text-xs font-medium text-[#222222] ml-3">
                    {selectedCountryCode}
                  </p>
                )}
                <input
                  type="text"
                  id="Phone Number"
                  className="w-full p-2 border-none text-xs font-medium text-[#222222] focus:outline-none bg-transparent  "
                  placeholder=""
                  value="234 567 8901"
                  readOnly={!editMode} // ReadOnly when editMode is false
                  required
                />
              </div>
            </div>
            <div className="mb-6 border-[1px] border-[#C2C2C2] rounded-lg h-12 w-[271px] relative flex items-center">              <label
                htmlFor="Email ID"
                className="absolute left-4 text-xs -top-2 font-normal bg-white px-1 text-[#AEACAC]"
              >
                Email ID
              </label>
              <input
                type="Email ID"
                id="Email ID"
                className="w-full p-2 border-none text-xs ml-3 font-medium text-[#222222] focus:outline-none bg-transparent "
                placeholder=""
                value="johnwick@gmail.com"
                readOnly
                required
              />
            </div>
            <div className="mb-6 border-[1px] border-[#C2C2C2] rounded-lg h-12 w-[271px] relative flex items-center">              <label
                htmlFor="Location"
                className="absolute left-4 text-xs -top-2 font-normal bg-white px-1 text-[#AEACAC]"
              >
                Location
              </label>
              <input
                type="Location"
                id="Location"
                className="w-full p-2 border-none text-xs ml-3 font-medium text-[#222222] focus:outline-none bg-transparent z-10"
                placeholder=""
                value="Kerala"
                readOnly
                required
              />
            </div>
            <div className="mb-6 border-[1px] border-[#C2C2C2] rounded-lg h-12 w-[271px] relative flex items-center">              <label
                htmlFor="Gender"
                className="absolute left-4 text-xs -top-2 font-normal bg-white px-1 text-[#AEACAC]"
              >
                Gender
              </label>
              {editMode ? (
                <select
                  value={selectedGender}
                  onChange={handleGenderChange}
                  className="w-full p-2 border-none text-xs font-medium text-[#222222] mr-4 focus:outline-none bg-transparent z-10"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  {/* Add more gender options */}
                </select>
              ) : (
                <input
                  type="text"
                  id="Gender"
                  className="w-full p-2 border-none text-xs font-medium text-[#222222] focus:outline-none bg-transparent z-10"
                  placeholder=""
                  value={selectedGender}
                  readOnly
                  required
                />
              )}
            </div>
            <div className="mb-6 border-[1px] border-[#C2C2C2] rounded-lg h-12 w-[271px] relative flex items-center">              <label
                htmlFor="Date of birth"
                className="absolute left-4 text-xs -top-2 font-normal bg-white px-1 text-[#AEACAC]"
              >
                Date of birth
              </label>
              <div className="relative flex items-center">
                {editMode ? (
                  <DatePicker
                    selected={selectedDateOfBirth}
                    onChange={(date) => setSelectedDateOfBirth(date)}
                    dateFormat="dd/MM/yyyy"
                    className="w-full p-2 border-none text-xs  mr-20 font-medium text-[#222222]  bg-white z-10"
                    placeholderText="DD/MM/YYYY"
                    required
                    locale="en-GB"
                    popperClassName="date-picker-popper"
                  />
                ) : (
                  <input
                    type="text"
                    id="Date of birth"
                    className="w-full p-2 border-none text-xs font-medium text-[#222222] focus:outline-none bg-transparent z-10"
                    placeholder=""
                    value={selectedDateOfBirth.toLocaleDateString()}
                    readOnly
                    required
                  />
                )}
                {editMode && (
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="absolute right-2 text-gray-500 top-2 cursor-pointer"
                    onClick={handleEditClick}
                  />
                )}
              </div>
            </div>
          </div>
          {editMode && (
            <div className="flex justify-center mt-8">
              <button
                onClick={handleEditClick}
                className="bg-white text-[#000000] text-[10px ] border border-[#000000] border-[1px] font-normal py-1 px-6 rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Handle submit action
                  setEditMode(false);
                }}
                className="bg-[#000000]  text-[#FFFFFF] font-normal py-1  px-6 rounded"
              >
                Submit
              </button>
            </div>
          )}
          <div className="absolute top-4 right-4 flex space-x-2">
            <div
              className={`h-10 w-10 rounded-full  flex items-center justify-center cursor-pointer ${
                editMode ? "bg-[#000000]" : "bg-[#EFEFEF]"
              }`}
              onClick={handleEditClick}
            >
              <FontAwesomeIcon
                icon={faEdit}
                className={`text-[#000000] ${
                  editMode ? "text-[#FFFFFF]" : "text-[#000000] "
                }`}
              />
            </div>
            <div
              className={`h-10 w-10 rounded-full   flex items-center justify-center cursor-pointer ${
                exitClicked ? "bg-[#000000]" : "bg-[#EFEFEF]"
              }`}
              onClick={handleExitClick}
            >
              <FontAwesomeIcon
                icon={faSignOutAlt}
                className={`text-[#000000] ${
                  exitClicked ? "text-[#FFFFFF]" : "text-[#000000] "
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfileSection;
