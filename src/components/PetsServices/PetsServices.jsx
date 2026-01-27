import React, { useEffect, useState } from "react";
import { FaStar, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import Title from "../Title/Title";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const PetServices = () => {
  const [services, setServices] = useState([]);

  const images = [
    "https://i.ibb.co.com/PnrJkV7/download-6.jpg",
    "https://i.ibb.co.com/zMDYHR4/images-6.jpg",
    "https://i.ibb.co.com/1YKKSp7T/images-7.jpg",
    "https://i.ibb.co.com/PZyFj6Px/images-8.jpg",
    "https://i.ibb.co.com/C3T4WfQX/images-9.jpg",
    "https://i.ibb.co.com/qHX9nn7/images-10.jpg",
  ];

  useEffect(() => {
    fetch("/data/petsData.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  return (
    <section className="relative bg-[#0f172a] py-24 px-6 overflow-hidden">
      {/* Background Subtle Shapes */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-600/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-cyan-600/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <Title className="text-white">Popular Winter Care Services</Title>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.serviceId}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="group relative bg-white/3 backdrop-blur-md border border-white/10 p-5 rounded-[30px] shadow-2xl transition-all duration-500"
            >
              {/* Image with Zoom effect */}
              <div className="relative h-44 w-full overflow-hidden rounded-[22px] mb-5">
                <img
                  src={images[index % images.length]}
                  alt={service.serviceName}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-[#0f172a]/60 backdrop-blur-md text-cyan-400 text-xs font-bold px-3 py-1 rounded-full border border-white/10">
                  ${service.price}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {service.serviceName}
                </h3>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                    <FaStar className="text-amber-400 text-sm" />
                    <span className="text-sm font-bold text-slate-300">
                      {service.rating}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Featured</span>
                </div>

                <Link to={`/service/${service.serviceId}`} className="block pt-2">
                  <button className="relative flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-[#0f172a] font-bold py-3 px-4 rounded-xl w-full transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] active:scale-95">
                    <span>View Details</span>
                    <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>

              {/* Glass Reflection Highlight */}
              <div className="absolute inset-0 rounded-[30px] bg-linear-to-tr from-white/2 to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Show All Services Button */}
        <div className="text-center mt-16">
          <Link to="/services">
            <button className="px-10 py-4 rounded-full border border-white/10 bg-white/5 text-white font-bold hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm">
              Show All Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PetServices;