import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'hero';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      primary: "bg-gradient-to-r from-primary to-secondary text-button-text hover:shadow-xl hover:scale-105 focus:ring-accent active:scale-95 modern-button",
      secondary: "bg-gradient-to-r from-secondary to-primary text-button-text hover:shadow-lg hover:scale-105 focus:ring-accent modern-button",
      outline: "border-2 border-accent/30 text-accent hover:bg-accent hover:text-button-text focus:ring-accent modern-button backdrop-blur-sm",
      ghost: "text-foreground hover:bg-accent/10 hover:text-accent focus:ring-accent modern-button",
      hero: "bg-gradient-to-r from-accent via-primary to-secondary text-button-text hover:shadow-2xl hover:scale-110 focus:ring-accent active:scale-95 font-semibold modern-button"
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg"
    };

    return (
      <button
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
