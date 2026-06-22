import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = site.title;
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
          padding: "80px",
          backgroundColor: "#fdfcf9",
          backgroundImage:
            "radial-gradient(rgba(16,24,40,0.10) 2px, transparent 2px)",
          backgroundSize: "40px 40px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            backgroundColor: "#ffc700",
            color: "#101828",
            fontSize: 30,
            fontWeight: 700,
            padding: "8px 20px",
            borderRadius: 999,
            marginBottom: 32,
          }}
        >
          Product Designer
        </div>
        <div
          style={{
            fontSize: 120,
            fontWeight: 900,
            color: "#101828",
            lineHeight: 1,
            letterSpacing: "-4px",
          }}
        >
          I Do Design
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 36,
            fontSize: 36,
            color: "#475467",
            maxWidth: 900,
          }}
        >
          Akash R — turning ideas into thoughtful, curious, human-centred screens.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "auto",
            fontSize: 28,
            fontWeight: 700,
            color: "#dc6803",
          }}
        >
          akashr.design
        </div>
      </div>
    ),
    { ...size }
  );
}
