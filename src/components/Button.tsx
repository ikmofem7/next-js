import React, { FC, ReactNode } from "react";

type ButtonProps = {
  variant: string;
  children: ReactNode;
};

const Button: FC<ButtonProps> = ({ variant, children }) => {
  return <div>{children}</div>;
};

export default Button;
