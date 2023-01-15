const path = require("path");
const express = require("express");

const platos = [
  {
    nombre: "Carpaccio fresco",
    descripcion: "Entrada Carpaccio de salmón con cítricos",
    precio: "U$S 65.50",
    id: 1,
    img: "/images/Carpaccio-de-salmon.jpg",
    alt: "carpaccio-fresco",
  },

  {
    nombre: "Risotto de berenjena",
    descripcion: "Risotto de berenjena y queso de cabra",
    precio: "U$S 47.00",
    id: 2,
    img: "/images/Risoto-berenjena-queso-cabra.jpg",
    alt: "risoto",
  },

  {
    nombre: "Mousse de arroz",
    descripcion: "Mousse de arroz con leche y aroma de azahar",
    precio: "U$S 27.50",
    id: 3,
    img: "/images/Mousse-de-arroz-con-leche.jpg",
    alt: "mousse-arroz",
  },

  {
    nombre: "Espárragos blancos",
    descripcion: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
    precio: "U$S 37.50",
    id: 4,
    img: "/images/esparragos.png",
    alt: "esparragos",
  },
];

module.exports = {
  home: (req, res) => {
    res.render("index", { platos });
  },

  detalle: (req, res) => {
    res.render("detalleMenu", { platos });
  },
};
