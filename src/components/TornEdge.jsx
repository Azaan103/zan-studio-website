// Jagged "torn paper" seam between sections — echoes the collage/ripped-edge
// look of the ZAN STUDIO brand posts. `fill` = the color of the section
// that sits below this divider.
const POINTS =
  "0,0 4,38 9,10 14,44 20,6 26,40 33,14 39,42 46,4 52,36 58,12 65,46 72,8 78,38 85,16 91,44 96,6 100,32 100,60 0,60";

export default function TornEdge({ fill = "var(--cream)", flip = false }) {
  return (
    <div className={`torn ${flip ? "torn--flip" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 100 60" preserveAspectRatio="none">
        <polygon points={POINTS} fill={fill} />
      </svg>
    </div>
  );
}
