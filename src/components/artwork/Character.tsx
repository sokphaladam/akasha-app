import Image from "next/image";
import React, { useState } from "react";

const mapCharater = [
  {
    image:
      "https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200316/2020031619494241375.png",
    bgImage:
      "https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/b51565c6f1298e534e90b6e63332e9c1_4240077663550682265.png",
  },
  {
    image:
      "https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200310/2020031016592515874.png",
    bgImage:
      "https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/6f0ef40157e95b0d59455c12f4d3f270_6966278935690800707.png",
  },
  {
    image:
      "https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200316/2020031619510379464.png",
    bgImage:
      "https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/43922f5162840c215638affedad0459a_3369229991804918602.png",
  },
  {
    image:
      "https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200316/2020031619490965086.png",
    bgImage:
      "https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/cbce61ef1ee5586c4e77b2070348685f_2003673786618101140.png",
  },
  {
    image:
      "https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200316/2020031619500256389.png",
    bgImage:
      "https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/6c009f0631eb71e697c2da76b608a51e_679009763713991286.png",
  },
  {
    image:
      "https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200316/2020031619504030315.png",
    bgImage:
      "https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/f5ae62eff2cf426e98626c882dd0cf0d_3240767163310397909.png",
  },
];

export default function Charater() {
  const [li, setLi] = useState(0);
  const [ri, setRi] = useState(3);

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
            top: "-4%",
            left: "50%",
            transform: "translate(-50%, 0)",
            textAlign: "center",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h3 style={{ margin: 0 }}>Charater</h3>
        </div>
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
          itaque reiciendis rem.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "70%",
            margin: "auto",
          }}
        >
          <div style={{ display: "flex" }}>
            <div>
              {mapCharater
                .filter((x, i) => i < 3)
                .map((x, i) => {
                  return (
                    <div
                      style={{
                        backgroundColor: "#345b4b",
                        width: 75,
                        height: 75,
                        borderRadius: 5,
                        margin: "1rem",
                        backgroundImage: `url(${x.image})`,
                        backgroundSize: "cover",
                      }}
                      key={i}
                    />
                  );
                })}
            </div>
            <div
              style={{
                backgroundColor: "#345b4b",
                width: 75 * 3 + 30,
                height: 75 * 3 + 30,
                borderRadius: 5,
                margin: "1rem",
                backgroundImage: `url(${mapCharater[li].bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "bottom",
              }}
            ></div>
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                backgroundColor: "#345b4b",
                width: 75 * 3 + 30,
                height: 75 * 3 + 30,
                borderRadius: 5,
                margin: "1rem",
                backgroundImage: `url(${mapCharater[ri].bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "bottom",
              }}
            ></div>
            <div>
              {mapCharater
                .filter((x, i) => i > 2)
                .map((x, i) => {
                  return (
                    <div
                      style={{
                        backgroundColor: "#345b4b",
                        width: 75,
                        height: 75,
                        borderRadius: 5,
                        margin: "1rem",
                        backgroundImage: `url(${x.image})`,
                        backgroundSize: "cover",
                      }}
                      key={i}
                    />
                  );
                })}
            </div>
          </div>
        </div>
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
          itaque reiciendis rem.
        </p>
      </div>
    </div>
  );
}
