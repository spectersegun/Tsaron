import React from "react";
import Head from "next/head";
import Error404 from "../src/layouts/Error/404";

export default function pagenotfound() {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <Error404 />
    </>
  );
}
