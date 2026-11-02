# Campfire 2026 · Clever CS IDM Hackathon

A simple hackathon hub for three teams of three. Each team builds an interactive Clever IDM training a CS agent can complete asynchronously in 30 minutes or less.

## Run locally

Use Node.js 22 LTS or newer and npm.

```sh
npm install
npm run dev
```

Open http://127.0.0.1:3000.

```sh
npm run build
npm run typecheck
```

## Update the site

- **Team assignments and resource URLs:** `app/content.ts`
- **Page copy and sections:** `app/page.tsx`
- **Colors, layout, and responsive styles:** `app/globals.css`
- **Browser title and description:** `app/layout.tsx`

SMEs are Adam (Team 01), Nikkole (Team 02), and Keith (Team 03). Builders, Learning Designers, and topics are TBD. No event dates beyond the Builder checkpoint are assumed. There is no database, login, or shared editing interface; update the source to publish new information.

## Resources

- [Builder Golden Path](https://github.com/legertom/golden-path-setup)
- [Learning Designer ramp-up: Fifteen Pieces](https://fifteen-pieces.vercel.app)

The November 6, 5pm Builder checkpoint and approximate setup duration come from the Golden Path guide. Confirm with the organizers if plans change.

## Hosting later

GitHub Pages publishing is configured in `.github/workflows/pages.yml`. Once Pages is enabled with GitHub Actions as its source, pushes to `main` build and publish the site automatically.

The Pages build sets `GITHUB_PAGES=true` to export static files to `out/` with the repository's URL prefix. Preview development locally with `npm run dev` as usual; the prefix applies only to Pages builds.

Expected Pages URL: https://legertom.github.io/cs-campfire-idm-hackathon/

This is also a standard Next.js App Router app ready to import from GitHub into Vercel. No environment variables are required for Vercel. This project has **not** been deployed or connected to Vercel.
