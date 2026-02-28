import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AxiosApi from "../../AxiosApi";
import Slider from "react-slick";

const ViewProblemsUser = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [problems, setProblems] = React.useState([]);
  const user = JSON.parse(sessionStorage.getItem("user"));
  // get problems function
  const getProblems = async () => {
    try {
      const response = await AxiosApi.get(`problem/${user.id}`);
      setProblems(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getProblems();
  }, []);

  return (
    <div>
      <section className="bg-green-00 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 text-purple-600">
            Village Problems
          </h2>
          <div className="flex justify-end items-center">
            {/* <div className="flex p-3">
        <Link  to={'/user/add-problem'} className="px-4 py-2  text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600">
       
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 -960 960 960"
            width="48px"
            fill="#5f6368"
          >
            <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
          </svg>
       
        </Link></div> */}
          </div>
          <div className="space-y-4">
           {problems&&problems.map((item)=> <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center mb-2">
                <img
                  // src="https://via.placeholder.com/40"
                  src={item.user?.image}
                  onError={(e)=>e.target.src="https://via.placeholder.com/40"}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h3 className="font-semibold">{item.user.name}</h3>
                  <p className="text-sm text-gray-500">
                    Posted on {item.date}
                  </p>
                </div>
              </div>
              <p className="text-gray-700">
             {item.description}
              </p>
              <p>
              <ul className="w-full   divide-y  shadow shadow-green-600 rounded-xl">
                <li>
                  <details className="group">
                    <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                      <svg
                        className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        ></path>
                      </svg>
                      <span>{item.title}</span>
                    </summary>
                    <article className="px-4 pb-4">
    
                      <p className="text-gray-700 border-t">
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
                      {item?.images?.length <= 1 && (
                        <div className="mt-12 md:mt-0">
                          <img
                            //   src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                            src={item.images[0]}
                          onError={(e)=>e.target.src="https://via.placeholder.com/40"}

                            alt="About Us Image11"
                            className="object-cover rounded-lg shadow-md"
                          />
                        </div>
                      )}
                    </Slider>
                      </p>
                    </article>
                  </details>
                </li>
              </ul>
             
              </p>
              <p className="border-t font-bold  text-xl">Replies</p>
              <ul className="w-full   divide-y  shadow shadow-green-600 rounded-xl">
                <li>
                  <details className="group">
                    <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                      <svg
                        className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        ></path>
                      </svg>
                      {/* <span>Problem Name</span> */}
                    </summary>
                    <article className="px-4 pb-4">
                      <div className="flex items-center mb-2 border-t">
                        <img
                        src={item.volunteers?.image}
                          // src="https://via.placeholder.com/40"
                          onError={(e)=>e.target.src="https://via.placeholder.com/40"}
                          alt="User Avatar"
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                          <h3 className="font-semibold">{item.volunteers?.name}</h3>
                          {/* <p className="text-sm text-gray-500">
                            Posted on "{item.createdAt}"
                          </p> */}
                        </div>
                      </div>
                      <p className="text-gray-700 border-t">
                       {item.replies?.map((reply, index)=><div>
{index+1}. {reply} <br />
                       </div>)}
                      </p>
                    </article>
                  </details>
                </li>
              </ul>

              <div className="flex items-center mt-2">
                {/* <button className="text-blue-500 hover:text-blue-600 mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 inline"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
            </svg>
            Like
          </button> */}
                {/* <button className="text-gray-500 hover:text-gray-600">Reply</button> */}
              </div>
            </div>)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewProblemsUser;
