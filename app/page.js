"use client";
import Card from "@/Components/Card/Card";

import { Topics } from "@/Components/Topics/Topics";
import { Blogs } from "@/db/blog";
import { tags } from "@/db/tags";
import React, { useEffect, useState } from "react";

const page = () => {
  const [filter, setFilter] = useState(["Trending"]);
  const [filteredBlogs, setFilteredBlogs] = useState(Blogs);

  const handleFilter = (tag) => {
    if (tag === "Trending") return setFilter(["Trending"]);
    if (filter.includes(tag)) {
      if (filter.length === 1) return setFilter(["Trending"]);
      setFilter(filter.filter((t) => t !== tag));
    } else {
      setFilter(filter.includes("Trending") ? [tag] : [...filter, tag]);
      // setFilter((f) => [...f, tag]);
    }
  };

  useEffect(() => {
    if (filter.includes("Trending")) {
      setFilteredBlogs(Blogs);
    } else {
      setFilteredBlogs(
        Blogs.filter((blog) => {
          return blog.tags.some((tag) => filter.includes(tag));
        })
      );
    }
  }, [filter]);

  return (
    <>
      <div className=" flex pt-16 px-12 gap-3">
        {/* Articles Cards */}
        <div>
          <h1 className="text-4xl font-bold mb-5">Top Stories</h1>
          <div className="flex flex-col gap-5">
            {filteredBlogs?.map((blog) => (
              <Card key={blog.title} {...blog} />
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="pl-5 pr-5 items-center ">
          <h3 className=" mb-2 font-semibold text-[1.25rem]">
            Discover more of what matters to you
          </h3>
          <div className="block justify-evenly">
            {tags?.map((tag) => (
              <Topics key={tag} tag={tag} filterHandler={handleFilter} />
            ))}
          </div>

          <a className="  text-green-400 hover:text-black cursor-pointer">
            See more topics
          </a>
        </div>
      </div>
    </>
  );
};

export default page;
