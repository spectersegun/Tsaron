import React from "react";
import Head from "next/head";
import Error500 from "../src/layouts/Error/500";

export default function Error() {
  return (
    <>
      <Head>
        <title>Something Went Wrong</title>
      </Head>
      <Error500 />
    </>
  );
}
