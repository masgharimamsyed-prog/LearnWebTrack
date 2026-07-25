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
let goalChangeBtn = document.querySelector("#goal-change-btn");
let dailyGoalNo = document.querySelector("#daily-goal-no");
goalChangeBtn.addEventListener("click", () => {
    let newGoalno = prompt("Enter the new gaol hrs number");
    if (newGoalno != "" && Number(newGoalno) > 0) {
        dailyGoalNo.innerText = `${newGoalno}hrs`;
    }
    else{
        alert("Wrong input number");
    }

})