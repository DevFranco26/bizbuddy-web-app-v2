// biz-web-app/components/Dashboard/TrustedPartners.jsx

import { trustedPartners } from "@/lib/data";
import React from "react";

function TrustedPartners() {
  return (
    <div className="w-full md:py-20 py-8 md:my-28 my-8 px-4">
      <p className="text-center border-b border-gray-400 pb-2 max-w-7xl mx-auto text-2xl sm:text-3xl lg:text-4xl capitalize">
        Our Trusted Partners
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8 mt-8 py-10">
        {trustedPartners.map((partner, index) => (
          <img
            key={index}
            src={partner.src}
            alt={partner.name || `Trusted Partner ${index + 1}`}
            className="w-20 sm:w-28 md:w-32 lg:w-36 h-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
}

export default TrustedPartners;
