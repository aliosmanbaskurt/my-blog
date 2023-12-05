import React from "react";
import { getSortedPostsData } from "@/lib/posts";
import ListItem from "./ListItem";

function Category() {
  const posts = getSortedPostsData();
  return <div>Category</div>;
}

export default Category;
