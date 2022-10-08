import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "../../styles/Home.module.scss";
import { Story } from "../components/artwork/Story";
import { DesktopMenu } from "../components/DesktopMenu";

const ArtWorkBack = dynamic(() => import("../components/artwork/ArtWorkBack"), {
  ssr: false,
});

const Charater = dynamic(() => import("../components/artwork/Character"), {
  ssr: false,
});

function MobileHomeScreen() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main></main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          {/* <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span> */}
        </a>
      </footer>
    </div>
  );
}

export function HomeScreen() {
  const width = process.browser ? window.innerWidth : 0;
  const height = process.browser ? window.innerHeight : 0;
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  // useEffect(() => {
  //   useMediaQuery({ query: `(max-width: 760px)` })
  // })

  if (isMobile) {
    return <MobileHomeScreen />;
  }

  return (
    <div
      className={styles.container}
      // style={{
      //   cursor:
      //     "url(https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200316/2020031619494241375.png)",
      // }}
    >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <DesktopMenu />
        <ArtWorkBack
          artworkBack="https://act.hoyoverse.com/puzzle/upload/puzzle/2022/09/23/04192a8817bf9a79b36c9c2b3c4fc6f8_2369084583310338932.png?x-oss-process=image/format,webp/quality,Q_90"
          height={height}
          width={width}
        />
        <div
          style={{
            padding: "0rem 3rem",
            marginTop: "-2%",
          }}
        >
          <div style={{ padding: "0rem 10%" }}>
            <div
              style={{
                backgroundColor: "rgb(125,46,46)",
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
                <h3 style={{ margin: 0 }}>LOGO</h3>
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
                obcaecati vel. Fugit nemo molestias id nihil velit aliquid ipsa
                itaque reiciendis rem. Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Vero officiis, porro sequi corporis
                accusantium voluptas quos iusto obcaecati vel. Fugit nemo
                molestias id nihil velit aliquid ipsa itaque reiciendis rem.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
                officiis, porro sequi corporis accusantium voluptas quos iusto
                obcaecati vel. Fugit nemo molestias id nihil velit aliquid ipsa
                itaque reiciendis rem.
              </p>
              <button className="btn btn-light">Button</button>
            </div>
          </div>
          <br />
          <ArtWorkBack
            width={width}
            height={height / 1.5}
            artworkBack="https://cdnb.artstation.com/p/assets/images/images/046/373/757/4k/amanda-melville-amelville-postprocess-scene-06.jpg?1644959988"
            allBorderRadius={true}
          />
          <Story />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Charater />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          {/* <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span> */}
        </a>
      </footer>
    </div>
  );
}

/*
export class HomeScreen extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render(): React.ReactNode {
    const env = variableEnv();
    return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <DesktopMenu />
          <ArtWorkBack
            artworkBack={env.artworkBack || ""}
            width={env.innerWidth}
            height={env.innerHeight}
          />
          <div
            style={{
              padding: "0rem 3rem",
              marginTop: "-5%",
            }}
          >
            <div style={{ padding: "0rem 10%" }}>
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
                  <h3 style={{ margin: 0 }}>LOGO</h3>
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
                  obcaecati vel. Fugit nemo molestias id nihil velit aliquid
                  ipsa itaque reiciendis rem. Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Vero officiis, porro sequi
                  corporis accusantium voluptas quos iusto obcaecati vel. Fugit
                  nemo molestias id nihil velit aliquid ipsa itaque reiciendis
                  rem. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Vero officiis, porro sequi corporis accusantium voluptas quos
                  iusto obcaecati vel. Fugit nemo molestias id nihil velit
                  aliquid ipsa itaque reiciendis rem.
                </p>
                <button className="btn btn-light">Button</button>
              </div>
            </div>
            <br />
            <ArtWorkBack
              artworkBack={env.artworkBack || ""}
              width={env.innerWidth}
              height={env.innerHeight / 1.5}
              allBorderRadius={true}
            />
            <Story />
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </div>
    );
  }
}
*/
