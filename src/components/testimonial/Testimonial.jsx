import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Title from "../Title/Title";

const testimonials = [
  {
    id: 1,
    name: "Juliana",
    role: "Pet Doctor",
    img: "https://i.ibb.co.com/qYFWWm6t/t1.jpg",
    review:
      "WarmPaws helped my clients prepare their pets for winter with amazing care services. Truly a lifesaver during the cold season!",
  },
  {
    id: 2,
    name: "Angelina",
    role: "Pet Advisor",
    img: "https://i.ibb.co.com/cS3ntjwx/t2.jpg",
    review:
      "I love how easy it is to find trusted services for pets. The winter grooming options are excellent!",
  },
  {
    id: 3,
    name: "Mr. Harpit",
    role: "Pet Analyser",
    img: "https://i.ibb.co.com/kg3PNDtX/t3.jpg",
    review:
      "As a pet owner, WarmPaws made me confident that my pets are safe and comfortable this winter. Highly recommended!",
  },
];

const Testimonial = () => {
  return (
    <section className="relative py-24 bg-[#0f172a] overflow-hidden">
      {/* Dynamic Background Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[130px] -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[130px] translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
           <Title className="text-white">What Our Customers Say</Title>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(({ id, name, role, img, review }, index) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/3 backdrop-blur-xl border border-white/10 p-8 rounded-[35px] shadow-2xl transition-all duration-300 flex flex-col items-start text-left"
            >
              {/* Quote Icon with Soft Glow */}
              <div className="mb-6 bg-cyan-500/10 p-4 rounded-2xl text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                <FaQuoteLeft size={20} />
              </div>

              <p className="text-slate-300 mb-8 leading-relaxed italic grow">
                "{review}"
              </p>

              <div className="flex items-center gap-4 border-t border-white/5 pt-6 w-full">
                <div className="relative">
                  <img
                    src={img}
                    alt={name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-cyan-500/30 group-hover:border-cyan-400 transition-colors"
                  />
                  <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-sm group-hover:blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div>
                  <h4 className="font-bold text-white text-lg tracking-tight group-hover:text-cyan-400 transition-colors">
                    {name}
                  </h4>
                  <p className="text-cyan-400/70 text-xs font-bold uppercase tracking-widest">
                    {role}
                  </p>
                </div>
              </div>

              {/* Glass Reflection Highlight */}
              <div className="absolute inset-0 rounded-[35px] bg-linear-to-tr from-white/2 to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;