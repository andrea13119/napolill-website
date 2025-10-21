'use client';

import React from 'react';

interface WebsiteHeaderProps {
  className?: string;
  variant?: 'desktop' | 'mobile';
}

export function WebsiteHeader({ className = '', variant = 'desktop' }: WebsiteHeaderProps) {
  const baseClasses = "w-full h-full object-cover object-center transition-all duration-300 min-h-screen";
  
  if (variant === 'mobile') {
    return (
      <div className={`${baseClasses} md:hidden ${className}`}>
        <img 
          src="/images/icons/website-header_mobile.svg" 
          alt="Napolill Website Header Mobile" 
          className="w-full h-full object-cover object-center opacity-100 transition-all duration-300 min-h-screen"
          style={{
            filter: 'var(--header-filter, none)',
            opacity: 'var(--header-opacity, 1)',
          }}
        />
      </div>
    );
  }

  return (
    <div className={`${baseClasses} hidden md:block ${className}`}>
      <img 
        src="/images/icons/website-header.svg" 
        alt="Napolill Website Header Desktop" 
        className="w-full h-full object-cover object-center opacity-100 transition-all duration-300 min-h-screen"
        style={{
          filter: 'var(--header-filter, none)',
          opacity: 'var(--header-opacity, 1)',
        }}
      />
    </div>
  );
}
