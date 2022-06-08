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

// Future date is July 1, 2022 at 6:00 am
let futureDate = new Date(2022, 6, 1, 6, 0);

const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const day = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();

giveaway.textContent = `Giveaway ends ${day}, ${month} ${date}, ${year} at ${hours}:${mins}`;
