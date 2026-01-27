/* eslint-disable no-unused-vars */
import React from "react";
import Title from "../Title/Title";
import { motion } from "framer-motion";

const ExpertVets = () => {
  const vets = [
    {
      id: 1,
      name: "Dr. Emily Carter",
      specialty: "Veterinary Surgeon",
      description: "Over 10 years of experience in cold-related pet surgeries and care.",
      image: "https://i.ibb.co.com/xtXg8TNQ/vets1.jpg",
    },
    {
      id: 2,
      name: "Dr. James Walker",
      specialty: "Animal Nutritionist",
      description: "Specializes in winter diets to keep pets active and healthy.",
      image: "https://i.ibb.co.com/3yS4DJ12/vets2.jpg",
    },
    {
      id: 3,
      name: "Dr. Sofia Rahman",
      specialty: "Pet Wellness Expert",
      description: "Expert in grooming and protective wellness for harsh winters.",
      image: "https://i.ibb.co.com/tPb9qVxh/vets3.jpg",
    },
    {
      id: 4,
      name: "Dr. Liam Thompson",
      specialty: "Emergency Specialist",
      description: "Educates pet owners on frostbite prevention and emergency care.",
      image: "https://i.ibb.co.com/4DFK5tr/vets4.jpg",
    },
  ];

  return (
    <section className="relative py-24 bg-[#0f172a] overflow-hidden">
      {/* Background Subtle Blobs for Continuity */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Title className="text-white">Meet Our Expert Vets</Title>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {vets.map((vet) => (
            <motion.div
              whileHover={{ y: -10 }}
              data-aos="fade-up"
              key={vet.id}
              className="group relative bg-white/3 backdrop-blur-xl border border-white/10 rounded-[30px] overflow-hidden shadow-2xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={vet.image}
                  alt={vet.name}
                  className="h-full w-full object-cover grayscale-30 group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0f172a] via-transparent to-transparent opacity-60" />
              </div>

              {/* Content Box */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {vet.name}
                </h3>
                <p className="text-cyan-400/80 text-xs font-bold uppercase tracking-widest mt-1 mb-3">
                  {vet.specialty}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                  {vet.description}
                </p>

                {/* Minimalist Contact Button or Icon (Optional) */}
                <div className="mt-5 pt-5 border-t border-white/5">
                   <button className="text-xs font-bold text-white/40 group-hover:text-white transition-colors uppercase tracking-tighter">
                     View Profile →
                   </button>
                </div>
              </div>

              {/* Glass Reflection Highlight */}
              <div className="absolute inset-0 rounded-[30px] bg-linear-to-tr from-white/2 to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertVets;