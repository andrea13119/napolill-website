'use client';

import React from 'react';

interface NapolillLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon';
}

export function NapolillLogo({ className = '', size = 'md', variant = 'full' }: NapolillLogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16', 
    xl: 'w-24 h-24'
  };

  return (
    <img 
      src="/images/icons/logo_napolill.svg" 
      alt="Napolill Logo" 
      className={`${sizeClasses[size]} ${className}`}
      style={{
        filter: 'var(--logo-filter, none)',
      }}
    />
  );
}
