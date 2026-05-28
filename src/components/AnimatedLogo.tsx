import { useEffect, useState } from 'react';

export function AnimatedLogo({ 
  className = '', 
  isFooter = false,
  imageSrc = '/avintra.jpeg'
}: { 
  className?: string, 
  isFooter?: boolean,
  imageSrc?: string
}) {
  // rotateY accumulates: 0 -> 180 -> 360 -> 540...
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => prev + 180);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Which face is currently showing: even multiples of 180 = JAIN SALT (front), odd = Avintra (back)
  const containerStyle: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    minWidth: isFooter ? '120px' : '140px',
    height: isFooter ? '30px' : '40px',
    perspective: '600px',
    padding: 0,
  };

  const innerStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    transformStyle: 'preserve-3d',
    transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: `rotateY(${rotation}deg)`,
  };

  const faceStyle: React.CSSProperties = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden',
    whiteSpace: 'nowrap',
  };

  return (
    <div className={className} style={containerStyle}>
      <div style={innerStyle}>
        {/* Front face: JAIN SALT */}
        <div style={faceStyle}>
          JAIN SALT
        </div>
        {/* Back face: Avintra image */}
        <div style={{ ...faceStyle, transform: 'rotateY(180deg)' }}>
          <img 
            src={imageSrc} 
            alt="Avintra" 
            style={{ maxHeight: isFooter ? '24px' : '36px', width: 'auto', objectFit: 'contain' }} 
          />
        </div>
      </div>
    </div>
  );
}
