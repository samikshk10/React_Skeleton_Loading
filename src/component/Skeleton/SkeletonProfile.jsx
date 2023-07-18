import React from "react";
import Shimmer from "./animationshimmer";
import Skeleton from "./Skeleton";

const SkeletonProfile = ({ theme }) => {
  const themes = theme || "light";
  return (
    <div className={`skeletonProfile__wrapper ${themes}`}>
      <div className="skeletonProfile__container">
        <div className="skeletonProfile__left">
          <Skeleton type="avatar" />
        </div>
        <div className="skeletonProfile__Right">
          <Skeleton type="title" />
          <Skeleton type="text" />
          <Skeleton type="text" />
        </div>
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonProfile;
