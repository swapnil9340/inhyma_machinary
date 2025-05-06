// components/MachineBanner.tsx
import React from 'react';
import Image from 'next/image'; // Only for Next.js. Use <img> if not in Next.js

const MachineBanner = () => {
  return (
    <div
      className="relative bg-cover bg-center rounded-lg overflow-hidden border border-blue-300 shadow"
      style={{ backgroundImage: "url('/Rectangle 8.png')" }} // 👈 Add your background image path here
    >
      {/* Overlay for better text readability */}
      <div className="bg-blue-50/70 backdrop-blur-sm p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left Machine Image */}
        <div className="w-full md:w-1/5 flex justify-center">
          <Image
            src="/Untitled design (7) 1.png"
            alt="Left Machine"
            width={150}
            height={100}
            className="object-contain"
          />
        </div>

        {/* Center Text */}
        <div className="text-center md:text-left md:w-3/5">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
            Explore Our Full Range of Packaging & <br />
            <span className="text-blue-700">Material Handling Machines</span>
          </h2>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Browse through 150+ machines across 13 categories—from vacuum sealers to labeling systems.
            Trusted solutions for automation, efficiency, and precision.
          </p>
        </div>

        {/* Right Machine Image */}
        <div className="w-full md:w-1/5 flex justify-center">
          <Image
            src="/Untitled design (8) 1.png"
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
