import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-[var(--color-border)] bg-white p-6 shadow-[0_16px_40px_rgba(63,65,67,0.08)] ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
