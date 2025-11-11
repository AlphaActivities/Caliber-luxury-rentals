import { useEffect, useState } from "react";
import { BRAND } from "../../config/site";

export default function Navbar(){
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "fleet", "faq", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [open,setOpen]=useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="uv-pill nav-glow flex items-center justify-between px-3 sm:px-4 py-2">
          <a href="/" className="flex items-center gap-3 flex-shrink-0">
            <img src={BRAND.logo} alt={BRAND.name} className="h-14 w-14 rounded-full object-contain" />
            <span className="font-extrabold tracking-tight uv-underline">{BRAND.name}</span>
          </a>
          <nav aria-label="Primary" className="hidden md:flex items-center gap-3 text-sm flex-1 justify-center">
            <a
              className={`px-4 py-2 rounded-full transition-all focus-ring ${
                activeSection === "hero"
                  ? "bg-purple-600 text-white font-semibold"
                  : "text-white hover:text-purple-300"
              }`}
              href="/#hero"
              aria-label="Jump to Home"
              aria-current={activeSection === "hero" ? "page" : undefined}
            >
              Home
            </a>
            <a
              className={`px-4 py-2 rounded-full transition-all focus-ring ${
                activeSection === "fleet"
                  ? "bg-purple-600 text-white font-semibold"
                  : "text-white hover:text-purple-300"
              }`}
              href="/#fleet"
              aria-label="Jump to Fleet"
              aria-current={activeSection === "fleet" ? "page" : undefined}
            >
              Fleet
            </a>
            <a
              className={`px-4 py-2 rounded-full transition-all focus-ring ${
                activeSection === "faq"
                  ? "bg-purple-600 text-white font-semibold"
                  : "text-white hover:text-purple-300"
              }`}
              href="/#faq"
              aria-label="Jump to FAQ"
              aria-current={activeSection === "faq" ? "page" : undefined}
            >
              FAQ
            </a>
            <a
              className={`px-4 py-2 rounded-full transition-all focus-ring ${
                activeSection === "contact"
                  ? "bg-purple-600 text-white font-semibold"
                  : "text-white hover:text-purple-300"
              }`}
              href="/#contact"
              aria-label="Jump to Contact"
              aria-current={activeSection === "contact" ? "page" : undefined}
            >
              Contact
            </a>
            <a
              className="px-4 py-2 rounded-full transition-all focus-ring text-white hover:text-purple-300"
              href="/blog"
              aria-label="Visit Blog"
            >
              Blog
            </a>
          </nav>
          <div className="hidden md:block flex-shrink-0">
            <a className="inline-flex items-center px-4 py-2 rounded-full btn-gold font-semibold focus-ring" href={`tel:${BRAND.phone.replace(/[^+\d]/g,"")}`} aria-label="Reserve by phone">Reserve</a>
          </div>
          <button onClick={()=>setOpen(!open)} onKeyDown={(e)=>{ if(e.key==='Escape' && open) setOpen(false); }} className="md:hidden inline-flex items-center justify-center w-10 h-10 text-purple-400 flex-shrink-0 focus-ring">
            <span className="sr-only">Menu</span>
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden mt-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="rounded-2xl bg-black/55 border border-purple-500/40 backdrop-blur-sm shadow-[0_0_42px_rgba(108,0,255,.35)] px-4 py-3 flex flex-col gap-2 text-sm">
              <a
                onClick={()=>setOpen(false)}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeSection === "hero"
                    ? "bg-purple-600 text-white font-semibold"
                    : "text-white"
                }`}
                href="/#hero"
              >
                Home
              </a>
              <a
                onClick={()=>setOpen(false)}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeSection === "fleet"
                    ? "bg-purple-600 text-white font-semibold"
                    : "text-white"
                }`}
                href="/#fleet"
              >
                Fleet
              </a>
              <a
                onClick={()=>setOpen(false)}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeSection === "faq"
                    ? "bg-purple-600 text-white font-semibold"
                    : "text-white"
                }`}
                href="/#faq"
              >
                FAQ
              </a>
              <a
                onClick={()=>setOpen(false)}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeSection === "contact"
                    ? "bg-purple-600 text-white font-semibold"
                    : "text-white"
                }`}
                href="/#contact"
              >
                Contact
              </a>
              <a
                onClick={()=>setOpen(false)}
                className="px-4 py-2 rounded-full transition-all text-white"
                href="/blog"
              >
                Blog
              </a>
              <a onClick={()=>setOpen(false)} className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-full btn-gold font-semibold focus-ring" href={`tel:${BRAND.phone.replace(/[^+\d]/g,"")}`} aria-label="Reserve by phone">Reserve</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
