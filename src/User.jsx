import React from "react";
import { useParams, useLocation } from "react-router-dom";

const User = () => {
  const { fname, lname } = useParams();
  const abc = useLocation();
  console.log(abc);
  return (
    <>
      <h1>
        User {fname} {lname} page
      </h1>
      <h3>My current Location is - {abc.pathname}</h3>
      {abc.pathname === `/user/tarun/mandhan` ? (
        <button
          onClick={() => {
            alert("Thank you for click");
          }}
        >
          Click here
        </button>
      ) : null}
    </>
  );
};

export default User;
