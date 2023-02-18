import Link from "next/link";
import React from "react";
import {FaExclamationTriangle} from "react-icons/fa";

import HeaderLayout from "@components/Layout";

import styles from "@styles/NotFound.module.css";

const NotFoundPage = () => {
  return (
    <HeaderLayout title="Page Not Found">
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle />
          <span className={styles.code}>404</span>
        </h1>
        <h4>Sorry, there is nothing here...</h4>
        <Link href="/">Go back to homepage</Link>
      </div>
    </HeaderLayout>
  );
};

export default NotFoundPage;
