import { ImageResponse } from "next/og";
import seoMetadata from "@/data/seometadata.json";

export const runtime = "edge";

export const alt = "Dinesh Bajgain - Full Stack Developer & AI/ML Enthusiast";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#020617",
        backgroundImage:
          "radial-gradient(circle at 25px 25px, #1E293B 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1E293B 2%, transparent 0%)",
        backgroundSize: "100px 100px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 80px",
          background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
          borderRadius: "24px",
          border: "1px solid #334155",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
        }}
      >
        {/* Profile Image Placeholder */}
        <div
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #DC2626 0%, #EF4444 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "24px",
            fontSize: "48px",
            color: "#FFFFFF",
            fontWeight: "bold",
          }}
        >
          DB
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "56px",
            fontWeight: "bold",
            color: "#E5E7EB",
            marginBottom: "8px",
            letterSpacing: "-0.02em",
          }}
        >
          Dinesh Bajgain
        </div>

        {/* Role */}
        <div
          style={{
            fontSize: "28px",
            color: "#9CA3AF",
            marginBottom: "24px",
          }}
        >
          Full Stack Developer & AI/ML Enthusiast
        </div>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          {["React", "Next.js", "Node.js", "Python", "AI/ML"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "8px 16px",
                backgroundColor: "#1E293B",
                borderRadius: "9999px",
                fontSize: "16px",
                color: "#E5E7EB",
                border: "1px solid #334155",
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            marginTop: "32px",
            fontSize: "18px",
            color: "#6B7280",
          }}
        >
          {seoMetadata.siteUrl.replace("https://", "")}
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
