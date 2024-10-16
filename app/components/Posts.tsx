import React from "react";
import { getSortedPostsData } from "@/lib/posts";
import ListItem from "./ListItem";

export default function Posts() {
  const posts = getSortedPostsData();

  return (
    <section className=" h-full mt-6 mx-auto md:max-w-4xl max-w-3xl  text-center">
      <h2 className="text-3xl font-extrabold  underline">Blog Yazıları</h2>

      <ul>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-3">
          {posts.map((post) => (
            <ListItem key={post.id} post={post} />
          ))}
        </div>
      </ul>
    </section>
  );
}
