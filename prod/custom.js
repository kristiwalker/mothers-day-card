"use strict";

var container = document.querySelector(".container");
container.addEventListener("click", function () {
  var h1 = document.querySelector(".heading");
  var circle = document.querySelector(".circle");
  var note = document.querySelector(".note");
  h1.classList.add("hide");
  circle.classList.add("hide");
  note.classList.add("show"); // console.log(h1);
  // h1.innerHTML = `Thanks for being my mom.<br />
  //     I hope you catch lots of fishies.
  //     <br />
  //     &hearts; Kristi`;
});