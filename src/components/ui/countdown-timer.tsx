"use client";

import { useState, useEffect } from "react";
import { Timer } from "@ark-ui/react/timer";

/** June 10 2026 00:00 UTC — the pre-launch deadline */
const LAUNCH_DATE = new Date("2026-06-10T00:00:00Z");

const numBox: React.CSSProperties = {
  fontFamily: "var(--f-head)",
  fontSize: 30,
  fontWeight: 800,
  color: "#fff",
  minWidth: 48,
  textAlign: "center",
  lineHeight: 1,
  background: "rgba(0,0,0,0.18)",
  borderRadius: 8,
  padding: "10px 6px 8px",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--f-body)",
  fontSize: 9,
  fontWeight: 600,
  color: "rgba(255,255,255,0.55)",
  textTransform: "uppercase",
  letterSpacing: "1.5px",
  marginTop: 4,
};

const colonStyle: React.CSSProperties = {
  color: "var(--orange)",
  fontSize: 24,
  fontWeight: 700,
  lineHeight: 1,
  marginBottom: 16,
};

export default function CountdownTimer() {
  const [ms, setMs] = useState<number | null>(null);

  useEffect(() => {
    const diff = LAUNCH_DATE.getTime() - Date.now();
    setMs(diff > 0 ? diff : 1);
  }, []);

  if (ms === null) return null;

  return (
    <div className="w-full" style={{
      background: "linear-gradient(135deg, var(--teal-dark) 0%, var(--teal) 100%)",
      borderBottom: "3px solid var(--orange)",
    }}>
      <div style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "16px 5vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 32,
        flexWrap: "wrap",
      }}>
        <div style={{ textAlign: "center" }}>
          <h3 style={{
            fontFamily: "var(--f-head)",
            fontSize: 17,
            fontWeight: 700,
            color: "#fff",
            letterSpacing: "-0.3px",
            marginBottom: 3,
          }}>
            🚀 Join the Pre-launch
          </h3>
          <p style={{
            fontFamily: "var(--f-body)",
            fontSize: 12,
            fontWeight: 500,
            color: "rgba(255,255,255,0.75)",
            lineHeight: 1.5,
          }}>
            Join before the 10th of June and obtain first members exclusive benefits
          </p>
        </div>

        <Timer.Root autoStart countdown startMs={ms} className="flex items-center">
          <Timer.Area className="flex items-center gap-2">
            <div className="flex flex-col items-center">
              <Timer.Item type="days" style={numBox} />
              <span style={labelStyle}>days</span>
            </div>
            <span style={colonStyle}>:</span>
            <div className="flex flex-col items-center">
              <Timer.Item type="hours" style={numBox} />
              <span style={labelStyle}>hrs</span>
            </div>
            <span style={colonStyle}>:</span>
            <div className="flex flex-col items-center">
              <Timer.Item type="minutes" style={numBox} />
              <span style={labelStyle}>min</span>
            </div>
            <span style={colonStyle}>:</span>
            <div className="flex flex-col items-center">
              <Timer.Item type="seconds" style={numBox} />
              <span style={labelStyle}>sec</span>
            </div>
          </Timer.Area>
        </Timer.Root>
      </div>
    </div>
  );
}
