import React, { useState } from "react";
import AxiosApi from "../../AxiosApi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import AxiosApi,{  URL } from '../../AxiosApi'

const ViewVolunteers = () => {
 
  React.useEffect(() => {
    
  }, []);
  const navigateTo = useNavigate();
  const location=useLocation();
  // get volunteers from backend
  const [volunteers, setVolunteers] = useState([]);

  const getVolunteers=async()=>{
    try{
      const response = await AxiosApi.get('volunteer');
      console.log(response);
      setVolunteers(response.data.volunteers);
      }
      catch(error){
        console.log(error);
      }
  }
//  call getVolu
React.useEffect(() => {
  getVolunteers();
  }, []);
const handleDelete=async(id)=>{
try {
  const res= await AxiosApi.delete(`volunteer/${id}`);
  console.log(res);
  toast.warning('deleted')
  getVolunteers();
} catch (error) {
  console.log(error);
}
}
  return (
    <div>
        <div className="border-b-2 flex bg-slate-100 rounded">
        <h3 className="p-5 text-2xl font-bold ">Volunteers</h3>
       {location.pathname==="/admin/volunteers"&& <Link className="mx-auto me-3 mt-3" to={'/admin/add-volunteer'}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 -960 960 960"
            width="48px"
            fill="#5f6368"
          >
            <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
          </svg>
        </Link>}
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
              {volunteers&&volunteers.map(user => (
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
                    <p className="leading-relaxed">Village: {user.village.name}</p>
                   <p className="ml-10 "><button className="bg-gray-400 text-white h-12 w-12  rounded-full " onClick={()=>handleDelete(user.id)}>
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
                    </button></p>
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

export default ViewVolunteers;
