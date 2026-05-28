import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface EntranceAnimationProps {
  onComplete: () => void;
  onExiting: () => void;
}

export function EntranceAnimation({ onComplete, onExiting }: EntranceAnimationProps) {
  const [isExiting, setIsExiting] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isHoveredRef = useRef(false);

  const handleVideoEnded = () => {
    setTimeout(() => {
      setIsExiting(true);
      onExiting();
      setTimeout(onComplete, 1000); // Wait for slide-up transition
    }, 500);
  };

  const handleSkip = () => {
    setIsExiting(true);
    onExiting();
    setTimeout(onComplete, 1000);
  };

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const video = e.currentTarget;
    if (video.duration && buttonRef.current) {
      const p = (video.currentTime / video.duration) * 100;
      const h = isHoveredRef.current;
      buttonRef.current.style.background = `linear-gradient(90deg, rgba(255,255,255,${h ? 0.4 : 0.25}) ${p}%, rgba(255,255,255,${h ? 0.25 : 0.1}) ${p}%)`;
    }
  };

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
    if (buttonRef.current) {
      buttonRef.current.style.color = 'rgba(255, 255, 255, 1)';
    }
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    if (buttonRef.current) {
      buttonRef.current.style.color = 'rgba(255, 255, 255, 0.8)';
    }
  };

  return (
    <div className={`entrance-overlay ${isExiting ? 'slide-up' : ''}`}>
      <video
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnded}
        onTimeUpdate={handleTimeUpdate}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src="/906fa01fcd4954bcb584c3f93d5a1dcf.mp4" type="video/mp4" />
      </video>
      
      {/* Darker overlay for better text readability */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)',
        zIndex: 1
      }} />

      <div className="entrance-content" style={{ zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <h1 className="entrance-brand">JAIN SALT</h1>
          <div className="entrance-line" />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 1, duration: 1.5 }}
            style={{
              color: 'white',
              marginTop: '30px',
              letterSpacing: '6px',
              fontSize: '0.75rem',
              fontWeight: 400,
              textTransform: 'uppercase',
              fontFamily: 'var(--font-sans)'
            }}
          >
            Purity In Every Grain
          </motion.p>
        </motion.div>
      </div>

      <button
        ref={buttonRef}
        onClick={handleSkip}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          position: 'absolute',
          bottom: '40px',
          right: '40px',
          zIndex: 3,
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          color: 'rgba(255, 255, 255, 0.8)',
          padding: '8px 24px',
          borderRadius: '30px',
          cursor: 'pointer',
          fontFamily: 'var(--font-sans)',
          fontSize: '0.8rem',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          backdropFilter: 'blur(4px)',
          transition: 'color 0.3s ease',
        }}
      >
        Skip Video
      </button>
    </div>
  );
}
