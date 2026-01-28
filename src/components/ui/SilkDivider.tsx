'use client';

import { motion } from 'framer-motion';

export default function SilkDivider() {
  return (
    <div className="w-full h-px flex items-center justify-center my-24 overflow-visible relative">
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "100px", opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="h-px bg-brand-accent/50 relative"
      >
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1 h-1 bg-brand-accent rounded-full" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1 h-1 bg-brand-accent rounded-full" />
      </motion.div>
    </div>
  );
}
