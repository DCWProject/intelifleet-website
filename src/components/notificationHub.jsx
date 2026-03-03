// NotificationHub.jsx
import React from 'react';
import { 
  Bell, 
  Mail, 
  MessageSquare, 
  Globe, 
  Smartphone 
} from 'lucide-react';

const NotificationHub = () => {

  return (
    <div className="relative w-[500px] h-[500px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Glow Effect Behind Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full animate-pulse"></div>
      
      {/* SVG Paths Container (curvy connections) */}
      <svg
        className="absolute inset-0 w-full h-full"
        width="100%"
        height="100%"
        viewBox="0 0 500 500"
      >
        <defs>
          {/* glow filter for moving beams */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        {/* scale up the original 200x100 path to fit 500x500 container */}
        <g
          transform="translate(0 200) scale(2.5)"
          stroke="#3b82f6"
          fill="none"
          strokeWidth="0.4"
          strokeDasharray="100 100"
          pathLength="100"
        >
          <path d="M 31 10 v 15 q 0 5 5 5 h 59 q 5 0 5 5 v 10" />
          <path d="M 77 10 v 10 q 0 5 5 5 h 13 q 5 0 5 5 v 10" />
          <path d="M 124 10 v 10 q 0 5 -5 5 h -14 q -5 0 -5 5 v 10" />
          <path id="p1" d="M 31 10 v 15 q 0 5 5 5 h 59 q 5 0 5 5 v 10" />
          <path id="p2" d="M 77 10 v 10 q 0 5 5 5 h 13 q 5 0 5 5 v 10" />
          <path id="p3" d="M 124 10 v 10 q 0 5 -5 5 h -14 q -5 0 -5 5 v 10" />
          <path id="p4" d="M 170 10 v 15 q 0 5 -5 5 h -60 q -5 0 -5 5 v 10" />
          {/* stroke draw animation repeated */}
          <animate
            attributeName="stroke-dashoffset"
            from="100"
            to="0"
            dur="1s"
            repeatCount="indefinite"
            begin="0s;3s"
            fill="freeze"
            calcMode="spline"
            keySplines="0.25,0.1,0.5,1"
            keyTimes="0; 1"
          />
        </g>
        {/* moving beam circles */}
        <circle r="4" fill="#3b82f6" filter="url(#glow)">
          <animateMotion dur="1s" repeatCount="indefinite" begin="0s;3s" path="M 31 10 v 15 q 0 5 5 5 h 59 q 5 0 5 5 v 10" />
        </circle>
        <circle r="4" fill="#60a5fa" filter="url(#glow)">
          <animateMotion dur="1s" repeatCount="indefinite" begin="0.5s;3.5s" path="M 77 10 v 10 q 0 5 5 5 h 13 q 5 0 5 5 v 10" />
        </circle>
        <circle r="4" fill="#3b82f6" filter="url(#glow)">
          <animateMotion dur="1s" repeatCount="indefinite" begin="1s;4s" path="M 124 10 v 10 q 0 5 -5 5 h -14 q -5 0 -5 5 v 10" />
        </circle>
        <circle r="4" fill="#60a5fa" filter="url(#glow)">
          <animateMotion dur="1s" repeatCount="indefinite" begin="1.5s;4.5s" path="M 170 10 v 15 q 0 5 -5 5 h -60 q -5 0 -5 5 v 10" />
        </circle>
      {/* only the animated curvy paths remain; icons are positioned via ServiceIcon components */}
      </svg>
      
      {/* Service Icons */}
      <ServiceIcon 
        Icon={MessageSquare} 
        color="from-green-400 to-green-600"
        position="top-[80px] left-[80px]"
        label="WhatsApp"
        delay="0s"
      />
      <ServiceIcon 
        Icon={Mail} 
        color="from-red-400 to-red-600"
        position="top-[80px] right-[80px]"
        label="Email"
        delay="0.5s"
      />
      <ServiceIcon 
        Icon={Smartphone} 
        color="from-purple-400 to-purple-600"
        position="bottom-[80px] left-[80px]"
        label="SMS"
        delay="1s"
      />
      <ServiceIcon 
        Icon={Globe} 
        color="from-cyan-400 to-cyan-600"
        position="bottom-[80px] right-[80px]"
        label="Web"
        delay="1.5s"
      />
      
      {/* Central Notification Icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          {/* Ripple Effect */}
          <div className="absolute inset-0 -m-8">
            <div className="w-32 h-32 border-2 border-blue-400/30 rounded-full animate-ping"></div>
            <div className="absolute inset-0 w-32 h-32 border-2 border-blue-400/20 rounded-full animate-ping animation-delay-200"></div>
          </div>
          
          {/* Main Icon Container */}
          <div className="relative w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full shadow-2xl flex items-center justify-center group hover:scale-110 transition-transform duration-300">
            <Bell className="w-12 h-12 text-white" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};



// Service Icon Component
const ServiceIcon = ({ Icon, color, position, label, delay }) => {
  return (
    <div className={`absolute ${position} group`}>
      <div 
        className={`
          relative w-16 h-16 rounded-xl bg-gradient-to-br ${color} 
          shadow-lg flex items-center justify-center
          transform transition-all duration-300 hover:scale-110 hover:rotate-3
          animate-float
        `}
        style={{ animationDelay: delay }}
      >
        <Icon className="w-8 h-8 text-white" />
        
        {/* Tooltip */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-xs text-gray-300 whitespace-nowrap">{label}</span>
        </div>
      </div>
    </div>
  );
};

export default NotificationHub;
