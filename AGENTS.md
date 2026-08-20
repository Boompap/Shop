# Rizos Website Instructions

## Source of truth

The actual website is the React/vinext application.

The primary files are:

- `app/page.tsx`
- `app/globals.css`
- `components/`
- `public/`

Do not replace the React site with a standalone static HTML copy.

## Important: root index.html

Do NOT create, restore, generate, or merge a root-level `index.html`.

A root `index.html` previously caused two major problems:

1. `npm run dev` failed with:
   `Failed to load "/index.html"`

2. GitHub Pages served the old standalone HTML site instead of the current React site.

The old `index.html` was renamed to `index-old-backup.html` specifically to fix this.

If deployment requires an `index.html`, generate it only as part of the proper build/deployment output. Do not place a manually maintained copy in the repository root.

## Local development

This project uses npm.

Before assuming the application is working, verify:

npm install
npm run dev

The local React site must load successfully.

The project currently requires Node.js >= 22.13.0.

## Before pushing changes

Before pushing or merging changes:

1. Preserve the current React/vinext structure.
2. Do not reintroduce a root `index.html`.
3. Make sure `npm run dev` can start.
4. Run `npm run build` when changes affect deployment or configuration.
5. Do not replace `app/page.tsx` or `app/globals.css` with generated static HTML/CSS.
6. Do not modify deployment configuration just to make GitHub Pages work without first checking how the React app is supposed to be built and deployed.

## GitHub Pages

The goal is for the deployed GitHub Pages site to match the current local React site.

Do not solve GitHub Pages deployment by creating a separate manually maintained version of the website.

There must only be one source of truth for the website: the React application.
