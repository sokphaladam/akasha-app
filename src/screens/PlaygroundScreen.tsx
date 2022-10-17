import dynamic from "next/dynamic";
import React from "react";
import styles from "../../styles/Home.module.scss";
import { BlockContent } from "../components/BlockContent";
import { Layout } from "../components/Layout";

const Fileupload = dynamic(() => import("../components/Fileupload"), {
  ssr: true,
});

export function PlaygroundScreen() {
  return (
    <Layout>
      <Fileupload />
    </Layout>
  );
}
