'use client'

import { useEffect, useState, useRef } from 'react'
import { mainsonNeueExtended } from '@/app/fonts'
import { useInView } from 'framer-motion'

// Animated counter component with improved animation
const AnimatedCounter = ({ end, label }: { end: number; label: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      startCounting();
    }
  }, [isInView]);
  
  const startCounting = () => {
    // Calculate duration based on the end value
    const duration = 1000; // 1 second total animation
    
    let startTime: number | null = null;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function for smoother animation
      const easedProgress = easeOutQuad(percentage);
      const nextCount = Math.floor(easedProgress * end);
      
      setCount(nextCount);
      
      if (percentage < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  };
  
  // Easing function for smoother animation
  const easeOutQuad = (t: number): number => t * (2 - t);
  
  return (
    <div ref={ref} className="flex flex-col items-center">
      <span className="text-6xl md:text-7xl lg:text-8xl font-bold font-minion-pro">{count}</span>
      <span className={`${mainsonNeueExtended.className} text-xs md:text-sm uppercase tracking-wider mt-2 text-center`}>{label}</span>
    </div>
  );
};

// Stats section component
const StatsSection = () => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        <AnimatedCounter end={8} label="COUCHAGES" />
        <AnimatedCounter end={21} label="LONGUEUR" />
        <AnimatedCounter end={12} label="INVITÉS" />
        <AnimatedCounter end={4} label="CABINES" />
      </div>
    </div>
  );
};

export default StatsSection; 