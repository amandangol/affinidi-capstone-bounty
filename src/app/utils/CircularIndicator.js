import React from 'react';

const CircularIndicator = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#000"
    >
      <circle
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="5"
        strokeLinecap="round"
        style={{
          strokeDasharray: 126,
          strokeDashoffset: 0,
          animation: 'rotate 2s linear infinite',
        }}
      />
      <style>{`
        @keyframes rotate {
          100% {
            stroke-dashoffset: -126px;
          }
        }
      `}</style>
    </svg>
  </div>
);

export default CircularIndicator;
