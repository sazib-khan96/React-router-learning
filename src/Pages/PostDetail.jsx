import React from "react";
import { useLoaderData,NavLink } from "react-router-dom";

const PostDetail = () => {
  const postid = useLoaderData();
  return (
    <div className="w-8/12 mx-auto ">
      <h1 className="text-xl">This is Post details page</h1>
      <div className="shadow-2xl text-yellow-500 p-3 ">
        <h1 className="text-2xl mb-5 ">{postid.title}</h1>
        <p>{postid.body}</p>
      </div>
      <div>
        <NavLink>Go Back</NavLink>
      </div>
    </div>
  );
};

export default PostDetail;
