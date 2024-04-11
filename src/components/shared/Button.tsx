import React from "react";

interface ButtonProps {
  text: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  disable?:boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  text,
  className,
  onClick,
  disable,
  type = "button",
}) => {
  return (
    <button
      className={`w-full bg-primary text-white font-normal p-2 text-lg ${className && className}`}
      onClick={onClick && onClick}
      type={type && type}
      disabled={disable && disable}
    >
      {text}
    </button>
  );
};

export default Button;
