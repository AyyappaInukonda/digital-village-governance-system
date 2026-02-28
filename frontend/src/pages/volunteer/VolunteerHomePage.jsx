import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const VolunteerHomePage = () => {

  
  return (
    <div>
         <nav className="flex flex-wrap items-center justify-between p-3 bg-green-100">
          <div className="text-xl text-purple-600 italic">
            Village Development
          </div>
          <div className="flex md:hidden">
            <button id="hamburger">
              <img
                className="toggle block"
                src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
                width={40}
                height={40}
              />
              <img
                className="toggle hidden"
                src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
                width={40}
                height={40}
              />
            </button>
          </div>
          <div className=" toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 ">
            <Link
              to="/volunteer"
              className="block md:inline-block hover:text-blue-500 px-3 py-3 hover:bg-white rounded-lg"
            >
              Home
            </Link>
            {/* <a
              href="/#services"
              className="block md:inline-block hover:text-blue-500 px-3 py-3 "
            >
              User
            </a>
            <a
            //   href="/insurances"
              className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
            >
              Volunteer
            </a> */}
            <NavLink
              to={'village'}
              className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none hover:bg-white rounded-lg"
            >
           Village
            </NavLink>
            <NavLink to={'programs'}
             
             className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none hover:bg-white rounded-lg"
           >
             Programs
           </NavLink>

            {/* <NavLink to={'volunteers'}
             
              className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
            >
              Volunteers
            </NavLink> */}

            <NavLink
              to={'users'}
              className="block md:inline-block hover:text-blue-500 px-3 py-3 hover:bg-white rounded-lg "
            >
              Users
            </NavLink>
            <NavLink
              to={'problems'}
              className="block md:inline-block hover:text-blue-500 px-3 py-3 hover:bg-white rounded-lg"
            >
              Problems
            </NavLink>
            <NavLink
              to={'profile'}
              className="block md:inline-block hover:text-blue-500 px-3 py-3 hover:bg-white rounded-lg"
            >
              Profile
            </NavLink>
            <Link to={"/"} onClick={()=>sessionStorage.removeItem('volunteer')}>
                    {" "}
                    <div className="flex items-center h-10 w-30 rounded-md bg-[#0d582a] text-white font-medium p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#ffffff"
                      >
                        <path d="M481-120v-60h299v-600H481v-60h299q24 0 42 18t18 42v600q0 24-18 42t-42 18H481Zm-55-185-43-43 102-102H120v-60h363L381-612l43-43 176 176-174 174Z" />
                      </svg>
                      Logout
                    </div>
                  </Link>
          </div>
        
        </nav>
        <div  className=" min-h-screen w-full"
        style={{
          backgroundImage: `url(/v11.webp)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
<Outlet/>
        </div>
        <section>
          <footer className="bg-gray-200 text-white py-4 px-3">
            <div className="container mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full md:w-1/2 md:text-center md:mb-4 mb-8">
                <p className="text-xs text-gray-400 md:text-sm">
                  Copyright 2024 © All Rights Reserved
                </p>
              </div>
            </div>
          </footer>
        </section>
    </div>
  )
}

export default VolunteerHomePage