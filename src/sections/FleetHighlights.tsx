import { useEffect, useState, useRef } from "react";
import { FLEET_HIGHLIGHTS } from "../config/site";

const vehicleImages = [
  '/images/vehicles/IMG_2379.JPG',
  '/images/vehicles/IMG_2380.JPG',
  '/images/vehicles/IMG_2381.JPG',
  '/images/vehicles/IMG_2382.JPG',
  '/images/vehicles/IMG_2393.JPG',
  '/images/vehicles/IMG_2394.PNG',
  '/images/vehicles/IMG_2395.JPG',
  '/images/vehicles/IMG_2396.JPG'
];

export default function FleetHighlights() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const scrollPositionRef = useRef(0);

  useEffect(()=>{
    const els = document.querySelectorAll(".fade-in");
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting)(e.target as HTMLElement).classList.add("reveal"); });
    },{threshold:.2});
    els.forEach(el=>io.observe(el));
    return ()=>io.disconnect();
  },[]);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const speed = 0.5;

    const animate = () => {
      if (!isPaused && scrollContainer) {
        scrollPositionRef.current += speed;
        const maxScroll = scrollContainer.scrollWidth / 2;

        if (scrollPositionRef.current >= maxScroll) {
          scrollPositionRef.current = 0;
        }

        scrollContainer.scrollLeft = scrollPositionRef.current;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);
  const handleTouchStart = () => setIsPaused(true);
  const handleTouchEnd = () => setIsPaused(false);

  const allImages = [...vehicleImages, ...vehicleImages];

  return (
    <section id="fleet" className="uv-section uv-bg-c text-white relative" style={{ scrollMarginTop: '40px' }}>
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none z-10"></div>
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black to-transparent pointer-events-none z-10"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-20">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Our Highlight Picks</h2>
        <p className="mt-2 text-white/70">Exotics • Off Road • SUVs • Sedans</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FLEET_HIGHLIGHTS.map((item, i) => (
            <a key={i} href={`/fleet?type=${encodeURIComponent(item.label)}`} className="group block rounded-2xl overflow-hidden tile fade-in card p-3 md:p-4">
              <img
                src={item.src}
                alt={item.label}
                loading="lazy"
                decoding="async"
                width="1200"
                height="800"
                sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 90vw"
                className="img-aspect transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="pt-3 flex items-center justify-between">
                <span className="font-semibold">{item.label}</span>
                <svg className="h-5 w-5 opacity-70 group-hover:opacity-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4h2v10h8v2H7z"/></svg>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <button onClick={() => { window.scrollTo(0, 0); window.location.reload(); }} className="btn-pill btn-uv focus-ring" data-cta="fleet_view_all" aria-label="View all vehicles">View All Vehicles →</button>
        </div>
      </div>

      <div className="relative z-20 pb-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="p-4 md:p-6">
            <div
              ref={scrollRef}
              className="overflow-x-scroll overflow-y-hidden"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              <div className="flex gap-4 md:gap-6 items-center" style={{ padding: '20px 0' }}>
                {allImages.map((img, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 transition-all duration-300 hover:scale-105 rounded-lg hover:shadow-[0_0_42px_rgba(124,58,237,0.35)]"
                    style={{ margin: '20px 0' }}
                  >
                    <img
                      src={img}
                      alt={`Vehicle ${(idx % vehicleImages.length) + 1}`}
                      className="h-[120px] md:h-[160px] w-auto rounded-lg object-cover"
                      style={{
                        maxWidth: '240px',
                        minWidth: '120px'
                      }}
                      draggable="false"
                      onLoad={(e) => {
                        const imgElement = e.currentTarget;
                        const isPortrait = imgElement.naturalHeight > imgElement.naturalWidth;
                        if (isPortrait) {
                          imgElement.style.width = imgElement.style.height;
                          imgElement.style.maxWidth = imgElement.style.height;
                        }
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
