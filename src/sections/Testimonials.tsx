import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const REVIEWS = [
  {
    source: "Google",
    author: "Omar Rodriguez",
    rating: 5,
    date: "3 months ago",
    text: "Renting from Omar at Caliber Luxury Rentals was an awesome experience! I had the opportunity to rent twice with them at two different occasions! Both times were amazing and super simple and not to mention the vehicles were amazing and super super clean! I rented the Audi R8 then the Ferrari 488 Spyder — both were awesome to drive and major head turners! I will be definitely renting from them again in the future! Thank you Caliber and Omar for an epic experience and can't wait to do it again!",
  },
  {
    source: "Google",
    author: "Javier Torres",
    rating: 5,
    date: "3 weeks ago",
    text: "I couldn't be happier with my experience! The car was in perfect condition — clean, luxurious, and exactly what I was looking for. The team treated me with the highest level of professionalism and made the whole process smooth and enjoyable from start to finish. Their customer service truly stands out. I'll definitely be renting from them again!",
  },
  {
    source: "Google",
    author: "Anthony Lou",
    rating: 5,
    date: "1 month ago",
    text: "I had an absolutely seamless experience with Caliber Luxury Rentals. Omar and his team made the entire process effortless from start to finish — communication was clear, prompt, and professional. The highlight was getting behind the wheel of one of the last naturally aspirated Ferraris ever made. The car was not only gorgeous but in immaculate condition, making the drive an unforgettable experience. Omar and his team went above and beyond to ensure everything was smooth, and their attention to detail really stood out. If you're looking for true luxury, performance, and first-class service, I can't recommend Caliber Luxury Rentals enough.",
  },
  {
    source: "Google",
    author: "Joel Mitchell",
    rating: 5,
    date: "a week ago",
    text: "Had an amazing experience from pick up to drop off. I was looking to rent a few luxury vehicles before purchasing one so I could nail down what i really wanted and the team at Caliber made that really easy. They were accommodating and always attentive with quick responses. I'll happily refer them to others and will rent again when I get the itch to try something new.",
  },
];

function GoldStars({ n }: { n: number }) {
  return (
    <div className="inline-flex items-center space-x-1" aria-hidden>
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 .587l3.668 7.431L23 9.75l-5.5 5.36L19.334 24 12 19.897 4.666 24 6.5 15.11 1 9.75l7.332-1.732z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToPrevious = () => {
    setIsPaused(true);
    setIsExpanded(false);
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const goToNext = () => {
    setIsPaused(true);
    setIsExpanded(false);
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const handleReviewClick = () => {
    setIsPaused(true);
  };

  const toggleExpanded = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  const currentReview = REVIEWS[currentIndex];
  const isLongReview = currentReview.text.length > 400;

  return (
    <section id="testimonials" className="uv-section uv-bg-b uv-pad text-white relative">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black pointer-events-none z-10"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-0">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center">Customer Testimonials</h2>

        <div className="mt-12 max-w-3xl mx-auto">
          <article
            className="bg-black/40 border border-white/10 rounded-2xl p-6 md:p-8 md:min-h-[420px] flex flex-col justify-between cursor-pointer transition-all hover:border-white/20"
            onClick={handleReviewClick}
          >
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="flex flex-col gap-2">
                  <div className="inline-flex items-center gap-2 bg-white rounded-md px-3 py-1.5 w-fit">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <span className="text-sm font-semibold text-gray-800">Google</span>
                  </div>
                  <div className="font-semibold text-white text-lg">{currentReview.author}</div>
                </div>
                <div className="flex items-center space-x-2">
                  <GoldStars n={currentReview.rating} />
                </div>
              </div>
              <div className="relative">
                <p className={`text-gray-200 leading-relaxed text-base md:text-lg transition-all duration-300 ${
                  isExpanded ? '' : 'md:line-clamp-none line-clamp-[10]'
                }`}>
                  {currentReview.text}
                </p>
                {isLongReview && (
                  <button
                    onClick={toggleExpanded}
                    className="mt-3 md:hidden px-4 py-1.5 bg-purple-600 hover:bg-purple-700 rounded-full text-sm font-medium text-white transition-colors shadow-lg shadow-purple-500/25"
                  >
                    {isExpanded ? 'Read Less' : 'Read More'}
                  </button>
                )}
              </div>
            </div>
            <div className="text-sm text-gray-400 mt-4">{currentReview.date}</div>
          </article>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goToPrevious}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setIsPaused(true);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentIndex
                      ? 'w-8 bg-yellow-400'
                      : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
