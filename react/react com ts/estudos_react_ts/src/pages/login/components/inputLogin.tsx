import React from "react";

interface InputLoginprops {
  label: string;
  value: string;
  onChange: (newvalue: string) => void;
  onPressEnter?: () => void;
  tipo?: string;
}

export const InputLogin = React.forwardRef<HTMLInputElement, InputLoginprops>(
  ({ label, value, onChange, onPressEnter, tipo }, ref) => {
    return (
      <label>
        <span>{label}</span>
        <input
          ref={ref}
          value={value}
          type={tipo}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={(event) =>
            event.key === "Enter" ? onPressEnter && onPressEnter() : undefined
          }
        ></input>
      </label>
    );
  }
);
