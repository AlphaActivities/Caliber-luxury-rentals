import { useEffect } from "react";
import { HERO_IMAGE } from "../config/site";

export default function Hero() {
  useEffect(()=>{
    const els = document.querySelectorAll(".fade-in");
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting) (e.target as HTMLElement).classList.add("reveal"); });
    }, { threshold: 0.2 });
    els.forEach(el=>io.observe(el));
    return ()=>io.disconnect();
  },[]);
  return (
    <section id="hero" className="relative isolate pt-16 sm:pt-20">
      <div className="absolute inset-0 -z-10">
        <img
          src={HERO_IMAGE}
          alt="Caliber Luxury Rentals hero vehicles in Austin"
          className="absolute inset-0 h-full w-full object-cover object-[65%_center] sm:object-center"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/95" />
        <div className="glass-shimmer absolute inset-0" />
      </div>
      <div className="max-w-7xl mx-auto px-6 h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] flex items-center">
        <div className="max-w-3xl fade-in">
          <h1 className="h1-clamp">
            <span style={{color: '#FFD700'}}>Austin's</span> <span className="uv-underline">Exotic & Luxury</span> <span style={{color: '#6C00FF'}}>Car Rentals</span>
          </h1>
          <p className="mt-4 text-white/90 max-w-2xl text-lg sm:text-xl font-semibold tracking-wide">
            Concierge delivery, transparent pricing, and vehicles that command attention.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="btn-pill btn-gold focus-ring" data-cta="book" aria-label="Book your exotic today">Book Your Exotic Today</a>
            <a href="#fleet" className="btn-pill btn-uv focus-ring" data-cta="fleet" aria-label="View our available fleet">Our Available Fleet</a>
          </div>
        </div>
      </div>
    </section>
  );
}
