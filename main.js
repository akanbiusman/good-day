var body = document.getElementById("body");
var p = document.querySelector("p");
var h = document.querySelector("h1");
const date = new Date();
const hour = date.getHours();
var day = date.getDay();
var year = date.getFullYear();
var month = date.getMonth();
var user = prompt("What's your name");

setInterval(function randomBackground() {
  var a = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var c = Math.floor(Math.random() * 256);

  var bgcolor = "linear-gradient(to bottom right," + a + ", " + b + ", " + c + ")";

  document.body.style.background = bgcolor;
}, 1500);

function setDay() {
  if (day === 1) {
    let day = `Hi ${user}, It's Monday😆`;
    p.textContent = day;
    h.textContent = "Have a great day!🤗";
  } else if (day === 2) {
    let day = `Hi ${user}, It's Tuesday🤭`;
    p.textContent = day;
    h.textContent = "Have a great day!🤗";
  } else if (day === 3) {
    let day = `Hi ${user}, It's Wednesday😉`;
    p.textContent = day;
    h.textContent = "Have a great day!🤗";
  } else if (day === 4) {
    let day = `Hi ${user}, It's Thursday🤓`;
    p.textContent = day;
    h.textContent = "Have a great day!🤗";
  } else if (day === 5) {
    let day = `Hi ${user}, It's Friday 🥳 `;
    p.textContent = day;
    h.textContent = "Have a great day!🤗";
  } else if (day === 6) {
    let day = `Hi ${user}, It's Saturday😃`;
    p.textContent = day;
    h.textContent = "Have a great day!🤗";
  } else if (day === 7) {
    let day = `Hi ${user}, It's Sunday😅`;
    p.textContent = day;
    h.textContent = "Have a great day!🤗";
  }
}

setDay();
