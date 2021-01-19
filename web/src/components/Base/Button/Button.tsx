import React from "react";

export interface ButtonProps {
  className?: string;
  onClick?: () => void;
  active?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({
  className = "",
  active,
  disabled,
  ariaLabel,
  children,
  ...props
}) => {
  return (
    <button
      className={
        "p-2 border" +
        " " +
        (active ? "border-green-500 text-green-500" : "border-gray-400") +
        " " +
        (disabled && "opacity-50 pointer-events-none") +
        " " +
        className
      }
      aria-label={`${ariaLabel} button`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
