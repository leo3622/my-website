"use client";

import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

export default function HeroArt() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(y, { stiffness: 100, damping: 22 });
  const rotateY = useSpring(x, { stiffness: 100, damping: 22 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const lift = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const rotation = useTransform(scrollYProgress, [0, 1], [-7, 1]);
  return (
    <div className="hero-art" ref={ref}
      onPointerMove={event => {
        if (reduce || event.pointerType !== "mouse") return;
        const box = event.currentTarget.getBoundingClientRect();
        x.set(((event.clientX - box.left) / box.width - .5) * 9);
        y.set(((event.clientY - box.top) / box.height - .5) * -9);
      }}
      onPointerLeave={() => { x.set(0); y.set(0); }}>
      <motion.div className="hero-art-scroll" style={reduce ? {} : { y: lift, rotate: rotation }}>
        <motion.div className="hero-art-tilt" style={reduce ? {} : { rotateX, rotateY }}>
          <Image src="/images/optical-study.png" alt="An imagined optical sculpture, with floating sky-blue glass lenses and silver rings" width={1254} height={1254} priority sizes="(max-width: 767px) 100vw, 60vw" />
        </motion.div>
      </motion.div>
    </div>
  );
}
