import React from "react";

const ViewProfileVolunteer = () => {
  const user = JSON.parse(sessionStorage.getItem("volunteer"));
  return (
    <div className="flex justify-center p-5">
      <div className="bg-white w-2/5 rounded">
        <div className="flex justify-between items-center p-5">
          <h2 className="text-2xl font-bold">User Profile</h2>
          {/* <button className="bg-blue-600 text-white px-4 py-2 rounded">Edit</button> */}
        </div>
        <div className="grid grid-cols-2">
          <div className="p-2">
            <img
              src={`${user?.image}`}
              alt=""
              className="w-36 h-36 rounded-full"
              onError={(e) =>
                (e.target.src = "https://via.placeholder.com/150")
              }
            />
          </div>
          <div>
            <h3 className="font-bold">{user?.name}</h3>
            <h3 className="text-sm text-gray-500">{user?.email}</h3>
            <h3 className="text-sm">{user?.mobileNumber}</h3>
            <h3 className="text-sm">{user?.address}</h3>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfileVolunteer;
