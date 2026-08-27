"use client";

import { useEffect, useState } from "react";

export default function StickyNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const difference = currentScrollY - lastScrollY;

      // Near the top: always hide it.
      if (currentScrollY < 180) {
        setVisible(false);
        lastScrollY = currentScrollY;
        return;
      }

      // Ignore tiny scroll movements so it does not flicker.
      if (Math.abs(difference) < 8) {
        return;
      }

      // Scrolling down = show.
      if (difference > 0) {
        setVisible(true);
      }

      // Scrolling up = hide.
      if (difference < 0) {
        setVisible(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`stickyNav ${visible ? "stickyNavVisible" : ""}`}>
      <a className="stickyBrand" href="#top" aria-label="ΜΠΟΥΓΑΤΣΟΠΩΛΕΙΟ ΡΙΖΟΣ">
        <span className="stickyBrandMark">Ρ</span>
        <span className="stickyBrandName">ΡΙΖΟΣ</span>
      </a>

      <div className="stickyNavLinks">
        <a href="#products">
          <span className="stickyNavLinkIcon" aria-hidden="true">
            <svg viewBox="0 0 64 48" focusable="false">
              <defs>
                <mask id="stickyNavCroissantCuts">
                  <rect width="64" height="48" style={{ fill: "white" }} />

                  <path
                    d="M18 18c5 5 8 12 8 22"
                    style={{
                      fill: "none",
                      stroke: "black",
                      strokeLinecap: "round",
                      strokeWidth: 5,
                    }}
                  />

                  <path
                    d="M30 10c6 8 8 18 6 31"
                    style={{
                      fill: "none",
                      stroke: "black",
                      strokeLinecap: "round",
                      strokeWidth: 5,
                    }}
                  />

                  <path
                    d="M43 12c-4 8-5 17-3 27"
                    style={{
                      fill: "none",
                      stroke: "black",
                      strokeLinecap: "round",
                      strokeWidth: 5,
                    }}
                  />

                  <path
                    d="M53 22c-6 4-10 10-11 17"
                    style={{
                      fill: "none",
                      stroke: "black",
                      strokeLinecap: "round",
                      strokeWidth: 5,
                    }}
                  />
                </mask>
              </defs>

              <path
                d="M5 30c4-12 16-22 31-25 12 0 22 7 25 17 2 8-1 15-8 20-4 3-9 2-12-2-7 5-18 5-25 0-4 4-9 4-12 0-3-3-2-7 1-10zm9 4c11 7 31 7 42-6-5 3-12 5-20 5s-16-1-22-5c-3 2-3 4 0 6z"
                fillRule="evenodd"
                mask="url(#stickyNavCroissantCuts)"
              />
            </svg>
          </span>

          <span className="stickyNavLinkText">
            <span className="el">Προϊόντα</span>
            <span className="en">Products</span>
          </span>
        </a>

        <a href="#story">
          <span className="stickyNavLinkIcon" aria-hidden="true">
            <svg viewBox="0 0 64 48" focusable="false">
              <path d="M20 6h24v7H20z" />
              <path d="M13 15h38l6 9c-1 5-5 8-9 8-4 0-7-2-8-6-2 4-5 6-8 6s-6-2-8-6c-1 4-4 6-8 6s-8-3-9-8l6-9z" />
              <path d="M15 33h6v10h22V33h6v15H15z" />
            </svg>
          </span>

          <span className="stickyNavLinkText">
            <span className="el">Το μαγαζί</span>
            <span className="en">The shop</span>
          </span>
        </a>

        <a href="#visit">
          <span className="stickyNavLinkIcon" aria-hidden="true">
            <svg viewBox="0 0 64 48" focusable="false">
              <path d="M32 4c-9 0-16 7-16 16 0 12 16 25 16 25s16-13 16-25c0-9-7-16-16-16zm0 22a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
              <path
                d="M20 43c3 3 21 3 24 0 2-2-3-4-12-4s-14 2-12 4z"
                opacity="0.72"
              />
            </svg>
          </span>

          <span className="stickyNavLinkText">
            <span className="el">Τοποθεσία</span>
            <span className="en">Location</span>
          </span>
        </a>

        <a href="#contact">
          <span className="stickyNavLinkIcon" aria-hidden="true">
            <svg viewBox="0 0 64 48" focusable="false">
              <path d="M18 6c-4 2-7 6-7 11 0 15 21 25 35 25 5 0 9-3 11-7l-10-8c-2 2-4 4-7 4-6 0-17-8-17-14 0-3 2-5 4-7L18 6z" />
              <path
                d="M43 8c7 2 11 6 13 13l-5 1c-1-5-5-8-9-10l1-4z"
                opacity="0.72"
              />
            </svg>
          </span>

          <span className="stickyNavLinkText">
            <span className="el">Επικοινωνία</span>
            <span className="en">Contact</span>
          </span>
        </a>
      </div>

      <div className="stickyLanguageToggle" aria-label="Language">
        <label htmlFor="lang-el">
          <img
            className="stickyLanguageFlag"
            src="/rizos/flag-greece.png"
            alt=""
          />
          <span>EL</span>
        </label>

        <label htmlFor="lang-en">
          <img className="stickyLanguageFlag" src="/rizos/flag-uk.png" alt="" />
          <span>EN</span>
        </label>
      </div>
    </header>
  );
}
