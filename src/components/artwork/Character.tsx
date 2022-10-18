import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BlockContent } from "../BlockContent";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

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
  // const MAX_ROTATE_X = 20;
  // const MAX_ROTATE_Y = 18;

  // const onMouseMove = (event: any) => {
  //   const card = {
  //     halfHeight: event.target.height / 2,
  //     halfWidth: event.target.width / 2,
  //   };
  //   const degsToRotateY =
  //     ((card.halfWidth - event.offsetX) * MAX_ROTATE_Y) / card.halfWidth;
  //   const degsToRotateX =
  //     ((card.halfHeight - event.offsetY) * -MAX_ROTATE_X) / card.halfHeight;
  //   event.target.style.transform = `rotateX(${degsToRotateX}deg) rotateY(${degsToRotateY}deg)`;
  // };

  // const applySlowTransitionAnimation = (mouseOutEvent: any) => {
  //   mouseOutEvent.target.style.transition = "400ms ease-out";
  // };

  // const applyFastTransitionAnimation = (mouseEnterEvent: any) => {
  //   mouseEnterEvent.target.style.transition = "50ms linear";
  // };

  // const resetCardPosition = (mouseOutEvent: any) => {
  //   mouseOutEvent.target.style.transform = "rotateX(0deg) rotateY(0deg)";
  // };

  // useEffect(() => {
  //   const cardElement = document.getElementById("char");
  //   if (cardElement) {
  //     cardElement?.addEventListener("mouseenter", (event) => {
  //       applyFastTransitionAnimation(event);
  //       cardElement.addEventListener("mousemove", onMouseMove);
  //     });

  //     cardElement?.addEventListener("mouseout", (event) => {
  //       applySlowTransitionAnimation(event);
  //       resetCardPosition(event);
  //       cardElement.removeEventListener("mousemove", onMouseMove);
  //     });
  //   }
  // }, []);

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

// class CharacterImageClass extends React.Component<{
//   width: number;
//   height: number;
//   image: string;
// }> {
//   constructor(props: any) {
//     super(props);
//   }

//   render(): React.ReactNode {
//     const { width, height, image } = this.props;
//     return (
//       <div
//         style={{
//           backgroundColor: "#345b4b",
//           width,
//           height,
//           borderRadius: 5,
//           margin: "1rem",
//           backgroundImage: `url(${image})`,
//           backgroundSize: "cover",
//           backgroundPosition: "bottom",
//         }}
//         className="char"
//       ></div>
//     );
//   }
// }

export default function Charater() {
  const [li, setLi] = useState(0);
  const [ri, setRi] = useState(3);

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
          <div>
            {mapCharater
              .filter((x, i) => i < 3)
              .map((x, i) => {
                return (
                  <CharacterImage
                    width={75}
                    height={75}
                    image={x.image}
                    key={i}
                  />
                );
              })}
          </div>
          <CharacterImage
            width={75 * 3 + 30}
            height={75 * 3 + 30}
            image={mapCharater[li].bgImage}
          />
        </div>
        <div style={{ display: "flex" }}>
          <CharacterImage
            width={75 * 3 + 30}
            height={75 * 3 + 30}
            image={mapCharater[ri].bgImage}
          />
          <div>
            {mapCharater
              .filter((x, i) => i > 2)
              .map((x, i) => {
                return (
                  <CharacterImage
                    width={75}
                    height={75}
                    image={x.image}
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
