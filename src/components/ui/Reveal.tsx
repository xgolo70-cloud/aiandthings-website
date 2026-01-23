'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
  overflowVisible?: boolean;
  fullHeight?: boolean;
}

export default function Reveal({ children, width = "fit-content", className, delay = 0.25, overflowVisible = false, fullHeight = false }: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: overflowVisible ? "visible" : "hidden", height: fullHeight ? "100%" : "auto" }} className={className}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
        style={{ height: fullHeight ? "100%" : "auto" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
