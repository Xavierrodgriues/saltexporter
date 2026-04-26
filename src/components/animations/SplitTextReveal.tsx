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

  // Split text by spaces to get words
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        damping: 14,
        stiffness: 80,
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
      transition: {
        type: 'spring' as const,
        damping: 14,
        stiffness: 80,
      },
    },
  };

  const MotionTag = motion[as as keyof typeof motion] as any;

  return (
    <MotionTag
      ref={ref}
      style={{ display: 'flex', flexWrap: 'wrap', overflow: 'hidden' }}
      variants={container}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {words.map((word, index) => (
        <span key={index} style={{ overflow: 'hidden', marginRight: '0.25em', paddingBottom: '0.1em' }}>
          <motion.span variants={child} style={{ display: 'inline-block' }}>
            {word}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
