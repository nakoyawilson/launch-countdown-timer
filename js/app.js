const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

let initialTime = new Date(Date.now() + 14 * 1000 * 60 * 60 * 24);
initialTime = initialTime.setHours(0, 0, 0, 0);

const updateCountdown = () => {
  const currentTime = new Date();
  const diff = initialTime - currentTime;
  const daysRemaining = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hoursRemaining = Math.floor(diff / 1000 / 60 / 60) % 24;
  const minutesRemaining = Math.floor(diff / 1000 / 60) % 60;
  const secondsRemaining = Math.floor(diff / 1000) % 60;
  days.innerHTML = daysRemaining;
  hours.innerHTML = hoursRemaining < 10 ? "0" + hoursRemaining : hoursRemaining;
  minutes.innerHTML =
    minutesRemaining < 10 ? "0" + minutesRemaining : minutesRemaining;
  seconds.innerHTML =
    secondsRemaining < 10 ? "0" + secondsRemaining : secondsRemaining;
};

setInterval(updateCountdown, 1000);
