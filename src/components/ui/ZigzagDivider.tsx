'use client';

import { motion } from 'framer-motion';

export default function ZigzagDivider() {
  return (
    <div className="w-full h-16 flex items-center justify-center my-12 overflow-hidden relative">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="h-[20px] overflow-hidden"
      >
        <svg
          width="100%"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="zigzag-pattern"
              x="0"
              y="0"
              width="40"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 10 L10 0 L30 20 L40 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-white/20"
              />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="20" fill="url(#zigzag-pattern)" />
        </svg>
      </motion.div>
    </div>
  );
}
