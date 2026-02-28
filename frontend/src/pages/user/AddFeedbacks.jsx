import React, { useState } from "react";
import { toast } from "react-toastify";
import AxiosApi from "../../AxiosApi";
import { useLocation } from "react-router-dom";

const AddFeedbacks = () => {
  const location=useLocation();
  // console.log(location.state.item.name);
  // user session storage
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [rating, setRating] =useState(0)
  const [description, setDescription]=useState()
  // handle add feedback
  const handleAddFeedback = async (e) => {
    e.preventDefault();
    // const formData = new FormData(e.target);
   try {
     const response = await AxiosApi.post(`feedback/${user.id}/${location.state.item.id}`, {"rating":rating, "description":description, "villageId":location.state.item.id, userId:user.id});
  console.log(response);
      toast.success("Feedback added successfully!");
    
   } catch (error) {
    console.error(error);
     toast.error("Failed to add feedback. Please try again later.");
   }
    
  };
  return (
    <div>
      {/* Add feedback Form */}
      <div className="flex justify-center">
        <div className="p-10 w-[600px] ">
          <form
          onSubmit={handleAddFeedback}
            className="mt-8 bg-white p-4 rounded-lg shadow"
            autoComplete="off"
          >
            <h3 className="text-lg font-semibold mb-2">Give Feedback</h3>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="flex justify-center text-gray-700 font-medium mb-2"
              >
                {/* star rating */}

                {[1, 2, 3, 4, 5].map((rate) => (
                  <span onClick={()=>setRating(rate)} 
                  key={rate}
                 
                  style={{ 
                    backgroundColor: rate <= rating ? '#fefcbf' : 'transparent', // Change background color here
                    borderRadius: '50%', // Optional: to make the background circular
                    padding: '5px', // Optional: to add space around the SVG
                    margin: '2px' // Optional: to add space between stars
                  }} > <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="44px"
                    viewBox="0 -960 960 960"
                    width="44px"
                    fill="currentColor"
                    stroke="#ebb010"
                    className={`"text-gray-300"${rate<=rating?" text-yellow-500 ":""}`}
                  >
                    <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                  </svg></span>
                 
                ))}
              </label>
              {/* <input
          type="text"
          id="name"
          name="name"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required=""
        /> */}
            </div>
            {/* <div className="mb-4">
        <label htmlFor="Photos" className="block text-gray-700 font-medium mb-2">
          Photos
        </label>
        <input
          type="file"
          id="Photos"
          name="Photos"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required=""
        />
      </div> */}
            <div className="mb-4">
              <label
                htmlFor="village"
                className="block text-gray-700 font-medium mb-2"
              >
                Select Village
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required=""
              >
                {/* <option value="">Select a village</option> */}
                <option value={location.state.item.id}>{location.state.item.name}</option>
                {/* <option value="2">Village 2</option>
                <option value="3">Village 3</option> */}
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="comment"
                className="block text-gray-700 font-medium mb-2"
              >
                Description
              </label>
              <textarea
                id="comment"
                name="description"
                placeholder="Write a detailed description of your feedback"
                maxLength="200"
                pattern=".{10,200}"
                title="Description must be between 10 and 200 characters long"
                rows={4}
                onChange={(e)=>setDescription(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required=""
                
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFeedbacks;
