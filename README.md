# Irvine Consulting Group — Website

Public marketing and recruitment site for **Irvine Consulting Group (ICG)** at UC Irvine. The application is a single-page React site with client-side routing, styled with Tailwind CSS and Material UI, and deployed for production at [irvineconsultinggroup.com](https://www.irvineconsultinggroup.com).

## Tech stack

- **React 19** with **Create React App** (`react-scripts`)
- **React Router** (`HashRouter`) for routes compatible with static hosting
- **Tailwind CSS** and **Material UI** for layout and components
- **Framer Motion**, **Lucide React**, and **React Icons** for motion and icons
- **Formspree** for contact form handling

## Repository layout

| Path | Purpose |
|------|---------|
| `icg/` | React application (install dependencies and run commands here) |
| `icg/src/pages/` | Top-level routes: Home, Team, Students, Contact, Events |
| `icg/src/data/teamMembers.js` | Roster: names, roles, categories, LinkedIn URLs, headshot paths |
| `icg/public/standardizedheadshots/` | Primary team headshots (referenced from `teamMembers.js`) |
| `icg/public/` | Static assets: logos, client photos, `CNAME`, `index.html` |

## Prerequisites

- **Node.js** LTS (includes npm)
- A modern browser for local testing

## Local development

```bash
cd icg
npm install
npm start
```

The app serves at [http://localhost:3000](http://localhost:3000) with hot reload.

## Production build

```bash
cd icg
npm run build
```

Output is written to `icg/build/`. The `homepage` field in `icg/package.json` is set for the production domain; adjust if the deploy target changes.

## Deployment

The project includes **gh-pages** configuration for GitHub Pages (`npm run deploy` from `icg/` after configuring the remote and branch workflow your team uses). Production DNS is declared via `icg/public/CNAME` for the custom domain.

Follow your organization’s release process for merging to the branch that publishes the live site.

## Updating team content

1. Add or replace images under `icg/public/standardizedheadshots/`. Use clear file names (for example `First Last.jpg` or `.png`) and keep sizing consistent across the set when possible.
2. Edit `icg/src/data/teamMembers.js`:
   - Set `headshotSrc` to `/standardizedheadshots/<filename>` (URL-encode spaces in filenames are handled by the browser; matching the file name exactly is sufficient in source).
   - Set `linkedinUrl`, `role`, `categories`, and `committees` as appropriate.
   - To hide someone from the site without deleting their record, set `inactive: true`.

Hard-coded headshots on other pages (for example Contact or Students) should be updated alongside the data file when those assets change.

## Optional image optimization

`icg/compress.js` is a small Node script that resizes images under `public/headshots` and `public/standardizedheadshots`. It depends on the [`sharp`](https://www.npmjs.com/package/sharp) package; install it in `icg/` if you intend to run the script.

## License and ownership

Content and branding are property of Irvine Consulting Group. Code is maintained for ICG web operations; use and redistribution follow the policies of the owning organization.
