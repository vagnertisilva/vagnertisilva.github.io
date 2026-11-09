import { useEffect, useRef } from 'react';
import '../styles/particles.css';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = canvas?.parentElement;
    const context = canvas?.getContext('2d');
    if (!canvas || !container || !context) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let visible = true;
    let frame: number | undefined;
    let lastTime = 0;

    function paint() {
      if (!context) return;
      context.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        context.fillStyle = 'rgba(97, 184, 255, 0.5)';
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j];
          const distance = Math.hypot(particle.x - other.x, particle.y - other.y);
          if (distance >= 110) continue;

          context.strokeStyle = `rgba(97, 184, 255, ${(1 - distance / 110) * 0.16})`;
          context.lineWidth = 0.6;
          context.beginPath();
          context.moveTo(particle.x, particle.y);
          context.lineTo(other.x, other.y);
          context.stroke();
        }
      }
    }

    function animate(time: number) {
      const delta = lastTime ? Math.min((time - lastTime) / 1000, 0.05) : 0;
      lastTime = time;

      for (const particle of particles) {
        particle.x = (particle.x + particle.vx * delta + width) % width;
        particle.y = (particle.y + particle.vy * delta + height) % height;
      }

      paint();
      frame = requestAnimationFrame(animate);
    }

    function syncAnimation() {
      const shouldAnimate = visible && !document.hidden && !reducedMotion.matches && width > 0 && height > 0;
      if (shouldAnimate && frame === undefined) {
        lastTime = 0;
        frame = requestAnimationFrame(animate);
      } else if (!shouldAnimate && frame !== undefined) {
        cancelAnimationFrame(frame);
        frame = undefined;
      }
    }

    function resize() {
      if (!canvas || !context || !container) return;
      const bounds = container.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      // Fewer particles on small screens; cap the cost of connecting nearby dots.
      const count = width > 0 && height > 0 ? Math.min(60, Math.max(16, Math.floor(width * height / 19000))) : 0;
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 14,
        vy: (Math.random() - 0.5) * 14,
        radius: Math.random() * 1.2 + 0.7,
      }));
      paint();
      syncAnimation();
    }

    const resizeObserver = new ResizeObserver(resize);
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncAnimation();
    });

    resize();
    resizeObserver.observe(container);
    visibilityObserver.observe(container);
    document.addEventListener('visibilitychange', syncAnimation);
    reducedMotion.addEventListener('change', syncAnimation);

    return () => {
      if (frame !== undefined) cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      document.removeEventListener('visibilitychange', syncAnimation);
      reducedMotion.removeEventListener('change', syncAnimation);
    };
  }, []);

  return <canvas ref={canvasRef} className="particles-background" aria-hidden="true" />;
}
