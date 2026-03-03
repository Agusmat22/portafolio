import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/animations";

const CHARS =
  "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン" +
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*<>{}[]=/\\|~^";

const FONT_SIZE = 14;
const FPS = 24;
const FRAME_INTERVAL = 1000 / FPS;

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = prefersReducedMotion();

    let columns = 0;
    let drops: number[] = [];
    let speeds: number[] = [];
    let width = 0;
    let height = 0;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = width;
      canvas!.height = height;

      const newColumns = Math.floor(width / FONT_SIZE);

      // Preserve existing drops where possible
      const newDrops: number[] = [];
      const newSpeeds: number[] = [];
      for (let i = 0; i < newColumns; i++) {
        newDrops[i] = i < drops.length ? drops[i] : Math.random() * -100;
        newSpeeds[i] = i < speeds.length ? speeds[i] : 0.3 + Math.random() * 0.7;
      }

      columns = newColumns;
      drops = newDrops;
      speeds = newSpeeds;
    }

    resize();
    window.addEventListener("resize", resize);

    // Detect theme
    function getColor(): string {
      return document.documentElement.classList.contains("dark")
        ? "#00FF88"
        : "#00994D";
    }

    function draw() {
      // Semi-transparent black overlay to create fade trail
      ctx!.fillStyle = document.documentElement.classList.contains("dark")
        ? "rgba(0, 0, 0, 0.06)"
        : "rgba(250, 250, 250, 0.08)";
      ctx!.fillRect(0, 0, width, height);

      const color = getColor();
      ctx!.font = `${FONT_SIZE}px 'JetBrains Mono', monospace`;

      for (let i = 0; i < columns; i++) {
        // Random character
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * FONT_SIZE;
        const y = drops[i] * FONT_SIZE;

        // Head character — brighter
        ctx!.fillStyle = color;
        ctx!.globalAlpha = 0.08 + Math.random() * 0.04;
        ctx!.fillText(char, x, y);

        // Move drop down
        drops[i] += speeds[i];

        // Reset when off screen, with random delay
        if (y > height && Math.random() > 0.975) {
          drops[i] = Math.random() * -20;
          speeds[i] = 0.3 + Math.random() * 0.7;
        }
      }

      ctx!.globalAlpha = 1;
    }

    // If reduced motion, draw a single static frame
    if (reducedMotion) {
      // Clear
      ctx.fillStyle = document.documentElement.classList.contains("dark")
        ? "#000000"
        : "#FAFAFA";
      ctx.fillRect(0, 0, width, height);

      // Scatter some static characters
      const color = getColor();
      ctx.font = `${FONT_SIZE}px 'JetBrains Mono', monospace`;
      ctx.fillStyle = color;
      ctx.globalAlpha = 0.04;

      for (let i = 0; i < columns; i++) {
        const charCount = Math.floor(Math.random() * (height / FONT_SIZE));
        for (let j = 0; j < charCount; j++) {
          if (Math.random() > 0.7) {
            const char = CHARS[Math.floor(Math.random() * CHARS.length)];
            ctx.fillText(char, i * FONT_SIZE, j * FONT_SIZE);
          }
        }
      }
      ctx.globalAlpha = 1;
      return; // No animation loop
    }

    // Animation loop with FPS cap
    let lastTime = 0;
    let rafId: number;

    function animate(time: number) {
      rafId = requestAnimationFrame(animate);

      if (document.hidden) return;

      if (time - lastTime < FRAME_INTERVAL) return;
      lastTime = time;

      draw();
    }

    // Clear canvas initially
    ctx.fillStyle = document.documentElement.classList.contains("dark")
      ? "#000000"
      : "#FAFAFA";
    ctx.fillRect(0, 0, width, height);

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
