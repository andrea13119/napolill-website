'use client';

import React from 'react';

interface BrainIconProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function BrainIcon({ className = '', size = 'md' }: BrainIconProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8', 
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  return (
    <img 
      src="/images/icons/brain.svg" 
      alt="Brain Icon" 
      className={`${sizeClasses[size]} object-contain transition-colors duration-300 ${className}`}
      style={{
        filter: 'var(--brain-filter, none)',
        color: 'var(--brain-color, currentColor)',
      }}
    />
  );
}
