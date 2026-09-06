"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const products = [
  { greek: "Τυρόπιτα Σφολιάτα", english: "Cheese pie pastry" },
  { greek: "Ζαμπονοτυρόπιτα", english: "Ham and cheese pie" },
  { greek: "Λουκανικόπιτα", english: "Sausage pie" },
  { greek: "Κασερόπιτα", english: "Kasseri cheese pie" },
  { greek: "Πιροσκί", english: "Piroshki" },
  { greek: "Πίτσα Σφολιάτα", english: "Pizza pastry" },
];

export default function SfoliatoidiPopup() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusable = modalRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );

      if (!focusable?.length) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      }

      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    closeButtonRef.current?.focus();
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      openerRef.current?.focus();
    };
  }, [open]);

  const popup =
    open && mounted
      ? createPortal(
          <div
            className="sfoliatoidiOverlay"
            role="presentation"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setOpen(false);
              }
            }}
          >
            <div
              ref={modalRef}
              className="sfoliatoidiModal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="sfoliatoidi-title"
            >
              <button
                ref={closeButtonRef}
                className="sfoliatoidiClose"
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Κλείσιμο / Close"
              >
                ×
              </button>

              <h2 id="sfoliatoidi-title">
                <span className="el">Σφολιατοειδή</span>
                <span className="en">Savory pastries</span>
              </h2>

              <div className="sfoliatoidiList">
                {products.map((product) => (
                  <div className="sfoliatoidiItem" key={product.greek}>
                    <span className="el">{product.greek}</span>
                    <span className="en">{product.english}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <button
        ref={openerRef}
        className="sfoliatoidiOpen"
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Δες τα προϊόντα Τυρόπιτες και σφολιάτες"
      >
        <span className="el">Δες τα προϊόντα</span>
        <span className="en">View products</span>
      </button>

      {popup}
    </>
  );
}
