import React, { ReactNode } from "react";

interface IButton {
  children: ReactNode;
  secondary?: boolean;
}

const Button: React.FC<IButton & React.HTMLAttributes<HTMLButtonElement>> = ({
  children,
  secondary,
  className,
}) =>
  secondary ? (
    <button
      className={`px-4 py-2 border border-gray-400 text-gray-400 rounded-md ${className}`}
    >
      {children}
    </button>
  ) : (
    <button
      className={`px-4 py-2 bg-btn-primary text-white rounded-md ${className}`}
    >
      {children}
    </button>
  );

export default Button;
