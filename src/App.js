import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "brand" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Crosbo",
      animal: "Cane",
      breed: "NonLoSo",
    }),
    React.createElement(Pet, {
      name: "Lola",
      animal: "Gatto",
      breed: "Boh",
    }),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Cane",
      breed: "NonLoSo",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
