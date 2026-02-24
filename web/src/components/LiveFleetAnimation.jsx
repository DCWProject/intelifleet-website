import React, { useEffect, useRef, useState } from 'react';
import { Truck, Bus, Car, Droplets } from 'lucide-react';

const vehicleTypes = [
  { id: 1, type: 'truck', icon: Truck, color: '#01F7CB', size: 28 },
  { id: 2, type: 'bus', icon: Bus, color: '#76FE2A', size: 32 },
  { id: 3, type: 'car', icon: Car, color: '#3B82F6', size: 24 },
  { id: 4, type: 'sweeper', icon: Droplets, color: '#8B5CF6', size: 26 },
  { id: 5, type: 'truck', icon: Truck, color: '#F59E0B', size: 28 },
  { id: 6, type: 'car', icon: Car, color: '#EF4444', size: 24 },
];

// Generate random paths for vehicles
const generatePath = (startX, startY) => {
  const points = [];
  let x = startX;
  let y = startY;
  points.push({ x, y });
  
  for (let i = 0; i < 8; i++) {
    x += (Math.random() - 0.5) * 150;
    y += (Math.random() - 0.5) * 100;
    x = Math.max(10, Math.min(90, x));
    y = Math.max(10, Math.min(80, y));
    points.push({ x, y });
  }
  return points;
};

const LiveFleetAnimation = () => {
  const canvasRef = useRef(null);
  const [vehicles, setVehicles] = useState([]);
  const animationRef = useRef();

  useEffect(() => {
    // Initialize vehicles with paths
    const initialVehicles = vehicleTypes.map((v, i) => ({
      ...v,
      path: generatePath(10 + (i * 15), 20 + (i * 12)),
      currentPoint: 0,
      progress: 0,
      speed: 0.003 + Math.random() * 0.004,
    }));
    setVehicles(initialVehicles);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || vehicles.length === 0) return;

    const ctx = canvas.getContext('2d');
    let frameCount = 0;

    const drawMapBackground = () => {
      // Draw grid pattern to simulate map
      ctx.strokeStyle = 'rgba(200, 200, 200, 0.3)';
      ctx.lineWidth = 1;
      
      // Vertical grid lines
      for (let x = 0; x < canvas.width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Horizontal grid lines
      for (let y = 0; y < canvas.height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw some "roads" as thicker lines
      ctx.strokeStyle = 'rgba(150, 150, 150, 0.4)';
      ctx.lineWidth = 3;
      
      // Main horizontal road
      ctx.beginPath();
      ctx.moveTo(0, canvas.height * 0.3);
      ctx.lineTo(canvas.width, canvas.height * 0.3);
      ctx.stroke();
      
      // Main vertical road
      ctx.beginPath();
      ctx.moveTo(canvas.width * 0.4, 0);
      ctx.lineTo(canvas.width * 0.4, canvas.height);
      ctx.stroke();
      
      // Secondary roads
      ctx.beginPath();
      ctx.moveTo(0, canvas.height * 0.6);
      ctx.lineTo(canvas.width, canvas.height * 0.7);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(canvas.width * 0.7, 0);
      ctx.lineTo(canvas.width * 0.65, canvas.height);
      ctx.stroke();
    };

    const drawVehicle = (vehicle) => {
      const { path, currentPoint, progress } = vehicle;
      const start = path[currentPoint];
      const end = path[(currentPoint + 1) % path.length];
      
      // Interpolate position
      const x = start.x + (end.x - start.x) * progress;
      const y = start.y + (end.y - start.y) * progress;
      
      const pixelX = (x / 100) * canvas.width;
      const pixelY = (y / 100) * canvas.height;
      
      // Draw vehicle glow
      const gradient = ctx.createRadialGradient(
        pixelX, pixelY, 0,
        pixelX, pixelY, vehicle.size + 8
      );
      gradient.addColorStop(0, `${vehicle.color}40`);
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(pixelX, pixelY, vehicle.size + 8, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw vehicle circle background
      ctx.fillStyle = vehicle.color;
      ctx.beginPath();
      ctx.arc(pixelX, pixelY, vehicle.size / 2, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw vehicle icon (simplified as dot with direction indicator)
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(pixelX, pixelY, 4, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw direction indicator
      const angle = Math.atan2(end.y - start.y, end.x - start.x);
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(pixelX, pixelY);
      ctx.lineTo(
        pixelX + Math.cos(angle) * 8,
        pixelY + Math.sin(angle) * 8
      );
      ctx.stroke();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      drawMapBackground();
      
      // Update and draw vehicles
      setVehicles(prevVehicles => 
        prevVehicles.map(vehicle => {
          let { currentPoint, progress, speed, path } = vehicle;
          
          progress += speed;
          
          if (progress >= 1) {
            progress = 0;
            currentPoint = (currentPoint + 1) % (path.length - 1);
          }
          
          const updatedVehicle = { ...vehicle, currentPoint, progress };
          drawVehicle(updatedVehicle);
          return updatedVehicle;
        })
      );
      
      frameCount++;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [vehicles.length]);

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        width={600}
        height={200}
        className="w-full h-full rounded-xl"
      />
      
      {/* Center Counter - positioned absolutely over canvas */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-xl shadow-xl px-6 py-4 text-center z-10">
        <p className="text-3xl font-bold text-navy dark:text-white">2,021</p>
        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">Vehicles Online</p>
      </div>
    </div>
  );
};

export default LiveFleetAnimation;