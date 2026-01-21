// Run this script with: npx tsx scripts/generate-og-image.tsx
// This generates the OG image for static export

import React from "react";
import { Resvg } from "@resvg/resvg-js";
import satori from "satori";
import { writeFileSync, readFileSync } from "fs";
import { join } from "path";

// Load dynamic data from JSON files
const seoMetadata = JSON.parse(
  readFileSync(join(process.cwd(), "src/data/seometadata.json"), "utf-8"),
);
const aboutData = JSON.parse(
  readFileSync(join(process.cwd(), "src/data/about.json"), "utf-8"),
);

// Dynamic content from data files
const siteUrl = seoMetadata.siteUrl
  .replace("https://www.", "")
  .replace("https://", "");
const name = aboutData.name;
const role = aboutData.role;
const portraitImagePath = seoMetadata.portraitImage;

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
  const portraitPath = join(
    process.cwd(),
    "public",
    portraitImagePath.replace(/^\//, ""),
  );
  let portraitBase64: string;
  try {
    const portraitBuffer = readFileSync(portraitPath);
    const ext = portraitPath.split(".").pop()?.toLowerCase();
    const mimeType = ext === "png" ? "image/png" : "image/jpeg";
    portraitBase64 = `data:${mimeType};base64,${portraitBuffer.toString("base64")}`;
  } catch {
    // Fallback to profile.jpeg if portrait image doesn't exist
    const jpegPath = join(process.cwd(), "public/profile.jpeg");
    const portraitBuffer = readFileSync(jpegPath);
    portraitBase64 = `data:image/jpeg;base64,${portraitBuffer.toString("base64")}`;
  }

  console.log(`Generating OG image for: ${name} - ${role}`);

  const svg = await satori(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        position: "relative",
        backgroundColor: "#0f0f0f",
      }}
    >
      {/* Left Side - Text Content */}
      <div
        style={{
          width: "55%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "60px 70px",
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
        }}
      >
        {/* Domain Badge */}
        <div
          style={{
            display: "flex",
            padding: "8px 20px",
            backgroundColor: "rgba(255,255,255,0.1)",
            borderRadius: "9999px",
            fontSize: "16px",
            color: "rgba(255,255,255,0.8)",
            marginBottom: "32px",
          }}
        >
          {siteUrl}
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "60px",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: "8px",
          }}
        >
          {name}
        </div>

        {/* Role/Title */}
        <div
          style={{
            fontSize: "24px",
            fontWeight: 400,
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.4,
          }}
        >
          {role}
        </div>
      </div>

      {/* Right Side - Portrait */}
      <div
        style={{
          width: "45%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img
          src={portraitBase64}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            filter: "grayscale(100%)",
          }}
        />
        {/* Gradient overlay for smooth blend */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100px",
            height: "100%",
            background:
              "linear-gradient(to right, #1a1a1a 0%, transparent 100%)",
            display: "flex",
          }}
        />
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
