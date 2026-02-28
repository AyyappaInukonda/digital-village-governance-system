import React, { useState } from "react";
import AxiosApi from "../../AxiosApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddVillage = () => {
  
  const navigateTo = useNavigate();

  const handleAddVillage = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const res =await AxiosApi.post(`village`, formData);
      console.log(res);
      toast.success("Village Added Successfully");
      navigateTo('/admin/villages')
    } catch (error) {
      toast.error("")
      console.log(error);
    }
  };
  const [image, setImage] = useState()
const [images, setImages]=useState()
const onImageChange = (event) => {
 if (event.target.files && event.target.files[0]) {
  setImages(event.target.files)
   setImage(URL.createObjectURL(event.target.files[0]));
 }
}


  return (
    <div>
      <section className="p-5 min-h-screen flex box-border justify-center items-center ">
        <form onSubmit={handleAddVillage}>
          {" "}
          <div className="bg-green-50 rounded-2xl flex min-w-3xl p-5 items-center">
            <div className="px-8">
              <h2 className="font-bold text-3xl text-[#002D74]">
                Add Village{" "}
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="">
                <label htmlFor="name" className="w-full italic ">
                  Village Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Village Name"
                  className="w-full h-10 p-3 border shadow-lg rounded-lg shadow-green-400"
                />
              </div>
              <div className="">
                <label htmlFor="tehsil" className="w-full italic ">
                  Tehsil/Taluka
                </label>
                <input
                  type="text"
                  name="tehsil"
                  id="tehsil"
                  placeholder="Tehsil"
                  className="w-full h-10 p-3 border shadow-lg rounded-lg shadow-green-400"
                />
              </div>
              <div className="">
                <label htmlFor="District" className="w-full italic ">
                  District
                </label>
                <input
                  type="text"
                  name="district"
                  id="District"
                  placeholder="District"
                  className="w-full h-10 p-3 border shadow-lg rounded-lg shadow-green-400"
                />
              </div>
              <div className="">
                <label htmlFor="State" className="w-full italic ">
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  id="State"
                  placeholder="State"
                  className="w-full h-10 p-3 border shadow-lg rounded-lg shadow-green-400"
                />
              </div>
              <div className="">
                <label htmlFor="PinCode" className="w-full italic ">
                  Pin Code
                </label>
                <input
                  type="number"
                  name="pinCode"
                  id="PinCode"
                  placeholder="Pin Code"
                  className="w-full h-10 p-3 border shadow-lg rounded-lg shadow-green-400"
                />
              </div>
              <div className="">
                <label htmlFor="Population" className="w-full italic ">
                  Population
                </label>
                <input
                  type="number"
                  name="population"
                  id="Population"
                  placeholder="Population"
                  className="w-full h-10 p-3 border shadow-lg rounded-lg shadow-green-400"
                />
              </div>
              <div className="">
                <label htmlFor="Email" className="w-full italic ">
                  Official's Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="Email"
                  placeholder="Email"
                  className="w-full h-10 p-3 border shadow-lg rounded-lg shadow-green-400"
                />
              </div>
              <div className="">
                <label htmlFor="password" className="w-full italic ">
                Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  className="w-full h-10 p-3 border shadow-lg rounded-lg shadow-green-400"
                />
              </div>
              <div className="">
                <label htmlFor="Area" className="w-full italic ">
                  Area
                </label>
                <input
                  type="text"
                  name="area"
                  id="Area"
                  placeholder="Area in sq/m"
                  className="w-full h-10 p-3 border shadow-lg rounded-lg shadow-green-400"
                />
              </div>
              <div className="">
                <label htmlFor="Famous" className="w-full italic ">
                  Famous For
                </label>
                <input
                  type="text"
                  name="famous"
                  id="Famous"
                  placeholder="Famous For e.g fish, grain, milk, place"
                  className="w-full h-10 p-3 border shadow-lg rounded-lg shadow-green-400"
                />
              </div>
              <div className="">
                <label htmlFor="professsion" className="w-full italic ">
                  Major Profession
                </label>
                <input
                  type="text"
                  name="majorProfession"
                  id="professsion"
                  placeholder="Major Profession e.g Farming, Fishing, Weaving"
                  className="w-full h-10 p-3 border shadow-lg rounded-lg shadow-green-400"
                />
              </div>
              <div className="">
                <label htmlFor="majorCrop" className="w-full italic ">
                  Major Crop Production
                </label>
                <input
                  type="text"
                  name="majorCrop"
                  id="majorCrop"
                  placeholder="Major Crop Production e.g Rice, cotton, soyabean"
                  className="w-full h-10 p-3 border shadow-lg rounded-lg shadow-green-400"
                />
              </div>
              <div className="">
                <label htmlFor="Location" className="w-full italic ">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  id="Location"
                  placeholder="Location"
                  className="w-full h-10 p-3 border shadow-lg rounded-lg shadow-green-400"
                />
              </div>
              <div className="">
                <label htmlFor="NearestMarket" className="w-full italic ">
                  Nearest Market
                </label>
                <input
                  type="text"
                  name="nearestMarket"
                  id="NearestMarket"
                  placeholder="Nearest Market"
                  className="w-full h-10 p-3 border shadow-lg rounded-lg shadow-green-400"
                />
              </div>
              <div className=" ">
                <label htmlFor="villagePhoto" className="w-full italic ">
                  Village Photots
               
                <input
                  type="file"
                  name="images"
                  id="villagePhoto"
                  multiple
                  onChange={onImageChange}
                  placeholder="Nearest Market"
                  className=" hidden w-full h-32 p-3 border shadow-lg rounded-lg shadow-green-400"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  // height="24px"
                  className=" w-full h-32 p-3 border shadow-lg rounded-lg shadow-green-400 text-green-400"
                  viewBox="0 -960 960 960"
                  // width="24px"
                  fill="currentColor"
                >
                  <path d="M480-480ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h320v80H200v560h560v-320h80v320q0 33-23.5 56.5T760-120H200Zm40-160h480L570-480 450-320l-90-120-120 160Zm440-320v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z" />
                </svg> </label>
              </div>
              <div>
                <label htmlFor="" className="w-full p-3"></label>
              {image&&<img src={`${image}`} alt="" 
              
              className="  w-full h-32 p-3 border shadow-lg rounded-lg shadow-green-400"
              />}

              </div>
              <div className="col-span-2 flex justify-center">
                <button
                  className="w-5/6 h-10 p-3 border shadow-lg rounded-lg bg-green-600 text-white flex justify-center"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddVillage;
