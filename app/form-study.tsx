"use client";

import { useEffect, useRef, useState } from "react";
import { useMotionValue, useSpring } from "motion/react";

const forms = ["Orbit", "Ribbon", "Shell"] as const;
type Form = typeof forms[number];

/** Original parametric drawing. No image sequence, WebGL, or continuous React renders. */
export default function FormStudy() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const outputRef = useRef<HTMLOutputElement>(null);
  const [form, setForm] = useState<Form>("Orbit");
  const [paused, setPaused] = useState(false);
  const [ready, setReady] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [supported, setSupported] = useState(true);
  const parameters = useRef({ form: "Orbit" as Form, flow: .55, paused: false });
  const drawOnce = useRef<() => void>(() => {});
  const pointer = useMotionValue(0);
  const angle = useSpring(pointer, { stiffness: 65, damping: 22 });

  useEffect(() => {
    parameters.current.form = form;
    parameters.current.paused = paused;
    drawOnce.current();
  }, [form, paused]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) { setSupported(false); return; }
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reducedMotion = preference.matches;
    let visible = false;
    let width = 1;
    let height = 1;
    let frame = 0;
    let last = 0;
    let time = 0;
    let disposed = false;

    const draw = () => {
      const { form: mode, flow } = parameters.current;
      ctx.clearRect(0, 0, width, height);
      const scale = Math.min(width, height) / 370;
      const turn = .4 + (reducedMotion ? 0 : angle.get()) + time * .07;
      const tilt = 1.0;
      const cy = Math.cos(turn), sy = Math.sin(turn), cx = Math.cos(tilt), sx = Math.sin(tilt);
      const lines = width < 500 ? 42 : 64;
      const steps = width < 500 ? 84 : 112;
      for (let line = 0; line < lines; line++) {
        const u = line / lines * Math.PI * 2;
        ctx.beginPath();
        for (let point = 0; point <= steps; point++) {
          const v = point / steps * Math.PI * 2;
          let x: number, y: number, z: number;
          if (mode === "Ribbon") {
            const radius = 102 + 29 * Math.cos(v);
            x = radius * Math.cos(u);
            y = radius * Math.sin(u);
            z = 44 * Math.sin(v + u * 2 + time * .2) * (flow + .3);
          } else if (mode === "Shell") {
            const radius = 74 + 33 * Math.sin(u * .5);
            x = radius * Math.cos(v) * (1 + .27 * Math.cos(u));
            y = radius * Math.sin(v) * (1 + .27 * Math.cos(u));
            z = (u - Math.PI) * 30 + 24 * Math.sin(v * 3 + u + time * .15) * flow;
          } else {
            const radius = 34 + 17 * Math.sin(u * 3 + time * .3) * flow;
            x = (90 + radius * Math.cos(v)) * Math.cos(u);
            y = (90 + radius * Math.cos(v)) * Math.sin(u);
            z = radius * Math.sin(v) + Math.sin(u * 3 + time * .2) * 28 * flow;
          }
          const rx = x * cy + z * sy;
          const rz = -x * sy + z * cy;
          const ry = y * cx - rz * sx;
          const depth = y * sx + rz * cx;
          const perspective = 600 / (600 + depth);
          const px = width / 2 + rx * scale * perspective;
          const py = height / 2 + ry * scale * perspective;
          if (point === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
        }
        ctx.strokeStyle = `rgba(42, 121, 173, ${.17 + .25 * (Math.sin(u) + 1) / 2})`;
        ctx.lineWidth = .85;
        ctx.stroke();
      }
    };
    const tick = (now: number) => {
      frame = 0;
      if (disposed || !visible || document.hidden) return;
      if (!parameters.current.paused && !reducedMotion) {
        if (now - last >= 32) {
          time += Math.min((now - last) / 1000, .05);
          last = now;
          draw();
        }
        frame = requestAnimationFrame(tick);
      }
    };
    const resume = () => {
      cancelAnimationFrame(frame);
      draw();
      if (visible && !document.hidden && !reducedMotion && !parameters.current.paused) {
        last = performance.now();
        frame = requestAnimationFrame(tick);
      }
    };
    drawOnce.current = resume;
    const resize = new ResizeObserver(entries => {
      width = entries[0].contentRect.width;
      height = entries[0].contentRect.height;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      draw();
      setReady(true);
    });
    resize.observe(canvas);
    const observer = new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      resume();
    }, { threshold: .05 });
    observer.observe(canvas);
    const changePreference = () => {
      reducedMotion = preference.matches;
      setReduced(reducedMotion);
      resume();
    };
    changePreference();
    preference.addEventListener("change", changePreference);
    document.addEventListener("visibilitychange", resume);
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      resize.disconnect();
      observer.disconnect();
      preference.removeEventListener("change", changePreference);
      document.removeEventListener("visibilitychange", resume);
      drawOnce.current = () => {};
    };
  }, [angle]);

  return (
    <div className="form-study">
      <div className={`study-stage${ready ? " is-ready" : ""}`}
        onPointerMove={event => {
          if (event.pointerType !== "mouse" || reduced || paused) return;
          const rect = event.currentTarget.getBoundingClientRect();
          pointer.set((event.clientX - rect.left) / rect.width - .5);
        }} onPointerLeave={() => pointer.set(0)}>
        <div className="study-fallback" aria-hidden="true" />
        <canvas ref={canvasRef} role="img" aria-label={`Interactive ${form.toLowerCase()} sculpture drawn from translucent blue curves. Use the controls below to change the shape.`} />
      </div>
      <div className="study-controls">
        <div className="shape-controls" role="group" aria-label="Choose a sculpture shape">
          {forms.map(item => <button key={item} type="button" aria-pressed={form === item} onClick={() => setForm(item)} disabled={!supported || !ready}>{item}</button>)}
        </div>
        <label className="flow-control" htmlFor="study-flow">Form <input id="study-flow" type="range" min="0" max="100" defaultValue="55" disabled={!supported || !ready} onChange={event => {
          parameters.current.flow = Number(event.target.value) / 100;
          if (outputRef.current) outputRef.current.value = event.target.value;
          drawOnce.current();
        }} /><output ref={outputRef} htmlFor="study-flow">55</output></label>
        <button className="motion-toggle" type="button" aria-pressed={paused || reduced} disabled={reduced || !supported || !ready} onClick={() => setPaused(value => !value)}>{reduced ? "Motion reduced" : paused ? "Play motion" : "Pause motion"}</button>
      </div>
      <noscript><p className="study-unavailable">Enable JavaScript to explore the interactive forms.</p></noscript>
      {!supported && <p className="study-unavailable">The interactive study isn’t supported in this browser. The optical artwork is shown instead.</p>}
    </div>
  );
}
