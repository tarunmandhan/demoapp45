import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const User = () => {
  const { fname, lname } = useParams();
  const abc = useLocation();
  const xyz = useNavigate();
  console.log(xyz);

  const goToContact = () => {
    xyz("/Contact");
  };

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

      <button onClick={() => goToContact()}>go to Contact page</button>
      <button
        onClick={() => {
          xyz(-1);
        }}
      >
        go back
      </button>
    </>
  );
};

export default User;
