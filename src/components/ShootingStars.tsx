import React, { useEffect, useRef } from 'react';

export const ShootingStars: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    interface Star {
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
      opacity: number;
      color: string;
      trail: number;
      size: number;
    }

    const colors = ['#10b981', '#34d399', '#6ee7b7', '#facc15', '#ffffff', '#60a5fa'];
    const stars: Star[] = [];

    // Burst of falling stars right on page load ("page load howar sathe shate shate tara khose porbe")
    const createBurst = (count: number) => {
      for (let i = 0; i < count; i++) {
        setTimeout(() => {
          stars.push({
            x: Math.random() * width + 200,
            y: Math.random() * (height * 0.4) - 100,
            length: Math.random() * 90 + 70,
            speed: Math.random() * 12 + 10,
            angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2, // ~45 degrees diagonal
            opacity: 1,
            color: colors[Math.floor(Math.random() * colors.length)],
            trail: Math.random() * 25 + 15,
            size: Math.random() * 2 + 1.5
          });
        }, i * 140); // Staggered burst in first 3 seconds
      }
    };

    // Initial shower on page load
    createBurst(16);

    // Occasional gentle shooting star every few seconds
    const interval = setInterval(() => {
      if (stars.length < 5) {
        stars.push({
          x: Math.random() * width + 200,
          y: Math.random() * (height * 0.3) - 50,
          length: Math.random() * 80 + 60,
          speed: Math.random() * 10 + 8,
          angle: Math.PI / 4 + (Math.random() - 0.5) * 0.15,
          opacity: 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          trail: 20,
          size: Math.random() * 2 + 1.2
        });
      }
    }, 2400);

    // Animation loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = stars.length - 1; i >= 0; i--) {
        const star = stars[i];

        // Calculate tail position
        const tailX = star.x - Math.cos(star.angle) * star.length;
        const tailY = star.y - Math.sin(star.angle) * star.length;

        // Draw shooting star gradient trail
        const gradient = ctx.createLinearGradient(star.x, star.y, tailX, tailY);
        gradient.addColorStop(0, star.color);
        gradient.addColorStop(0.3, `${star.color}99`);
        gradient.addColorStop(1, 'transparent');

        ctx.save();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = star.size;
        ctx.lineCap = 'round';
        ctx.shadowColor = star.color;
        ctx.shadowBlur = 10;

        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        // Draw bright head of the star
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = '#ffffff';
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size + 1, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Move star
        star.x -= Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;
        star.opacity -= 0.005;

        // Remove if out of screen or faded
        if (star.x < -100 || star.y > height + 100 || star.opacity <= 0) {
          stars.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30"
      style={{ width: '100vw', height: '100vh' }}
    />
  );
};
