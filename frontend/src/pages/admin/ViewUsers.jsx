import React, { useEffect, useState } from "react";
import AxiosApi from "../../AxiosApi";
import { useNavigate } from "react-router-dom";
// import AxiosApi,{  URL } from '../../AxiosApi'

const ViewUsers = () => {
  const [users, setUsers]=useState();
  const getUsers=async()=>{
    try {
      const response = await AxiosApi.get('/user');
      console.log(response);
      setUsers(response.data.users);
      } catch (error) {
        console.error(error);
        }
        }
        // call get
        useEffect(() => {
          getUsers();
          }, []);
          

  
 
  return (
    <div>
      {/* <div className="flex justify-end p-5">
        <button
          className="bg-green-800 text-white h-12 w-24 rounded-lg "
          onClick={() => navigateTo("/admin/add-user")}
        >
          Add
        </button>
      </div> */}
        <div className="border-b-2 flex bg-slate-100 rounded">
        <h3 className="p-5 text-2xl font-bold ">Users</h3>
      
      </div>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-light-green-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              {/* <h2 className="text-2xl font-semibold text-gray-800">Users</h2> */}
            </div>
            <div className="divide-y-2 divide-gray-200">
              {users&&users.map(user => (
                <div
                 key={user.id}
                  className="py-8 flex flex-wrap md:flex-nowrap border-l">
                  <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col items-center">
                    <img src={user.image||'https://via.placeholder.com/150'} onError={(e) => {
    e.target.src = 'https://via.placeholder.com/150';
  }} alt={user.image} className="w-24 h-24 rounded-full mb-4" />
                    <span className="font-semibold title-font text-gray-700">
                      {user.name}
                      </span>
                    <span className="mt-1 text-gray-500 text-sm">{user.email}</span>
                  </div>
                  <div className="md:flex-grow">
                    <p className="leading-relaxed">Mobile: {user.mobileNumber}</p>
                    <p className="leading-relaxed">Address: {user.address}</p>
                    <p className="leading-relaxed">Added By: {user.volunteers.name}</p>
                   {/* <p className="ml-10 "><button className="bg-gray-400 text-white h-12 w-12  rounded-full " onClick={()=>handleDelete(user.id)}>
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
                    </button></p> */}
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

export default ViewUsers;
