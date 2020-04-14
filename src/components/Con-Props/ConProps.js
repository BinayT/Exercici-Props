import React from "react";
import "./ConProps.css";

export const Titulo = props => <h1>{props.texto}</h1>;

export const BolaX = props => {
  let estilo = {
    height: props.talla,
    width: props.talla,
    margin: props.margen,
    backgroundColor: props.fondo,
    borderRadius: props.bradius
  };
  return <div style={estilo}></div>;
};

export const CuadradoB = props => {
  let estilo = {
    height: props.talla,
    width: props.talla,
    margin: props.margen,
    borderWidth: props.grosor,
    backgroundColor: props.color
  };
  return <div style={estilo}></div>;
};

export const Mosca = props => {
  let estilo = {
    color: props.color,
    height: props.tamanyo,
    width: props.tamanyo,
    margin: props.margen
  };
  return (
    <div>
      <i className="fa fa-bath" style={estilo}></i>
    </div>
  );
};

export const Capital = props => {
  let estiloB = {
    fontSize: props.bFont
  };
  let estilo = {
    fontSize: props.font
  };
  return (
    <div>
      <span style={estiloB}>{props.nom[0]}</span>
      <br />
      <span style={estilo}>{props.nom}</span>
    </div>
  );
};

export const Gato = props => {
  let urlGato = "https://placekitten.com/" + props.ancho + "/" + props.alto;
  return (
    <div className="div-gato">
      <img src={urlGato} />
      <p>{props.nombre}</p>
    </div>
  );
};

export const BolaBingo = props => <div className="bola-22">{props.num}</div>;

export const FotoBola = props => {
  let estiloDiv = {
    height: props.talla,
    width: props.talla,
    borderRadius: "100px"
  };
  return (
    <div>
      <img src={props.src} style={estiloDiv} />
    </div>
  );
};

export const Marco = props => {
  let estilo = {
    border: "3px solid " + props.color,
    backgroundColor: props.fondo,
    margin: props.borde + "px"
  };
  return (
    <div style={estilo}>
      <img src={props.src} />
    </div>
  );
};
