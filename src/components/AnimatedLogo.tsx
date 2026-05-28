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
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowImage(prev => !prev);
    }, 5000); // 5 sec infinite transition
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={className} style={{ position: 'relative', display: 'flex', alignItems: 'center', minWidth: isFooter ? '120px' : '140px', height: isFooter ? '30px' : '40px', padding: 0 }}>
      <div 
        style={{ 
          position: 'absolute', 
          transition: 'opacity 1s ease-in-out', 
          opacity: showImage ? 0 : 1,
          left: 0,
          whiteSpace: 'nowrap'
        }}
      >
        JAIN SALT
      </div>
      <div 
        style={{ 
          position: 'absolute', 
          transition: 'opacity 1s ease-in-out', 
          opacity: showImage ? 1 : 0,
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          left: 0
        }}
      >
        <img 
          src={imageSrc} 
          alt="Avintra" 
          style={{ maxHeight: isFooter ? '24px' : '36px', width: 'auto', objectFit: 'contain' }} 
        />
      </div>
    </div>
  );
}
