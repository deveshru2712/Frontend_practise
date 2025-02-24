import React from "react";
import {
  FaCarSide,
  FaHeadphonesAlt,
  FaWallet,
  FaCheckCircle,
} from "react-icons/fa";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      icons: <FaCarSide className="text-4xl md:text-5xl text-primary" />,
      title: "Free Shipping",
      description: "Free Shipping on all order",
    },
    {
      id: 2,
      icons: <FaCheckCircle className="text-4xl md:text-5xl text-primary" />,
      title: "Safe Money",
      description: "30 days Money Back",
    },
    {
      id: 3,
      icons: <FaWallet className="text-4xl md:text-5xl text-primary" />,
      title: "Secure Payment",
      description: "All payment are secure",
    },
    {
      id: 4,
      icons: <FaHeadphonesAlt className="text-4xl md:text-5xl text-primary" />,
      title: "Online Support 24/7",
      description: "Technical Support 24/7",
    },
  ];

  return (
    <div>
      <div className="container my-14 md:my-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
          {servicesData.map((data) => (
            <div
              key={data.id}
              className="flex flex-col items-start sm:flex-row gap-4"
            >
              {data.icons}
              <div>
                <h1 className="lg:text-xl font-bold">{data.title}</h1>
                <h1 className="text-gray-400 text-sm">{data.description}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
