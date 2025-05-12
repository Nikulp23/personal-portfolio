// Timeline.js
import React, { useState } from 'react';

// Inline styles
const containerStyle = {
  position: 'relative',
  margin: '30px auto',          // center on page
  padding: '0',
  maxWidth: '900px',             // control how wide the timeline can grow
};

const lineStyle = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: '50%',
  width: '4px',
  background: 'white',
  transform: 'translateX(-50%)',
  zIndex: 1,
};

const dotStyle = {
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '12px',
  height: '12px',
  background: 'var(--mantine-color-blue-filled)',
  borderRadius: '50%',
  zIndex: 1,
};

const logoWrapperStyle = {
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '70px',
  height: '70px',
  background: '#fff',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 2,
};

const logoStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  borderRadius: '10%',  // or '50%' if you want perfectly round logos
};

export function SimpleTimeline({ items }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div style={containerStyle}>
      <div style={lineStyle} />

      {items.map((item, idx) => {
        const isLeft = item.side === 'left';
        const isHovered = hoveredIndex === idx;

        return (
          <div
            key={idx}
            style={{
              display: 'flex',
              justifyContent: isLeft ? 'flex-start' : 'flex-end',
              width: '100%',
              padding: '0 0px',      // 20px gutter on both sides
              marginBottom: '50px',
              position: 'relative',
            }}
          >
            {/* The white “card” */}
            <div
              style={{
                width: 'calc(50% - 70px)',     // fill half the space minus the 20px gutters
                textAlign: isLeft ? 'right' : 'left',
                background: '#fff',
                borderRadius: '12px',
                boxShadow: isHovered
                  ? '0 4px 16px rgba(0, 0, 0, 0.15)'
                  : '0 2px 8px rgba(0, 0, 0, 0.1)',
                padding: '12px 12px',
                fontSize: '0.9rem',
                lineHeight: 1.4,
                color: '#333',
                transform: isHovered ? 'scale(1.03)' : 'scale(1)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                style={{
                  fontWeight: 600,
                  marginBottom: 4,
                  fontSize: '0.95rem',
                  color: 'var(--mantine-color-blue-filled)',
                }}
              >
                {item.date}
              </div>
              <div style={{ fontWeight: 600 }}>{item.description}</div>
            </div>

            {item.logo ? (
              <div style={logoWrapperStyle}>
                <img src={item.logo} alt="" style={logoStyle} />
              </div>
            ) : (
              <div style={dotStyle} />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default SimpleTimeline;