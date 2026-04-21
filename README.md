# Nadin Isuf Portfolio

Luxury editorial portfolio site built with Next.js, React, and a lightweight JSON content layer.

## Routes

- `/` Home
- `/about` About, vision, mission, skills, education, languages
- `/projects` Project index
- `/projects/[slug]` Editorial project case study
- `/blog` Journal index
- `/blog/[slug]` Journal article
- `/contact` Contact details and inquiry form

## Editing Content

Projects live in `content/projects.json`.

Each project needs:

- `slug`
- `title`
- `category`
- `location`
- `year`
- `coverImage`
- `heroImage`
- `shortDescription`
- `concept`
- `spatialIdea`
- `materials`
- `gallery`

Blog posts live as Markdown files in `content/blog/`.

Each post needs:

- `slug`
- `title`
- `date`
- `coverImage`
- `preview`
- `published`

Write the post text below the frontmatter. Set `published: false` to keep a draft hidden.

After adding a project or post, the route is generated from its `slug`.

## Development

The project uses pnpm on this machine.

To start the site:

```bash
/Users/nadin./Library/pnpm/pnpm dev
```

Open `http://localhost:3000`.

To verify the production build:

```bash
/Users/nadin./Library/pnpm/pnpm build
```
