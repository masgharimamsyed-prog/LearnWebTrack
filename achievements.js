console.log("achi js running ........");


if (localStorage.getItem("html-progress") >= 100) {
    document.querySelector("#html-img").src = "./assets/achievements/html-unlock.jpg";
}

if (localStorage.getItem("css-progress") >= 100) {
    document.querySelector("#css-img").src = "./assets/achievements/css-unlock.jpg";
}

if (localStorage.getItem("js-progress") >= 100) {
    document.querySelector("#js-img").src = "./assets/achievements/js-unlock.jpg";
}

if (localStorage.getItem("react-progress") >= 100) {
    document.querySelector("#react-img").src = "./assets/achievements/react-unlock.jpg";
}

if (localStorage.getItem("git-progress") >= 100) {
    document.querySelector("#git-img").src = "./assets/achievements/git-unlock.jpg";
}

if (localStorage.getItem("api-progress") >= 100) {
    document.querySelector("#api-img").src = "./assets/achievements/api-unlock.jpg";
}

if (localStorage.getItem("node-progress") >= 100) {
    document.querySelector("#node-img").src = "./assets/achievements/node-unlock.jpg";
}

if (localStorage.getItem("exp-progress") >= 100) {
    document.querySelector("#express-img").src = "./assets/achievements/exp-unlock.jpg";
}

if (localStorage.getItem("mongo-progress") >= 100) {
    document.querySelector("#mongodb-img").src = "./assets/achievements/mongo-unlock.jpg";
}

if ((localStorage.getItem("html-progress") >= 100)&&(localStorage.getItem("css-progress") >= 100)&&(localStorage.getItem("js-progress") >= 100)&&(localStorage.getItem("react-progress") >= 100)) {
    document.querySelector("#frontend-img").src = "./assets/achievements/frontened-unlock.jpg";
}

if ((localStorage.getItem("node-progress") >= 100)&&(localStorage.getItem("exp-progress") >= 100)&&(localStorage.getItem("api-progress") >= 100)&&(localStorage.getItem("deploy-progress") >= 100)) {
    document.querySelector("#backend-img").src = "./assets/achievements/backened-unlock.jpg";
}

if (localStorage.getItem("mongo-progress") >= 100) {
    document.querySelector("#database-img").src = "./assets/achievements/database-unlock.jpg";
}