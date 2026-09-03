import React, { useState } from 'react';
import type { CSSProperties } from 'react';

type ButtonProps = {
  text: string;
  onClick: () => void;
};

export const DiscoverButton = ({ text, onClick }: ButtonProps) => {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setPressed(false);
      }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      className="font-canela text-xl"
      style={{
        ...styles.button,
        background: pressed ? '#494949' : hovered ? '#b1b1b1' : 'transparent',
        color: hovered || pressed ? '#ffffff' : '#c3c2bf',
      }}
    >
      {text} →
    </button>
  );
};

const styles: Record<string, CSSProperties> = {
 button: {
    cursor: 'pointer',
    padding: '14px 24px',
    border: '1px solid #c3c2bf',
    borderRadius: '30px',
    background: 'transparent',
    color: '#c3c2bf',
  },
};