console.log("topics js running ......");
/* for html */
const htmlProgress = document.querySelector("#html-progress");
const htmlPercent = document.querySelector("#html-percent");
const htmlCheckboxs = document.querySelectorAll(".html-checkbox");
const dashboardProgress = document.querySelector("#main-overview-progress");
const dashboardProgressNo = document.querySelector("#overall-progress-no");
let small=document.querySelector('#small-overview');

for (htmlCheckbox of htmlCheckboxs) {
    htmlCheckbox.addEventListener("change", () => {
        if (event.target.checked == true) {
            htmlPercent.innerText = `${Number(htmlPercent.innerText) + (1 / htmlCheckboxs.length) * 100}`;
            htmlProgress.style.width = `${Number(htmlPercent.innerText)}%`;
            /* dashborad */
            dashboardProgressNo.innerText = `${Number(dashboardProgressNo.innerText) + Number(htmlPercent.innerText) * 0.7}`;
        }
        else {
            htmlPercent.innerText = `${Number(htmlPercent.innerText) - (1 / htmlCheckboxs.length) * 100}`;
            htmlProgress.style.width = `${Number(htmlPercent.innerText)}%`;
            /* dashborad */
            dashboardProgressNo.innerText = `${Number(dashboardProgressNo.innerText) - Number(htmlPercent.innerText) * 0.7}`;
        }
    })
}