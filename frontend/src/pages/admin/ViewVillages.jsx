import React, { useState } from "react";
import { Link } from "react-router-dom";
import AxiosApi from "../../AxiosApi";

const ViewVillages = () => {
  // get all villages
  const [villages, setVillages] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const fetchVillages = async () => {
    try {
      const response = await AxiosApi.get(`village`);
      // const data = await response.json()
      console.log(response.data.villages);
      setVillages(response.data.villages);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };
  React.useEffect(() => {
    
    fetchVillages();
  }, []);
  const [filteredVillages, setFilteredVillages] = React.useState([]); 
  const [search, setSearch] = React.useState("");
  const [searchError, setSearchError]=useState()
  const handleSearch = (e) => {
    const searchQuery = search.toLowerCase();
    const filtered = villages.filter((village) => {
      return (
        village.name.toLowerCase().includes(searchQuery) ||
        village.district.toLowerCase().includes(searchQuery) ||
        village.tehsil.toLowerCase().includes(searchQuery) ||
        village.state.toLowerCase().includes(searchQuery) ||
        village.pinCode.toString().includes(searchQuery)
      );
    });
    if (filtered.length === 0) {
      setSearchError(`${search} not found`);
    } else {
      setSearchError(null);
    }
    setFilteredVillages(filtered);
  };
// delete villages
const handleDelete = async (id) => {
  try {
    const response = await AxiosApi.delete(`village/${id}`)
    console.log(response.data);
    
    fetchVillages();
  }
    
    catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <div className="border-b-2 flex bg-slate-100 rounded">
        <h3 className="p-5 text-2xl font-bold ">Village Details</h3>
        <div className="p-5 mx-auto">
          <input
            type="search"
            name=""
            onChange={(e)=> setSearch(e.target.value)}
            id=""
            className="h-10 w-56 rounded-lg p-3 "
            placeholder="Search"
          />{" "}
          <button className="w-24 h-10 bg-green-500 teaxt-white rounded-lg" onClick={handleSearch} >
            search
          </button>
          {searchError&&<span className=" ml-2 text-red-500 ">
            {searchError}</span>}
        </div>
        <Link className="mx-auto me-3 mt-3" to={"/admin/add-village"}>
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
      <div className="p-6 px-0 ">
        <table className="mt-4 w-full min-w-max table-auto text-left bg-slate-300 p-3">
          <thead className="">
            <tr>
              <th className="cursor-pointer  border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p className="antialiased font-sans text-xl font-bold text-blue-gray-900 flex items-center justify-between gap-2  leading-none opacity-70">
                  Village
                </p>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p className="antialiased font-sans text-xl font-bold text-blue-gray-900 flex items-center justify-between gap-2  leading-none opacity-70">
                  Population
                </p>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p className="antialiased font-sans text-xl font-bold text-blue-gray-900 flex items-center justify-between gap-2  leading-none opacity-70">
                  Area
                </p>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p className="antialiased font-sans text-xl font-bold text-blue-gray-900 flex items-center justify-between gap-2  leading-none opacity-70">
                  Famous For
                </p>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p className="antialiased font-sans text-xl font-bold text-blue-gray-900 flex items-center justify-between gap-2  leading-none opacity-70">
                  Major Profession
                </p>
              </th>
              <th className="cursor-pointer  border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p className="text-wrap antialiased font-sans text-xl font-bold text-blue-gray-900 flex items-center justify-between gap-2  leading-none opacity-70">
                  Major Crop Production
                </p>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p className="antialiased font-sans text-xl font-bold text-blue-gray-900 flex items-center justify-between gap-2  leading-none opacity-70">
                  Nearest Market
                </p>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                {" "}
                Delete
              </th>
              {/* <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
          <p className="antialiased font-sans text-xl font-bold text-blue-gray-900 flex items-center justify-between gap-2  leading-none opacity-70">
          Images
           
          </p>
        </th> */}
            </tr>
          </thead>
          <tbody>
          {filteredVillages&& filteredVillages.length > 0 ?
              filteredVillages.map((item) => (
                <tr key={item.id}>
                  <td className="p-4 border-b border-blue-gray-50">
                    {item.name}, {item.tehsil},<br /> {item.district},{" "}
                    {item.state}
                    <br /> {item.pinCode}
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    {item.population}
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    {item.area} m²
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    {item.famous}
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    {item.majorProfession}
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    {item.majorCrop}
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    {item.nearestMarket}
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    {" "}
                    <button className="bg-gray-400 text-white h-12 w-12  rounded-full " onClick={()=>handleDelete(item.id)}>
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
                  </td>
                  {/* <td className="p-4 border-b border-blue-gray-50">
         <img src={`${item.images[0]}`} alt="" />
        </td> */}
                </tr>
              )):(villages &&
              villages.map((item) => (
                <tr key={item.id}>
                  <td className="p-4 border-b border-blue-gray-50">
                    {item.name}, {item.tehsil},<br /> {item.district},{" "}
                    {item.state}
                    <br /> {item.pinCode}
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    {item.population}
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    {item.area} m²
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    {item.famous}
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    {item.majorProfession}
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    {item.majorCrop}
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    {item.nearestMarket}
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    {" "}
                    <button className="bg-gray-400 text-white h-12 w-12  rounded-full " onClick={()=>handleDelete(item.id)}>
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
                  </td>
                  {/* <td className="p-4 border-b border-blue-gray-50">
         <img src={`${item.images[0]}`} alt="" />
        </td> */}
                </tr>
              )))}
            {}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewVillages;
