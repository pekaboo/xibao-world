# 陶陶的小小世界 · Gaga Clone

A 1:1 replica of [gaga.hexly.ai](https://gaga.hexly.ai/) (陶陶的小小世界 — a sunny 3D playroom where Taotao crawls between eight wooden toys), rebuilt as a Node.js / Vite project and deployable to **GitHub Pages**.

Verified pixel-identical to the original: **99.99%** match on a 1440×900 screenshot diff (the remaining 0.01% is live animation — pulsing LIVE indicator, character position, activity progress).

## What's inside

| Piece | File | Notes |
|---|---|---|
| App entry (UI controller, 3D playroom, toys, navigation, music, journal) | `src/app.js` | Reconstructed from the original production build; runs on the vendored Three.js chunks |
| Vendored Three.js chunks (core / renderer / addons) | `src/vendor/*.js` | Pre-built ESM modules, imported by `app.js` |
| Full original stylesheet | `src/style.css` | Font path localized to `src/fonts/` |
| DM Sans font | `src/fonts/dm-sans-regular.ttf` | |
| Favicons / OG image | `public/*` | |
| GitHub Pages workflow | `.github/workflows/deploy.yml` | Node 20 → `vite build` → deploy |

Features carried over 1:1:

- 🧸 8 toys (积木 / 绘本 / 小火车 / 布球 / 云朵城堡 / 木马 / 叮叮琴 / 圈圈塔), each with its own animation and Taotao interaction poses
- 👶 Taotao — crawling baby character with idle/walk/play poses, blinking, A* pathfinding around obstacles
- 🌗 Day/night mode with relit scene and lamps
- 🎵 Ambient music synthesized with WebAudio (no audio files)
- 🗺 Toy box dialog, exploration journal (localStorage), help guide, tooltips
- 🖥 Orbit controls: drag-rotate, wheel/pinch zoom, follow mode, fullscreen, autorotate, keyboard shortcuts (Space / R / T / M / N)

## Develop

```bash
npm install
npm run dev        # local dev server
```

## Build

```bash
npm run build      # outputs static site to dist/
npm run preview    # serve the production build locally
```

## Deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `gaga-clone`).
2. Push this project:

   ```bash
   git remote add origin git@github.com:<you>/gaga-clone.git
   git push -u origin main
   ```

3. In the repo → **Settings → Pages → Build and deployment → Source**, choose **GitHub Actions**.
4. The included workflow (`.github/workflows/deploy.yml`) builds and deploys automatically on every push to `main`.
5. Your site will be live at `https://<you>.github.io/gaga-clone/`.

The Vite `base` is set to `./` (relative), so all asset URLs work under the GitHub Pages project path as well as on a custom domain.

### Alternative: one-command deploy

If you prefer pushing a `gh-pages` branch instead of Actions:

```bash
npm run deploy     # builds and publishes dist/ to the gh-pages branch
```

Then set **Settings → Pages → Source** to *Deploy from a branch → gh-pages*.

## License / attribution

This is a fan replica for educational purposes. The original site design and content belong to its authors.
