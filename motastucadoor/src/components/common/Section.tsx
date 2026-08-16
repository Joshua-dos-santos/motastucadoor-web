import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`py-16 lg:py-24 ${className}`}>
      {children}
    </section>
  );
}

export default Section;
