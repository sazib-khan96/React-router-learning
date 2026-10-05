import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetail = () => {
    const navigate = useNavigate()
  const postid = useLoaderData();
  return (
    <div className="w-8/12 mx-auto ">
      <h1 className="text-xl">This is Post details page</h1>
      <div className="shadow-2xl text-yellow-500 p-3 ">
        <h1 className="text-2xl mb-5 ">{postid.title}</h1>
        <p>{postid.body}</p>
      </div>
      <div className="flex justify-center mt-8">

        <button onClick ={() => navigate(-1) }className="px-4 py-2 bg-amber-400">Go Back</button>
      </div>
    </div>
  );
};

export default PostDetail;
