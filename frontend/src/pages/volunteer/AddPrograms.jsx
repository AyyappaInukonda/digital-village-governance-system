import React from 'react'
import AxiosApi from '../../AxiosApi';
import { toast } from 'react-toastify';

const AddPrograms = () => {
  // addProgramsubmit function
  const volunteer = JSON.parse(sessionStorage.getItem("volunteer"))
  const addProgramSubmit = async(e) => {
    e.preventDefault();
    const formData= new FormData(e.target);
    try {
      const response= await AxiosApi.post(`programs/add/${volunteer.id}/${volunteer.village.id}`, formData);
console.log(response);
toast.success(response.data.msg)
    } catch (error) {
      toast.error("")
      console.log(error);
    }

  }

  return (
    <div>
          {/* Add problems Form */}
          <div className='flex justify-center'>

          <div className="p-10 w-[600px] ">
    <form className="mt-8 bg-white p-4 rounded-lg shadow" autoComplete='off' onSubmit={addProgramSubmit}>
      <h3 className="text-lg font-semibold mb-2">Add a Program</h3>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
          Program Name
        </label>
        <input
          type="text"
          id="name"
          name=" programName"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required=""
        />
      </div>
      <div className="mb-4">
        <label htmlFor="startDate" className="block text-gray-700 font-medium mb-2">
         Start Date
        </label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required=""
        />
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
         End Date
        </label>
        <input
          type="date"
          id="name"
          name="endDate"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required=""
        />
      </div>
      <div className="mb-4">
        <label htmlFor="Photos" className="block text-gray-700 font-medium mb-2">
          Photos
        </label>
        <input
          type="file"
          id="Photos"
          name="images"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required=""
        />
      </div>
      {/* <div className="mb-4">
        <label htmlFor="village" className="block text-gray-700 font-medium mb-2">
          Select Village
        </label>
        <select
          
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required=""
        >
            <option value="">Select a village</option>
            <option value="1">Village 1</option>
            <option value="2">Village 2</option>
            <option value="3">Village 3</option>
            
        </select>
      </div> */}
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
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required=""
          defaultValue={""}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Submit
      </button>
    </form></div>
    </div></div>
  )
}

export default AddPrograms