import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// A small-size companion to the existing leo. wordmark.
export default function Icon() {
  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", alignItems: "center", justifyContent: "center", background: "#b9ddf5", color: "#233c50", borderRadius: 14, fontSize: 46, fontWeight: 700, letterSpacing: -4, paddingRight: 4, paddingBottom: 5 }}>l.</div>,
    size,
  );
}
