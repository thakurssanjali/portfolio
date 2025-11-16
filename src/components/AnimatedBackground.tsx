import { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  baseSize: number;
  colorIndex: number; // Store color variety
}

export const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Initialize particles
    const particleCount = theme === 'light' ? 50 : 70;
    particlesRef.current = [];

    // Pastel color palette for light theme
    const pastelColors = [
      { r: 255, g: 179, b: 184 }, // Pastel Pink
      { r: 255, g: 182, b: 193 }, // Light Pink
      { r: 253, g: 181, b: 179 }, // Pastel Red
      { r: 245, g: 224, b: 254 }, // Pastel Purple
      { r: 220, g: 237, b: 243 }, // Pastel Blue
      { r: 198, g: 239, b: 206 }, // Pastel Green
      { r: 255, g: 229, b: 153 }, // Pastel Yellow
      { r: 255, g: 204, b: 188 }, // Pastel Peach
      { r: 225, g: 190, b: 231 }, // Pastel Lavender
      { r: 200, g: 224, b: 255 }, // Pastel Sky Blue
    ];

    // Star colors for dark theme (various whites and blues)
    const starColors = [
      { r: 255, g: 255, b: 255 }, // Pure White
      { r: 220, g: 237, b: 243 }, // Blue White
      { r: 245, g: 245, b: 255 }, // Ghost White
      { r: 230, g: 245, b: 255 }, // Alice Blue
      { r: 240, g: 248, b: 255 }, // Very Light Blue
      { r: 200, g: 220, b: 255 }, // Light Periwinkle
      { r: 200, g: 230, b: 255 }, // Light Blue
      { r: 220, g: 220, b: 255 }, // Light Lavender
      { r: 255, g: 250, b: 240 }, // Floral White
      { r: 245, g: 245, b: 250 }, // Ghost White
    ];

    for (let i = 0; i < particleCount; i++) {
      // Create variety: mix of small (30%), medium (50%), and large (20%) particles
      // Increased 1.7x size for decorative elements
      const sizeVariety = Math.random();
      let baseSize: number;

      if (sizeVariety < 0.3) {
        baseSize = Math.random() * 1.36 + 0.68; // Small: 0.68-2.04 (was 0.4-1.2)
      } else if (sizeVariety < 0.8) {
        baseSize = Math.random() * 2.04 + 1.7; // Medium: 1.7-3.74 (was 1-2.2)
      } else {
        baseSize = Math.random() * 3.06 + 3.74; // Large: 3.74-6.8 (was 2.2-4)
      }

      const colorIndex = theme === 'light' 
        ? Math.floor(Math.random() * pastelColors.length)
        : Math.floor(Math.random() * starColors.length);

      particlesRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        size: baseSize,
        baseSize: baseSize,
        speed: Math.random() * 0.3 + 0.15,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.03,
        opacity: Math.random() * 0.4 + 0.25,
        colorIndex: colorIndex,
      });
    }

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      // Clear canvas with gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);

      if (theme === 'light') {
        // Light theme: elegant pastel violet to blue gradient
        gradient.addColorStop(0, 'rgba(237, 233, 254, 1)');      // Very light violet at top
        gradient.addColorStop(0.25, 'rgba(230, 230, 250, 0.99)'); // Soft lavender
        gradient.addColorStop(0.5, 'rgba(240, 245, 255, 0.98)');  // Light blue-white
        gradient.addColorStop(0.75, 'rgba(219, 234, 254, 0.99)'); // Pale blue
        gradient.addColorStop(1, 'rgba(243, 232, 255, 1)');       // Soft lavender at bottom
      } else {
        // Dark theme: deep blue to black gradient with better starfield feel
        gradient.addColorStop(0, 'rgba(30, 58, 138, 1)');        // Deep blue at top
        gradient.addColorStop(0.3, 'rgba(25, 50, 120, 0.98)');   // Darker blue
        gradient.addColorStop(0.6, 'rgba(20, 35, 90, 0.96)');    // Darker
        gradient.addColorStop(0.85, 'rgba(10, 20, 50, 0.97)');   // Very dark blue
        gradient.addColorStop(1, 'rgba(5, 10, 25, 1)');          // Almost black at bottom
      }

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and update particles
      particlesRef.current.forEach((particle) => {
      // Falling effect with smoother motion
        particle.y += particle.speed;
        particle.rotation += particle.rotationSpeed;

        // Reset particle when it goes off screen
        if (particle.y > canvas.height) {
          particle.y = -particle.baseSize * 2;
          particle.x = Math.random() * canvas.width;
          particle.rotation = Math.random() * Math.PI * 2;
        }

        // Calculate distance to mouse for hover effect
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const hoverDistance = 150;

        let scale = 1;
        let opacity = particle.opacity;

        // Hover effect
        if (distance < hoverDistance) {
          scale = 1 + (1 - distance / hoverDistance) * 1.5;
          opacity = particle.opacity + 0.4;
        }

        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);

        if (theme === 'light') {
          // Draw flower petals (blossom effect) with pastel colors
          const petalCount = 5;
          const petalSize = particle.size * scale;
          
          const pastelColors = [
            { r: 255, g: 179, b: 184 },
            { r: 255, g: 182, b: 193 },
            { r: 253, g: 181, b: 179 },
            { r: 245, g: 224, b: 254 },
            { r: 220, g: 237, b: 243 },
            { r: 198, g: 239, b: 206 },
            { r: 255, g: 229, b: 153 },
            { r: 255, g: 204, b: 188 },
            { r: 225, g: 190, b: 231 },
            { r: 200, g: 224, b: 255 },
          ];

          const color = pastelColors[particle.colorIndex];

          for (let i = 0; i < petalCount; i++) {
            const angle = (i / petalCount) * Math.PI * 2;
            const petalX = Math.cos(angle) * petalSize;
            const petalY = Math.sin(angle) * petalSize;

            ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity * 0.7})`;
            ctx.beginPath();
            ctx.ellipse(petalX, petalY, petalSize * 0.6, petalSize, 0, 0, Math.PI * 2);
            ctx.fill();
          }

          // Draw flower center with complementary shade
          const centerShade = Math.max(200, Math.min(255, color.r - 50));
          ctx.fillStyle = `rgba(${centerShade}, ${Math.max(150, color.g - 30)}, ${Math.max(150, color.b - 30)}, ${opacity * 0.8})`;
          ctx.beginPath();
          ctx.arc(0, 0, petalSize * 0.5, 0, Math.PI * 2);
          ctx.fill();

          // Add subtle glow when hovered
          if (distance < hoverDistance) {
            ctx.shadowColor = `rgba(${color.r}, ${color.g}, ${color.b}, 0.6)`;
            ctx.shadowBlur = 30;
            ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity * 0.15})`;
            ctx.beginPath();
            ctx.arc(0, 0, petalSize * 3.5, 0, Math.PI * 2);
            ctx.fill();
          }
        } else {
          // Draw diagonal star (4-pointed) with varied colors
          const starSize = particle.size * scale;
          const points = 4;

          const starColors = [
            { r: 255, g: 255, b: 255 },
            { r: 220, g: 237, b: 243 },
            { r: 245, g: 245, b: 255 },
            { r: 230, g: 245, b: 255 },
            { r: 240, g: 248, b: 255 },
            { r: 200, g: 220, b: 255 },
            { r: 200, g: 230, b: 255 },
            { r: 220, g: 220, b: 255 },
            { r: 255, g: 250, b: 240 },
            { r: 245, g: 245, b: 250 },
          ];

          const starColor = starColors[particle.colorIndex];

          ctx.fillStyle = `rgba(${starColor.r}, ${starColor.g}, ${starColor.b}, ${opacity})`;
          ctx.beginPath();

          for (let i = 0; i < points * 2; i++) {
            const angle = (i / (points * 2)) * Math.PI * 2;
            const radius = i % 2 === 0 ? starSize : starSize * 0.4;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            if (i === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }

          ctx.closePath();
          ctx.fill();

          // Add glow and twinkle
          const twinkle = Math.sin(Date.now() * 0.003 + particle.x) * 0.5 + 0.5;
          const glowColor = `rgba(168, 85, 247, ${0.5 + twinkle * 0.5})`;
          ctx.shadowColor = glowColor;
          ctx.shadowBlur = 20;

          ctx.fillStyle = `rgba(${starColor.r}, ${starColor.g}, ${starColor.b}, ${(opacity + twinkle * 0.3) * 0.7})`;
          ctx.beginPath();

          for (let i = 0; i < points * 2; i++) {
            const angle = (i / (points * 2)) * Math.PI * 2;
            const radius = i % 2 === 0 ? starSize * 1.3 : starSize * 0.5;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            if (i === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }

          ctx.closePath();
          ctx.fill();
        }

        ctx.restore();
      });

      ctx.shadowColor = 'transparent';
      requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
    />
  );
};
