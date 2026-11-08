import { ImageResponse } from "next/og";
import { siteConfig } from "@data/site.config";

export const alt = `${siteConfig.name}: ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0a1c36",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 16,
              background: "#fcc419",
              color: "#0a1c36",
              fontSize: 44,
              fontWeight: 800,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            N
          </div>
          <div style={{ fontSize: 40, fontWeight: 700 }}>{siteConfig.name}</div>
        </div>
        <div style={{ marginTop: 48, fontSize: 68, fontWeight: 800, lineHeight: 1.1, maxWidth: 980 }}>
          Organize, venda mais e fique em dia
        </div>
        <div style={{ marginTop: 28, fontSize: 32, color: "#aec5e3" }}>{siteConfig.tagline}</div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 16, display: "flex" }}>
          <div style={{ flex: 1, background: "#1fa264" }} />
          <div style={{ flex: 1, background: "#fcc419" }} />
        </div>
      </div>
    ),
    size,
  );
}
