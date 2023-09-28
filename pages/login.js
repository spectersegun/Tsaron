import React from "react";
import Head from "next/head";
import Login from "../src/layouts/Auth/Login";

export default function loginpage() {
  return (
    <>
      <Head>
        <title>LoveLette App</title>
      </Head>
      <div>
        <Login />
      </div>
    </>
  );
}
