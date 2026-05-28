import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface SplitTextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
}

export function SplitTextReveal({ text, className = '', delay = 0, as = 'div' }: SplitTextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const revealVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94], // Smooth luxurious easing
        delay: delay,
      },
    },
  };

  const MotionTag = motion[as as keyof typeof motion] as any;

  return (
    <MotionTag
      ref={ref}
      variants={revealVariant}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {text}
    </MotionTag>
  );
}
