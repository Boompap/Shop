"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const products = [
  "Τυρόπιτα Σφολιάτα",
  "Ζαμπονοτυρόπιτα",
  "Λουκανικόπιτα",
  "Κασερόπιτα",
  "Πιροσκί",
  "Πίτσα Σφολιάτα",
];

export default function SfoliatoidiPopup() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
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
              className="sfoliatoidiModal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="sfoliatoidi-title"
            >
              <button
                className="sfoliatoidiClose"
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Κλείσιμο"
              >
                ×
              </button>

              <h2 id="sfoliatoidi-title">
                <span className="el">Σφολιατοειδή</span>
                <span className="en">Savory pastries</span>
              </h2>

              <div className="sfoliatoidiList">
                {products.map((product) => (
                  <div className="sfoliatoidiItem" key={product}>
                    <span>{product}</span>
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
