import { availability, availabilityStates } from "../config/availability";

export default function Availability({ floating = false }) {
  const s = availabilityStates[availability.status] || availabilityStates.accepting;
  const msg = availability.message || s.message;
  return (
    <div className={`avail ${floating ? "avail--floating" : ""}`} role="status" aria-live="polite">
      <span className="avail__s" style={{ "--dot": s.color }}><i aria-hidden="true" />{s.label}</span>
      {!floating && <span className="avail__k">Project availability</span>}
      {!floating && msg && <span className="avail__m">{msg}</span>}
      {floating && <span className="avail__floating-msg">{msg}</span>}
    </div>
  );
}
