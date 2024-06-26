import React from "react";
import generateMeta from "@/utils/meta";
import Link from "next/link";

export async function generateMetadata({ params, searchParams }, parent) {
  return generateMeta("Search", "Select search method.");
}

function Search() {
  return (
    <main className="min-h-40 flex flex-row flex-wrap items-center justify-center gap-5">
      <Link
        href="/search/by-ingredients"
        className="flex max-h-20 min-w-[15rem] flex-row items-center justify-center rounded-2xl bg-primary-500 px-6 py-12 text-3xl text-black shadow-md hover:bg-primary-700 hover:text-white"
      >
        🧾 ingredients
      </Link>

      {/* 
      <div className="hidden h-full w-[5rem] sm:block">
        <div className="h-40 w-1/2 border-r-2 border-background-200"></div>
      </div> */}

      <Link
        href="/search/by-name"
        className="flex max-h-20 min-w-[15rem] flex-row items-center justify-center rounded-2xl bg-secondary-500 px-6 py-12 text-3xl text-black shadow-md hover:bg-secondary-700"
      >
        🔍 dish name
      </Link>

      <Link
        href="/search/by-image"
        className="flex max-h-20 min-w-[15rem] flex-row items-center justify-center rounded-2xl bg-accent-500 px-6 py-12 text-3xl text-white shadow-md hover:bg-accent-700"
      >
        📷 image
      </Link>
    </main>
  );
}

export default Search;
