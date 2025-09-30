<!--->

# bma-vandijk.github.io

Custom Jekyll site for BMA van Dijk with a quiet, modern theme, tabs for CV, Publications, Blog, and About.

## Structure

- `_layouts/` and `_includes/`: theme HTML
- `assets/css/style.css`: core styles
- `_data/navigation.yml`: top tabs
- `_data/publications.yml`: publication entries
- `index.html`: home
- `cv.md`, `publications.md`, `blog.md`, `about.md`: pages
- `_posts/`: blog posts

## Local preview

Requires Ruby. On macOS:

1. Install bundler: `gem install bundler`
2. Run: `bundle init` (optional for local), or just:
3. `bundle add jekyll jekyll-feed jekyll-seo-tag jekyll-sitemap`
4. Serve: `bundle exec jekyll serve` then open http://127.0.0.1:4000

GitHub Pages builds with the listed plugins automatically.

## Customize

- Edit `_config.yml` for site metadata
- Add/remove tabs in `_data/navigation.yml`
- Add publications in `_data/publications.yml`
- Create new posts in `_posts/YYYY-MM-DD-title.md`
