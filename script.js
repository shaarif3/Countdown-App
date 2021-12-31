const daysE1 = document.getElementById("days");
const hoursE1 = document.getElementById("hours");
const minsE1 = document.getElementById("mins");
const secE1 = document.getElementById("sec");

const newYears = "3 Nov 2022";
function countdown() {
  const currentDate = new Date();
  const newYearsDate = new Date(newYears);
  const totalSeconds = (newYearsDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysE1.innerHTML = days;
  hoursE1.innerHTML = formatTime(hours);
  minsE1.innerHTML = formatTime(mins);
  secE1.innerHTML =formatTime(seconds);
//   console.log(days, hours, mins, seconds);
}
function formatTime(time){
    return time<10? (`0${time}`) :time;
}
countdown();
setInterval(countdown, 1000);
