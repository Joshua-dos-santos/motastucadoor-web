import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_16px_40px_var(--color-shadow)] ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
