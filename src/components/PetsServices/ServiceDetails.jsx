import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FaStar } from 'react-icons/fa';


const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "" });

  useEffect(() => {
    fetch("/data/petsData.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.serviceId === parseInt(id));
        setService(found);
      })
      .catch((err) => console.error("Error loading service:", err));
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(" Service booked successfully!");
    setFormData({ name: "", email: "" });
  };

  if (!service) return <p className="text-center mt-10 text-gray-600">Loading...</p>;

  return (
    <div className="bg-blue-50 min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        {service.image && (
          <img
            src={service.image}
            alt={service.serviceName}
            className="w-full h-64 object-cover rounded-xl mb-6"
          />
        )}
        <h2 className="text-3xl font-bold text-blue-700 mb-4">{service.serviceName}</h2>

        <p className="text-gray-700 mb-2">
          <span className="font-semibold text-blue-600">Provider:</span> {service.providerName}
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold text-blue-600">Email:</span> {service.providerEmail}
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold text-blue-600">Price:</span> ${service.price}
        </p>
        <div className="flex gap-2">
          <p className="text-gray-700 mb-2">
          <span className="font-semibold text-blue-600">Rating:</span> {service.rating}
          </p>
          <FaStar className="mt-1 text-yellow-400"></FaStar>
        </div>
        <p className="text-gray-700 mb-4">
          <span className="font-semibold text-blue-600">Description:</span> {service.description}
        </p>

        {/* Book Service Form */}
        <div className="mt-8 border-t pt-6">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Book Service</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-600 transition-all"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
