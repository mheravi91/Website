# Research project page (this fork)

![Live demo](public/screenshot-light.png)

A minimal, fast, and accessible project page template adapted and maintained by Mohammad Heravi. This fork makes it easy to publish short project or paper pages with minimal configuration — just edit a Markdown/MDX file and deploy.

Live demo: https://research-template.roman.technology

Badges

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/romanhauksson/academic-project-astro-template) [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FRomanHauksson%2Facademic-project-astro-template)

Why use this

- Fast static site built with Astro + Tailwind CSS (best for small project pages)
- Simple content workflow: add or edit MDX files under `src/papers/`
- Built-in components for images, figures, LaTeX (KaTeX), videos, and image comparisons

Quick links

- Live demo: https://research-template.roman.technology
- Template repo (upstream): https://github.com/RomanHauksson/academic-project-astro-template
- Original inspiration: https://nerfies.github.io/

Quick start

1. Install dependencies:

```bash
npm install
```

2. Run locally:

```bash
npm run dev
```

3. Edit content: update your paper pages in `src/papers/` (MDX). Frontmatter supports `title`, `description`, `favicon`, `thumbnail`, `authors`, `conference`, `links`, and `year`.

4. Build for production:

```bash
npm run build
```

Credits & license

Based on the Academic Project Page Template by Roman Hauksson:

- Roman Hauksson — https://github.com/RomanHauksson/academic-project-astro-template

License: CC BY-SA 4.0
