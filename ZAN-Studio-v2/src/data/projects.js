/* ============================================================
   PROJECTS — the ONE place to edit your portfolio.
   The components never need to change when you add media.

   A project:
   {
     id:        "unique-id",                 // any short unique text
     title:     "Project name",
     category:  "Product · Brand Touchpoints",
     featured:  true,                        // optional. true = big, full-width block
     span:      2,                           // optional. width in a 6-column row: 2 (third), 3 (half), 6 (full)
                                             //   default: 6 if featured, otherwise 2
     ratio:     "4/5",                       // optional. default shape of this project's media
     meta:      "Client project — ...",      // optional line under a featured project
     points:    ["...", "..."],              // optional list under a featured project
     link:      "https://...",               // optional. Leave "" to send visitors to the form
     media: [ ...see below... ],
   }

   A media item is one of:

   IMAGE
   { type: "image", src: "/images/projects/<folder>/01.webp", alt: "What the image shows" }

   VIDEO (muted, plays when scrolled into view)
   { type: "video", src: "/images/projects/<folder>/demo.mp4", poster: "/images/projects/<folder>/demo-poster.webp" }

   VIDEO WITH SOUND (shows a "tap for sound" button; visitors choose to unmute)
   { type: "video", src: ".../demo.mp4", poster: ".../demo-poster.webp", sound: true }

   Optional on ANY media item:
     size:  "full" | "twothirds" | "half" | "third"   how wide it sits inside its project
            (default: "full" if it's the only item, otherwise "half")
     ratio: "16/9" | "4/5" | "1/1" | "9/16" ...      the shape of its frame (prevents layout jumps)
     fit:   "cover" (crop to fill, default) | "contain" (show the whole thing)
     alt:   text for screen readers (images) / label (videos)
   Optional on VIDEO only:
     autoplay: false     never auto-start; visitor presses play
     loop:     false     play once (default is to loop)
   ============================================================ */

// Featured work order is the display order. Reorder these objects to reorder the carousel.
// Add another object to add another media card. Each project can use image OR video media. Set each item ratio close to the actual media dimensions so it displays large without cropping or empty side gaps.
export const projects = [
  {
    id: "onscene", title: "OnScene", category: "Product Design · Brand Touchpoints", link: "",
    media: [{ type: "video", src: "/images/projects/onscene/Onscene.mp4", fit: "cover" }],
  },
  
  {
    id: "gdg-dsu", title: "GDG on Campus DSU", category: "Community · Social Design",
    link: "https://www.behance.net/gallery/245657521/GDG-DSU-Social-Media-Series",
    media: [{ type: "image", src: "/images/projects/gdg-dsu/01.webp", alt: "GDG on Campus DSU social media design", ratio: "3/4" }],
  },
  {
    id: "nuttybliss", title: "NuttyBliss", category: "Packaging Design",
    link: "https://www.behance.net/gallery/249110397/NuttyBliss-Peanut-Butter-Packaging-Design",
    media: [{ type: "image", src: "/images/projects/nuttybliss/01.webp", alt: "NuttyBliss packaging design", ratio: "3/4" }],
  },
  {
    id: "noor-bano", title: "Noor Bano", category: "Product Presentation",
    link: "https://www.behance.net/gallery/249111039/Noor-Bano-Jewelry-AI-Enhanced-Product-Presentation",
    media: [{ type: "image", src: "/images/projects/noor-bano/01.webp", alt: "Noor Bano jewelry product presentation", ratio: "3/4" }],
  },
  {
    id: "build-with-ai", title: "Build With AI", category: "Event Branding",
    link: "https://www.behance.net/gallery/249416939/Build-with-AI-Event-Branding-Visual-Identity",
    media: [{ type: "image", src: "/images/projects/build-with-ai/01.webp", alt: "Build With AI event branding", fit: "cover" }],
  },
];

// The closing tile at the end of the grid. Edit the words here.
export const projectsCta = { title: "YOUR PROJECT NEXT.", cta: "Start a Project →", href: "#start" };
