# ICG Web Application

React front end for the Irvine Consulting Group public website. For an overview of the repository, deployment, and how to update team data and assets, see the [README in the repository root](../README.md).

## Quick start

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Development server with hot reload |
| `npm run build` | Production build to `build/` |
| `npm test` | Jest test runner (watch mode) |
| `npm run deploy` | Build and publish via `gh-pages` (see root README for workflow) |

## Routes

Routing uses hash-based URLs (`HashRouter`): Home (`/`), Team (`/team`), Students (`/students`), Contact (`/contact`), Events (`/events`).

## Key source locations

- `src/data/teamMembers.js` — member roster and headshot paths
- `src/pages/` — page components
- `src/components/` — shared UI
- `public/standardizedheadshots/` — team photos served as static files
