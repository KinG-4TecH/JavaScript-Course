/*

DOM : Document Object Model

*/

let idElement = document.getElementById("p");
// console.log(idElement);

let classElements = document.getElementsByClassName("span");

// console.log(classElements[0]);

let element = document.querySelector(".identical");
let elements = document.querySelectorAll("form");

// console.log(elements);

// console.log(document.title);

idElement.addEventListener("click", function () {
  idElement.innerHTML = "Hello DOM";
});
