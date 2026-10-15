# Akshat Kumar Kashyap — Portfolio

My personal portfolio: UX design case studies and engineering projects.
Plain HTML, CSS and JavaScript. No build step, no frameworks.

Live at: https://voidcoder-ak.github.io

## What's in this folder

```
index.html          Home page (hero, design work, engineering, about, contact)
codex.html          Codex Matching Path case study (full)
restro.html         Restro case study (short version, to fill in)
learning-bin.html   Learning Bin case study (short version, to fill in)
css/style.css       All the styling. Colours and fonts are at the top.
js/main.js          Mobile menu + footer year. That's all.
images/             Put your pictures here (one folder per project)
resume.pdf          (add this yourself)
```

## Put it online with GitHub Pages

1. On GitHub, create a new **public** repository named exactly
   `Voidcoder-ak.github.io`. The name must match your username.
2. In a terminal, inside this folder:
   ```bash
   git init
   git add .
   git commit -m "First version of portfolio"
   git branch -M main
   git remote add origin git@github.com:Voidcoder-ak/Voidcoder-ak.github.io.git
   git push -u origin main
   ```
3. On GitHub, open the repo, then **Settings → Pages**.
   Under "Build and deployment", choose **Deploy from a branch**,
   branch **main**, folder **/ (root)**, then **Save**.
4. Wait 1–2 minutes and open https://voidcoder-ak.github.io

To update the site later: edit files, then `git add .`, `git commit -m "..."`, `git push`.
GitHub puts the new version online by itself within a minute or two.

## Swap a placeholder for a real image

Every grey box looks like this in the HTML:

```html
<!-- REPLACE: <img src="images/codex/cover.png" alt="..."> -->
<div class="ph"><span>Codex cover image</span></div>
```

1. Put your image in the right folder, for example `images/codex/cover.png`.
2. Delete the `<div class="ph">...</div>` line.
3. Use the `<img>` line from the comment above it (remove the `<!--` and `-->`).
4. Keep the `alt` text. It describes the picture for screen readers and for search engines.

Tip: export images at 2x from Figma, then shrink them at https://squoosh.app
(aim for under 500 KB each) so the site stays fast.

## Things still to fill in

Search the files for `TODO` and `REPLACE` to find every spot.

- Your email in `index.html` (contact section)
- LinkedIn and Upwork links
- `resume.pdf` in the main folder
- Code / demo links for the alert platform and the camera project
- Real images for every grey box
- Restro and Learning Bin case study details
