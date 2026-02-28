// File Path: src/pages/volunteer/ViewUsersVolunteer.jsx

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AxiosApi from "../../AxiosApi";

const ViewUsersVolunteer = () => {
  // Static data for demonstration purposes
  const users1 = [
    {
      id: 1,
      userName: "John Doe",
      email: "john.doe@example.com",
      MobileNumber: "123-456-7890",
      Address: "123 Main St, Anytown, USA",
      profilePic: "https://via.placeholder.com/150", // Placeholder image URL
    },
    {
      id: 2,
      userName: "Jane Smith",
      email: "jane.smith@example.com",
      MobileNumber: "987-654-3210",
      Address: "456 Elm St, Othertown, USA",
      profilePic: "https://via.placeholder.com/150", // Placeholder image URL
    },
    {
      id: 3,
      userName: "Alice Johnson",
      email: "alice.johnson@example.com",
      MobileNumber: "555-555-5555",
      Address: "789 Oak St, Anothertown, USA",
      profilePic: "https://via.placeholder.com/150", // Placeholder image URL
    },
  ];
  // volunteer sessionStorage
  const volunteer = JSON.parse(sessionStorage.getItem("volunteer"));
 
  const [users, setUsers] = useState();
  const getUsers = async () => {
    try {
      const response = await AxiosApi.get(`/user/get/${volunteer.id}`);
      setUsers(response.data.users);
    } catch (error) {
      console.error(error);
    }
  };
  // call get
  useEffect(() => {
    getUsers();
  }, []);
  const navigateTo=useNavigate()
  const [search, setSearch] = React.useState("");
  const [searchError, setSearchError]=useState()
 const [filteredUsers, setFilteredUsers]= useState()
  const handleSearch = (e) => {
    const searchQuery = search.toLowerCase();
    const filtered = users.filter((village) => {
      return  village.name.toLowerCase().includes(searchQuery)
        //  ||
        // village.district.toLowerCase().includes(searchQuery) ||
        // village.tehsil.toLowerCase().includes(searchQuery) ||
        // village.state.toLowerCase().includes(searchQuery) ||
        // village.pinCode.toString().includes(searchQuery)
      
    })
    if (filtered.length === 0) {
      setSearchError(`${search} not found`);
    } else {
      setSearchError(null);
    }
    setFilteredUsers(filtered);
  };
  return (
    <div className="">
      <div className="border-b-2 flex bg-slate-100 rounded">
        <h3 className="p-5 text-2xl font-bold ">Users</h3>
        <div className="p-5 mx-auto">
          <input
            type="search"
            name=""
            onChange={(e)=> setSearch(e.target.value)}
            id=""
            className="h-10 w-56 rounded-lg p-3 "
            placeholder="Search"
          />{" "}
          <button
            className="w-24 h-10 bg-green-500 teaxt-white rounded-lg"
            onClick={handleSearch}
          >
            search
          </button>
          {searchError&&<span className=" ml-2 text-red-500 ">
            {searchError}</span>}
        </div>
        <Link className="mx-auto me-3 mt-3" to={"/volunteer/add-user"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 -960 960 960"
            width="48px"
            fill="#5f6368"
          >
            <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
          </svg>
        </Link>
      </div>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-light-green-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">Users</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {filteredUsers? filteredUsers.map((user) => (
                    <div
                      key={user.id}
                      className="py-8 flex flex-wrap md:flex-nowrap"
                    >
                      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col items-center">
                        <img
                          src={user.image}
                          alt={user.name}
                          className="w-24 h-24 rounded-full mb-4"
                          onError={(e) =>
                            (e.target.src = "https://via.placeholder.com/150")
                          }
                        />
                        <span className="font-semibold title-font text-gray-700">
                          {user.name}
                        </span>
                        <span className="mt-1 text-gray-500 text-sm">
                          {user.email}
                        </span>
                      </div>
                      <div className="md:flex-grow">
                        <p className="leading-relaxed">
                          Mobile: {user.mobileNumber}
                        </p>
                        <p className="leading-relaxed">
                          Address: {user.address}
                        </p>
                        <p className="ml-10 ">
                          <button
                            className="bg-gray-400 text-white h-12 w-12  rounded-full "
                            onClick={() => handleDelete(user.id)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="24px"
                              viewBox="0 -960 960 960"
                              width="24px"
                              fill="#EA3323"
                              className="ml-3"
                            >
                              <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                            </svg>
                          </button>
                          {/* <button
                            className="bg-gray-400 text-white ml-2  h-12 w-12  rounded-full "
                            onClick={() =>navigateTo(`/volunteer/edit-user/${user.id}`, {state:{user}})}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="24px"
                              viewBox="0 -960 960 960"
                              width="24px"
                              fill="#148c01"
                              className="ml-3"
                            >
                              <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z" />
                            </svg>
                          </button> */}
                        </p>
                        <p className=""></p>
                      </div>
                    </div>
                  )):users &&
                  users.map((user) => (
                    <div
                      key={user.id}
                      className="py-8 flex flex-wrap md:flex-nowrap"
                    >
                      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col items-center">
                        <img
                          src={user.image}
                          alt={user.name}
                          className="w-24 h-24 rounded-full mb-4"
                          onError={(e) =>
                            (e.target.src = "https://via.placeholder.com/150")
                          }
                        />
                        <span className="font-semibold title-font text-gray-700">
                          {user.name}
                        </span>
                        <span className="mt-1 text-gray-500 text-sm">
                          {user.email}
                        </span>
                      </div>
                      <div className="md:flex-grow">
                        <p className="leading-relaxed">
                          Mobile: {user.mobileNumber}
                        </p>
                        <p className="leading-relaxed">
                          Address: {user.address}
                        </p>
                        <p className="ml-10 ">
                          <button
                            className="bg-gray-400 text-white h-12 w-12  rounded-full "
                            onClick={() => handleDelete(user.id)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="24px"
                              viewBox="0 -960 960 960"
                              width="24px"
                              fill="#EA3323"
                              className="ml-3"
                            >
                              <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                            </svg>
                          </button>
                          {/* <button
                            className="bg-gray-400 text-white ml-2  h-12 w-12  rounded-full "
                            onClick={() =>  navigateTo(`/volunteer/edit-user/${user.id}`, { state: { user } })}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="24px"
                              viewBox="0 -960 960 960"
                              width="24px"
                              fill="#148c01"
                              className="ml-3"
                            >
                              <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z" />
                            </svg>
                          </button> */}
                        </p>
                        <p className=""></p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUsersVolunteer;
