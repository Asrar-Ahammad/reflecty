'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import type { Transition } from 'motion/react';
import React from 'react';

export type GlowEffectMode =
  | 'rotate'
  | 'pulse'
  | 'breathe'
  | 'colorShift'
  | 'flowHorizontal'
  | 'static';

export type GlowEffectBlur =
  | number
  | 'softest'
  | 'soft'
  | 'medium'
  | 'strong'
  | 'stronger'
  | 'strongest'
  | 'none';

export interface GlowEffectProps {
  className?: string;
  style?: React.CSSProperties;
  colors?: string[];
  mode?: GlowEffectMode;
  blur?: GlowEffectBlur;
  transition?: Transition;
  scale?: number;
  duration?: number;
}

export function GlowEffect({
  className,
  style,
  colors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F'],
  mode = 'rotate',
  blur = 'medium',
  transition,
  scale = 1,
  duration = 5,
}: GlowEffectProps) {
  const BASE_TRANSITION: Transition = {
    repeat: Infinity,
    duration: duration,
    ease: 'linear',
  };

  const getAnimations = () => {
    switch (mode) {
      case 'rotate':
        return {
          background: [
            `conic-gradient(from 0deg at 50% 50%, ${colors.join(', ')})`,
            `conic-gradient(from 360deg at 50% 50%, ${colors.join(', ')})`,
          ],
          transition: transition ?? BASE_TRANSITION,
        };
      case 'pulse':
        return {
          background: colors.map(
            (color) =>
              `radial-gradient(circle at 50% 50%, ${color} 0%, transparent 100%)`
          ),
          scale: [1 * scale, 1.1 * scale, 1 * scale],
          opacity: [0.5, 0.8, 0.5],
          transition: transition ?? { ...BASE_TRANSITION, repeatType: 'mirror' },
        };
      case 'breathe':
        return {
          background: colors.map(
            (color) =>
              `radial-gradient(circle at 50% 50%, ${color} 0%, transparent 100%)`
          ),
          scale: [1 * scale, 1.05 * scale, 1 * scale],
          transition: transition ?? { ...BASE_TRANSITION, repeatType: 'mirror' },
        };
      case 'colorShift':
        return {
          background: colors.map((color, index) => {
            const nextColor = colors[(index + 1) % colors.length];
            return `conic-gradient(from 0deg at 50% 50%, ${color} 0%, ${nextColor} 50%, ${color} 100%)`;
          }),
          transition: transition ?? { ...BASE_TRANSITION, repeatType: 'mirror' },
        };
      case 'flowHorizontal':
        return {
          background: colors.map((color, index) => {
            const nextColor = colors[(index + 1) % colors.length];
            return `linear-gradient(to right, ${color}, ${nextColor})`;
          }),
          transition: transition ?? { ...BASE_TRANSITION, repeatType: 'mirror' },
        };
      case 'static':
        return {
          background: `linear-gradient(to right, ${colors.join(', ')})`,
        };
      default:
        return {};
    }
  };

  const getBlurClass = (blur: GlowEffectBlur): string => {
    if (typeof blur === 'number') {
      return `blur-[${blur}px]`;
    }

    const presets: Record<Exclude<GlowEffectBlur, number>, string> = {
      softest: 'blur-xs',
      soft: 'blur-sm',
      medium: 'blur-md',
      strong: 'blur-lg',
      stronger: 'blur-xl',
      strongest: 'blur-2xl',
      none: 'blur-none',
    };

    return presets[blur];
  };

  return (
    <motion.div
      style={{
        ...style,
        '--scale': scale,
        willChange: 'transform',
        backfaceVisibility: 'hidden',
      } as React.CSSProperties}
      animate={getAnimations()}
      className={cn(
        'pointer-events-none absolute inset-0 h-full w-full',
        'scale-[var(--scale)] transform-gpu',
        getBlurClass(blur),
        className
      )}
    />
  );
}