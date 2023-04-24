import React from "react";
import './circle.css'

const Circle = ({ percent = 0}) => {
  const radius = 50; // радиус круга
  const stroke = 10; // толщина линии

  // вычисляем длину окружности и соответствующую ей дугу
  const circumference = 2 * Math.PI * radius;
  const arcLength = (circumference * percent) / 100;

  // вычисляем координаты точек начала и конца дуги
  const startX = radius;
  const startY = 0;
  const endX = radius * Math.cos((arcLength / circumference) * 2 * Math.PI);
  const endY = radius * Math.sin((arcLength / circumference) * 2 * Math.PI);

  // вычисляем значение атрибута stroke-dasharray для отображения прогресса
  const dashArray = `${arcLength} ${circumference - arcLength}`;

  return (
    <div className="circle">
      <svg
        width="120"
        height="120"
        viewBox={`-10 -10 ${radius * 4} ${radius * 4}`}
      >
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          strokeWidth={stroke}
          stroke="#ccc"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          strokeWidth={stroke}
          stroke="#ff5722"
          strokeDasharray={dashArray}
          transform={`rotate(-90 ${radius} ${radius})`}
        />
        <text
          x="50"
          y="50"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="20"
        >
          {percent}%
        </text>
      </svg>
    </div>
  );
};

export default Circle;
