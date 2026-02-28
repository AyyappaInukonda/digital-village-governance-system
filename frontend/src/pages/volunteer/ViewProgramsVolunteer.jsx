// File Path: src/pages/volunteer/ViewProgramsVolunteer.jsx

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AxiosApi from "../../AxiosApi";
import { toast } from "react-toastify";

const ViewProgramsVolunteer = () => { 
  const programs1 = [
    {
      id: 1,
      name: "Program A",
      startDate: "2023-10-01",
      endDate: "2023-10-15",
      description: "This is Program A",
    },
    {
      id: 2,
      name: "Program B",
      startDate: "2023-11-01",
      endDate: "2023-11-15",
      description: "This is Program B",
    },
    {
      id: 3,
      name: "Program C",
      startDate: "2023-12-01",
      endDate: "2023-12-15",
      description: "This is Program C",
    },
  ];
  const [programs, setPrograms] = React.useState([]);
  // retriev volunteer from session storage
  const volunteer = JSON.parse(sessionStorage.getItem("volunteer"));

  // getPrograms() write function
  const getPrograms = async () => {
    try {
      const res = await AxiosApi.get(`programs/${volunteer.id}`);
      console.log(res);
      setPrograms(res.data.programs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPrograms();
  }, []);

  const deleteProgram = async (id) => {
    try {
      const response = await AxiosApi.delete(`programs/${id}`);
      console.log(response);
      getPrograms();
      toast.success(response.data.msg);
      
    } catch (error) {
      toast.error("");
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">Programs</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {programs &&
                programs.map((program, index) => (
                  <div
                    key={program.id}
                    className="py-8 flex flex-wrap md:flex-nowrap"
                  >
                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      {index + 1}.{" "}
                      <span className="font-semibold title-font text-gray-700">
                        {program.programName}
                      </span>
                      <span className="mt-1 text-gray-500 text-sm">
                      Date:-  {program.startDate} - {program.endDate}
                      </span>
                      <p className="leading-relaxed">{program.description}</p>
                    </div>
                    <div className="md:flex-grow">
                      <img
                        src={`${program.images}`}
                        alt=""
                        className="h-32 w-52 rounded-xl"
                        onError={(e) => {
                          e.target.src = "/v1.webp";
                        }}
                      /> <button
                        onClick={() => deleteProgram(program.id)}
                        className="bg-red-500 text-white
                         p-2 m-2 rounded-lg"
                      >
                        Delete
                      </button>
                    </div>
                    {/* delete button */}
                    <div className="flex justify-center items-center">
                     
                    </div>
                  </div>
                ))}
            </div>
            <div className="text-center mt-12">
              <Link
                to="/volunteer/add-program"
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Add Program
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProgramsVolunteer;
