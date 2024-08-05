let form = document.querySelector("form");
let number = document.querySelector("input");
let btn = document.getElementById("btn");
let link = document.getElementById("A");
let chat = (e) => {
  e.preventDefault();

  link.setAttribute("href", `https://wa.me/${number.value}`);
  let at = link.getAttribute("href");
  console.log(number.value);
  console.log(at);
  form.reset();
};
btn.addEventListener("click", chat);
