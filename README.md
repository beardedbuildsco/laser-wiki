# Bearded Builds Laser Wiki (local draft)

Free, searchable laser knowledge base draft for **Bearded Builds Co**, built with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) (community theme).

**Status:** published via GitHub Pages Actions. Custom domain DNS is owned by Brandt (Namecheap). Remaining content TODO: tested settings tables.

Site URL (final): `https://learn.beardedbuildsco.com/`.

## Preview locally

```bash
cd laser-wiki
python3 -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
mkdocs serve
```

Open the URL MkDocs prints (usually `http://127.0.0.1:8000/`).

Strict build check:

```bash
mkdocs build --strict
```

Output lands in `site/`.

## Project layout

```text
mkdocs.yml                 # site config + nav
docs/                      # markdown source
  index.md
  glossary.md
  robots.txt               # Allow indexing + sitemap hint
  machines/
  materials/
  lightburn/
  troubleshooting/
  buying-guides/
  projects/
  business/
.github/workflows/deploy.yml   # GitHub Pages workflow (not run in this draft)
requirements.txt
```

## Deploy: GitHub Pages (Actions)

Primary hosting path is **GitHub Pages** via `.github/workflows/deploy.yml`.

1. Push to `main` on `beardedbuildsco/laser-wiki` (or run the workflow manually).
2. Repo **Settings → Pages**: Source = GitHub Actions.
3. Custom domain: `learn.beardedbuildsco.com` (also in `docs/CNAME`).
4. At your DNS host (Namecheap), add:
   - **Type:** CNAME
   - **Host:** `learn`
   - **Value:** `beardedbuildsco.github.io`
5. After DNS propagates, enable **Enforce HTTPS** in Pages settings (or via API).

Build locally the same way CI does:

```bash
pip install -r requirements.txt
NO_MKDOCS_2_WARNING=1 mkdocs build --strict
```

Output directory: `site/`.

### Alternate: `mkdocs gh-deploy`

Not preferred while Actions is configured. If needed:

```bash
mkdocs gh-deploy --strict
```

## TODOs for Brandt

```bash
grep -R "TODO" docs mkdocs.yml
```

Still open: DNS/hosting setup, GitHub repo, and Brandt-tested settings tables in `docs/materials/starter-settings.md`. Course CTAs point to Master LightBurn; OneLaser partner link/code are filled from the public YouTube description.

## License / voice

Shop-partner voice for Bearded Builds Co content. Do not invent machine-specific power/speed numbers without Brandt’s tested data.
