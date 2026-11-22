import { ImageResponse } from "next/og";

export const alt = "Ignacio Ventura";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        padding: "60px 80px",
        backgroundColor: "#0a0a0a",
        color: "#a1a1a1",
      }}
    >
      <div style={{ color: "#C4956A", fontSize: 60 }}>{">|"}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div style={{ color: "#ededed", fontSize: 96, letterSpacing: -4 }}>
          Ignacio Ventura
        </div>
        <div style={{ fontSize: 34 }}>
          Me gusta vibecodear cosas que se me vienen a la cabeza.
        </div>
      </div>
      <div style={{ fontSize: 24 }}>nachthelad.com.ar</div>
    </div>,
    size,
  );
}
