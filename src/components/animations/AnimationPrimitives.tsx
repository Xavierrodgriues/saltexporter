import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

// --- Shared premium animation variants (slow = luxurious) ---

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

export const fadeSlideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: EASE, delay },
  }),
};

const EASE_SHARP: [number, number, number, number] = [0.77, 0, 0.175, 1];

export const clipRevealLeft = {
  hidden: { clipPath: 'inset(0 100% 0 0)', opacity: 1 },
  visible: (delay = 0) => ({
    clipPath: 'inset(0 0% 0 0)',
    opacity: 1,
    transition: { duration: 1.2, ease: EASE_SHARP, delay },
  }),
};

export const lineGrow = {
  hidden: { scaleX: 0 },
  visible: (delay = 0) => ({
    scaleX: 1,
    transition: { duration: 1.0, ease: EASE, delay },
  }),
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

export const cardReveal = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease: EASE },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 1.1, ease: EASE, delay },
  }),
};

// --- Reusable animated wrappers ---

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function FadeIn({ children, delay = 0, className = '', as = 'div' }: FadeInProps) {
  const Tag = motion[as as keyof typeof motion] as any;
  return (
    <Tag
      className={className}
      variants={fadeSlideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-8%' }}
      custom={delay}
    >
      {children}
    </Tag>
  );
}

export function ClipReveal({ children, delay = 0, className = '', as = 'div' }: FadeInProps) {
  const Tag = motion[as as keyof typeof motion] as any;
  return (
    <Tag
      className={className}
      variants={clipRevealLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-8%' }}
      custom={delay}
      style={{ transformOrigin: 'left' }}
    >
      {children}
    </Tag>
  );
}

export function AnimatedDivider({ center = false, delay = 0 }: { center?: boolean; delay?: number }) {
  return (
    <motion.div
      className={`divider-line ${center ? 'center-line' : ''}`}
      variants={lineGrow}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-8%' }}
      custom={delay}
      style={{ transformOrigin: center ? 'center' : 'left' }}
    />
  );
}

interface StaggerGridProps { children: ReactNode; className?: string; style?: React.CSSProperties; }

export function StaggerGrid({ children, className = '', style }: StaggerGridProps) {
  return (
    <motion.div
      className={className}
      style={style}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-5%' }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={cardReveal}
      whileHover={{ y: -6, transition: { duration: 0.4, ease: 'easeOut' } }}
    >
      {children}
    </motion.div>
  );
}
