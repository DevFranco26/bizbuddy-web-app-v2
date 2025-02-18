// biz-web-app/components/Dashboard/DataDisplay.jsx

import React from "react";
import { appData } from "@/lib/data";
import Image from "next/image";

function DataDisplay() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-red-600 via-orange-400 to-white">
      {/* Main Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                <span className="text-white">Time Management,</span>
                <br />
                <span className="text-black">Made Simple.</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-800 max-w-2xl mx-auto lg:mx-0">
                Manage schedules, track hours, and stay on top of work. Try
                BizBuddy now!
              </p>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Image
                src="/download-app-store.png"
                alt="Download on App Store"
                width={180}
                height={54}
                className="w-44 sm:w-48 hover:scale-105 transition-transform cursor-pointer"
              />
              <Image
                src="/download-google-play.png"
                alt="Get it on Google Play"
                width={180}
                height={54}
                className="w-44 sm:w-48 hover:scale-105 transition-transform cursor-pointer"
              />
            </div>
          </div>

          {/* Right Content - Phone Image */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="relative w-64 sm:w-72 md:w-80 lg:w-96 aspect-[3/4]">
              <Image
                src="/phone.png"
                alt="BizBuddy App Interface"
                width={500}
                height={700}
                className="w-full h-full object-contain drop-shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full bg-red-600 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {appData.map((data) => (
              <div
                key={data.id}
                className="text-center bg-red-500/20 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition-transform"
              >
                <p className="text-4xl sm:text-5xl font-bold text-white mb-2">
                  {typeof data.quantity === "number"
                    ? data.quantity.toLocaleString()
                    : data.quantity}
                </p>
                <p className="text-lg sm:text-xl text-white/90">
                  {data.metric}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add floating animation */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

export default DataDisplay;
