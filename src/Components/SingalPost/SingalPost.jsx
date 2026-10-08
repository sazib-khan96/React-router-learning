import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const SingalPost = () => {
  const singalPost = useLoaderData();
  const { id, title, body } = singalPost;
  const navigate = useNavigate()

  const goBackhandle = () =>{
   navigate(-1)
  }
  return (
    <div className="w-8/12 p-3 mt-8 mx-auto">
      <div >
        <h3>{id}</h3>
        <h3 className="text-2xl mb-3">{title}</h3>
        <p>{body}</p>
      </div>
      <div className="mt-10">
        <button onClick={goBackhandle} className="my_custom_btn">Go Back</button>
      </div>
    </div>
  );
};

export default SingalPost;
