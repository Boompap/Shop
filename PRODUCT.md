# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary users are local customers in or near Agios Stefanos who want to quickly decide what RIZOS offers, when the shop is open, and how to visit or call.

## Product Purpose

The site advertises Bougatsopoleio RIZOS in Agios Stefanos. It helps visitors understand the shop's bougatsa, pastry, coffee, and snack offerings, then move directly to practical actions: get directions, call, visit Facebook, or check business-listing information.

Success means a visitor can recognize the shop, see the food and storefront, confirm hours and location, and confidently choose to visit or contact the business.

## Positioning

RIZOS is positioned as a local bougatsa shop centered on daily handmade products, with chocolate bougatsa as the signature specialty, alongside coffee, savory pastries, peinirli, individual pizza, brioche, drinks, and quick everyday bakery choices.

## Operating Context

The site is a Greek-first landing page with an English language toggle. Visitors may arrive from search, social links, GitHub Pages, or shared links while deciding where to buy breakfast, coffee, bougatsa, or a quick snack.

The core visitor flow is scanning the product showcase, checking location and hours, then using the Google Maps, Facebook, listing, or phone links.

## Capabilities and Constraints

The source of truth is the React/vinext application, especially `app/page.tsx`, `app/globals.css`, `components/`, and `public/`. Do not replace it with a standalone static HTML copy, and do not create a root-level `index.html`.

The project uses npm, vinext, React, Tailwind CSS, and TypeScript. The local development command is `npm run dev`, and the project requires Node.js >= 22.13.0.

Preserve the Greek-first experience, English toggle, address, hours, phone number, Google Maps link, Facebook link, business-listing link, and real shop/product imagery unless the user explicitly updates those facts.

Known shop details currently represented in the site:

- Address: Leof. Kryoneriou 17, Agios Stefanos 145 65.
- Phone: 21 0814 1388.
- Hours: Monday-Friday 05:00-20:00; Saturday-Sunday 05:00-15:00.

## Brand Commitments

The business name is Μπουγατσοπωλείο ΡΙΖΟΣ / RIZOS. Existing copy is Greek-first and direct, with concise English translations for visitors who need them.

Real product and shop images live in `public/rizos`. Existing brand and proof assets include `public/rizos/logo.jpg`, `public/rizos/Award.png`, and `public/rizos/AwardDetails.png`.

## Evidence on Hand

The repository contains real product and shop imagery in `public/rizos`, including storefront photos, bougatsa, pastry, coffee, brioche, peinirli, pizza, flags, logo, and award assets.

The site currently includes "Χρυσή Εταιρεία 2026 / Gold Company 2026", "4.5", and "215 reviews" content linked to the business listing. Future work must not fabricate additional awards, testimonials, review counts, customers, press, menu prices, or operational claims without user confirmation.

## Product Principles

Make the practical decision fast: what is offered, where the shop is, when it is open, and how to contact or navigate there.

Lead with real food and real place evidence rather than generic bakery claims.

Respect the local Greek audience first while keeping English access available and clear.

Preserve factual shop information carefully; location, hours, phone, and proof claims are business-critical.

Keep one source of truth in the React/vinext app so local and deployed versions stay aligned.
