import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Juliana",
    role: "Pet Doctor",
    img: "https://i.postimg.cc/63dKXfXk/pet-doctor.jpg",
    review:
      "WarmPaws helped my clients prepare their pets for winter with amazing care services. Truly a lifesaver during the cold season!",
  },
  {
    id: 2,
    name: "John Doe",
    role: "Pet Advisor",
    img: "https://i.postimg.cc/FHz8kGZL/pet-advisor.jpg",
    review:
      "I love how easy it is to find trusted services for pets. The winter grooming options are excellent!",
  },
  {
    id: 3,
    name: "Angelina",
    role: "Pet Analyser",
    img: "https://i.postimg.cc/6p4Kv0jR/pet-analyser.jpg",
    review:
      "As a pet owner, WarmPaws made me confident that my pets are safe and comfortable this winter. Highly recommended!",
  },
];

const Testimonial = () => {

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2
          className="text-3xl md:text-4xl font-bold mb-12"
          data-aos="fade-up"
        >
          What <span className="text-amber-500">Our Customers</span> Are Saying
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {testimonials.map(({ id, name, role, img, review }) => (
            <div
              key={id}
              className="bg-white p-6 shadow-lg rounded-xl border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <p className="text-gray-600 mb-6 leading-relaxed">{review}</p>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={img}
                    alt={name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-amber-500"
                  />
                  <span className="absolute -bottom-1 -right-1 bg-amber-500 text-white p-1 rounded-full text-xs">
                    <FaQuoteLeft />
                  </span>
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-gray-800">{name}</h4>
                  <p className="text-gray-500 text-sm">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
