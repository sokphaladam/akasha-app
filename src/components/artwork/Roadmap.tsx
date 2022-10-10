import React from "react";
import { Timeline } from "primereact/timeline";

const events2 = [
  "MAY 05, 2020",
  "May 27, 2021",
  "JUNE 01, 2022",
  "JUNE 07, 2023",
  "JUNE 15, 2023",
];

export default function Roadmap() {
  return (
    <div
      style={{
        padding: "0rem 10%",
        marginTop: "-5%",
      }}
    >
      <div
        style={{
          backgroundColor: "#7d2e2e",
          width: "100%",
          padding: "1rem",
          borderRadius: 5,
          textAlign: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            backgroundColor: "#737374",
            position: "absolute",
            width: 250,
            height: 50,
            borderRadius: 5,
            top: "-10%",
            left: "50%",
            transform: "translate(-50%, 0)",
            textAlign: "center",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h3 style={{ margin: 0 }}>ROADMAP</h3>
        </div>
        <div style={{ overflowX: "auto" }}>
          <Timeline
            value={events2}
            layout="horizontal"
            content={(item) => <small style={{ fontSize: 10 }}>{item}</small>}
          />
        </div>
      </div>
    </div>
  );
}
