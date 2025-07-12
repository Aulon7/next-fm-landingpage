import React from "react";

type ButtonTypes = {
  children: React.ReactNode;
  className?: string;
};

const Button = ({ children, className }: ButtonTypes) => {
  return <button className={className}>{children}</button>;
};

export default Button;
