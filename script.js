const toggle = document.querySelector('.toggle');
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const date = document.querySelector('.date');

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
