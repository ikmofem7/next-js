import { delay } from "@/lib/delay";
import React from "react";

const getPost = async (slug) => {
  const wait = await delay(5000);
  return slug;
};

const BlogPost = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  return <div>{post}</div>;
};

export default BlogPost;
