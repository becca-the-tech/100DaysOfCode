// DAILIES
let addDailyBtn = document.querySelector(".addDaily");
let goalDailyInput = document.querySelector("#goalDaily");
let ulDaily = document.querySelector(".ulDaily");
let iconDaily = document.querySelector(".iconDaily");
let refreshDaily = document.querySelector(".refreshDaily");

let dailies = [];

addDailyBtn.addEventListener("click", () => {
    dailies.push(goalDailyInput.value);
    const li = document.createElement("li");
    li.innerText = goalDailyInput.value;
    ulDaily.appendChild(li);
});

iconDaily.addEventListener("click", () => {
    localStorage.setItem("dailies", JSON.stringify(dailies));
    ulDaily.innerHTML = "";
    let stored = JSON.parse(localStorage.getItem("dailies"));
    for (let item of stored) {
        const li = document.createElement("li");
        li.innerText = item;
        ulDaily.appendChild(li);
    }
});

refreshDaily.addEventListener("click", () => {
    ulDaily.innerHTML = "";
    let stored = JSON.parse(localStorage.getItem("dailies"));
    for (let item of stored) {
        const li = document.createElement("li");
        li.innerText = item;
        ulDaily.appendChild(li);
    }
});



////////////////////////////////////////
// WEEKLIES
let addWeeklyBtn = document.querySelector(".addWeekly");
let goalWeeklyInput = document.querySelector("#goalWeekly");
let ulWeekly = document.querySelector(".ulWeekly");
let iconWeekly = document.querySelector(".iconWeekly");
let refreshWeekly = document.querySelector(".refreshWeekly");

let weeklyGoals = [];

addWeeklyBtn.addEventListener("click", () => {
    weeklyGoals.push(goalWeeklyInput.value);
    const li = document.createElement("li");
    li.innerText = goalWeeklyInput.value;
    ulWeekly.appendChild(li);
});

iconWeekly.addEventListener("click", () => {
    localStorage.setItem("weeklyGoals", JSON.stringify(weeklyGoals));
    ulWeekly.innerHTML = "";
    let stored = JSON.parse(localStorage.getItem("weeklyGoals"));
    for (let item of stored) {
        const li = document.createElement("li");
        li.innerText = item;
        ulWeekly.appendChild(li);
    }
});

refreshWeekly.addEventListener("click", () => {
    ulWeekly.innerHTML = "";
    let stored = JSON.parse(localStorage.getItem("weeklyGoals"));
    for (let item of stored) {
        const li = document.createElement("li");
        li.innerText = item;
        ulWeekly.appendChild(li);
    }
});


////////////////////////////////////////
// MONTHLY GOALS
let addMonthlyBtn = document.querySelector(".addMonthly");
let goalMonthlyInput = document.querySelector("#goalMonthly");
let ulMonthly = document.querySelector(".ulMonthly");
let iconMonthly = document.querySelector(".iconMonthly");
let refreshMonthly = document.querySelector(".refreshMonthly");

let monthlyGoals = [];

addMonthlyBtn.addEventListener("click", () => {
    monthlyGoals.push(goalMonthlyInput.value);
    const li = document.createElement("li");
    li.innerText = goalMonthlyInput.value;
    ulMonthly.appendChild(li);
});

iconMonthly.addEventListener("click", () => {
    localStorage.setItem("monthlyGoals", JSON.stringify(monthlyGoals));
    ulMonthly.innerHTML = "";
    let stored = JSON.parse(localStorage.getItem("monthlyGoals"));
    for (let item of stored) {
        const li = document.createElement("li");
        li.innerText = item;
        ulMonthly.appendChild(li);
    }
});

refreshMonthly.addEventListener("click", () => {
    ulMonthly.innerHTML = "";
    let stored = JSON.parse(localStorage.getItem("monthlyGoals"));
    for (let item of stored) {
        const li = document.createElement("li");
        li.innerText = item;
        ulMonthly.appendChild(li);
    }
});


////////////////////////////////////////
// YEARLY GOALS
let addYearlyBtn = document.querySelector(".addYearly");
let goalYearlyInput = document.querySelector("#goalYearly");
let ulYearly = document.querySelector(".ulYearly");
let iconYearly = document.querySelector(".iconYearly");
let refreshYearly = document.querySelector(".refreshYearly");

let yearlyGoals = [];

addYearlyBtn.addEventListener("click", () => {
    yearlyGoals.push(goalYearlyInput.value);
    const li = document.createElement("li");
    li.innerText = goalYearlyInput.value;
    ulYearly.appendChild(li);
});

iconYearly.addEventListener("click", () => {
    localStorage.setItem("yearlyGoals", JSON.stringify(yearlyGoals));
    ulYearly.innerHTML = "";
    let stored = JSON.parse(localStorage.getItem("yearlyGoals"));
    for (let item of stored) {
        const li = document.createElement("li");
        li.innerText = item;
        ulYearly.appendChild(li);
    }
});

refreshYearly.addEventListener("click", () => {
    ulYearly.innerHTML = "";
    let stored = JSON.parse(localStorage.getItem("yearlyGoals"));
    for (let item of stored) {
        const li = document.createElement("li");
        li.innerText = item;
        ulYearly.appendChild(li);
    }
});


////////////////////////////////////////
// PRIORITIES
let addPrioritiesBtn = document.querySelector(".addPriorities");
let goalPrioritiesInput = document.querySelector("#goalPriorities");
let ulPriorities = document.querySelector(".ulPriorities");
let iconPriorities = document.querySelector(".iconPriorities");
let refreshPriorities = document.querySelector(".refreshPriorities");

let prioritiesGoals = [];

addPrioritiesBtn.addEventListener("click", () => {
    prioritiesGoals.push(goalPrioritiesInput.value);
    const li = document.createElement("li");
    li.innerText = goalPrioritiesInput.value;
    ulPriorities.appendChild(li);
});

iconPriorities.addEventListener("click", () => {
    localStorage.setItem("prioritiesGoals", JSON.stringify(prioritiesGoals));
    ulPriorities.innerHTML = "";
    let stored = JSON.parse(localStorage.getItem("prioritiesGoals"));
    for (let item of stored) {
        const li = document.createElement("li");
        li.innerText = item;
        ulPriorities.appendChild(li);
    }
});

refreshPriorities.addEventListener("click", () => {
    ulPriorities.innerHTML = "";
    let stored = JSON.parse(localStorage.getItem("prioritiesGoals"));
    for (let item of stored) {
        const li = document.createElement("li");
        li.innerText = item;
        ulPriorities.appendChild(li);
    }
});


////////////////////////////////////////
// GRATITUDE
let addGratitudeBtn = document.querySelector(".addGratitude");
let goalGratitudeInput = document.querySelector("#goalGratitude");
let ulGratitude = document.querySelector(".ulGratitude");
let iconGratitude = document.querySelector(".iconGratitude");
let refreshGratitude = document.querySelector(".refreshGratitude");

let gratitudeGoals = [];

addGratitudeBtn.addEventListener("click", () => {
    gratitudeGoals.push(goalGratitudeInput.value);
    const li = document.createElement("li");
    li.innerText = goalGratitudeInput.value;
    ulGratitude.appendChild(li);
});

iconGratitude.addEventListener("click", () => {
    localStorage.setItem("gratitudeGoals", JSON.stringify(gratitudeGoals));
    ulGratitude.innerHTML = "";
    let stored = JSON.parse(localStorage.getItem("gratitudeGoals"));
    for (let item of stored) {
        const li = document.createElement("li");
        li.innerText = item;
        ulGratitude.appendChild(li);
    }
});

refreshGratitude.addEventListener("click", () => {
    ulGratitude.innerHTML = "";
    let stored = JSON.parse(localStorage.getItem("gratitudeGoals"));
    for (let item of stored) {
        const li = document.createElement("li");
        li.innerText = item;
        ulGratitude.appendChild(li);
    }
});
