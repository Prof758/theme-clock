const toggle = document.querySelector('.toggle');
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

toggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  setToggleButtonText();
});

function setToggleButtonText() {
  if (document.documentElement.classList.contains('dark')) {
    toggle.innerText = 'Light mode';
  } else {
    toggle.innerText = 'Dark mode';
  }
}

function setTime() {
  const time = new Date();
  const day = time.getDay();
  const date = time.getDate();
  const month = time.getMonth();
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();
  const hoursForClock = hours % 12;
  const ampm = hours >= 12 ? 'PM' : 'AM';
  // console.log(time, month, hours, minutes);

  // StackOverflow
  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hoursForClock,
    0,
    11,
    0,
    360
  )}deg)`;

  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    59,
    0,
    360
  )}deg)`;

  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    59,
    0,
    360
  )}deg)`;

  timeEl.innerHTML = `${hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  } ${ampm}`;
  // timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`; 12 hour clock.

  dateEl.innerHTML = `${days[day]}, ${months[month]} 
    <span class="circle">${date}</span>
  `;
}

setTime();

setInterval(setTime, 1000);
