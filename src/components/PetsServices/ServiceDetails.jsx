import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import {
  FaStar,
  FaArrowLeft,
  FaCheckCircle,
  FaCalendarAlt,
} from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const selectedImage = location.state?.selectedImage;
  const [service, setService] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "" });

  useEffect(() => {
    fetch("/data/petsData.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find(
          (item) => String(item.serviceId) === String(id),
        );
        setService(found);
      })
      .catch((err) => console.error("Error loading service:", err));
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✨ Service booked successfully!");
    setFormData({ name: "", email: "" });
  };

  if (!service)
    return (
      <div className="min-h-screen bg-[#0f172a] flex items-center justify-center">
        <span className="loading loading-ring loading-lg text-cyan-400"></span>
      </div>
    );

  return (
    <div className="min-h-screen bg-[#0f172a] py-12 px-4 md:px-10">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto mb-8">
        <button
          className="group flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-all font-semibold"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />{" "}
          Back to Services
        </button>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Side: Service Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-7 space-y-8"
        >
          {/* Image Gallery Look */}
          <div className="relative group rounded-[35px] overflow-hidden border border-white/10 shadow-2xl">
            <img
              src={
                selectedImage ||
                service.image ||
                "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8"
              }
              alt={service.serviceName}
              className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-6 left-6 bg-[#0f172a]/60 backdrop-blur-md px-5 py-2 rounded-full border border-white/10 text-cyan-400 font-bold">
              {service.category}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              {service.serviceName}
            </h2>
            <div className="flex flex-wrap gap-6 items-center text-slate-300">
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <FaStar className="text-amber-400" />
                <span className="font-bold text-white">{service.rating}</span>
                <span className="text-sm opacity-60">(Reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-cyan-500" />
                <span>{service.slotsAvailable} Slots Left</span>
              </div>
            </div>
          </div>

          <div className="bg-white/3 backdrop-blur-md border border-white/10 rounded-[30px] p-8 space-y-6">
            <div>
              <h4 className="text-lg font-bold text-white mb-3">
                About this service
              </h4>
              <p className="text-slate-400 leading-relaxed text-lg">
                {service.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">
                  Provider
                </p>
                <p className="text-white font-medium">{service.providerName}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">
                  Contact
                </p>
                <p className="text-white font-medium truncate">
                  {service.providerEmail}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Booking Form Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-5"
        >
          <div className="sticky top-32 bg-linear-to-br from-white/8 to-transparent backdrop-blur-2xl border border-white/10 p-8 rounded-[40px] shadow-2xl">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold text-white">Book Now</h3>
              <span className="text-3xl font-black text-cyan-400">
                ${service.price}
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:outline-none focus:border-cyan-500 transition-all text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  required
                  className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:outline-none focus:border-cyan-500 transition-all text-white"
                />
              </div>

              <ul className="space-y-3 py-4">
                <li className="flex items-center gap-3 text-sm text-slate-300">
                  <FaCheckCircle className="text-cyan-500" /> Instant
                  confirmation
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-300">
                  <FaCheckCircle className="text-cyan-500" /> Professional
                  handlers
                </li>
              </ul>

              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-[#0f172a] font-black py-5 rounded-2xl transition-all shadow-[0_10px_30px_rgba(6,182,212,0.3)] hover:shadow-cyan-500/50 active:scale-95 flex items-center justify-center gap-2"
              >
                Confirm Booking
              </button>
            </form>

            <p className="text-center text-xs text-slate-500 mt-6">
              No hidden fees. Pay at the center.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetails;
