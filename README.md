# ZAN STUDIO — Portfolio Website

React + Vite single-page portfolio for ZAN STUDIO. Retro-browser / ticket-stub
visual identity, built to be edited without touching layout code.

## Run it locally

```bash
npm install
npm run dev
```

Open the printed localhost URL. Any change you save shows up instantly.

## Deploy (Vercel)

```bash
npm run build
```

Push the folder to a GitHub repo and import it in Vercel, or run `npx vercel`
from inside the folder. Vite's default build settings work with zero config.

---

## How to add your own images

You do **not** need to touch any component/JSX file to swap images. Until a
real file exists at the right path, that spot on the site shows a dashed
placeholder telling you exactly what to drop in and where — so you'll never
see a broken image icon.

### 1. Hero photo
```
Put your file here:  public/images/hero/hero.jpg
```
Nothing else to change — Hero.jsx already points at that path. Portrait or
landscape both work; it's cropped to a 4:5 frame.

### 2. Google certification image
```
Put your file here:  public/images/certification/google-certification.png
```
Nothing else to change — the whole image stays visible (not cropped).

### 3. Project images
```
1. Put your image here:
   public/images/projects/project-01.jpg   (or -02, -03, -04, -05)

2. Open:
   src/data/projects.js

3. Update the matching entry:
   {
     title: "Your Project Name",
     category: "UI/UX",
     description: "One short line about it.",
     image: "/images/projects/project-01.jpg",
     size: "lg",       // "lg" | "md" | "sm" — controls tile size in the grid
     fit: "contain",   // "contain" = show the whole design, nothing cropped
                        // "cover"   = fills the frame, crops if needed
   }

4. Save and run:
   npm run dev
```
Add or remove objects in that array to add/remove projects — the grid adapts
automatically (5 items keeps the intended collage rhythm; other counts still
work but stack more plainly).

### 4. Contact details
```
Open: src/components/Contact.jsx
Edit the CONTACT object at the top: email, phone, linkedin, instagram.
```

---

## Where everything lives

```
src/
├── components/       one file per section
├── data/projects.js  the only file you edit to change your work
├── index.css         every color/font/spacing token, at the top
└── App.jsx           the order sections appear in
```

To change the color palette or type, edit the :root block at the top of
src/index.css — every section reads from those variables.
