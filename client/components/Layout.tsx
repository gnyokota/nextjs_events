import Head from "next/head";
import {useRouter} from "next/router";
import React from "react";

import Header from "./Header";
import Footer from "./Footer";

import styles from "@styles/Layout.module.css";
import Showcase from "./Showcase";

type Props = {
  title?: string;
  keywords?: string;
  description?: string;
  children: JSX.Element;
};

const HeaderLayout = ({
  title = "City Events",
  keywords = "city, party, events, concerts",
  description = "Find the latest city events",
  children,
}: Props) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {router.pathname === "/" && <Showcase />}
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
};

export default HeaderLayout;
