import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/effect-coverflow';
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import Title from "../Title/Title";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading reviews:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-20 text-white font-bold">Loading Reviews...</div>;

  return (
    // Background matched with Stats and ExpertVets
    <div className="bg-[#0f172a] py-24 px-4 md:px-0 relative overflow-hidden">

      {/* Background Shapes for Glass Effect */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10 text-white">
            <Title>What Our Pet Owners Say</Title>
        </div>

        <Swiper
          loop={true}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Autoplay, Pagination]}
          className="pb-16 pt-5"
        >
          {reviews.map((item) => (
            <SwiperSlide key={item.id} className="h-auto">
              {/* Glassmorphic Card */}
              <div className="bg-white/3 backdrop-blur-xl border border-white/10 shadow-2xl rounded-[35px] p-8 flex flex-col h-80 transition-all duration-500 hover:border-cyan-500/30">

                {/* Quote Mark */}
                <div className="text-5xl text-cyan-500/20 font-serif leading-none h-6">“</div>

                <p className="italic text-slate-300 grow mb-6 line-clamp-5 leading-relaxed relative z-10 pt-2">
                  {item.review}
                </p>

                {/* Profile Section */}
                <div className="flex items-center gap-4 border-t border-white/5 pt-5 mt-auto">
                  <div className="avatar">
                    <div className="w-12 h-12 rounded-full ring ring-cyan-500/40 ring-offset-[#1e293b] ring-offset-2 overflow-hidden">
                      <img src={item.user_photoURL} alt={item.userName} className="object-cover h-full w-full" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-white tracking-wide">{item.userName}</h3>
                    <div className="flex text-amber-400 text-xs mt-1">
                      {"★".repeat(Math.round(item.ratings))}
                      <span className="text-slate-500 ml-2">({item.ratings})</span>
                    </div>
                  </div>
                </div>

                {/* Glass Reflection Overlay */}
                <div className="absolute inset-0 rounded-[35px] bg-linear-to-tr from-white/2 to-transparent pointer-events-none" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;