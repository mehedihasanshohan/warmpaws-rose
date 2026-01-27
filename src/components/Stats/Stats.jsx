import React from "react";
import CountUp from "react-countup";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Title from "../Title/Title";

const BackgroundShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[120px]" />
      <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] bg-cyan-500/15 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-10%] left-[20%] w-[450px] h-[450px] bg-blue-600/20 rounded-full blur-[130px]" />
      <div className="absolute bottom-[20%] right-[-5%] w-[300px] h-[300px] bg-pink-500/10 rounded-full blur-[90px]" />

      {/* Subtle Moving Geometric Shapes */}
      <motion.div
        animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/3 left-1/4 w-32 h-32 bg-indigo-500/10 rounded-2xl rotate-45 blur-[60px]"
      />
      <motion.div
        animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-teal-400/10 rounded-full blur-[70px]"
      />
    </div>
  );
};

const Stats = () => {
  const stats = [
    { label: "Contests Created", value: 1200, suffix: "+", color: "text-cyan-400" },
    { label: "Contests Completed", value: 950, suffix: "", color: "text-amber-400" },
    { label: "Active Participants", value: 156, suffix: "K+", color: "text-cyan-400" },
    { label: "Prize Pool", value: 50, suffix: "K+", prefix: "$", color: "text-amber-400" },
  ];

  return (
    <section className="relative bg-[#0b1120] py-24 px-6 overflow-hidden">
      <BackgroundShapes />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Title className="text-white">ContestVerse by the Numbers</Title>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mt-16 flex flex-wrap justify-around items-center gap-10
            rounded-[50px] border border-white/10 bg-white/2 p-10 md:p-20
            shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-2xl"
        >
          {/* Subtle Inner Highlight for Glass Realism */}
          <div className="absolute inset-0 rounded-[50px] bg-linear-to-br from-white/5 to-transparent pointer-events-none" />

          {stats.map((stat, index) => (
            <div key={index} className="relative text-center group min-w-40">
              <div className={`text-4xl md:text-6xl font-black ${stat.color} mb-3 flex items-center justify-center`}>
                {stat.prefix && <span className="mr-1">{stat.prefix}</span>}
                <CountUp
                  end={stat.value}
                  duration={3}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                />
                {stat.suffix && <span className="ml-1">{stat.suffix}</span>}
              </div>

              <p className="text-slate-400 text-xs md:text-sm font-bold uppercase tracking-[0.25em]
                group-hover:text-white transition-all duration-500">
                {stat.label}
              </p>

              {/* Minimalist Divider */}
              {index !== stats.length - 1 && (
                <div className="hidden lg:block h-12 w-px bg-white/5 absolute -right-5 top-1/2 -translate-y-1/2" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;