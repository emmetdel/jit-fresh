import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

type ButtonVariant = "primary" | "secondary" | "danger";

interface ButtonProps extends JSX.HTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({ variant = "primary", ...props }: ButtonProps) {
  const baseStyles = "px-4 py-2 border rounded transition-colors";

  const variantStyles = {
    primary: "border-border bg-primary hover:bg-primary-hover text-white",
    secondary: "border-border bg-secondary hover:bg-secondary-hover text-white",
    danger: "border-border bg-danger hover:bg-danger-hover text-danger-content",
  };

  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class={`${baseStyles} ${variantStyles[variant]} ${props.class ?? ""}`}
    />
  );
}
