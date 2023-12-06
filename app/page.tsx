"use client";
import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";

type WSResults = {
  price: string;
  title: string;
  review: string;
  imageUrl: string;
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [html, setHtml] = useState("");
  const handleSubmit = async () => {
    setIsLoading(true);

    const res = await fetch("/coin", {
      method: "GET",
      // body: JSON.stringify({ searchPrompt }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { htmlString } = await res.json();
    setHtml(htmlString);
    console.log(htmlString);
    setIsLoading(false);
  };
  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <main className=" max-w-5xl mx-auto flex flex-col mt-5  justify-center">
      {isLoading && <p className="text-white">Loading...</p>}
      <h1 className="text-white text-3xl font-bold">{html}</h1>
      <div className="grid grid-cols-3 gap-2"></div>
    </main>
  );
}
