"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
const Home = () => {
  const router = useRouter();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <button onClick={() => router.push("/Profile/Account")}>
        Go to Profile
      </button>
    </div>
  );
};

export default Home;
