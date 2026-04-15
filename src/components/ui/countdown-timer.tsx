"use client";

import { useState, useEffect } from "react";
import { Timer } from "@ark-ui/react/timer";

/** June 10 2025 00:00 UTC — the pre-launch deadline */
const LAUNCH_DATE = new Date("2025-06-10T00:00:00Z");

export default function CountdownTimer() {
  const [ms, setMs] = useState<number | null>(null);

  useEffect(() => {
    const diff = LAUNCH_DATE.getTime() - Date.now();
    setMs(diff > 0 ? diff : 1);
  }, []);

  if (ms === null) return null;

  return (
    <div className="w-full" style={{
      background: "var(--teal)",
      borderBottom: "3px solid var(--orange)",
    }}>
      <div style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "18px 5vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 28,
        flexWrap: "wrap",
      }}>
        {/* Left — text */}
        <div style={{ textAlign: "center" }}>
          <h3 style={{
            fontFamily: "var(--f-head)",
            fontSize: 16,
            fontWeight: 700,
            color: "#fff",
            letterSpacing: "-0.3px",
            marginBottom: 2,
          }}>
            Join the Pre-launch
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

        {/* Right — countdown */}
        <Timer.Root
          autoStart
          countdown
          startMs={ms}
          className="flex items-center"
        >
          <Timer.Area className="flex items-center gap-3">
            <div className="flex flex-col items-center">
              <Timer.Item
                type="days"
                style={{
                  fontFamily: "var(--f-head)",
                  fontSize: 28,
                  fontWeight: 800,
                  color: "#fff",
                  minWidth: "2ch",
                  textAlign: "center",
                  lineHeight: 1,
                }}
              />
              <span style={{
                fontFamily: "var(--f-body)",
                fontSize: 9,
                fontWeight: 600,
                color: "rgba(255,255,255,0.55)",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                marginTop: 2,
              }}>
                days
              </span>
            </div>
            <span style={{ color: "var(--orange)", fontSize: 22, fontWeight: 700, lineHeight: 1, marginBottom: 12 }}>:</span>
            <div className="flex flex-col items-center">
              <Timer.Item
                type="hours"
                style={{
                  fontFamily: "var(--f-head)",
                  fontSize: 28,
                  fontWeight: 800,
                  color: "#fff",
                  minWidth: "2ch",
                  textAlign: "center",
                  lineHeight: 1,
                }}
              />
              <span style={{
                fontFamily: "var(--f-body)",
                fontSize: 9,
                fontWeight: 600,
                color: "rgba(255,255,255,0.55)",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                marginTop: 2,
              }}>
                hrs
              </span>
            </div>
            <span style={{ color: "var(--orange)", fontSize: 22, fontWeight: 700, lineHeight: 1, marginBottom: 12 }}>:</span>
            <div className="flex flex-col items-center">
              <Timer.Item
                type="minutes"
                style={{
                  fontFamily: "var(--f-head)",
                  fontSize: 28,
                  fontWeight: 800,
                  color: "#fff",
                  minWidth: "2ch",
                  textAlign: "center",
                  lineHeight: 1,
                }}
              />
              <span style={{
                fontFamily: "var(--f-body)",
                fontSize: 9,
                fontWeight: 600,
                color: "rgba(255,255,255,0.55)",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                marginTop: 2,
              }}>
                min
              </span>
            </div>
            <span style={{ color: "var(--orange)", fontSize: 22, fontWeight: 700, lineHeight: 1, marginBottom: 12 }}>:</span>
            <div className="flex flex-col items-center">
              <Timer.Item
                type="seconds"
                style={{
                  fontFamily: "var(--f-head)",
                  fontSize: 28,
                  fontWeight: 800,
                  color: "#fff",
                  minWidth: "2ch",
                  textAlign: "center",
                  lineHeight: 1,
                }}
              />
              <span style={{
                fontFamily: "var(--f-body)",
                fontSize: 9,
                fontWeight: 600,
                color: "rgba(255,255,255,0.55)",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                marginTop: 2,
              }}>
                sec
              </span>
            </div>
          </Timer.Area>
        </Timer.Root>
      </div>
    </div>
  );
}
