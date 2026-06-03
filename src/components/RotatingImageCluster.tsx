import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ClusterImage {
  src: string;
  alt: string;
}

interface RotatingImageClusterProps {
  images: ClusterImage[];
  intervalMs?: number;
}

// 0: Center (Big)
// 1: Top-Right (Small)
// 2: Bottom-Left (Small)
const positionStyles = [
  {
    top: '50%', left: '50%', translateX: '-50%', translateY: '-50%',
    width: '65%', zIndex: 3, borderRadius: '24px', boxShadow: '0 30px 60px rgba(0,0,0,0.25)'
  },
  {
    top: '0%', left: '60%', translateX: '0%', translateY: '0%',
    width: '40%', zIndex: 2, borderRadius: '16px', boxShadow: '0 16px 32px rgba(0,0,0,0.15)'
  },
  {
    top: '100%', left: '0%', translateX: '0%', translateY: '-100%',
    width: '40%', zIndex: 2, borderRadius: '16px', boxShadow: '0 16px 32px rgba(0,0,0,0.15)'
  }
];

export function RotatingImageCluster({ images, intervalMs = 4000 }: RotatingImageClusterProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [images.length, intervalMs]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '500px' }}>
      <div 
        style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '80%', aspectRatio: '1', backgroundColor: 'var(--accent-gold)', opacity: 0.08,
          borderRadius: '50%', zIndex: 0
        }} 
      />
      
      <div style={{ position: 'relative', width: '100%', height: '100%', zIndex: 1 }}>
        {images.map((img, i) => {
          let slot = -1;
          if (i === activeIndex) slot = 0;
          else if (i === (activeIndex + 1) % images.length) slot = 1;
          else if (i === (activeIndex + 2) % images.length) slot = 2;
          
          if (slot === -1) {
            return (
              <motion.div
                key={img.src}
                initial={false}
                animate={{ opacity: 0, scale: 0.5, zIndex: 0, x: '-50%', y: '-50%', top: '50%', left: '50%' }}
                style={{ position: 'absolute', pointerEvents: 'none' }}
              />
            );
          }

          const pos = positionStyles[slot];
          return (
            <motion.div
              key={img.src}
              initial={false}
              animate={{
                top: pos.top,
                left: pos.left,
                width: pos.width,
                zIndex: pos.zIndex,
                x: pos.translateX,
                y: pos.translateY,
                opacity: 1,
                scale: 1
              }}
              transition={{ type: "spring", stiffness: 220, damping: 28 }}
              style={{ 
                position: 'absolute', 
                borderRadius: pos.borderRadius, 
                boxShadow: pos.boxShadow, 
                cursor: slot !== 0 ? 'pointer' : 'default',
                aspectRatio: '4/5',
                overflow: 'hidden'
              }}
              onClick={() => { if (slot !== 0) setActiveIndex(i); }}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
