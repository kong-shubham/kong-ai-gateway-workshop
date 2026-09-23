# AI Gateway guide (static site)

A plain HTML/CSS/JS site, no build step. Content adapted from
https://developer.konghq.com/ai-gateway/get-started/

## Structure

    index.html        the guide
    assets/style.css  styles (auto light/dark)
    assets/app.js     copy buttons + table-of-contents highlight
    .nojekyll         tells GitHub Pages to serve files as-is

## Preview locally

    python3 -m http.server 8000
    # open http://localhost:8000

## Deploy to GitHub Pages

1. Create a new GitHub repo and push these files to the `main` branch (files at the repo root).
2. In the repo, open **Settings > Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**, choose `main` and `/ (root)`, then **Save**.
4. After a minute the site is live at `https://<your-username>.github.io/<repo-name>/`.

All asset paths are relative, so the site works under the `/<repo-name>/` sub-path.

## Attribution

The tutorial content comes from Kong's documentation. Check the license of the
source repo (https://github.com/Kong/developer.konghq.com) before publishing
publicly, and keep the attribution in the footer.
