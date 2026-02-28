import React, { useState } from "react";
import Slider from "react-slick";
import AxiosApi from "../../AxiosApi";
import { useNavigate } from "react-router-dom";
const ViewVillagesUser = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [villages, setVillages] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [filteredVillages, setFilteredVillages] = React.useState([]);
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
  const navigateTo = useNavigate();
  const [search, setSearch] = React.useState("");
  const [searchError, setSearchError] = useState();
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
  return (
    <div>
      <div className="border-b-2 flex bg-green-50 rounded">
        <h3 className="p-5 text-2xl font-bold ">Village Details</h3>
        <div className="p-5 mx-auto">
          <input
            type="search"
            name=""
            onChange={(e) => setSearch(e.target.value)}
            id=""
            className="h-10 w-56 rounded-lg p-3 "
            placeholder="Search"
          />{" "}
          <button
            className="w-24 h-10 bg-green-500 teaxt-white rounded-lg"
            onClick={handleSearch}
          >
            search
          </button>
          {searchError && (
            <span className=" ml-2 text-red-500 ">{searchError}</span>
          )}
        </div>
      </div>
      {filteredVillages && filteredVillages.length > 0
        ? filteredVillages.map((item) => (
            <div className="  pt-3 px-3 ">
              <section className="bg-green-100 rounded " id="aboutus">
                <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                    <div className="max-w-lg">
                      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                        {item.name}
                      </h2>
                      <p className="mt-4 text-gray-600 text-lg">
                        Welcome to
                        <span className="font-bold italic">
                          {" "}
                          {item.name}{" "}
                        </span>{" "}
                        Village, which is located in the{" "}
                        <span className="font-bold italic">{item.state}</span>{" "}
                        state{" "}
                        <span className="font-bold italic">
                          {item.district}
                        </span>{" "}
                        district, Tehsil-{item.tehsil}, pin code- {item.pinCode}
                        , it has population of{" "}
                        <span className="font-bold italic">
                          {item.population}
                        </span>{" "}
                        which is in the area of {item.area} m² , specially
                        famous for{" "}
                        <span className="font-bold italic">{item.famous}</span>,
                        majorly &nbsp;
                        <span className="font-bold italic">
                          {item.majorProfession} &nbsp;
                        </span>
                        Profession {item.name} Village people following, it has
                        major crop production of{" "}
                        <span className="font-bold italic">
                          {" "}
                          {item.majorCrop}
                        </span>{" "}
                        , nearest market- {item.nearestMarket}
                      </p>
                      <p className="mt-4 text-gray-600 text-lg">
                        <button
                          onClick={() =>
                            navigateTo("/user/add-feedback", {
                              state: { item },
                            })
                          }
                          className="active:animate-ping"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="44px"
                            viewBox="0 -960 960 960"
                            width="44px"
                            fill="#05f230"
                          >
                            <path d="M240-400h122l200-200q9-9 13.5-20.5T580-643q0-11-5-21.5T562-684l-36-38q-9-9-20-13.5t-23-4.5q-11 0-22.5 4.5T440-722L240-522v122Zm280-243-37-37 37 37ZM300-460v-38l101-101 20 18 18 20-101 101h-38Zm121-121 18 20-38-38 20 18Zm26 181h273v-80H527l-80 80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" />
                          </svg>{" "}
                          Review
                        </button>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <button
                          onClick={() =>
                            navigateTo("/user/add-problem", { state: { item } })
                          }
                          className="active:animate-ping"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="44px"
                            viewBox="0 -960 960 960"
                            width="44px"
                            fill="#48752C"
                          >
                            <path d="M280-320q17 0 28.5-11.5T320-360q0-17-11.5-28.5T280-400q-17 0-28.5 11.5T240-360q0 17 11.5 28.5T280-320Zm-40-120h80v-200h-80v200Zm160 80h320v-80H400v80Zm0-160h320v-80H400v80ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z" />
                          </svg>
                          Report a Problem
                        </button>
                      </p>
                    </div>
                    <Slider {...settings}>
                      {item.images?.map((image) => (
                        <div className="mt-12 md:mt-0">
                          <img
                            //   src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                            // src="/vil.jpg"
                            src={image}
                            alt="About Us Image"
                            className="object-cover rounded-lg shadow-md w-[600px] h-[350px] "
                            onError={(e) => (e.target.src = "/vil.jpg")}
                          />
                        </div>
                      ))}
                      {item.images.length <= 1 && (
                        <div className="mt-12 md:mt-0">
                          <img
                            //   src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                            src={item.images[0]}
                            alt="About Us Image"
                            className="object-cover rounded-lg shadow-md"
                          />
                        </div>
                      )}
                    </Slider>
                  </div>
                </div>
              </section>
            </div>
          ))
        : villages &&
          villages.map((item) => (
            <div className="  pt-3 px-3 ">
              <section className="bg-green-100 rounded " id="aboutus">
                <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                    <div className="max-w-lg">
                      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                        {item.name}
                      </h2>
                      <p className="mt-4 text-gray-600 text-lg">
                        Welcome to
                        <span className="font-bold italic">
                          {" "}
                          {item.name}{" "}
                        </span>{" "}
                        Village, which is located in the{" "}
                        <span className="font-bold italic">{item.state}</span>{" "}
                        state{" "}
                        <span className="font-bold italic">
                          {item.district}
                        </span>{" "}
                        district, Tehsil-{item.tehsil}, pin code- {item.pinCode}
                        , it has population of{" "}
                        <span className="font-bold italic">
                          {item.population}
                        </span>{" "}
                        which is in the area of {item.area} m² , specially
                        famous for{" "}
                        <span className="font-bold italic">{item.famous}</span>,
                        majorly &nbsp;
                        <span className="font-bold italic">
                          {item.majorProfession} &nbsp;
                        </span>
                        Profession {item.name} Village people following, it has
                        major crop production of{" "}
                        <span className="font-bold italic">
                          {" "}
                          {item.majorCrop}
                        </span>{" "}
                        , nearest market- {item.nearestMarket}
                      </p>
                      <p className="mt-4 text-gray-600 text-lg">
                        <button
                          onClick={() =>
                            navigateTo("/user/add-feedback", {
                              state: { item },
                            })
                          }
                          className="active:animate-ping hover:bg-white  "
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="44px"
                            viewBox="0 -960 960 960"
                            width="44px"
                            fill="#05f230"
                          >
                            <path d="M240-400h122l200-200q9-9 13.5-20.5T580-643q0-11-5-21.5T562-684l-36-38q-9-9-20-13.5t-23-4.5q-11 0-22.5 4.5T440-722L240-522v122Zm280-243-37-37 37 37ZM300-460v-38l101-101 20 18 18 20-101 101h-38Zm121-121 18 20-38-38 20 18Zm26 181h273v-80H527l-80 80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" />
                          </svg>{" "}
                          Review
                        </button>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <button
                          onClick={() =>
                            navigateTo("/user/add-problem", { state: { item } })
                          }
                          className="active:animate-ping hover:bg-white"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="44px"
                            viewBox="0 -960 960 960"
                            width="44px"
                            fill="#48752C"
                          >
                            <path d="M280-320q17 0 28.5-11.5T320-360q0-17-11.5-28.5T280-400q-17 0-28.5 11.5T240-360q0 17 11.5 28.5T280-320Zm-40-120h80v-200h-80v200Zm160 80h320v-80H400v80Zm0-160h320v-80H400v80ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z" />
                          </svg>
                        Report a Problem
                        </button>
                      </p>
                    </div>
                    <Slider {...settings}>
                      {item.images?.map((image) => (
                        <div className="mt-12 md:mt-0">
                          <img
                            //   src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                            // src="/vil.jpg"
                            src={image}
                            alt="About Us Image"
                            className="object-cover rounded-lg shadow-md w-[600px] h-[350px] "
                            onError={(e) => (e.target.src = "/vil.jpg")}
                          />
                        </div>
                      ))}
                      {item.images.length <= 1 && (
                        <div className="mt-12 md:mt-0">
                          <img
                            //   src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                            src={item.images[0]}
                            alt="About Us Image"
                            className="object-cover rounded-lg shadow-md"
                          />
                        </div>
                      )}
                    </Slider>
                  </div>
                </div>
              </section>
            </div>
          ))}
    </div>
  );
};

export default ViewVillagesUser;
