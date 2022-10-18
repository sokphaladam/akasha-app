import Image from "next/image";
import React from "react";
import { BlockContent } from "../BlockContent";

export function Story() {
  return (
    <BlockContent title="Story" id="story">
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
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero officiis,
        porro sequi corporis accusantium voluptas quos iusto obcaecati vel.
        Fugit nemo molestias id nihil velit aliquid ipsa itaque reiciendis rem.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero officiis,
        porro sequi corporis accusantium voluptas quos iusto obcaecati vel.
        Fugit nemo molestias id nihil velit aliquid ipsa itaque reiciendis rem.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero officiis,
        porro sequi corporis accusantium voluptas quos iusto obcaecati vel.
        Fugit nemo molestias id nihil velit aliquid ipsa itaque reiciendis rem.
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
    </BlockContent>
  );
}
