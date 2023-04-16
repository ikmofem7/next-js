import React from "react";

const Blog = () => {
  return <div>Blog</div>;
};

const getStaticParams = () => {
  return [
    {
      slug: "Learn-next-js",
    },
    {
      slug: "react-vs-angular",
    },
  ];
};

export default getStaticParams;
