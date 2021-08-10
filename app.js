"use strict";

//for rgb

let generatecolor = document.querySelector(".rgb-btn");

let colorname = document.querySelector(".rgb-name");

let colorchange = document.querySelector(".rgb");

//

generatecolor.addEventListener("click", function () {

  let randomcolor1 = Math.floor(Math.random() * 256);

  let randomcolor2 = Math.floor(Math.random() * 256);

  let randomcolor3 = Math.floor(Math.random() * 256);

  let finalcolor = `rgb(${randomcolor1},${randomcolor2},${randomcolor3})`;

  colorchange.style.backgroundColor = finalcolor;

  colorname.textContent = finalcolor;

});

//for hex

let generatecolorhex = document.querySelector(".hex-btn");

let colornamehex = document.querySelector(".hex-name");

let colorchangehex = document.querySelector(".hex");

generatecolorhex.addEventListener("click", function () {

  let hexnum = Math.random().toString(16).substr(-6);

  console.log(hexnum);

  let finalcolor = `#${hexnum}`;

  colorchangehex.style.backgroundColor = finalcolor;

  colornamehex.textContent = finalcolor;

});

//grad

let generatecolorgrad = document.querySelector(".grad-btn");

let colornamegrad = document.querySelector(".grad-name");

let colorchangegrad = document.querySelector(".grad");

function random() {

  let randomcolor = Math.floor(Math.random() * 256);

  return randomcolor;

}

generatecolorgrad.addEventListener("click", function () {

  let randomcolor1 = `${random()} ,${random()} ,${random()}`;

  let randomcolor2 = `${random()} ,${random()} ,${random()}`;

  console.log(randomcolor1, randomcolor2);

  colorchangegrad.style = `background-image:linear-gradient(to bottom right,rgb(${randomcolor1}) , rgb(${randomcolor2}))`;

  colornamegrad.textContent = `Color 1 - ${randomcolor1} // Color 2 - ${randomcolor2}`;

});
