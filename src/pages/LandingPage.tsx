import Navbar from "../components/layout/Navbar";
import Hero from "../components/Hero";
import StickyCTA from "../components/StickyCTA";
import FleetHighlights from "../sections/FleetHighlights";
import Testimonials from "../sections/Testimonials";
import FAQ from "../sections/FAQ";
import Footer from "../components/layout/Footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <main id="main" className="bg-[var(--black)] text-white">
        <section id="intro" className="uv-section uv-bg-a uv-pad text-white relative">
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none z-10"></div>
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-10"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-20">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Why Choose <span className="uv-underline">Caliber Luxury Rentals</span> in Austin, Texas?</h2>
            <p className="mt-4 max-w-3xl text-white/80">
              We own what we rent. That means immaculate vehicles, faster handoffs, and transparent pricing, no third-party excuses.
            </p>
            <div className="mt-6 text-center md:text-left">
              <a id="reserve" href="#contact" className="inline-flex items-center rounded-full btn-gold px-5 py-3 font-semibold">Get in touch Now</a>
            </div>
          </div>
        </section>

        <FleetHighlights />
        <Testimonials />
        <FAQ />

        <section id="contact" className="uv-section uv-bg-b uv-pad text-white relative" style={{ scrollMarginTop: '40px' }}>
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none z-10"></div>
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0E0E10] to-transparent pointer-events-none z-10"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-20">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Questions? Fill Out the Form Below</h2>
            <p className="mt-2 text-white/70">We'll contact you as soon as possible.</p>

            <form
              id="caliber-contact"
              name="caliber-contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="mt-6 rounded-2xl border border-purple-700/30 bg-black/40 p-6 backdrop-blur-md"
            >
              <input type="hidden" name="form-name" value="caliber-contact" />
              <input type="hidden" name="utm_source" />
              <input type="hidden" name="utm_medium" />
              <input type="hidden" name="utm_campaign" />
              <input type="hidden" name="utm_term" />
              <input type="hidden" name="utm_content" />
              <p className="hidden">
                <label>Don't fill this out: <input name="bot-field" /></label>
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className="text-sm text-zinc-300">Full Name *</span>
                  <input required name="name" aria-required="true" className="focus-ring rounded-full bg-zinc-900 px-3 py-2 text-white" />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-sm text-zinc-300">Phone *</span>
                  <input required name="phone" inputMode="tel" aria-required="true" className="focus-ring rounded-full bg-zinc-900 px-3 py-2 text-white" />
                </label>
                <label className="flex flex-col gap-2 sm:col-span-2">
                  <span className="text-sm text-zinc-300">Email</span>
                  <input name="email" inputMode="email" className="focus-ring rounded-full bg-zinc-900 px-3 py-2 text-white" />
                </label>
                <label className="flex flex-col gap-2 sm:col-span-2">
                  <span className="text-sm text-zinc-300">Message</span>
                  <textarea name="message" rows={5} className="focus-ring rounded-2xl bg-zinc-900 px-3 py-2 text-white" />
                </label>
              </div>

              <div className="mt-5 flex items-center justify-center sm:justify-start gap-3">
                <button type="submit" className="btn-pill btn-uv focus-ring" aria-label="Send request">Send Request</button>
                <a href="tel:+15129981047" className="btn-pill btn-gold focus-ring" aria-label="Call now">Call Now</a>
              </div>

              <p className="mt-3 text-xs text-zinc-400">
                We never share your information. Your privacy is protected and your details are only used to provide you with exceptional service.
              </p>
            </form>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
