const container = document.querySelector(".container");

container.addEventListener("click", function () {
  const h1 = document.querySelector(".heading");
  const circle = document.querySelector(".circle");
  const note = document.querySelector(".note");

  h1.classList.add("hide");
  circle.classList.add("hide");
  note.classList.add("show");
  // console.log(h1);
  // h1.innerHTML = `Thanks for being my mom.<br />
  //     I hope you catch lots of fishies.
  //     <br />
  //     &hearts; Kristi`;
});
