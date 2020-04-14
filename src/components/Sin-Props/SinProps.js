import React from "react";
import "./Sinprops.css";

export const HolaMundo = () => (
  <h1>
    <center>Hola Mundo</center>
  </h1>
);

export const Bola = () => <div className="bola"></div>;

export const Cuadrado = () => <div className="cuadrado"></div>;

export const Separador = () => {
  return (
    <div>
      <hr className="hr-superior" />
      <hr className="hr-inferior" />
    </div>
  );
};
