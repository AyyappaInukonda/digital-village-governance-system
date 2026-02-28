import axios from "axios";
// import translate from "google-translate-api-browser";
// import {translate} from '@vitalets/google-translate-api';
// import { translate } from '@vitalets/google-translate-api';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/dist";
const HomePage = () => {
 
  const admin = sessionStorage.getItem("admin");
  const company = sessionStorage.getItem("company");
  const verifier = sessionStorage.getItem("verifier");
  const user = sessionStorage.getItem("user");
  const API_KEY = 'AIzaSyCUA3uUquQ88On7YaIFbBpByARvNj64GAU'; //AIzaSyCUA3uUquQ88On7YaIFbBpByARvNj64GAU  YOUR_GOOGLE_CLOUD_API_KEY Replace with your API key

// const translateText = async (text, targetLanguage) => {
//   try {
//     const response = await axios.post(`https://translation.googleapis.com/language/translate/v2`, {
//       q: text,
//       target: targetLanguage,
//       key: API_KEY,
//     });
//     return response.data.data.translations[0].translatedText;
//   } catch (error) {
//     console.error('Translation error:', error);
//     return text;
//   }
// };
  const [language, setLanguage] = useState('en'); // default language
// function handlechange
const handleChange=(event)=> {

}
//   const handleChange = async (event) => {
//     const selectedLanguage = event.target.value;
//     setLanguage(selectedLanguage);
//     const frame = document.querySelector('iframe');
//     if (frame) {
//       const src = frame.src;
//       if (src.includes('hl=')) {
//         frame.src = src.replace(/hl=[a-z]{2}/, `hl=${selectedLanguage}`);
//       } else {
//         frame.src = `${src}&hl=${selectedLanguage}`;
//       }
//     }
//     // Assuming your entire content is in a single element or needs to be translated
//     const elements = document.querySelectorAll('.translatable');
//     for (const element of elements) {
//       const originalText = element.innerText;
//       console.log(originalText);
      
//       try {
//         // const translation = await translate(originalText, { to: selectedLanguage});
//         const { text } = await translate('Привет, мир! Как дела?', { to: 'en' });
//         console.log(text);
//         // element.innerText = translation.text;
//       } catch (error) {
//         console.error('Translation error:', error);
//       }
//     }
//   };
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);
  return (
    <div>
      <>
        {/* nav bar section */}
        <nav className="flex flex-wrap items-center justify-between p-3 bg-green-100">
          <div className="text-xl text-purple-600 italic translatable" style={{textShadow:"0 0 3px #7c7180"}}>
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
          <div className=" toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 md:border-none">
            <a
              href="#home"
              className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none translatable"
            >
              Home
            </a>
            {/* <a
              href="/#services"
              className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
            >
              User
            </a>
            <a
            //   href="/insurances"
              className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
            >
              Volunteer
            </a> */}
            <a
              href="#aboutus"
              className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none translatable"
            >
              About us
            </a>
            <a
              href="#gallery"
              className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none translatable"
            >
              Gallery
            </a>
          </div>
          <div className=" w-full text-end hidden md:flex md:w-auto px-2 py-2 md:rounded">
            <a href="#">
              <div className="flex justify-end">
                {user || admin || verifier || company ? (
                  ""
                ) : (
                  <Link to={"/login"}>
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
                      Login
                    </div>
                  </Link>
                )}
              </div>
            </a>
          </div>
        </nav>
        {/* <button>
          <select name="" value={language} onChange={handleChange}>
<option value="en">English</option>
<option value="hi">Hindi</option>
<option value="es">Telugu</option>
          </select>
        </button> */}
        {/* hero seciton */}
        <div className="relative w-full h-[320px]" id="home">
          <div className="absolute inset-0 opacity-70">
            <img
              src="/village.jpg"
              // src="https://image1.jdomni.in/banner/13062021/0A/52/CC/1AF5FC422867D96E06C4B7BD69_1623557926542.png"
              alt="Background Image"
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <h1 className="text-grey-700 font-medium text-purple-800 text-4xl md:text-5xl leading-tight mb-2 " style={{textShadow:"0 0 3px #e9bcf7"}}>
                Village Development
              </h1>
              <p className="font-regular text-xl mb-8 mt-4 translatable">
                Building a Future Through Sustainable Development
              </p>
              <Link
                to={"/login"}
                className="px-6 py-3 bg-[#c8a876] text-white font-medium rounded-full hover:bg-[#c09858]  transition duration-200"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>

        {/* about us */}
        <section className="bg-gray-100 translatable" id="aboutus">
          <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              <div className="max-w-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                  About Us
                </h2>
                <p className="mt-4 text-gray-600 text-lg">
                  Welcome to{" "}
                  <span className="font-bold italic">
                    Village Development Project
                  </span>{" "}
                  , where our mission is to drive transformative change in rural
                  communities.
                 In   <span className="font-bold italic">
                   Village Development Project
                  </span>,
                  We are dedicated to fostering sustainable development,
                  enhancing the quality of life, and empowering village
                  residents to build a brighter future.
                </p>
              </div>
              <div className="mt-12 md:mt-0">
                <img
                  //   src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                  src="/vil.jpg"
                  alt="About Us Image"
                  className="object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>
        {/* why us  */}
      
        {/* gallery */}
        <section className="text-gray-700 body-font bg-green-100" id="gallery">
          <div className="flex justify-center text-3xl font-bold text-gray-800 text-center py-10">
            Gallery
          </div>
          <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            <div className="group relative">
              <img
src="/v1.webp"
                // src="https://c8.alamy.com/comp/2RRRY3M/230617-bengaluru-june-17-2023-visitors-look-at-an-electric-vehicle-during-the-4th-edition-of-green-vehicle-expo-in-bengaluru-india-june-16-2023-strxinhua-india-bengaluru-electric-vehicle-expo-kashifxmasood-publicationxnotxinxchn-2RRRY3M.jpg"
                alt="Image 1"
                className=" aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
              />
            </div>
            <div className="group relative">
              <img
src="/v2.jpeg"

                // src="https://greenvehicleexpo.com/wp-content/uploads/2022/07/GV-Expo-Day2-Cam1-59.jpg"
                alt="Image 1"
                className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
              />
            </div>
            <div className="group relative">
              <img
src="/v4.jpeg"

                // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQqFnkyD4ekivNYfdMqPJQFqlY2Vcau7pqkw&usqp=CAU"
                alt="Image 1"
                className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
              />
            </div>
            <div className="group relative">
              <img
src="/v3.webp"

                // src="https://greenvehicleexpo.com/wp-content/uploads/2022/07/GV-Expo-Day2-Cam1-142.jpg"
                alt="Image 1"
                className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
              />
            </div>
            {/* Repeat this div for each image */}
          </div>
        </section>

        {/* footer */}
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
      </>
   
    </div>
  );
};

export default HomePage;
