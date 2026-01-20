// Run this script with: npx tsx scripts/generate-og-image.tsx
// This generates the OG image for static export

import React from "react";
import { Resvg } from "@resvg/resvg-js";
import satori from "satori";
import { writeFileSync, readFileSync } from "fs";
import { join } from "path";

const siteUrl = "dinesh-bajgain.com.np";
const title = "Dinesh Bajgain | Full Stack Developer & AI/ML";
const description =
  "Full Stack Developer & AI/ML Enthusiast from Nepal. Building scalable web apps with React, Next.js & Python. Open for remote work.";

async function generateOGImage() {
  // Fetch fonts
  console.log("Fetching fonts...");
  const [fontBoldResponse, fontRegularResponse] = await Promise.all([
    fetch(
      "https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-700-normal.ttf",
    ),
    fetch(
      "https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-400-normal.ttf",
    ),
  ]);
  const fontBoldData = await fontBoldResponse.arrayBuffer();
  const fontRegularData = await fontRegularResponse.arrayBuffer();

  // Load portrait image as base64
  console.log("Loading portrait image...");
  const portraitPath = join(process.cwd(), "public/portrait.png");
  let portraitBase64: string;
  try {
    const portraitBuffer = readFileSync(portraitPath);
    portraitBase64 = `data:image/png;base64,${portraitBuffer.toString("base64")}`;
  } catch {
    // Try jpeg if png doesn't exist
    const jpegPath = join(process.cwd(), "public/profile.jpeg");
    const portraitBuffer = readFileSync(jpegPath);
    portraitBase64 = `data:image/jpeg;base64,${portraitBuffer.toString("base64")}`;
  }

  const svg = await satori(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        position: "relative",
        backgroundColor: "#1a1a1a",
      }}
    >
      {/* Background Portrait Image */}
      <img
        src={portraitBase64}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center top",
          filter: "grayscale(100%)",
        }}
      />

      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.8) 100%)",
          display: "flex",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        {/* Domain Badge */}
        <div
          style={{
            display: "flex",
            padding: "10px 24px",
            backgroundColor: "rgba(255,255,255,0.15)",
            borderRadius: "9999px",
            fontSize: "20px",
            color: "#ffffff",
            marginBottom: "32px",
            backdropFilter: "blur(10px)",
          }}
        >
          {siteUrl}
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "48px",
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: "20px",
            textAlign: "center",
            textShadow: "0 2px 10px rgba(0,0,0,0.5)",
          }}
        >
          {title}
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: "24px",
            fontWeight: 400,
            color: "rgba(255,255,255,0.9)",
            marginBottom: "36px",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.4,
            textShadow: "0 1px 5px rgba(0,0,0,0.5)",
          }}
        >
          {description}
        </div>

        {/* Read More Button */}
        <div
          style={{
            display: "flex",
            padding: "16px 40px",
            backgroundColor: "#2563eb",
            borderRadius: "9999px",
            fontSize: "22px",
            fontWeight: 700,
            color: "#ffffff",
            boxShadow: "0 4px 20px rgba(37, 99, 235, 0.5)",
          }}
        >
          Read more
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: fontBoldData,
          weight: 700,
          style: "normal",
        },
        {
          name: "Inter",
          data: fontRegularData,
          weight: 400,
          style: "normal",
        },
      ],
    },
  );

  const resvg = new Resvg(svg, {
    fitTo: {
      mode: "width",
      value: 1200,
    },
  });

  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  writeFileSync(join(process.cwd(), "public/og-image.png"), pngBuffer);
  console.log("✅ OG image generated successfully at public/og-image.png");
}

generateOGImage().catch(console.error);
