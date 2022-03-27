import React from "react";
import "./style.css";

const Actor = ({ name, as }) => {
  return (
     <p className="actor__info">
        <b>{name}</b>
        <br /><span className="actor__info--add">as {as}</span>
    </p>
   
  );
};

export default Actor;
