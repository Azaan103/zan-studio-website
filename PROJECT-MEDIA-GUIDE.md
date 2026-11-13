# ZAN Studio — Project Media Guide

The portfolio media marquee is intentionally data-driven. You do not need to edit the React component when adding work.

## Add an image

1. Put the file inside `public/images/projects/<project-name>/`.
2. Open `src/data/projects.js`.
3. Add an item to that project's `media` array:

```js
{
  type: "image",
  src: "/images/projects/my-project/01.webp",
  alt: "Description of the project image",
  ratio: "4/3"
}
```

## Add a video

```js
{
  type: "video",
  src: "/images/projects/my-project/demo.mp4",
  poster: "/images/projects/my-project/demo-poster.webp",
  ratio: "16/9"
}
```

Videos in the moving archive are muted, inline and looped. The lightbox provides normal video controls.

## Recommended formats

- Images: WebP, JPG, PNG
- Video: MP4 (H.264) is the safest browser choice
- Keep image dimensions appropriate for their display size.
- Use a poster image for larger videos.

## Availability badge

Change one value in `src/config/availability.js`:

- `accepting`
- `limited`
- `booked`
- `closed`

The sticky badge updates automatically.

## Reviews

Client quotes live in `src/data/site.js` under `reviews`. Only use approved client testimonials before publishing them publicly.

## Featured work order and extra boxes

The current carousel is a **single, slow-moving row**. The order of objects in `src/data/projects.js` is the order shown on the page. Move a project object up or down in the `projects` array to reorder it.

To add another box for an existing project, add another item to that project's `media` array. To add a new project/box, copy one project object, give it a unique `id`, set its `title` and `category`, then add an image, video, or placeholder item in `media`. Each media item becomes its own card in the moving row.

For OnScene, replace the placeholder item with either an image or video object once you put the media file in `public/images/projects/onscene/`.

## Packages and prices

Edit package names, prices, deliverables and best-fit descriptions in `src/data/packages.js`. Prices currently use the USD ranges provided for The Launchpad, The Full Presence and The Digital Experience. The custom-project card replaces the separate “Don't see what you need?” box. Terms are listed below the cards.

## Brand marquee

Edit the `brands` array in `src/data/site.js` to add, remove or reorder names in the “Brands I've Worked With” marquee.


### Selected work image fit
Portfolio images default to `contain` so the full design remains visible without cropping. You can set `fit: "cover"` on an individual media item if you intentionally want a cropped preview.

### Reviews slideshow
Edit the five sample sticky notes in `src/components/Reviews.jsx`. Replace the sample quote, name, role, company, project, and tone with approved client feedback. Available tones include `pink`, `green`, `cream`, `orange`, and `blue`.


### Make selected-work cards large and fill the frame
Cards are intentionally oversized, and each one uses its media's aspect ratio. Keep `fit` set to `"contain"` (the default) so the full artwork stays visible. Set `ratio` close to the actual file dimensions: use `"4/5"` for a 1600×2000 portrait, `"3/4"` for a 1200×1600 portrait, `"16/9"` for a widescreen banner/video, or `"4/3"` for a landscape image. This avoids squeezing portrait designs into landscape boxes or cropping the artwork. For a new image, check its width ÷ height and choose the closest ratio.
