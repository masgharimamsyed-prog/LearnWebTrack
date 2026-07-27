console.log("dashboard js running")
let quote = document.querySelector("#quote");
let author = document.querySelector("#author");



/*motivation quote apiurl*/
const motiApi = "https://dummyjson.com/quotes/random";
fetch(motiApi)
    .then(async function (response) {
        let motiData = await response.json();
        quote.innerText = motiData.quote;
        author.innerText = motiData.author;
    })
    .catch((err) => {
        console.log(err, "error occuring during the motii api..");
    })


/* goal change btn */
let dailyGoalNo = document.querySelector("#daily-goal-no");
if (localStorage.getItem("daily-goal")) {
    dailyGoalNo.innerText = localStorage.getItem("daily-goal");
}
else {
    dailyGoalNo.innerText = "0";
}
let goalChangeBtn = document.querySelector("#goal-change-btn");

goalChangeBtn.addEventListener("click", () => {
    let newGoalno = prompt("Enter the new gaol hrs number");
    if (newGoalno != "" && Number(newGoalno) > 0 && Number(newGoalno) < 24) {
        dailyGoalNo.innerText = `${newGoalno}`;
        localStorage.setItem("daily-goal", dailyGoalNo.innerText);
    }
    else {
        alert("Wrong input number");
    }

})

/* setting up the progress from local staorage */
document.querySelector("#total-progress-no").innerText = Math.round(Number(localStorage.getItem("Overall-progress")));
if (localStorage.getItem("total-topics-cover")) {
    document.querySelector("#total-topics-cover").innerText = localStorage.getItem("total-topics-cover");
}


/* time Getting local storage */
if (localStorage.getItem("overall-sec")) {
    let overallSec = localStorage.getItem("overall-sec");
    document.querySelector('#study-time').innerText = Math.floor(overallSec / 3600) + "Hrs";
    document.querySelector('#min-no').innerText = Math.floor(Math.floor(overallSec%3600)/60);
    document.querySelector('#sec-no').innerText = Math.floor(overallSec % 60);

}




/* bars getting data */
document.querySelector("#html-bar").style.height = localStorage.getItem("html-progress") + "%";
if (localStorage.getItem("html-progress") == '0') {
    document.querySelector("#html-bar").style.height = "8%";
}

// HTML
document.querySelector("#html-bar").style.height = localStorage.getItem("html-progress") + "%";
if (localStorage.getItem("html-progress") == "0") {
    document.querySelector("#html-bar").style.height = "8%";
}

// CSS
document.querySelector("#css-bar").style.height = localStorage.getItem("css-progress") + "%";
if (localStorage.getItem("css-progress") == "0") {
    document.querySelector("#css-bar").style.height = "8%";
}

// JavaScript
document.querySelector("#js-bar").style.height = localStorage.getItem("js-progress") + "%";
if (localStorage.getItem("js-progress") == "0") {
    document.querySelector("#js-bar").style.height = "8%";
}

// React
document.querySelector("#react-bar").style.height = localStorage.getItem("react-progress") + "%";
if (localStorage.getItem("react-progress") == "0") {
    document.querySelector("#react-bar").style.height = "8%";
}

// Node.js
document.querySelector("#node-bar").style.height = localStorage.getItem("node-progress") + "%";
if (localStorage.getItem("node-progress") == "0") {
    document.querySelector("#node-bar").style.height = "8%";
}

// Express.js
document.querySelector("#exp-bar").style.height = localStorage.getItem("exp-progress") + "%";
if (localStorage.getItem("exp-progress") == "0") {
    document.querySelector("#exp-bar").style.height = "8%";
}

// MongoDB
document.querySelector("#mongo-bar").style.height = localStorage.getItem("mongo-progress") + "%";
if (localStorage.getItem("mongo-progress") == "0") {
    document.querySelector("#mongo-bar").style.height = "8%";
}

// Next.js
document.querySelector("#next-bar").style.height = localStorage.getItem("next-progress") + "%";
if (localStorage.getItem("next-progress") == "0") {
    document.querySelector("#next-bar").style.height = "8%";
}

// TypeScript
document.querySelector("#ts-bar").style.height = localStorage.getItem("ts-progress") + "%";
if (localStorage.getItem("ts-progress") == "0") {
    document.querySelector("#ts-bar").style.height = "8%";
}

// Git
document.querySelector("#git-bar").style.height = localStorage.getItem("git-progress") + "%";
if (localStorage.getItem("git-progress") == "0") {
    document.querySelector("#git-bar").style.height = "8%";
}

// SQL
document.querySelector("#sql-bar").style.height = localStorage.getItem("sql-progress") + "%";
if (localStorage.getItem("sql-progress") == "0") {
    document.querySelector("#sql-bar").style.height = "8%";
}

// Bootstrap
document.querySelector("#boot-bar").style.height = localStorage.getItem("boot-progress") + "%";
if (localStorage.getItem("boot-progress") == "0") {
    document.querySelector("#boot-bar").style.height = "8%";
}

// API
document.querySelector("#api-bar").style.height = localStorage.getItem("api-progress") + "%";
if (localStorage.getItem("api-progress") == "0") {
    document.querySelector("#api-bar").style.height = "8%";
}

// Tailwind
document.querySelector("#tail-bar").style.height = localStorage.getItem("tail-progress") + "%";
if (localStorage.getItem("tail-progress") == "0") {
    document.querySelector("#tail-bar").style.height = "8%";
}