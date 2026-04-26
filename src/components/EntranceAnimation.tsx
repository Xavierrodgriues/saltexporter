import { useState } from 'react';
import { motion } from 'framer-motion';

interface EntranceAnimationProps {
  onComplete: () => void;
}

export function EntranceAnimation({ onComplete }: EntranceAnimationProps) {
  const [isExiting, setIsExiting] = useState(false);

  const handleVideoEnded = () => {
    setTimeout(() => {
      setIsExiting(true);
      setTimeout(onComplete, 1000); // Wait for slide-up transition
    }, 500);
  };

  return (
    <div className={`entrance-overlay ${isExiting ? 'slide-up' : ''}`}>
      <video
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnded}
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
    </div>
  );
}
