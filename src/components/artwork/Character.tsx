import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { BlockContent } from "../BlockContent";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import autoAnimate from "@formkit/auto-animate";

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

const calc = (x: any, y: any) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1,
];
const trans = (x: any, y: any, s: any) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Container = styled(animated.div)`
  background-color: #345b4b;
  border-radius: 5;
  margin: 1rem;
  background-size: cover;
  background-position: bottom;
`;

function CharacterImage({
  width,
  height,
  image,
}: {
  width: number;
  height: number;
  image: string;
}) {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: config.default,
  }));

  return (
    <Container
      style={{
        width,
        height,
        backgroundImage: `url(${image})`,
        transform: props.xys.interpolate(trans),
      }}
      id="char"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
    ></Container>
  );
}

export default function Charater() {
  const leftList = useRef(null);
  const rightList = useRef(null);
  const [index, setIndex] = useState<number>(0);
  const [limit, setLimit] = useState<number>(2);
  const [leftCharacter, setLeftCharacter] = useState([
    ...mapCharater,
    ...mapCharater.filter((_, i) => i <= limit),
  ]);
  const [rightCharacter, setRightCharacter] = useState([
    ...mapCharater.reverse(),
    ...mapCharater.reverse().filter((_, i) => i <= limit),
  ]);

  useEffect(() => {
    leftList.current &&
      autoAnimate(leftList.current, {
        duration: 250,
        easing: "ease-in-out",
        disrespectUserMotionPreference: true,
      });
    rightList.current &&
      autoAnimate(rightList.current, {
        duration: 350,
        easing: "ease-in-out",
        disrespectUserMotionPreference: true,
      });
  }, [leftList, rightList]);

  useEffect(() => {
    setTimeout(() => {
      setIndex(index + 1);
      if (index >= mapCharater.length) {
        setIndex(1);
      } else {
        setIndex(index + 1);
      }
    }, 5000);
  });

  return (
    <BlockContent title="Character" id="character">
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
          <div ref={leftList}>
            {leftCharacter.map((x, i) => {
              if (i < index) return <></>;
              if (i > index + limit) return <></>;
              if (i >= index || i <= index + limit) {
                return (
                  <CharacterImage
                    width={75}
                    height={75}
                    image={x.image}
                    key={i}
                  />
                );
              }
              return <></>;
            })}
          </div>
          <CharacterImage
            width={75 * 3 + 30}
            height={75 * 3 + 30}
            image={leftCharacter[index].bgImage}
          />
        </div>
        <div style={{ display: "flex" }}>
          <CharacterImage
            width={75 * 3 + 30}
            height={75 * 3 + 30}
            image={rightCharacter[index].bgImage}
          />
          <div ref={rightList}>
            {rightCharacter.map((x, i) => {
              if (i < index) return <></>;
              if (i > index + limit) return <></>;
              if (i >= index || i <= index + limit) {
                return (
                  <CharacterImage
                    width={75}
                    height={75}
                    image={x.image}
                    key={i}
                  />
                );
              }
              return <></>;
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
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero officiis,
        porro sequi corporis accusantium voluptas quos iusto obcaecati vel.
        Fugit nemo molestias id nihil velit aliquid ipsa itaque reiciendis rem.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero officiis,
        porro sequi corporis accusantium voluptas quos iusto obcaecati vel.
        Fugit nemo molestias id nihil velit aliquid ipsa itaque reiciendis rem.
      </p>
    </BlockContent>
  );
}
