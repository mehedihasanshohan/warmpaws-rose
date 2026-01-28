/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { User, MessageCircle, ShieldCheck, Mail, Send } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../../components/Title/Title";
import { motion } from "framer-motion";

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    if (data.captcha.trim().toLowerCase() !== "human") {
      toast.error("Captcha failed. Type 'human' correctly.");
      return;
    }

    const loadingToast = toast.loading("Sending message...");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Message sent successfully!", { id: loadingToast });
      reset();
    } catch (error) {
      toast.error("Failed to send message.", { id: loadingToast });
    }
  };

  return (
    <section className="relative py-20 bg-[#0f172a] text-white px-6 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 relative z-10">

        {/* Left Side: Map Container */}
        <div
          className="bg-white/3 backdrop-blur-xl rounded-[30px] p-8 border border-white/10 shadow-2xl"
          data-aos="zoom-in-right"
          data-aos-duration="1200"
        >
          <Title className="mb-8">Find Our Location</Title>
          <div className="relative group rounded-2xl overflow-hidden border border-white/5 shadow-inner">
            <iframe
              title="Google Map"
              className="w-full h-[450px] grayscale invert opacity-80 group-hover:grayscale-0 group-hover:invert-0 group-hover:opacity-100 transition-all duration-700"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902442430139!2d90.39023021543163!3d23.75086809467611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bd5539523d%3A0x66f6a7d834928e!2sDhaka!5e0!3m2!1sen!2sbd!4v1625000000000!5m2!1sen!2sbd"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <div className="mt-6 flex gap-4 text-slate-400">
             <p className="text-sm italic">Note: Drag the map to explore our winter rescue centers.</p>
          </div>
        </div>

        {/* Right Side: Glassmorphic Form */}
        <div
          className="bg-white/3 backdrop-blur-xl rounded-[30px] p-8 md:p-10 border border-white/10 shadow-2xl"
          data-aos="zoom-in-left"
          data-aos-duration="1200"
        >
          <Title className="mb-8 text-cyan-400">Send Us Message</Title>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Name Input */}
            <div className="relative group">
              <User className="absolute left-4 top-4 text-cyan-500/60 group-focus-within:text-cyan-400 transition-colors" size={18} />
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Full Name"
                className="w-full pl-12 p-4 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500/50 focus:outline-none focus:bg-white/10 transition-all placeholder:text-slate-500"
              />
              {errors.name && <span className="text-xs text-red-400 mt-1">Name is required</span>}
            </div>

            {/* Email Input */}
            <div className="relative group">
              <Mail className="absolute left-4 top-4 text-cyan-500/60 group-focus-within:text-cyan-400 transition-colors" size={18} />
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Email Address"
                className="w-full pl-12 p-4 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500/50 focus:outline-none focus:bg-white/10 transition-all placeholder:text-slate-500"
              />
            </div>

            {/* Captcha Input */}
            <div className="relative group">
              <ShieldCheck className="absolute left-4 top-4 text-cyan-500/60 group-focus-within:text-cyan-400 transition-colors" size={18} />
              <input
                {...register("captcha", { required: true })}
                type="text"
                placeholder="Verify: Type 'human'"
                className="w-full pl-12 p-4 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500/50 focus:outline-none focus:bg-white/10 transition-all placeholder:text-slate-500 font-medium"
              />
            </div>

            {/* Message Textarea */}
            <div className="relative group">
              <MessageCircle className="absolute left-4 top-4 text-cyan-500/60 group-focus-within:text-cyan-400 transition-colors" size={18} />
              <textarea
                {...register("message", { required: true })}
                placeholder="How can we help your pet?"
                rows="4"
                className="w-full pl-12 p-4 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500/50 focus:outline-none focus:bg-white/10 transition-all placeholder:text-slate-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full group relative flex items-center justify-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}