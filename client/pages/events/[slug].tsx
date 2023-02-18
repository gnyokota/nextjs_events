import {useRouter} from "next/router";
import React from "react";

import HeaderLayout from "@components/HeaderLayout";

const SingleEvent = () => {
  const router = useRouter();
  return (
    <HeaderLayout>
      <div>
        <h1>Query</h1>
        <h1>{router.query.slug}</h1>
      </div>
    </HeaderLayout>
  );
};

export default SingleEvent;
