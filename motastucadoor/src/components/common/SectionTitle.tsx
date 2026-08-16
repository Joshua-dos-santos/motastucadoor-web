type SectionTitleProps = {
  align?: "left" | "center";
  description?: string;
  eyebrow?: string;
  title: string;
};

function SectionTitle({
  align = "left",
  description,
  eyebrow,
  title,
}: SectionTitleProps) {
  const isCenter = align === "center";

  return (
    <div className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-[var(--color-mota-orange)]">
          {eyebrow}
        </p>
      ) : null}
      <h2>{title}</h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-[var(--color-text-muted)] md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default SectionTitle;
