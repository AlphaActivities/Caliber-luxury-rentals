import SocialLinks from "../common/SocialLinks";
import { BRAND } from "../../config/site";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[var(--black-2)] text-white/90" style={{ scrollMarginTop: '100px' }}>
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex flex-col items-center -mt-4">
            <img src={BRAND.logo} alt={BRAND.name} className="h-40 w-40 rounded-full object-contain -mt-6" />
            <h3 className="text-2xl font-extrabold tracking-tight uv-underline -mt-4">{BRAND.name}</h3>
            <p className="mt-0 text-sm text-white/70 text-center">
              {BRAND.city} • 24/7 concierge & flexible delivery
            </p>
            <div className="mt-1">
              <SocialLinks size="lg" />
            </div>
          </div>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-semibold tracking-wide mb-3 text-white/80 underline">Navigate</h4>
            <ul className="space-y-2.5 text-base mt-4">
              <li><a className="hover:text-white" href="/#hero">Home</a></li>
              <li><a className="hover:text-white" href="/#fleet">Fleet</a></li>
              <li><a className="hover:text-white" href="/#faq">FAQ</a></li>
              <li><a className="hover:text-white" href="/#contact">Contact</a></li>
              <li><a className="hover:text-white" href="/blog">Blog</a></li>
            </ul>
          </div>
          <div className="-ml-4">
            <h4 className="text-sm font-semibold tracking-wide mb-6 text-white/80 underline">Contact</h4>
            <ul className="space-y-5 text-sm">
              <li className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-[var(--uv)] flex-shrink-0" />
                <a className="hover:text-white" href={`tel:${BRAND.phone.replace(/[^+\d]/g,"")}`}>{BRAND.phone}</a>
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-[var(--uv)] flex-shrink-0" />
                <a className="hover:text-white" href={`mailto:${BRAND.email}`}>
                  info@caliberluxury<br />rentals.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[var(--uv)] flex-shrink-0" />
                <span>Serving Austin & surrounding areas</span>
              </li>
            </ul>
          </div>
        </nav>

        <div id="trust-safety" className="md:col-span-1">
          <h4 className="text-sm font-semibold tracking-wide mb-3 text-white/90">Trust &amp; Safety</h4>
          <ul className="mt-3 space-y-2">
            <li className="footer-bullet">Insurance verified rentals, driver eligibility confirmed</li>
            <li className="footer-bullet">Secure payments, no hidden fees</li>
            <li className="footer-bullet">24/7 concierge delivery, Austin and surrounding areas</li>
          </ul>
          <form className="mt-4" onSubmit={(e) => { e.preventDefault(); const email = (e.target as HTMLFormElement).email.value; if(email) alert('Thank you for subscribing!'); }}>
            <label className="flex flex-col gap-2">
              <span className="text-sm text-white/70">Stay Updated</span>
              <div className="flex gap-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  className="flex-1 rounded-full bg-zinc-900 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[var(--uv)]/40"
                />
                <button
                  type="submit"
                  className="rounded-full bg-[var(--uv)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--uv)]/90 focus:outline-none focus:ring-2 focus:ring-[var(--uv)]/40"
                >
                  Submit
                </button>
              </div>
            </label>
          </form>
        </div>
      </div>
      <div className="footer-legal-bar">
        <div className="mx-auto max-w-7xl px-6 md:flex md:items-center md:justify-between">
          <nav className="flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-start">
            <a href="/terms" className="footer-legal hover:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-[var(--uv)]/40 rounded">Terms</a>
            <a href="/privacy" className="footer-legal hover:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-[var(--uv)]/40 rounded">Privacy</a>
            <a href="/rental-agreement" className="footer-legal hover:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-[var(--uv)]/40 rounded">Rental Agreement</a>
            <a href="/sitemap" className="footer-legal hover:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-[var(--uv)]/40 rounded">Sitemap</a>
          </nav>
          <p className="footer-legal mt-3 md:mt-0 text-center md:text-right">© 2025 {BRAND.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
