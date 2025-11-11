
type Size = "sm" | "md" | "lg";
const sizeMap: Record<Size, string> = { sm: "h-5 w-5", md: "h-6 w-6", lg: "h-7 w-7" };

export default function SocialLinks({ size = "md", className = "" }: { size?: Size; className?: string }) {
  const s = sizeMap[size];
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <a aria-label="Instagram" href="https://www.instagram.com/caliberluxuryrentals/" target="_blank" rel="noopener" className="opacity-90 hover:opacity-100 transition">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`${s} fill-current text-[var(--gold)]`}><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.2A2.8 2.8 0 1 0 12 14.8 2.8 2.8 0 0 0 12 9.2Zm5.35-.85a.95.95 0 1 1 0 1.9.95.95 0 0 1 0-1.9Z"/></svg>
      </a>
      <a aria-label="Facebook" href="https://www.facebook.com/61578069205652" target="_blank" rel="noopener" className="opacity-90 hover:opacity-100 transition">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`${s} fill-current text-[var(--gold)]`}><path d="M22 12.06C22 6.53 17.52 2.06 12 2.06S2 6.53 2 12.06c0 4.99 3.66 9.13 8.44 9.94v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.77l-.44 2.91h-2.33v7.03C18.34 21.19 22 17.05 22 12.06Z"/></svg>
      </a>
      <a aria-label="Yelp" href="https://www.yelp.com/biz/caliber-luxury-rentals-austin" target="_blank" rel="noopener" className="opacity-90 hover:opacity-100 transition">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`${s} fill-current text-[var(--gold)]`}><path d="M10.6 2.1c.54-1.21 2.35-1.2 2.86.02l.85 2.04c.37.89-.12 1.92-1.05 2.18l-1.3.37c-.98.28-1.97-.48-1.97-1.5 0-.18.04-.37.11-.54l1.5-3.57ZM20.7 9.5c1.27.2 1.67 1.87.64 2.7l-1.7 1.37c-.75.6-1.86.4-2.35-.44l-.53-.92c-.48-.84-.03-1.9.9-2.17l2.99-.9ZM7.05 9.21c.91-.26 1.85.33 2.03 1.26l.27 1.35c.2 1.01-.63 1.91-1.65 1.78l-3.12-.41c-1.29-.17-1.77-1.77-.79-2.62l.98-.86c.38-.33.84-.57 1.33-.7l.95-.26ZM16.62 15.8c.71-.73 1.95-.6 2.48.26l1.04 1.66c.68 1.08-.25 2.46-1.52 2.22l-3.11-.59c-1.02-.19-1.54-1.36-.99-2.26l2.1-3.29ZM8.7 14.87l2.61-.86c.98-.32 2.02.31 2.18 1.33l.44 2.71c.21 1.27-1.17 2.17-2.24 1.45l-2.23-1.51c-.85-.57-.88-1.82-.06-2.42l.3-.2Z"/></svg>
      </a>
    </div>
  );
}
