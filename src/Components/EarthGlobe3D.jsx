import { useEffect, useRef } from "react";

const EarthGlobe3D = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;
    let alpha = 0; // rotation angle

    // Setup high DPI canvas scaling
    const size = 300;
    canvas.width = size * window.devicePixelRatio;
    canvas.height = size * window.devicePixelRatio;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    // Coordinate Math parameters
    const R = 85; // Globe radius
    const centerX = size / 2;
    const centerY = size / 2;
    const beta = 0.38; // Tilt angle (about 22 degrees)
    const cosBeta = Math.cos(beta);
    const sinBeta = Math.sin(beta);

    // Generate clusters of dots representing continents (lat, lon)
    const generateGlobePoints = () => {
      const points = [];
      const clusters = [
        { lat: 0.6, lon: 0.8, count: 45, spread: 0.4 },     // North America
        { lat: -0.3, lon: 1.4, count: 35, spread: 0.35 },   // South America
        { lat: 0.7, lon: 3.4, count: 55, spread: 0.45 },    // Eurasia
        { lat: 0.1, lon: 3.1, count: 40, spread: 0.35 },    // Africa
        { lat: -0.4, lon: 4.8, count: 25, spread: 0.3 },     // Australia
        { lat: 0.3, lon: 4.2, count: 35, spread: 0.38 },    // India/Southeast Asia
      ];

      clusters.forEach((c) => {
        for (let i = 0; i < c.count; i++) {
          const lat = c.lat + (Math.random() - 0.5) * c.spread;
          const lon = c.lon + (Math.random() - 0.5) * c.spread;
          // Clamp latitude to avoid poles bleeding
          const clampedLat = Math.max(-Math.PI / 2 + 0.1, Math.min(Math.PI / 2 - 0.1, lat));
          points.push({ lat: clampedLat, lon });
        }
      });

      // Scatter noise (islands and oceans scatter)
      for (let i = 0; i < 45; i++) {
        const lat = (Math.random() - 0.5) * Math.PI * 0.9;
        const lon = Math.random() * Math.PI * 2;
        points.push({ lat, lon });
      }

      return points;
    };

    const points = generateGlobePoints();

    // Generate grid line coordinates (lat, lon loops)
    const gridPoints = [];
    // 3 Parallels (Latitude circles)
    [-0.4, 0, 0.4].forEach((lat) => {
      for (let step = 0; step < 40; step++) {
        const lon = (step / 40) * Math.PI * 2;
        gridPoints.push({ lat, lon });
      }
    });
    // 4 Meridians (Longitude circles)
    [0, Math.PI / 4, Math.PI / 2, (3 * Math.PI) / 4].forEach((lon) => {
      for (let step = 0; step < 30; step++) {
        const lat = -Math.PI / 2 + (step / 30) * Math.PI;
        gridPoints.push({ lat, lon });
      }
    });

    const render = () => {
      // Clear canvas
      ctx.clearRect(0, 0, size, size);

      // 1. Draw glowing atmosphere aura under the globe
      const auraGlow = ctx.createRadialGradient(
        centerX,
        centerY,
        R - 15,
        centerX,
        centerY,
        R + 25
      );
      auraGlow.addColorStop(0, "rgba(6, 182, 212, 0.05)");
      auraGlow.addColorStop(0.6, "rgba(6, 182, 212, 0.08)");
      auraGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = auraGlow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, R + 25, 0, Math.PI * 2);
      ctx.fill();

      // Atmosphere border circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, R, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(6, 182, 212, 0.15)";
      ctx.lineWidth = 1;
      ctx.stroke();

      alpha += 0.005; // speed of rotation

      // 2. Draw 3D Grid lines first (so they sit in background of front dots)
      gridPoints.forEach((gp) => {
        const x = R * Math.cos(gp.lat) * Math.sin(gp.lon + alpha);
        const y0 = R * Math.sin(gp.lat);
        const z0 = R * Math.cos(gp.lat) * Math.cos(gp.lon + alpha);

        // Apply X-axis tilt
        const y = y0 * cosBeta - z0 * sinBeta;
        const z = y0 * sinBeta + z0 * cosBeta;

        if (z > -10) {
          // Front facing grid dots
          ctx.fillStyle = `rgba(6, 182, 212, ${z > 0 ? 0.08 : 0.03})`;
          ctx.beginPath();
          ctx.arc(centerX + x, centerY + y, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // 3. Sort continent points by depth (Z) so they layer correctly
      const projectedPoints = points.map((p) => {
        const x = R * Math.cos(p.lat) * Math.sin(p.lon + alpha);
        const y0 = R * Math.sin(p.lat);
        const z0 = R * Math.cos(p.lat) * Math.cos(p.lon + alpha);

        // Apply X-axis tilt
        const y = y0 * cosBeta - z0 * sinBeta;
        const z = y0 * sinBeta + z0 * cosBeta;

        return { x, y, z };
      });

      // Draw background dots first (Z < 0)
      projectedPoints.forEach((p) => {
        if (p.z <= 0) {
          ctx.fillStyle = `rgba(99, 102, 241, ${0.15 + (p.z / R) * 0.1})`; // fade to back
          ctx.beginPath();
          ctx.arc(centerX + p.x, centerY + p.y, 1.2, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Draw foreground dots (Z > 0) with glowing neon style
      ctx.shadowBlur = 4;
      ctx.shadowColor = "#06b6d4";
      projectedPoints.forEach((p) => {
        if (p.z > 0) {
          ctx.fillStyle = `rgba(34, 211, 238, ${0.45 + (p.z / R) * 0.55})`; // brighter at front center
          ctx.beginPath();
          ctx.arc(centerX + p.x, centerY + p.y, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Reset shadow blur for other drawings
      ctx.shadowBlur = 0;

      // 4. Draw Orbiting Cyber Satellite
      const satAngle = alpha * 1.6;
      const satR = 110; // orbit radius
      // Orbit rotated at 35 degrees relative to latitude
      const satX = satR * Math.cos(satAngle);
      const satY0 = satR * Math.sin(satAngle) * Math.sin(Math.PI / 5);
      const satZ0 = satR * Math.sin(satAngle) * Math.cos(Math.PI / 5);

      const satY = satY0 * cosBeta - satZ0 * sinBeta;
      const satZ = satY0 * sinBeta + satZ0 * cosBeta;

      // Draw faint orbit ring (foreground segment only)
      ctx.strokeStyle = "rgba(99, 102, 241, 0.08)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      // Simple ellipse approximation for orbit path
      ctx.ellipse(centerX, centerY, satR, satR * 0.6, -Math.PI / 8, 0, Math.PI * 2);
      ctx.stroke();

      // Draw satellite dot
      const isFront = satZ > 0;
      ctx.fillStyle = isFront ? "rgba(244, 63, 94, 0.9)" : "rgba(244, 63, 94, 0.25)";
      ctx.shadowBlur = isFront ? 8 : 0;
      ctx.shadowColor = "#f43f5e";
      ctx.beginPath();
      ctx.arc(centerX + satX, centerY + satY, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="relative w-[300px] h-[300px] flex items-center justify-center">
      {/* Halo backup rings */}
      <div className="absolute w-[240px] h-[240px] rounded-full border border-cyan-500/10 pointer-events-none"></div>
      <div className="absolute w-[200px] h-[200px] rounded-full border border-indigo-500/5 pointer-events-none"></div>
      
      {/* Main Canvas Globe */}
      <canvas ref={canvasRef} className="relative z-10" />
    </div>
  );
};

export default EarthGlobe3D;
