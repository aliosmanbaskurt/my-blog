import React from "react";
import { getSortedPostsData } from "@/lib/posts";
import ListItem from "./ListItem";

export default function Posts() {
  const posts = getSortedPostsData();

  return (
    <section className=" mt-6 mx-auto max-w-2xl">
      <h2 className="text-3xl font-extrabold dark:text-white">Blog Yazıları</h2>

      <ul>
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
