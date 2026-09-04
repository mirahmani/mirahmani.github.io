# mirahmani.github.io

Personal site — **static HTML** (no Jekyll, no `bundle`).

## Preview lokal

Dari folder project:

```bash
python3 -m http.server 4000
```

Lalu buka [http://127.0.0.1:4000](http://127.0.0.1:4000).

Alternatif: `npx serve .` kalau ada Node.

## Edit konten

| File | Isi |
|------|-----|
| `content/site.js` | Bio, headline, projects, social, contact |
| `assets/css/main.css` | Desain / warna / tipografi |

Font: **Inter** (Bunny Fonts). Fallback: system UI sans-serif.

## Deploy (GitHub Pages)

Push file HTML/CSS/JS ke branch utama. Di repo Settings → Pages, pilih **Deploy from a branch** → root `/` (bukan Jekyll build).

Folder `backup/` berisi theme lama (GitBook / Jekyll) — boleh diabaikan.
