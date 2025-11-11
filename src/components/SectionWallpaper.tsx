import { ReactNode } from "react";
import "../styles/uv-wallpapers.css";

interface SectionWallpaperProps {
  image: string;
  children: ReactNode;
  variant?: 'dark' | 'grain' | 'grid';
  fadeTop?: boolean;
}

export default function SectionWallpaper({
  image,
  children,
  variant = "dark",
  fadeTop = true
}: SectionWallpaperProps) {
  return (
    <section
      className={`uv-bg-full uv-gradient-overlay relative ${fadeTop ? 'uv-fade-top' : ''}`}
      style={{
        backgroundImage: `url("${image}")`,
      }}
    >
      <div className="section-inner max-w-7xl mx-auto px-6 py-20">
        {children}
      </div>
    </section>
  );
}
