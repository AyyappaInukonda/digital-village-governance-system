import React, { useState } from "react";
import { Link } from "react-router-dom/dist";
import AxiosApi from "../../AxiosApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  window.openModal = function (modalId) {
    document.getElementById(modalId).style.display = "block";
    document.getElementsByTagName("body")[0].classList.add("overflow-y-hidden");
  };

  window.closeModal = function (modalId) {
    document.getElementById(modalId).style.display = "none";
    document
      .getElementsByTagName("body")[0]
      .classList.remove("overflow-y-hidden");
  };

  // Close all modals when press ESC
  document.onkeydown = function (event) {
    event = event || window.event;
    if (event.keyCode === 27) {
      document
        .getElementsByTagName("body")[0]
        .classList.remove("overflow-y-hidden");
      let modals = document.getElementsByClassName("modal");
      Array.prototype.slice.call(modals).forEach((i) => {
        i.style.display = "none";
      });
    }
  };

  const [data, setdata] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata({
      ...data,
      [name]: value,
    });
  };

  const naviagtion = useNavigate();

  const [select, setSelect] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(data);
      console.log(select);
      if (select === "User") {
        try {
          const response = await AxiosApi.post("login/user", {
            email: email,
            password: data.password,
          });
          console.log(response);
        toast.success(response.data.msg);
          sessionStorage.setItem(
            "user",
            JSON.stringify(response.data.user)
          );
          naviagtion("/user");
        } catch (err) {
          console.log(err);
          err.response.data.message.map((item) => toast.error(item));
        }
      } else if (select === "Volunteer") {
        try {
          const response = await AxiosApi.post("login/volunteer", {
            email: email,
            password: data.password,
          });
          console.log(response, "volunt");
          sessionStorage.setItem(
            "volunteer",
            JSON.stringify(response.data.volunteer)
          );
          toast.success(response.data.msg);
          naviagtion("/volunteer");
        } catch (err) {
          console.log(err);
          err.response.data.message.map((item) => toast.error(item));
        }
      } else if (select === "Village") {
        try {
          const response = await AxiosApi.post("login/village", {
            email: email,
            password: data.password,
          });
          console.log(response);
          sessionStorage.setItem(
            "village",
            JSON.stringify(response.data.village)
          );
          // toast.success(response.data.message);
          toast.success(response.data.msg);
          naviagtion("/village");
        } catch (err) {
          console.log(err);
          toast.error(err.response.data.error) ||
            err.response.data.message.map((item) => toast.error(item));
        }
      } else if (select === "Admin") {
        try {
          const response = await AxiosApi.post("login/admin", {
            email: email,
            password: data.password,
          });
          console.log(response);
          toast.success(response.data.message);
          naviagtion("/admin");
          const admin = JSON.stringify({ email: data.email });
          sessionStorage.setItem("admin", admin);
        } catch (err) {
          toast.error(err.response.data.error)
          console.log(err);
        }
      } else {
        console.log("Select a role");
        toast.error("Select a role");
      }
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
    }
  };
  const [emailFocused, setEmailFocused] =useState(false);
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(value));
  };
  return (
    <div>
      <section className="bg-gray-100 min-h-screen flex box-border justify-center items-center">
        <div className="bg-green-200 rounded-2xl flex max-w-3xl p-5 items-center">
          <div className="md:w-1/2 px-8">
            <h2 className="font-bold text-3xl text-[#002D74] ">
              Login{" "}
              <span className="text-xl ">
                as{" "}
                <select
                  className="rounded-lg"
                  name="role"
                  id=""
                  onChange={(e) => setSelect(e.target.value)}
                >
                  <option value="">--select--</option>
                  <option value="User">User</option>
                  <option value="Volunteer">Volunteer</option>
                  <option value="Village">Village</option>
                  <option value="Admin">Admin</option>
                </select>
              </span>
            </h2>
            <p className="text-sm mt-4 text-[#002D74]">
              If you already a member, easily log in now.
            </p>
            <form
              action=""
              className="flex flex-col gap-4"
              onSubmit={handleSubmit}
            >
              <div className="relative">
                <input
                  className="p-2  rounded-xl border w-full"
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Email"
                  onFocus={()=>setEmailFocused(true)}
                  onChange={handleEmailChange}
                />
                {
                 isValid&& <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#48752C"
                    // fill="currentColor"
                    className="bi bi-eye-slash-fill absolute top-1/2 right-3 -z-1 -translate-y-1/2  "
                  >
                    <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                  </svg>
                }
               {!isValid&&emailFocused&& <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#EA3323"
                  onClick={()=>setEmail("")}
                  className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer z-20 opacity-100"
                >
                  <path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                </svg>}
              </div>
              <div className="relative">
                <input
                  className="p-2 rounded-xl border w-full"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
                {!showPassword && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="gray"
                    onClick={() => setShowPassword(!showPassword)}
                    id="togglePassword"
                    className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer z-20 opacity-100"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
                  </svg>
                )}
                {showPassword && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-eye-slash-fill absolute top-1/2 right-3 -z-1 -translate-y-1/2 cursor-pointer "
                    id="mama"
                    onClick={() => setShowPassword(!showPassword)}
                    viewBox="0 0 16 16"
                  >
                    <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"></path>
                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"></path>
                  </svg>
                )}
              </div>
              <button
                className="bg-[#002D74] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
          <div className="md:block hidden w-1/2">
            <img
              className="rounded-2xl h-[500px] max-h-[1600px]"
              src="/vil.jpg"
              // src="https://images.unsplash.com/photo-1552010099-5dc86fcfaa38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxmcmVzaHxlbnwwfDF8fHwxNzEyMTU4MDk0fDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="login form image"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
