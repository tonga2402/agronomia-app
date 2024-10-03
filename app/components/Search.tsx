"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import Modal from "./Modal";
import NewClient from "./NewClient";

const Search = () => {
  const router = useRouter();
  const [text, setText] = useState<string>("");
  const [query] = useDebounce(text, 500);

  useEffect(() => {
    if (!query) {
      router.push(`/clients`);
    } else {
      router.push(`/clients?search=${query}`);
    }
  }, [query, router]);

  return (
    <div className="flex gap-4 relative mb-6  rounded-lg ">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        id="inputSearch"
        type="text"
        placeholder="Buscar"
        className="block w-full rounded-lg border-solid border-2 border-gray-300  py-2 pl-10 pr-4 text-sm focus:border-[#279097] focus:outline-none focus:ring-1 shadow-md"
      />
      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 transform">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-4 w-4 text-neutral-500 dark:text-neutral-200"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </span>
      <NewClient />
    </div>
  );
};

export default Search;
