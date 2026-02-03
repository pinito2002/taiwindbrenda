import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "destructive";
  rounded?: boolean;
}

export const Button = ({
  variant = "primary",
  rounded = false,
  children,
  ...props
}: ButtonProps) => {
  let className =
    "px-4 py-2 text-sm font-semibold shadow";

  // Bordes
  className += rounded ? " rounded-full" : " rounded-md";

  // Variantes
  if (variant === "outline") {
    className +=
      " bg-white text-gray-900 ring-1 ring-gray-300";
  } else if (variant === "destructive") {
    className +=
      " bg-red-500 text-white";
  } else {
    className +=
      " bg-indigo-600 text-white";
  }

  return (
    <button type="button" className={className} {...props}>
      {children}
    </button>
  );
};
