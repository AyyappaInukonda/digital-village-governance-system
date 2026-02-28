// File Path: src/pages/village/ViewFeedbacksVillage.jsx

import React from 'react';
import AxiosApi from '../../AxiosApi';

const ViewFeedbacksVillage = () => 
  {
    const user = JSON.parse(sessionStorage.getItem("village"));
    // get feedbacks
    const [feedbacks, setFeedbacks] = React.useState([]);
  
    const fetchFeedbacks = async () => {
      try {
        const response = await AxiosApi.get(`feedback/${user.id}`);
        console.log(response);
        setFeedbacks(response.data.feedbacks);
      } catch (error) {
        console.error(error);
        // setError(error.message);
      }
    };
    React.useEffect(() => {
      fetchFeedbacks();
    }, []);
  
    return (
      <div>
        <div>
          <div className="border-b-2 flex bg-slate-100 rounded">
            <h3 className="p-5 text-2xl font-bold ">Feedbacks</h3>
          
          </div>
          <div className="p-6 px-0 ">
            <table className="mt-4 w-full min-w-max table-auto text-left bg-slate-300 p-3">
              <thead className="">
                <tr>
                  <th className="cursor-pointer  border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                    <p className="antialiased font-sans text-xl font-bold text-blue-gray-900 flex items-center justify-between gap-2  leading-none opacity-70">
                      #
                    </p>
                  </th>
                  <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                    <p className="antialiased font-sans text-xl font-bold text-blue-gray-900 flex items-center justify-between gap-2  leading-none opacity-70">
                      Rating
                    </p>
                  </th>
                  <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                    <p className="antialiased font-sans text-xl font-bold text-blue-gray-900 flex items-center justify-between gap-2  leading-none opacity-70">
                      User
                    </p>
                  </th>
                  <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                    <p className="antialiased font-sans text-xl font-bold text-blue-gray-900 flex items-center justify-between gap-2  leading-none opacity-70">
                      Desciption
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {feedbacks&&feedbacks.map((item,index) => (
                  <tr>
                    <td className="p-4 border-b border-blue-gray-50">
                      {index+1 }
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <span className="flex">
                    {[1, 2, 3, 4, 5].map((rate) => (
                    <span 
                    key={rate}
                   className=""
                     > <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="currentColor"
                      stroke="#ebb010"
                      className={`"text-gray-300"${rate<=item.rating?" text-yellow-500 ":""}`}
                    >
                      <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                    </svg></span>
                   
                  ))}</span>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <p>{item.users.name}</p>
                      {item.users.email}, {item.users.mobileNumber}
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">{item.description}</td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
  

export default ViewFeedbacksVillage;
