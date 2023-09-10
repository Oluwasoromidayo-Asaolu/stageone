const currentTime = () => {
    let currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');
    const date = new Date().getTime();
    currentUTCTime.innerHTML = `Current UTC Time: ${date}`;
}
currentTime();
setInterval(currentTime, 1);

let currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]');
let day = new Date().getDay();
let namesOfDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let dayInLetters = namesOfDays[day];
currentDayOfTheWeek.innerHTML = dayInLetters;
