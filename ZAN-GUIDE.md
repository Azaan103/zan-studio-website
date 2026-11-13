# ZAN-GUIDE — how to maintain this site

The site is a **React + Vite** project. All editable content lives in a few plain files under `src/data/` and `src/config/`. You should never need to touch a component to change words, projects, prices or availability.

| What | File |
|---|---|
| Hero text, nav, services, process, about, FAQ, form options, email, socials | `src/data/site.js` |
| **Projects and all their media** | `src/data/projects.js` |
| Packages + prices | `src/data/packages.js` |
| **Availability** | `src/config/availability.js` |
| Colours, fonts, spacing | top of `src/index.css` (`:root`) |

---

## RUNNING THE SITE

```
npm install
cp .env.example .env     # then fill in your form provider (see FORM CONFIGURATION)
npm run dev              # opens http://localhost:5173
npm run build            # production build into /dist
npm run preview          # preview the production build
```

## EDITING TEXT

Open `src/data/site.js`. Each block is labelled: `hero`, `services`, `work`, `process`, `about`, `faq`, `start`, and `site` (email, phone, location, socials). Change the text between the quotes and save.

- Hero headline: `hero.headline` (one string per line). Supporting copy: `hero.sub`. Buttons: `hero.primary` / `hero.secondary`.
- The little arcade details in the hero (SCORE / LVL / INSERT COIN): `hero.hud`.

---

## ADDING A PROJECT

1. Create a folder: `public/images/projects/my-project/`
2. Put your image(s) in it (see ADDING AN IMAGE).
3. Open `src/data/projects.js`, copy any project block, and edit it:

```js
{
  id: "my-project",                 // short, unique
  title: "My Project",
  category: "Brand Identity",
  link: "https://www.behance.net/...",   // "" = visitors are sent to the form instead
  media: [
    { type: "image", src: "/images/projects/my-project/01.webp", alt: "Describe the image" },
  ],
},
```

Optional on a project: `featured: true` (big full-width block with a "Featured" flag), `span: 2 | 3 | 6` (width in a 6-column row: third, half, full; default is 2, or 6 if featured), `ratio: "4/5"` (default frame shape), `meta` and `points` (a description line and list shown under featured projects).

Projects appear in the order they are listed. A "Your project next" tile closes the grid (edit it at the bottom of the same file, `projectsCta`).

## ADDING AN IMAGE

1. Export it as **WebP or JPG**, about **1600 px wide** (aim for 100–300 KB). PNGs of several MB make the site slow on phones.
2. Save it in the project's folder, e.g. `public/images/projects/onscene/02.webp`.
3. Add one line to that project's `media` list:

```js
{ type: "image", src: "/images/projects/onscene/02.webp", alt: "OnScene App Store screenshots" },
```

Multiple images = more lines. Control how they sit with:
- `size`: `"full"`, `"twothirds"`, `"half"`, `"third"` (several items in one project share a row when their sizes add up to a full row; e.g. `third` + `twothirds`, or `half` + `half`)
- `ratio`: frame shape, e.g. `"16/9"`, `"4/5"`, `"1/1"`, `"9/16"`. Setting it prevents the page jumping while images load.
- `fit`: `"cover"` (crop to fill, default) or `"contain"` (show the whole image)

`alt` is the description read by screen readers. Please always fill it in.

## ADDING A VIDEO

1. Export as **MP4 (H.264 video + AAC audio)**. Keep it short and compressed (ideally under 10 MB; 1080p max).
2. Optional but recommended: save a still frame as the poster, e.g. `demo-poster.webp`. It shows before the video loads.
3. Save both in the project's folder, then add:

```js
{ type: "video", src: "/images/projects/onscene/demo.mp4", poster: "/images/projects/onscene/demo-poster.webp", size: "half", ratio: "16/9" },
```

What visitors get: the video only downloads when it's close to the screen, plays **muted** automatically when it's mostly in view, pauses when scrolled away, and only one video plays at a time. They can pause/play and go fullscreen with the small controls. People with "reduce motion" turned on get no autoplay.

Extra options: `autoplay: false` (never auto-start), `loop: false` (play once).

## ADDING A VIDEO WITH SOUND

Same as a video, plus one property:

```js
{ type: "video", src: "/images/projects/onscene/demo.mp4", poster: "/images/projects/onscene/demo-poster.webp", sound: true, ratio: "16/9" },
```

Your audio is never stripped. Because browsers block autoplay with sound, the video starts muted and shows an orange **TAP FOR SOUND** button. Tapping the video (or that button) turns the original audio on; tapping again mutes it. If a browser refuses, the video still plays normally.

## CHANGING PROJECT LINKS

`src/data/projects.js` → the project's `link`. Leave `link: ""` for no external link (the project then shows "Start a project like this →", which goes to the form). OnScene is currently set up this way.

## CHANGING PACKAGE PRICES

`src/data/packages.js` → each package's `price` (currently `"PKR XX,XXX"`, shown as "STARTING FROM …"). Inclusions are `items`. The fourth package (CUSTOM PROJECT) has no price; its button goes to `#start`.

## EDITING SERVICES

`src/data/site.js` → `services.items`: each has `title`, `copy`, `includes`.

## EDITING FAQ

`src/data/site.js` → `faq`: a list of `{ q: "Question", a: "Answer" }`. Add or remove entries freely; each one becomes an expandable item (keyboard accessible).

## CHANGING AVAILABILITY

`src/config/availability.js`:

```js
export const availability = { status: "accepting", message: "" };
```

`status` is one of:

- `"accepting"` → ● ACCEPTING CLIENTS
- `"limited"` → ● LIMITED AVAILABILITY
- `"booked"` → ● CURRENTLY BOOKED

`message` is optional. Empty = the default line for that status (editable in `availabilityStates` in the same file, including "October 2026"). Type your own text to override it. It's manual: nothing calendar-based.

## CHANGING SOCIAL LINKS

`src/data/site.js` → `site.socials` (Instagram, LinkedIn), plus `site.email` and `site.phone`. They appear in the footer and form error message.

## CHANGING THE GOOGLE CERTIFICATE

Files live in `public/images/certification/`:

- `google-ux-certificate.png`: the full certificate (opened by "View Certificate →")
- `google-ux-certificate-thumb.webp`: the small preview in the About section (about 360 px wide)

Replace both with the same names (or change the paths/label in `src/data/site.js` → `about.credential`).

## FORM CONFIGURATION

Form → `src/lib/submit.js` → a form service → email to you.

1. **Web3Forms (easiest):** get a free access key at web3forms.com, put it in `.env` as `VITE_WEB3FORMS_KEY`, and set `VITE_FORM_PROVIDER=web3forms`.
2. **Formspree:** set `VITE_FORMSPREE_ID` and `VITE_FORM_PROVIDER=formspree`.
3. **Your own endpoint (e.g. Resend):** needs a small serverless function; point `VITE_FORM_ENDPOINT` at it and use `custom`. Keep any private API key inside that function, never in this repo.

Web3Forms keys and Formspree IDs are meant to be public, so they're safe in the build. `.env` is git-ignored. If nothing is configured, visitors see an error with your email address. Form questions and options: `src/data/site.js` → `start`.

## DEPLOYMENT

This project already deploys to **GitHub Pages** via `.github/workflows/deploy.yml`:

1. Push to the `main` branch → GitHub builds (`npm run build`) and publishes `/dist`.
2. In GitHub: *Settings → Pages → Source: GitHub Actions*.
3. *Settings → Secrets and variables → Actions → Variables*: add `VITE_FORM_PROVIDER` and your key/ID variable.
4. The site must be served from a domain root (custom domain or `username.github.io`). A `/repo-name/` subpath would break the `/images/...` paths.

Any static host (Netlify, Vercel, Cloudflare Pages) also works: build command `npm run build`, output folder `dist`.

## WHERE THINGS LIVE

```
public/images/
  projects/
    onscene/        01.webp … demo.mp4 (YOU add these)
    gdg-dsu/        01.webp
    build-with-ai/  01.webp
    tech-arena/     01.webp
    noor-bano/      01.webp, 02.webp
    nuttybliss/     01.webp
  hero/Azaan.jpeg
  certification/    google-ux-certificate.png, …-thumb.webp
source-assets/projects/   your original full-size PNGs (not published; safe to keep or delete)
```
