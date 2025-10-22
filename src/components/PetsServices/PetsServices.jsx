import React, { useEffect, useState } from "react";
import p1 from "/p1.jfif";
import p2 from "/p2.jfif";
import p3 from "/p3.jfif";
import p4 from "/p4.jfif";
import p5 from "/p5.jfif";
import p6 from "/p6.jfif";

const PetServices = () => {
  const [services, setServices] = useState([]);

  const images = [p1, p2, p3, p4, p5, p6]; // store imported images here

  // Fetch data from JSON file
  useEffect(() => {
    fetch("/data/petsData.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  return (
    <section className="py-12 bg-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
          Popular Winter Care Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.serviceId}
              className="card bg-white shadow-lg rounded-2xl overflow-hidden transition-all duration-300"
            >
              {/* Use dynamic image by index */}
              <img
                src={images[index % images.length]} // loops through 6 images
                alt={service.serviceName}
                className="h-48 w-full object-cover"
              />

              <div className="p-5 space-y-3">
                <h3 className="text-xl font-semibold text-blue-600">
                  {service.serviceName}
                </h3>

                <div className="flex items-center justify-between text-sm text-gray-600">
                  <p>
                    ⭐ <span className="font-medium">{service.rating}</span>
                  </p>
                  <p className="font-semibold text-blue-700">
                    ${service.price}
                  </p>
                </div>

                <button className="bg-blue-400 rounded-md p-2 font-medium w-full mt-2 cursor-pointer hover:bg-blue-600">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PetServices;
