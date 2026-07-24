import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            document.body.style.overflow = "unset";
            if (onComplete) onComplete();
          }, 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 8;
      });
    }, 90);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "unset";
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[9999] flex flex-col justify-between bg-zinc-950 p-6 text-white select-none sm:p-12"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold tracking-widest text-white uppercase">
          NORTHPEAK<span className="text-amber-400">.</span>
        </span>
        <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
          Loading site...
        </span>
      </div>

      {/* Bottom Progress Counter */}
      <div className="flex items-end justify-between border-b border-zinc-800/80 pb-6">
        <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
          Please wait
        </span>
        <span className="font-mono text-5xl font-light tracking-tight text-white sm:text-7xl">
          {progress}<span className="text-amber-400 text-3xl sm:text-4xl">%</span>
        </span>
      </div>
    </motion.div>
  );
};

export default Loader;