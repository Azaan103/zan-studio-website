// Decorative Tetris-style hero layer. CSS transforms only (no canvas, no JS loop).
// Pieces drop in stepped "grid ticks" and rotate in 90° steps, in the side gutters around the headline.
// A static "stack" sits on the floor and a tiny arcade HUD frames the top and bottom.
// Everything is aria-hidden. Reduced motion = pieces rest in place. Mobile = fewer, smaller pieces.
import { hero } from "../data/site";

// s = block cells [col,row]; x = left %, y = resting top (svh); t = seconds per drop; d = delay (s)
const PIECES = [
  { c: "var(--ticket-green)",  s: [[0,0],[1,0],[2,0],[3,0]], x: 3,  y: 18, t: 11, d: 0,  r: 14 },  // I
  { c: "var(--ticket-pink)",   s: [[0,0],[0,1],[1,1],[2,1]], x: 88, y: 12, t: 13, d: -4, r: 16 },  // J
  { c: "var(--ticket-orange)", s: [[0,0],[1,0],[0,1],[1,1]], x: 6,  y: 52, t: 12, d: -7, r: 0  },  // O
  { c: "var(--ticket-tan)",    s: [[1,0],[0,1],[1,1],[2,1]], x: 86, y: 50, t: 10, d: -2, r: 12 },  // T
  { c: "var(--white)",         s: [[0,0],[0,1],[0,2],[1,2]], x: 1,  y: 34, t: 14, d: -9, r: 18 },  // L
  { c: "#e0574a",              s: [[1,0],[2,0],[0,1],[1,1]], x: 92, y: 30, t: 12, d: -5, r: 15 },  // S
];

// Landed blocks on the floor: [col, height, color] per column, left and right corner
const STACK_L = [[0,3,"var(--ticket-orange)"],[1,2,"var(--ticket-green)"],[2,4,"var(--ticket-pink)"],[3,1,"var(--ticket-tan)"]];
const STACK_R = [[0,1,"var(--ticket-pink)"],[1,3,"var(--ticket-tan)"],[2,2,"var(--ticket-orange)"],[3,4,"var(--ticket-green)"]];

const Stack = ({ cols, side }) => (
  <div className={`pb__stack pb__stack--${side}`}>
    {cols.map(([x, h, c]) =>
      Array.from({ length: h }, (_, y) => <span key={`${x}-${y}`} style={{ left: `calc(${x} * var(--c))`, bottom: `calc(${y} * var(--c))`, background: c }} />)
    )}
  </div>
);

export default function PixelBlocks() {
  return (
    <div className="pb" aria-hidden="true">
      {PIECES.map((p, i) => (
        <div key={i} className="pb__piece" style={{ left: `${p.x}%`, "--top": `${p.y}svh`, animationDelay: `${p.d}s`, animationDuration: `${p.t}s` }}>
          <div className="pb__spin" style={{ animationDuration: `${p.t}s`, animationDelay: `${p.d}s`, "--rot": `${p.r}` }}>
            {p.s.map(([x, y], j) => <span key={j} style={{ left: `calc(${x} * var(--c))`, top: `calc(${y} * var(--c))`, background: p.c }} />)}
          </div>
        </div>
      ))}
      <Stack cols={STACK_L} side="l" />
      <Stack cols={STACK_R} side="r" />
      <span className="pb__hud pb__hud--l pixel">{hero.hud.left}</span>
      <span className="pb__hud pb__hud--r pixel">{hero.hud.right}</span>
      <span className="pb__hud pb__hud--coin pixel">{hero.hud.coin}</span>
    </div>
  );
}
