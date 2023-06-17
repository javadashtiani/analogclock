// light/dark mode
let _lightMode = document.getElementById("light");
_lightMode.addEventListener("click", () => {
  document.getElementsByTagName("body")[0].classList.toggle("lightMode");
  document.querySelector(".clock").classList.toggle("shadow");
});

///////////////////////////
let hour = document.getElementsByClassName("hour")[0];
let minute = document.getElementsByClassName("minute")[0];
let second = document.getElementsByClassName("second")[0];

setInterval(() => {
  let _date = new Date();
  let _hour = _date.getHours() * 30;
  let _minute = _date.getMinutes() * 6;
  let _second = _date.getSeconds() * 6;
  hour.style.transform = `rotateZ(${_hour + _minute / 12}deg)`;
  minute.style.transform = `rotateZ(${_minute}deg)`;
  second.style.transform = `rotateZ(${_second}deg)`;
}, 1000);
