import React, { useEffect, useRef, useState } from 'react';
import { Truck, Bus, Car, Droplets } from 'lucide-react';

// Vehicle types with icons and colors
const vehicleTypes = [
  { id: 1, type: 'truck', Icon: Truck, color: '#01F7CB', label: 'Truck' },
  { id: 2, type: 'bus', Icon: Bus, color: '#76FE2A', label: 'Bus' },
  { id: 3, type: 'car', Icon: Car, color: '#3B82F6', label: 'Car' },
  { id: 4, type: 'sweeper', Icon: Droplets, color: '#8B5CF6', label: 'Sweeper' },
  { id: 5, type: 'truck', Icon: Truck, color: '#F59E0B', label: 'Truck' },
  { id: 6, type: 'car', Icon: Car, color: '#EF4444', label: 'Car' },
];

// Generate random path for vehicles
const generatePath = (startX, startY) => {
  const points = [{ x: startX, y: startY }];
  let x = startX;
  let y = startY;
  
  for (let i = 0; i < 6; i++) {
    x += (Math.random() - 0.5) * 30;
    y += (Math.random() - 0.5) * 20;
    x = Math.max(5, Math.min(95, x));
    y = Math.max(5, Math.min(85, y));
    points.push({ x, y });
  }
  return points;
};

const RealTimeMapAnimation = () => {
  const canvasRef = useRef(null);
  const [vehicles, setVehicles] = useState([]);
  const animationRef = useRef();
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  useEffect(() => {
    // Initialize vehicles
    const initialVehicles = vehicleTypes.map((v, i) => ({
      ...v,
      path: generatePath(10 + (i * 15), 15 + (i * 10)),
      currentPoint: 0,
      progress: 0,
      speed: 0.005 + Math.random() * 0.005,
      rotation: 0,
    }));
    setVehicles(initialVehicles);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || vehicles.length === 0) return;

    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const drawMapBackground = () => {
      // Dark map background
      ctx.fillStyle = '#1a1a2e';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw grid lines (road-like)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      
      // Horizontal roads
      for (let y = 0; y < canvas.height; y += canvas.height / 6) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Vertical roads
      for (let x = 0; x < canvas.width; x += canvas.width / 8) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Draw main highways (thicker lines)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.lineWidth = 3;
      
      // Highway 1
      ctx.beginPath();
      ctx.moveTo(0, canvas.height * 0.3);
      ctx.lineTo(canvas.width, canvas.height * 0.35);
      ctx.stroke();
      
      // Highway 2
      ctx.beginPath();
      ctx.moveTo(canvas.width * 0.2, 0);
      ctx.lineTo(canvas.width * 0.25, canvas.height);
      ctx.stroke();
      
      // Highway 3
      ctx.beginPath();
      ctx.moveTo(canvas.width * 0.7, 0);
      ctx.lineTo(canvas.width * 0.75, canvas.height);
      ctx.stroke();
    };

    const drawVehicle = (vehicle) => {
      const { path, currentPoint, progress, color, rotation } = vehicle;
      const start = path[currentPoint];
      const end = path[(currentPoint + 1) % path.length];
      
      // Interpolate position
      const x = start.x + (end.x - start.x) * progress;
      const y = start.y + (end.y - start.y) * progress;
      
      const pixelX = (x / 100) * canvas.width;
      const pixelY = (y / 100) * canvas.height;
      
      // Calculate rotation angle
      const angle = Math.atan2(end.y - start.y, end.x - start.x);
      
      // Draw vehicle glow/pulse
      const gradient = ctx.createRadialGradient(
        pixelX, pixelY, 0,
        pixelX, pixelY, 20
      );
      gradient.addColorStop(0, `${color}60`);
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(pixelX, pixelY, 20, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw vehicle circle
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(pixelX, pixelY, 8, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw direction indicator (arrow)
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(pixelX, pixelY);
      ctx.lineTo(
        pixelX + Math.cos(angle) * 12,
        pixelY + Math.sin(angle) * 12
      );
      ctx.stroke();
      
      // Draw small dot in center
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(pixelX, pixelY, 3, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw vehicle label if selected
      if (selectedVehicle === vehicle.id) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
        ctx.fillRect(pixelX - 30, pixelY - 35, 60, 20);
        ctx.fillStyle = '#fff';
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(vehicle.label, pixelX, pixelY - 22);
      }
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
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [vehicles.length, selectedVehicle]);

  const handleCanvasClick = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Check if clicked near any vehicle
    vehicles.forEach(vehicle => {
      const start = vehicle.path[vehicle.currentPoint];
      const end = vehicle.path[(vehicle.currentPoint + 1) % vehicle.path.length];
      const vx = start.x + (end.x - start.x) * vehicle.progress;
      const vy = start.y + (end.y - start.y) * vehicle.progress;
      const pixelX = (vx / 100) * canvas.width;
      const pixelY = (vy / 100) * canvas.height;
      
      const distance = Math.sqrt((x - pixelX) ** 2 + (y - pixelY) ** 2);
      if (distance < 15) {
        setSelectedVehicle(selectedVehicle === vehicle.id ? null : vehicle.id);
      }
    });
  };

  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden bg-gray-900">
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-pointer"
        onClick={handleCanvasClick}
      />
      
      {/* Vehicle counter */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-2xl px-6 py-4 text-center border border-gray-700">
        <p className="text-3xl font-bold text-white">2,021</p>
        <p className="text-xs text-gray-400 uppercase tracking-wider">Vehicles Online</p>
      </div>
      
      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-gray-800/90 backdrop-blur-sm rounded-lg px-3 py-2 border border-gray-700">
        <div className="flex space-x-3">
          {vehicleTypes.slice(0, 4).map(v => (
            <div key={v.id} className="flex items-center space-x-1">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: v.color }}
              />
              <span className="text-xs text-gray-300">{v.label}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Click instruction */}
      <div className="absolute top-4 left-4 text-gray-500 text-xs">
        Click vehicles to identify
      </div>
    </div>
  );
};

export default RealTimeMapAnimation;