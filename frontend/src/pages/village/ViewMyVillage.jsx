import React from "react";
import Slider from "react-slick";

const ViewMyVillage = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  // get village sesssion storage
  const village = JSON.parse(sessionStorage.getItem("village"));
  return (
    <div className=" py-3 pt-3 px-3">
      <section className="bg-green-100 rounded " id="aboutus">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                {village?.name}
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                Welcome to
                <span className="font-bold italic">{village?.name}</span>{" "}
                Village, which is located in the{" "}
                <span className="font-bold italic">{village?.state}</span> state{" "}
                <span className="font-bold italic">{village?.district}</span>{" "}
                district, Tehsil- {village?.tehsil}, pin code-{" "}
                {village?.pinCode}, it has population of{" "}
                <span className="font-bold italic">{village?.population}</span>{" "}
                which is in the area of {village?.area} m² , specially famous
                for <span className="font-bold italic">{village?.famous}</span>,
                majorly &nbsp;
                <span className="font-bold italic">
                  {village?.majorProfession} &nbsp;
                </span>
                Profession {village?.name} Village people following, it has
                major crop production of{" "}
                <span className="font-bold italic">{village?.majorCrop}</span> ,
                nearest market- {village?.nearestMarket}
              </p>
            </div>
            <div className="mt-12 md:mt-0">
            <Slider {...settings}>
                      {village.images?.map((image) => (
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
                      {village.images?.length <= 1 && (
                        <div className="mt-12 md:mt-0">
                          <img
                            //   src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                            src={village.images?.images[0]}
                            alt="About Us Image"
                            className="object-cover rounded-lg shadow-md"
                          />
                        </div>
                      )}
                    </Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewMyVillage;
