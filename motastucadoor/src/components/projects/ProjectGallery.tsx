import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import Container from "../common/Container";
import Section from "../common/Section";

const placeholders = Array.from({ length: 9 }, (_, index) => index + 1);

function ProjectGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const activeProject = activeIndex === null ? null : placeholders[activeIndex];

  const closeLightbox = () => setActiveIndex(null);

  const showPrevious = () => {
    setActiveIndex((current) => {
      if (current === null) {
        return current;
      }

      return current === 0 ? placeholders.length - 1 : current - 1;
    });
  };

  const showNext = () => {
    setActiveIndex((current) => {
      if (current === null) {
        return current;
      }

      return current === placeholders.length - 1 ? 0 : current + 1;
    });
  };

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) => {
          if (current === null) {
            return current;
          }

          return current === 0 ? placeholders.length - 1 : current - 1;
        });
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((current) => {
          if (current === null) {
            return current;
          }

          return current === placeholders.length - 1 ? 0 : current + 1;
        });
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  return (
    <Section className="pt-10">
      <Container>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {placeholders.map((item, index) => (
            <article
              key={item}
              className="overflow-hidden rounded-xl border border-[var(--color-border)] bg-white shadow-[0_16px_40px_rgba(63,65,67,0.08)]"
            >
              <button
                type="button"
                className="flex aspect-[4/3] w-full flex-col justify-between bg-[linear-gradient(135deg,#ffffff,#f7f7f6)] p-5 text-left transition-colors hover:bg-[linear-gradient(135deg,#ffffff,#fff3ef)] focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[var(--color-mota-orange)]"
                aria-label={`Projectbeeld ${item} openen`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="text-sm font-bold text-[var(--color-mota-orange)]">
                  0{item}
                </span>
                <div>
                  <div className="mb-4 h-1.5 w-20 rounded-full bg-[var(--color-mota-orange)]" />
                  <h2 className="text-xl">Projectbeeld</h2>
                </div>
              </button>
            </article>
          ))}
        </div>
      </Container>

      {activeProject ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-lightbox-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeLightbox();
            }
          }}
        >
          <div className="w-full max-w-4xl rounded-xl bg-white p-4 shadow-[0_24px_80px_rgba(0,0,0,0.35)] md:p-6">
            <div className="mb-4 flex items-center justify-between gap-4">
              <h2 id="project-lightbox-title" className="text-xl md:text-2xl">
                Projectbeeld 0{activeProject}
              </h2>
              <button
                type="button"
                ref={closeButtonRef}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--color-border)] text-[var(--color-mota-dark)] transition-colors hover:border-[var(--color-mota-orange)] hover:text-[var(--color-mota-orange)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-mota-orange)]"
                aria-label="Lightbox sluiten"
                onClick={closeLightbox}
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>

            <div
              className="flex aspect-[4/3] min-h-64 flex-col justify-between rounded-lg border border-[var(--color-border)] bg-[linear-gradient(135deg,#ffffff,#f7f7f6)] p-6"
              role="img"
              aria-label={`Groot projectbeeld 0${activeProject}`}
            >
              <span className="text-base font-bold text-[var(--color-mota-orange)]">
                0{activeProject}
              </span>
              <div>
                <div className="mb-5 h-2 w-28 rounded-full bg-[var(--color-mota-orange)]" />
                <p className="text-lg font-bold text-[var(--color-mota-dark)]">
                  Placeholder voor toekomstig projectbeeld
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] px-4 py-3 text-sm font-bold text-[var(--color-mota-dark)] transition-colors hover:border-[var(--color-mota-orange)] hover:text-[var(--color-mota-orange)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-mota-orange)]"
                onClick={showPrevious}
              >
                <ChevronLeft size={18} aria-hidden="true" />
                Vorige
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] px-4 py-3 text-sm font-bold text-[var(--color-mota-dark)] transition-colors hover:border-[var(--color-mota-orange)] hover:text-[var(--color-mota-orange)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-mota-orange)]"
                onClick={showNext}
              >
                Volgende
                <ChevronRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </Section>
  );
}

export default ProjectGallery;
