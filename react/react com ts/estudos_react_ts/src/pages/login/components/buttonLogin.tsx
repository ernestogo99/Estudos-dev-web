import React, { ReactNode } from "react";

interface IchildrenProp {
  children: ReactNode;
  onClick?: () => void;
  type?: "submit" | "reset" | "button" | undefined;
}

export const ButtonLogin: React.FC<IchildrenProp> = ({
  children,
  onClick,
  type,
}) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};
