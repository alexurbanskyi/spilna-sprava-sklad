import React from 'react';

const Circle = ({ percent }) => {
  const radius = 50; // радиус круга
  const stroke = 10; // толщина линии

  // вычисляем длину окружности и соответствующую ей дугу
  const circumference = 2 * Math.PI * radius;
  const arcLength = circumference * percent / 100;

  // вычисляем координаты точек начала и конца дуги
  const startX = radius;
  const startY = 0;
  const endX = radius * Math.cos(arcLength / circumference * 2 * Math.PI);
  const endY = radius * Math.sin(arcLength / circumference * 2 * Math.PI);

  // вычисляем значение атрибута stroke-dasharray для отображения прогресса
  const dashArray = `${arcLength} ${circumference - arcLength}`;

  return (
    <svg width="200" height="200" viewBox={`-20 -20 ${radius *4} ${radius * 4}`}>
      <circle cx="50" cy="50" r={radius} fill="none" strokeWidth={stroke} stroke="#ccc" />
      <circle cx="50" cy="50" r={radius} fill="none" strokeWidth={stroke} stroke="#ff5722"
        strokeDasharray={dashArray} transform={`rotate(-90 ${radius} ${radius})`} />
      <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" fontSize="20">{percent}%</text>
    </svg>
  );
};

export default Circle;
