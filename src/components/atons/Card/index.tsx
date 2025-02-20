import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-white shadow-sm rounded-lg overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};