const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const timeElements = document.querySelectorAll(".deadline h4");

// Check for current date and add 10 days to futureDate
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 6, 0, 0);

// Future date is July 1, 2022 at 6:00 am
// let futureDate = new Date(2022, 6, 1, 6, 0, 0);

const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const day = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();

giveaway.textContent = `Giveaway ends ${day}, ${month} ${date}, ${year}`;

// Future time in ms
const futureTime = futureDate.getTime();

// 1s = 1000ms
// 1m = 60s
// 1hr = 60min
// 1day = 24hr

const getRemainingTime = () => {
  const today = new Date().getTime();
  const timeLeft = futureTime - today;
  // console.log(timeLeft);

  // Values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;
  // Calculate remaining time
  let days = Math.floor(timeLeft / oneDay);
  let hours = Math.floor((timeLeft % oneDay) / oneHour);
  let mins = Math.floor((timeLeft % oneHour) / oneMin);
  let secs = Math.floor((timeLeft % oneMin) / 1000);
  // console.log(days, hours, mins, secs);

  // Set timer values array
  const values = [days, hours, mins, secs];

  // Adds leading 0 if value is less than 10
  const format = (item) => {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  };

  timeElements.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });

  if (timeLeft < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `Giveaway has ended`.toUpperCase();
  }
};

// Countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
