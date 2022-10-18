import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { getHomeData } from "../../pages/api/home";
import styles from "../../styles/Home.module.scss";
import { FAQ } from "../components/artwork/FAQ";
import { Join } from "../components/artwork/Join";
import { Story } from "../components/artwork/Story";
import { BlockContent } from "../components/BlockContent";
import { Cloud } from "../components/Cloud";
import { DesktopMenuComponent } from "../components/DesktopMenu";
import TeamComponent from "../components/TeamComponent";

const Layout = dynamic(() => import("../components/Layout"), {
  ssr: false,
});

const ArtWorkBack = dynamic(() => import("../components/artwork/ArtWorkBack"), {
  ssr: false,
});

const Charater = dynamic(() => import("../components/artwork/Character"), {
  ssr: false,
});

const Roadmap = dynamic(() => import("../components/artwork/Roadmap"), {
  ssr: false,
});

function MobileHomeScreen() {
  return (
    <div>
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

  useEffect(() => {
    getHomeData().then((data) => console.log(data));
  });

  if (isMobile) {
    return <MobileHomeScreen />;
  }

  return (
    <Layout>
      <ArtWorkBack
        artworkBack="https://thumbs.gfycat.com/AdorableBrownEuropeanfiresalamander-size_restricted.gif"
        height={height}
        width={width}
      />
      <div style={{ padding: "0rem 3rem", marginTop: "-2%" }}>
        <BlockContent title="Logo">
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
            adipisicing elit. Vero officiis, porro sequi corporis accusantium
            voluptas quos iusto obcaecati vel. Fugit nemo molestias id nihil
            velit aliquid ipsa itaque reiciendis rem. Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Vero officiis, porro sequi
            corporis accusantium voluptas quos iusto obcaecati vel. Fugit nemo
            molestias id nihil velit aliquid ipsa itaque reiciendis rem.
          </p>
          <button className="btn btn-light">Button</button>
        </BlockContent>
        <ArtWorkBack
          width={width}
          height={height / 1.5}
          artworkBack="https://cdnb.artstation.com/p/assets/images/images/046/373/757/4k/amanda-melville-amelville-postprocess-scene-06.jpg?1644959988"
          allBorderRadius={true}
        />
        <Story />
        <div style={{ marginTop: "10%" }}>
          <Charater />
        </div>
      </div>
      <ArtWorkBack artworkBack="" width={width} height={height / 1.5} />
      <div
        style={{
          padding: "0rem 3rem",
          marginTop: "-2%",
          position: "relative",
        }}
      >
        <Roadmap />
        <div style={{ marginTop: "10%" }}>
          <TeamComponent />
        </div>
        <div style={{ marginTop: "10%" }}>
          <FAQ />
        </div>
        <div style={{ marginTop: "10%" }}>
          <Join />
        </div>
      </div>
    </Layout>
  );
}
