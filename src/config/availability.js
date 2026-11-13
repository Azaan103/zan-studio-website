// ============================================================
// AVAILABILITY — change ONE word: status = "accepting" | "limited" | "booked" | "closed"
// Manual on purpose: nothing is calculated or connected to a calendar.
// ============================================================
export const availability = {
  status: "limited",
  message: "",
};

export const availabilityStates = {
  accepting: { label: "ACCEPTING CLIENTS", color: "#7ec26a", message: "Currently booking projects for October 2026." },
  limited: { label: "LIMITED AVAILABILITY", color: "#ecb84c", message: "A few project slots remaining." },
  booked: { label: "FULLY BOOKED", color: "#e0574a", message: "New projects will open soon." },
  closed: { label: "NOT ACCEPTING CLIENTS", color: "#8b8b8b", message: "Project inquiries are currently closed." },
};
