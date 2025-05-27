import React from 'react';
import Image from 'next/image'; 

const MachineBanner = ({bannerContent}) => {
  const {  heading1  ,heading2,img1 ,img2} = bannerContent;
  return (
    <div
      className="relative bg-cover bg-center rounded-lg overflow-hidden border border-blue-300 shadow"
      style={{ backgroundImage: "url('/Rectangle 8.png')" }} 
    >
      
      <div className="bg-blue-50/70 backdrop-blur-sm p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left Machine Image */}
        <div className="w-full md:w-1/5 flex justify-center">
          <Image
            src={img1}
            alt="Left Machine"
            width={150}
            height={100}
            className="object-contain"
          />
        </div>

        {/* Center Text */}
        <div className="text-center md:text-left md:w-3/5 text-blue-700">
          <h2 className="text-blue-700 text-xl md:text-2xl font-semibold ">
           {heading1.subHeading1}
          </h2>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
          {heading2}
          </p>
        </div>

        {/* Right Machine Image */}
        <div className="w-full md:w-1/5 flex justify-center">
          <Image
            src={img2}
            alt="Right Machine"
            width={150}
            height={100}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default MachineBanner;
