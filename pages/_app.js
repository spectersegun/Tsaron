import React, { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";

//component
import Loading from "@/src/components/Loading";
import BackgroundLoader from "@/src/components/BackgroundLoader";

//styles
import "../public/feather/feather.css";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return <Component {...pageProps} />;
}
