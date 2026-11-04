import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

export const NewYearFireworks: React.FC = () => {
  useEffect(() => {
    // Happy New Year Fireworks & Confetti celebration explosion on page load
    // ("live link e click korlei hapy new year moto jar bati choriye chitiye pore")

    const colors = ['#10b981', '#34d399', '#f59e0b', '#fbbf24', '#ec4899', '#8b5cf6', '#3b82f6', '#ffffff'];

    // 1. Initial Left & Right celebratory cannons
    confetti({
      particleCount: 80,
      angle: 60,
      spread: 70,
      origin: { x: 0, y: 0.75 },
      colors: colors,
      startVelocity: 45,
      decay: 0.9,
      gravity: 0.9,
      ticks: 250
    });

    confetti({
      particleCount: 80,
      angle: 120,
      spread: 70,
      origin: { x: 1, y: 0.75 },
      colors: colors,
      startVelocity: 45,
      decay: 0.9,
      gravity: 0.9,
      ticks: 250
    });

    // 2. High Fireworks Rocket Bursts in Center
    const fireworkTimer1 = setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 100,
        origin: { x: 0.5, y: 0.35 },
        colors: ['#f59e0b', '#fbbf24', '#ffffff', '#10b981'],
        startVelocity: 35,
        shapes: ['circle', 'square'],
        ticks: 300,
        scalar: 1.2
      });
    }, 350);

    const fireworkTimer2 = setTimeout(() => {
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { x: 0.3, y: 0.25 },
        colors: ['#8b5cf6', '#ec4899', '#38bdf8', '#ffffff'],
        startVelocity: 30,
        ticks: 280
      });

      confetti({
        particleCount: 80,
        spread: 80,
        origin: { x: 0.7, y: 0.25 },
        colors: ['#10b981', '#facc15', '#fb7185', '#ffffff'],
        startVelocity: 30,
        ticks: 280
      });
    }, 700);

    // 3. Cascading gentle shower scattering sparkles across the screen ("choriye chitiye pore")
    const duration = 2.5 * 1000;
    const animationEnd = Date.now() + duration;

    const frameInterval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        clearInterval(frameInterval);
        return;
      }

      const particleCount = 20 * (timeLeft / duration);
      
      // Scatter from random points across top
      confetti({
        particleCount: Math.floor(particleCount),
        angle: 90,
        spread: 120,
        origin: { x: Math.random(), y: Math.random() * 0.2 },
        colors: colors,
        startVelocity: 15,
        gravity: 0.6,
        drift: Math.random() - 0.5,
        ticks: 200,
        scalar: 0.9
      });
    }, 250);

    return () => {
      clearTimeout(fireworkTimer1);
      clearTimeout(fireworkTimer2);
      clearInterval(frameInterval);
    };
  }, []);

  return null;
};
