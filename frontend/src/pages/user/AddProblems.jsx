import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import AxiosApi from '../../AxiosApi';
import { toast } from 'react-toastify';

const AddProblems = () => {
 const location= useLocation();
  const user=JSON.parse(sessionStorage.getItem('user'));
//  console.log(location);
const  item= location.state;
const navigateTo=useNavigate()
const handleAddProblem=async(e)=>{
  e.preventDefault();
  const formData = new FormData(e.target);
  // const problem={
  //   title:formData.get('title'),
  //   images:formData.get('images'),
  //   village:location.state.item.village.id,
    
  // }
  try {
    await AxiosApi.post(`/problem/add/${user.id}/${location.state.item?.id}`,formData);
    toast.success('Problem Reported successfully');
    navigateTo('/user/problems');
  } catch (error) {
    console.error(error);
    toast.error('Failed to add problem');
  }

}
  return (
    <div>
          {/* Add problems Form */}
          <div className='flex justify-center'>

          <div className="p-10 w-[600px] ">
    <form className="mt-8 bg-white p-4 rounded-lg shadow" autoComplete='off' onSubmit={handleAddProblem}>
      <h3 className="text-lg font-semibold mb-2">Report A Problem</h3>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
          Title
        </label>
        <input
          type="text"
          id="name1"
          name="title"
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
          multiple
          name="images"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required=""
        />
      </div>
      <div className="mb-4">
        <label htmlFor="village" className="block text-gray-700 font-medium mb-2">
         Village     
        </label>
        <select
          
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required=""
        >
           <option  value={location.state.item?.id} selected> {location.state.item?.name}</option>
            
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
        Report
      </button>
    </form></div>
    </div></div>
  )
}

export default AddProblems