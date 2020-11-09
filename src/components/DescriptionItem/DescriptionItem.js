import React from "react";
import "./descriptionItem.css";
import cn from "classnames";

export const DescriptionItem = ({
  descriptionText,
  imgLight,
  imgActive,
  index,
  current,
}) => {
  const bool = index === current,
    iconWrapClass = cn("description-item__icon-wrap", {
      "description-item__wrap-active": bool,
    }),
    circleClass = cn("progress--circle", { "circle-active": bool });

  return (
    <div className="description-item">
      <h3 className="description-item__text">{descriptionText}</h3>
      <div className="description-item__icon-box">
        <svg width="72" height="72">
          <circle
            className={circleClass}
            stroke={bool ? "#F20D59" : "#5C5C8A"}
            strokeWidth="4"
            cx="36"
            cy="36"
            r="34"
            fill="transparent"
          />
        </svg>
        <div className={iconWrapClass}>
          <img src={bool ? imgActive : imgLight} alt="лого" className="icon" />
        </div>
      </div>
    </div>
  );
};
