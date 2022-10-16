import React from "react";
import styles from "../../styles/Home.module.scss";
import { BlockContent } from "../components/BlockContent";
import { Layout } from "../components/Layout";

export function PlaygroundScreen() {
  return (
    <Layout>
      <BlockContent title="Story">
        <p>
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
      </BlockContent>
    </Layout>
  );
}
