import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Pause } from "lucide-react";

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    { src: "/hero-bg1.jpg", alt: "Main Perspective 01" },
    { src: "/hero-bg2.jpg", alt: "Main Perspective 02" },
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 每5秒自动切换
    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center bg-slate-100 overflow-hidden pt-20">
      <div className="w-full h-full relative">
        {/* Background Image with Slate Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              src={slides[activeSlide].src}
              className="w-full h-full object-cover grayscale-[20%] brightness-75"
              alt={slides[activeSlide].alt}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 via-slate-900/20 to-slate-900/60" />
        </div>
        
        {/* Framed Content Pattern */}
        <div className="relative z-10 w-full h-full flex items-center justify-center p-12">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="w-full h-full border-2 border-white/50 relative flex items-center justify-center"
          >
            <div className="absolute bottom-12 left-12 text-white drop-shadow-lg max-w-[80%]">
              <p className="text-[12px] uppercase tracking-[0.3em] font-semibold opacity-80 mb-4">Main Perspective / 0{activeSlide + 1}</p>
              <div className="space-y-4 max-w-4xl">
                <h1 className="text-5xl md:text-7xl font-light tracking-tight">雪域阳光方舟</h1>
                <h2 className="text-xl md:text-2xl font-light tracking-tight text-white/90 leading-relaxed">
                  高海拔极端环境乡村医疗服务基站气候适应性建筑设计与建造研究
                </h2>
              </div>
              <div className="mt-8 space-y-2 opacity-80">
                <p className="text-sm font-medium tracking-wide">学生：01121132阙锦钰</p>
                <p className="text-sm font-medium tracking-wide">指导老师：张宏  张弦</p>
                <p className="text-sm font-medium tracking-wide">毕设时间：2026年2月-5月</p>
              </div>
            </div>

            {/* Accent Elements */}
            <div className="absolute top-12 right-12 flex flex-col items-end gap-4">
               <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">Nidong, Nagqu, Tibet</span>
               <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">4,697 M Above Sea Level</span>
               <button
                 onClick={() => setIsPlaying(!isPlaying)}
                 className="w-10 h-10 bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-colors"
               >
                 {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
               </button>
            </div>

            {/* Slider Indicators */}
            <div className="absolute bottom-12 right-12 flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${index === activeSlide ? "bg-white w-6" : "bg-white/50 hover:bg-white/80"}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}