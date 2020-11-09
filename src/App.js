import React, { useState, useEffect } from "react";
import "./styles/App.css";
import { DBslides } from "./DBslides";
import { DescriptionItem } from "./components/DescriptionItem/DescriptionItem";
import { Slide } from "./components/Slide/Slide";

function App() {
  // хук текущего активного индекса
  const [current, setCurrent] = useState(0);
  // Ф-я анимации
  const animate = ({ timing, draw, duration }) => {
    let start = performance.now();

    requestAnimationFrame(function animate(time) {
      // timeFraction изменяется от 0 до 1
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;

      // вычисление текущего состояния анимации
      let progress = timing(timeFraction);

      draw(progress); // отрисовать её

      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
    });
  };
  // Установка интервала смены активного индекса
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrent((id) => (id === DBslides.length - 1 ? 0 : id + 1));
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);
  // Отрисовка анимации прогрессбара при изменении активного индекса
  useEffect(() => {
    let circle = document.querySelector(".circle-active");

    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;

    const setProgress = (prec) => {
      const offset = circumference - (prec / 100) * circumference;
      circle.style.strokeDashoffset = offset;
    };
    // запуск ф-и анимации
    animate({
      duration: 4000,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        setProgress(progress * 100);
      },
    });
  }, [current]);

  return (
    <div className="section">
      <div className="container">
        <div className="description-block">
          {DBslides.map((item, index) => (
            <DescriptionItem
              key={index}
              {...item}
              current={current}
              index={index}
            />
          ))}
        </div>
        <div className="slides-block">
          {DBslides.map((item, index) => (
            <Slide key={index} {...item} current={current} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
