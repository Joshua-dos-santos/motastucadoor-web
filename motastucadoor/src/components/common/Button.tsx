import type { ReactNode } from "react";
import { Link } from "react-router";

type ButtonVariant = "primary" | "secondary";

type BaseButtonProps = {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  to?: string;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
};

type ButtonProps = BaseButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-transparent bg-[var(--color-mota-orange)] text-white shadow-sm hover:bg-[#d93d19] focus-visible:outline-[var(--color-mota-orange)]",
  secondary:
    "border-[var(--color-mota-dark)] bg-white text-[var(--color-mota-dark)] hover:border-[var(--color-mota-orange)] hover:text-[var(--color-mota-orange)] focus-visible:outline-[var(--color-mota-dark)]",
};

function Button(props: ButtonProps) {
  const {
    children,
    className = "",
    disabled = false,
    onClick,
    to,
    type = "button",
    variant = "primary",
  } = props;

  const classes = [
    "inline-flex items-center justify-center rounded-md border px-5 py-3 text-base font-bold leading-none no-underline transition-colors",
    "focus-visible:outline-2 focus-visible:outline-offset-2",
    variantClasses[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (to) {
    return (
      <Link
        to={to}
        className={classes}
        aria-disabled={disabled || undefined}
        onClick={disabled ? undefined : onClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
