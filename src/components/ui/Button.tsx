import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  text?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  text,
  className,
  children,
  ...rest
}) => {
  const baseClasses = "px-4 py-2 rounded";

  let variantClasses = "";
  if (variant === "primary") {
    variantClasses = "bg-blue-500 text-white";
  } else if (variant === "secondary") {
    variantClasses = "bg-gray-500 text-white";
  }

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...rest}
    >
      {text || children}
    </button>
  );
};

export default Button;
