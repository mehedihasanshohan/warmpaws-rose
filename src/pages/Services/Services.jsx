
import React, { useEffect, useState } from "react";
import { FaStar } from 'react-icons/fa';
import { Link } from "react-router";

const Services = () => {
  const [services, setServices] = useState([]);

  const images = [
    "https://i.ibb.co.com/PnrJkV7/download-6.jpg",
    "https://i.ibb.co.com/zMDYHR4/images-6.jpg",
    "https://i.ibb.co.com/1YKKSp7T/images-7.jpg",
    "https://i.ibb.co.com/PZyFj6Px/images-8.jpg",
    "https://i.ibb.co.com/C3T4WfQX/images-9.jpg",
    "https://i.ibb.co.com/qHX9nn7/images-10.jpg",
    "https://i.ibb.co.com/jP0tkFGh/p1.jpg",
    "https://i.ibb.co.com/VYnmrNN5/p2.jpg",
    "https://i.ibb.co.com/S75T1TSs/p3.jpg",
    "https://i.ibb.co.com/0pcFdGRG/p5.jpg",
    "https://i.ibb.co.com/TMmzHqpG/p6.jpg",
    "https://i.ibb.co.com/d0rwzgtD/pets2.webp",


  ];


  useEffect(() => {
    fetch("/data/servicesData.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  return (
    <section className="py-12 bg-blue-50 ">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
          Popular Winter Care Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              data-aos="fade-up"
              key={service.serviceId}
              className="card bg-white p-4 shadow-lg rounded-2xl overflow-hidden transition-all duration-300"
            >
              <img
                src={images[index % images.length]}
                alt={service.serviceName}
                className="h-48 w-full rounded-lg object-cover"
              />

              <div className="p-5 space-y-3">
                <h3 className="text-2xl font-semibold text-blue-600">
                  {service.serviceName}
                </h3>

                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex justify-center items-center gap-2">
                    <FaStar className="text-yellow-400 h-4 w-4"></FaStar> <span className="font-medium text-lg">{service.rating}</span>
                  </div>
                  <p className="font-semibold text-lg text-blue-700">
                    ${service.price}
                  </p>
                </div>

                <Link to={`/service/${service.serviceId}`}>
                  <button className="bg-blue-400 rounded-md p-2 font-medium w-full mt-2 cursor-pointer hover:bg-blue-600 text-white">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
