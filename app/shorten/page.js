"use client";
import Link from "next/link";
import React, { useState } from "react";

const page = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState("");

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shortUrl: shortUrl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
        console.log(result);
        alert(result.message);
      })
      .catch((error) => console.error(error));

    setUrl("");
    setShortUrl("");
  };

  return (
    <div className="mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4">
      <h1 className="font-bold text-2xl">Generate your short URLs</h1>
      <div className="flex flex-col gap-2">
        <input
          className="px-3 py-2 focus:outline-purple-600 rounded-md"
          onChange={(e) => setUrl(e.target.value)}
          value={url}
          type="text"
          name=""
          placeholder="Enter your URL"
          id=""
        />
        <input
          value={shortUrl}
          className="px-3 py-2 focus:outline-purple-600 rounded-md"
          onChange={(e) => setShortUrl(e.target.value)}
          type="text"
          name=""
          placeholder="Enter your preferred short URL"
          id=""
        />
        <button
          onClick={generate}
          className="bg-purple-500 shadow-lg p-3 rounded-lg py-1 my-3 font-bold text-white"
        >
          Generate
        </button>
      </div>
      {generated && (
        <>
          <span className="font-bold text-lg">Your Link </span>
          <code>
            <Link href={generated} target="_blank">
              {generated}
            </Link>
          </code>
        </>
      )}
    </div>
  );
};

export default page;
