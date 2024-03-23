import React from "react";

interface ButtonProps {
  text: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  text,
  className,
  onClick,
  type = "button",
}) => {
  return (
    <button
      className={`bg-purple-700 text-white font-normal text-sm lg:text-base p-[6px] lg:px-[10px] ${className}`}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
