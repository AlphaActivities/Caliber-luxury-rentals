import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { BRAND } from "../config/site";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 md:hidden">
      <a
        href={`tel:${BRAND.phone.replace(/[^+\d]/g, "")}`}
        className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/40 hover:shadow-purple-500/60 transition-shadow"
        data-cta="call"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute inset-0 rounded-full bg-purple-600 animate-ping opacity-75"></span>
      </a>
    </div>
  );
}
