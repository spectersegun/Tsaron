import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import HomeLayout from "../src/layouts/HomeLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>LoveLette App</title>
      </Head>
      <main>
        <HomeLayout />
      </main>
    </>
  );
}
