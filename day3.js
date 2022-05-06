const showGoals = document.querySelector(".showGoals");
const addGoal = document.querySelector(".add");
const dailyGoal = document.querySelector("#dailyGoal");
const ul = document.querySelector("ul");

const updateGoal1 = document.querySelector(".updateGoal1");
const updateGoal2 = document.querySelector(".updateGoal2");
const updateGoal3 = document.querySelector(".updateGoal3");

/* Currently dealing with a glitch where every time I showGoals and add more
goals, all previous items become split into an array based on characters instead
of actual splitting the way it should... seems to be caused
by the Array.from(goalList) I've been using so I can use goalList.push() to
add more items to the storage

For now I'm going to simplify the problem to adding/saving three goals
just to get it working.


showGoals.addEventListener("click", () => {
    ul.innerHTML = "";
    let goalList = localStorage.getItem("goals") || ["No items to show"];
    if (goalList[0] == "No items to show") {
        localStorage.setItem("goals", ["Add item below"]);
    }
    console.log(goalList);
    goalList.push("hello world");
    // goalList = Array.from(goalList);
    console.log(goalList);
    goalList.forEach(goal => {
        const li = document.createElement("li");
        li.textContent += goal;
        ul.appendChild(li);
    });
});

addGoal.addEventListener("click", () => {
    if (dailyGoal.value) {
        let goalsList = localStorage.getItem("goals") || [];
        goalsList = Array.from(goalsList);
        goalsList.push(dailyGoal.value);
        localStorage.setItem("goals", goalsList);
    } else {
        ul.textContent = "";
        ul.textContent = "Please insert a goal";
    }
});

*/

showGoals.addEventListener("click", () => {
    ul.innerHTML = "";
    let goal1 = localStorage.getItem("goal1") || "insert goal";
    let goal2 = localStorage.getItem("goal2") || "insert goal";
    let goal3 = localStorage.getItem("goal3") || "insert goal";

    let goalList = [goal1, goal2, goal3];

    goalList.forEach(goal => {
        const li = document.createElement("li");
        li.textContent += goal;
        ul.appendChild(li);
    });
});

updateGoal1.addEventListener("click", () => {
    if (dailyGoal.value) {

        localStorage.setItem("goal1", dailyGoal.value);
    }
});

updateGoal2.addEventListener("click", () => {
    if (dailyGoal.value) {

        localStorage.setItem("goal2", dailyGoal.value);
    }
});

updateGoal3.addEventListener("click", () => {
    if (dailyGoal.value) {

        localStorage.setItem("goal3", dailyGoal.value);
    }
});

