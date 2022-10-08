import Image from "next/image";
import React from "react";

export function Story() {
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
          <h3 style={{ margin: 0 }}>STORY</h3>
        </div>
        <span
          style={{
            position: "absolute",
            left: "-15%",
            top: "-40%",
          }}
        >
          <Image
            src={require("../../../public/left.png")}
            alt="Vercel Logo"
            style={{
              objectFit: "cover",
            }}
            width={650}
            height={550}
          />
        </span>
        <p
          style={{
            width: "55%",
            color: "#f3f3f3",
            margin: "auto",
            marginBottom: "5rem",
            marginTop: "4.5rem",
          }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
          officiis, porro sequi corporis accusantium voluptas quos iusto
          obcaecati vel. Fugit nemo molestias id nihil velit aliquid ipsa itaque
          reiciendis rem. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Vero officiis, porro sequi corporis accusantium voluptas quos
          iusto obcaecati vel. Fugit nemo molestias id nihil velit aliquid ipsa
          itaque reiciendis rem. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Vero officiis, porro sequi corporis accusantium
          voluptas quos iusto obcaecati vel. Fugit nemo molestias id nihil velit
          aliquid ipsa itaque reiciendis rem.
        </p>
        <span
          style={{
            position: "absolute",
            right: "-15%",
            top: "-40%",
          }}
        >
          <Image
            src={require("../../../public/right.png")}
            alt="Vercel Logo"
            style={{
              objectFit: "cover",
            }}
            width={650}
            height={650}
          />
        </span>
      </div>
    </div>
  );
}
