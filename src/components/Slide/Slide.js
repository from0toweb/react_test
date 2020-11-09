import React from "react";
import "./slide.css";
import dotsImg from "../../img/dot-pattern.svg";
import cn from "classnames";

export const Slide = ({ slideTitle, slideText, slideImg, current, index }) => {
  const wrapClass = cn("slide-block__wrap", {
    "slide-block__wrap--active": index === current,
  });

  const dotsClass = cn("slide-block__dots", {
    "slide-block__dots--active": (current + 1) % 2 === 0,
  });
  return (
    <div className={wrapClass}>
      <h2 className="slide-block__title">{slideTitle}</h2>
      <p className="slide-block__text">{slideText}</p>
      <div className="slide-block__image-wrap">
        <img className="slide-block__img" src={slideImg} alt="картинка" />
        <img src={dotsImg} alt="dots" className={dotsClass} />
      </div>
    </div>
  );
};
