import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ImageMaskRevealProps {
  src: string;
  alt: string;
  className?: string;
}

export function ImageMaskReveal({ src, alt, className = '' }: ImageMaskRevealProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const img = imgRef.current;
    if (!wrapper || !img) return;

    // Clip-path mask reveal: from inset(100% 0% 0% 0%) to inset(0%)
    gsap.fromTo(
      wrapper,
      { clipPath: 'inset(100% 0% 0% 0%)' },
      {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 1.4,
        ease: 'power4.inOut',
        scrollTrigger: {
          trigger: wrapper,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );

    // While revealing, image simultaneously scales from 1.2 to 1 (parallax zoom-out)
    gsap.fromTo(
      img,
      { scale: 1.25 },
      {
        scale: 1,
        duration: 1.6,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: wrapper,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{
        clipPath: 'inset(100% 0% 0% 0%)',
        overflow: 'hidden',
        width: '100%',
        height: '100%',
      }}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={className}
        style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.25)' }}
      />
    </div>
  );
}
