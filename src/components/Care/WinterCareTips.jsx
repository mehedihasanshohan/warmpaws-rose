import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Title from "../Title/Title";

const WinterCareTips = () => {
  const tips = [
    { id: 1, title: "Keep Them Warm", description: "Ensure your pets have cozy blankets or sweaters when temperatures drop.", image: "https://i.ibb.co.com/MkGDyGnk/pets3.jpg" },
    { id: 2, title: "Protect Their Paws", description: "Use pet-safe paw balm or little boots when walking outside in snow.", image: "https://i.ibb.co.com/b5BCcmfL/pets4.jpg" },
    { id: 3, title: "Avoid Cold Baths", description: "Limit bathing in winter. Use warm water and dry them thoroughly.", image: "https://i.ibb.co.com/VpqTK08f/pets5.jpg" },
    { id: 4, title: "Provide Warm Bedding", description: "Make sure your pet’s bed is away from drafts on a warm surface.", image: "https://i.ibb.co.com/zzcJkYQ/pets6.jpg" },
    { id: 5, title: "Watch for Cold Symptoms", description: "Look out for shivering or lethargy. Consult a vet if they seem unwell.", image: "https://i.ibb.co.com/xtynybyZ/pets7.jpg" },
    { id: 6, title: "Fresh Water Access", description: "Keep water bowls full and check regularly to ensure they aren't frozen.", image: "https://i.ibb.co.com/673h1HFD/pets8.jpg" },
  ];

  return (
    <section className="relative bg-[#0f172a] py-24 px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Title className="text-white">Winter Care Tips for Pets</Title>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {tips.map((tip, index) => (
            <motion.div
              key={tip.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/3 backdrop-blur-md border border-white/10 rounded-[35px] overflow-hidden shadow-2xl transition-all duration-500"
            >
              {/* Image with Overlay */}
              <div className="h-52 w-full overflow-hidden relative">
                <img
                  src={tip.image}
                  alt={tip.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0f172a] via-transparent to-transparent opacity-80" />

                {/* Number Badge */}
                <div className="absolute top-4 left-4 bg-cyan-500/20 backdrop-blur-md border border-white/20 text-cyan-400 text-xs font-bold px-3 py-1 rounded-full">
                  Tip #0{index + 1}
                </div>
              </div>

              {/* Content */}
              <div className="p-7 space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {tip.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {tip.description}
                </p>

                {/* Interactive Link */}
                <div className="pt-4">
                  <span className="text-xs font-black uppercase tracking-widest text-cyan-500/60 group-hover:text-cyan-400 cursor-pointer transition-all">
                    Read More +
                  </span>
                </div>
              </div>

              {/* Glass Reflection Highlight */}
              <div className="absolute inset-0 rounded-[35px] bg-linear-to-tr from-white/3 to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WinterCareTips;