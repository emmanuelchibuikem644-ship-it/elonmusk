"use client";
import { useEffect, useState } from "react";

import Home from "../component/Home";
import Loader from "../component/Loader";

export default function page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // ⏱️ loaderdration

    return () => clearTimeout(timer);
  }, []);

  // 👇 THIS BLOCKS MAIN PAGE
  if (loading) {
    return <Loader />;
  }

  // 👇 MAIN PAGE ONLY SHOWS AFTER LOADER
  return <Home/>;
}
