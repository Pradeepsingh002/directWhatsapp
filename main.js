let form = document.querySelector("form");
let number = document.querySelector("input");
let btn = document.getElementById("btn");
let link = document.getElementById("A");
let chat = (e) => {
  e.preventDefault();

  link.setAttribute("href", `https://wa.me/${number.value}`);
  let Href = link.getAttribute("href");
  window.open(Href);
  form.reset();
};
btn.addEventListener("click", chat);
