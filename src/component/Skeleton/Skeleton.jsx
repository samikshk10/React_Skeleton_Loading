import React from "react";
import "../../assets/css/Skeleton.css";
const Skeleton = ({ type }) => {
  return <div className={`skeleton ${type}`}> </div>;
};

export default Skeleton;
