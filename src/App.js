import React from "react";
import {
  Bola,
  Cuadrado,
  Separador,
  HolaMundo
} from "./components/Sin-Props/SinProps";
import {
  Titulo,
  BolaX,
  CuadradoB,
  Mosca,
  Capital,
  Gato,
  BolaBingo,
  FotoBola,
  Marco
} from "./components/Con-Props/ConProps";

import ConPropsState from "./components/Con-Props-State/ConPropsState";

export default class App extends React.Component {
  render() {
    return (
      <>
        {/* SIN PROPS */}

        <HolaMundo />
        <Bola />
        <Cuadrado />
        <Separador />

        {/* CON PROPS */}

        <Titulo texto="Hola React" />
        <BolaX talla="80px" margen="10px" fondo="#ff0000" bradius="100%" />
        <CuadradoB talla="70px" margen="8px" grosor="5px" color="red" />
        <Mosca color="blue" tamanyo="40px" margen="10px" />
        <Capital nom="Barcelona" bFont="200px" font="30px" />
        <Gato ancho="200" alto="200" nombre="Garfield" />
        <BolaBingo num="22" />

        {/* CON PROPS + STYLE ESPECIFICO */}

        <FotoBola src="http://lorempixel.com/200/200" talla="200px" />
        <Marco
          src="http://lorempixel.com/200/300"
          borde="10"
          color="brown"
          fondo="beige"
        />
        <ConPropsState icon1="fa-thumbs-up" icon2="fa-thumbs-down" />
      </>
    );
  }
}
