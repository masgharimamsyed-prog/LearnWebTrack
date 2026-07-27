console.log("topics js running ......");
/* for html */
const htmlProgress = document.querySelector("#html-progress");
const htmlPercent = document.querySelector("#html-percent");
const htmlCheckboxs = document.querySelectorAll(".html-checkbox");
let small = document.querySelector('#small-overview');


/* setting up the starting data for html */
htmlProgress.style.width = localStorage.getItem("html-progress") + "%";
localStorage.getItem("html-progress") ? htmlPercent.innerText = localStorage.getItem("html-progress") : htmlPercent.innerText = "0";


for (htmlCheckbox of htmlCheckboxs) {
    htmlCheckbox.addEventListener("change", () => {
        let localOverallProgress = localStorage.getItem("Overall-progress");
        let localHtmlProgress = localStorage.getItem("html-progress");
        if (event.target.checked == true) {

            htmlPercent.innerText = `${Number(localHtmlProgress) + (1 / htmlCheckboxs.length) * 100}`;
            htmlProgress.style.width = `${Number(htmlPercent.innerText)}%`;

            /* local storage maintainence */
            localStorage.setItem("html-progress", htmlPercent.innerText)
            if (localHtmlProgress >= 95) {
                console.log("greater than 100 html,check here");
                htmlPercent.innerText = "100";
                htmlProgress.style.width = `100%`;
                localStorage.setItem("html-progress", htmlPercent.innerText);
                localStorage.setItem("total-topics-cover", Number(localStorage.getItem("total-topcis-cover")) + 1)

            }
            else {
                localStorage.setItem("Overall-progress", `${Number(localOverallProgress) + (1 / htmlCheckboxs.length) * 6.6}`);

            }

        }
        else if (event.target.checked == false) {
            htmlPercent.innerText = `${Number(localHtmlProgress) - (1 / htmlCheckboxs.length) * 100}`;
            htmlProgress.style.width = `${Number(htmlPercent.innerText)}%`;
            /* local storage maintainence */
            localStorage.setItem("html-progress", htmlPercent.innerText)
            if (Number(localHtmlProgress) < 0) {
                htmlPercent.innerText = "0";
                htmlProgress.style.width = `0%`;
                localStorage.setItem("html-progress", htmlPercent.innerText);
            }
            else {
                localStorage.setItem("Overall-progress", `${Number(localOverallProgress) - (1 / htmlCheckboxs.length) * 6.6}`);

            }

        }
    })
}



/* for css */
const cssProgress = document.querySelector("#css-progress");
const cssPercent = document.querySelector("#css-percent");
const cssCheckboxs = document.querySelectorAll(".css-checkbox");


/* setting up the starting data for css */
cssProgress.style.width = localStorage.getItem("css-progress") + "%";
localStorage.getItem("css-progress") ? cssPercent.innerText = localStorage.getItem("css-progress") : cssPercent.innerText = "0";


for (cssCheckbox of cssCheckboxs) {
    cssCheckbox.addEventListener("change", () => {
        let localOverallProgress = localStorage.getItem("Overall-progress");
        let localCssProgress = localStorage.getItem("css-progress");
        if (event.target.checked == true) {

            cssPercent.innerText = `${Number(localCssProgress) + (1 / cssCheckboxs.length) * 100}`;
            cssProgress.style.width = `${Number(cssPercent.innerText)}%`;

            /* local storage maintainence */
            localStorage.setItem("css-progress", cssPercent.innerText)
            if (Number(localCssProgress) >= 96) {
                console.log("greater than 100 css,check here");
                cssPercent.innerText = "100";
                cssProgress.style.width = `100%`;
                localStorage.setItem("css-progress", cssPercent.innerText);
                localStorage.setItem("total-topics-cover", Number(localStorage.getItem("total-topcis-cover")) + 1)

            }
            else {
                localStorage.setItem("Overall-progress", `${Number(localOverallProgress) + (1 / cssCheckboxs.length) * 6.6}`);

            }

        }
        else if (event.target.checked == false) {
            cssPercent.innerText = `${Number(localCssProgress) - (1 / cssCheckboxs.length) * 100}`;
            cssProgress.style.width = `${Number(cssPercent.innerText)}%`;

            /* local storage maintainence */
            localStorage.setItem("css-progress", cssPercent.innerText)
            if (Number(localCssProgress) < 0) {
                cssPercent.innerText = "0";
                cssProgress.style.width = `0%`;
                localStorage.setItem("css-progress", cssPercent.innerText);
            }
            else {
                localStorage.setItem("Overall-progress", `${Number(localOverallProgress) - (1 / cssCheckboxs.length) * 6.6}`);

            }

        }
    })
}

/* for git */
const gitProgress = document.querySelector("#git-progress");
const gitPercent = document.querySelector("#git-percent");
const gitCheckboxs = document.querySelectorAll(".git-checkbox");


/* setting up the starting data for git */
gitProgress.style.width = localStorage.getItem("git-progress") + "%";
localStorage.getItem("git-progress") ? gitPercent.innerText = localStorage.getItem("git-progress") : gitPercent.innerText = "0";


for (gitCheckbox of gitCheckboxs) {
    gitCheckbox.addEventListener("change", () => {
        let localOverallProgress = localStorage.getItem("Overall-progress");
        let localGitProgress = localStorage.getItem("git-progress");
        if (event.target.checked == true) {

            gitPercent.innerText = `${Number(localGitProgress) + (1 / gitCheckboxs.length) * 100}`;
            gitProgress.style.width = `${Number(gitPercent.innerText)}%`;

            /* local storage maintainence */
            localStorage.setItem("git-progress", gitPercent.innerText)
            if (Number(localGitProgress) >= 96) {
                console.log("greater than 100 git,check here");
                gitPercent.innerText = "100";
                gitProgress.style.width = `100%`;
                localStorage.setItem("git-progress", gitPercent.innerText);
                localStorage.setItem("total-topics-cover", Number(localStorage.getItem("total-topcis-cover")) + 1)

            }
            else {
                localStorage.setItem("Overall-progress", `${Number(localOverallProgress) + (1 / gitCheckboxs.length) * 6.6}`);

            }

        }
        else if (event.target.checked == false) {
            gitPercent.innerText = `${Number(localGitProgress) - (1 / gitCheckboxs.length) * 100}`;
            gitProgress.style.width = `${Number(gitPercent.innerText)}%`;

            /* local storage maintainence */
            localStorage.setItem("git-progress", gitPercent.innerText)
            if (Number(localGitProgress) < 0) {
                gitPercent.innerText = "0";
                gitProgress.style.width = `0%`;
                localStorage.setItem("git-progress", gitPercent.innerText);
            }
            else {
                localStorage.setItem("Overall-progress", `${Number(localOverallProgress) - (1 / gitCheckboxs.length) * 6.6}`);

            }

        }
    })
}

/* for js */
const jsProgress = document.querySelector("#js-progress");
const jsPercent = document.querySelector("#js-percent");
const jsCheckboxs = document.querySelectorAll(".js-checkbox");


/* setting up the starting data for js */
jsProgress.style.width = localStorage.getItem("js-progress") + "%";
localStorage.getItem("js-progress") ? jsPercent.innerText = localStorage.getItem("js-progress") : jsPercent.innerText = "0";


for (jsCheckbox of jsCheckboxs) {
    jsCheckbox.addEventListener("change", () => {
        let localOverallProgress = localStorage.getItem("Overall-progress");
        let localJsProgress = localStorage.getItem("js-progress");
        if (event.target.checked == true) {

            jsPercent.innerText = `${Math.round(Number(localJsProgress) + (1 / jsCheckboxs.length) * 100)}`;
            jsProgress.style.width = `${Number(jsPercent.innerText)}%`;

            /* local storage maintainence */
            localStorage.setItem("js-progress", jsPercent.innerText)
            if (Number(localJsProgress) >= 95) {
                console.log("greater than 100 js,check here");
                jsPercent.innerText = "100";
                jsProgress.style.width = `100%`;
                localStorage.setItem("js-progress", jsPercent.innerText);
                localStorage.setItem("total-topics-cover", Number(localStorage.getItem("total-topcis-cover")) + 1)

            }
            else {
                localStorage.setItem("Overall-progress", `${Number(localOverallProgress) + (1 / jsCheckboxs.length) * 6.6}`);

            }

        }
        else if (event.target.checked == false) {
            jsPercent.innerText = `${Number(localJsProgress) - (1 / jsCheckboxs.length) * 100}`;
            jsProgress.style.width = `${Number(jsPercent.innerText)}%`;

            /* local storage maintainence */
            localStorage.setItem("js-progress", jsPercent.innerText)
            if (Number(localJsProgress) < 0) {
                jsPercent.innerText = "0";
                jsProgress.style.width = `0%`;
                localStorage.setItem("js-progress", jsPercent.innerText);
            }
            else {
                localStorage.setItem("Overall-progress", `${Number(localOverallProgress) - (1 / jsCheckboxs.length) * 6.6}`);

            }

        }
    })
}



/* for react */
const reactProgress = document.querySelector("#react-progress");
const reactPercent = document.querySelector("#react-percent");
const reactCheckboxs = document.querySelectorAll(".react-checkbox");


/* setting up the starting data for react */
reactProgress.style.width = localStorage.getItem("react-progress") + "%";
localStorage.getItem("react-progress") ? reactPercent.innerText = localStorage.getItem("react-progress") : reactPercent.innerText = "0";


for (reactCheckbox of reactCheckboxs) {
    reactCheckbox.addEventListener("change", () => {
        let localOverallProgress = localStorage.getItem("Overall-progress");
        let localReactProgress = localStorage.getItem("react-progress");
        if (event.target.checked == true) {

            reactPercent.innerText = `${Number(localReactProgress) + (1 / reactCheckboxs.length) * 100}`;
            reactProgress.style.width = `${Number(reactPercent.innerText)}%`;

            /* local storage maintainence */
            localStorage.setItem("react-progress", reactPercent.innerText)
            if (Number(localReactProgress) >= 100) {
                console.log("greater than 100 react,check here");
                reactPercent.innerText = "100";
                reactProgress.style.width = `100%`;
                localStorage.setItem("react-progress", reactPercent.innerText);
                localStorage.setItem("total-topics-cover", Number(localStorage.getItem("total-topcis-cover")) + 1)

            }
            else {
                localStorage.setItem("Overall-progress", `${Number(localOverallProgress) + (1 / reactCheckboxs.length) * 6.6}`);

            }

        }
        else if (event.target.checked == false) {
            reactPercent.innerText = `${Number(localReactProgress) - (1 / reactCheckboxs.length) * 100}`;
            reactProgress.style.width = `${Number(reactPercent.innerText)}%`;

            /* local storage maintainence */
            localStorage.setItem("react-progress", reactPercent.innerText)
            if (Number(localReactProgress) < 0) {
                reactPercent.innerText = "0";
                reactProgress.style.width = `0%`;
                localStorage.setItem("react-progress", reactPercent.innerText);
            }
            else {
                localStorage.setItem("Overall-progress", `${Number(localOverallProgress) - (1 / reactCheckboxs.length) * 6.6}`);

            }

        }
    })
}


/* for node */
const nodeProgress = document.querySelector("#node-progress");
const nodePercent = document.querySelector("#node-percent");
const nodeCheckboxs = document.querySelectorAll(".node-checkbox");


/* setting up the starting data for node */
nodeProgress.style.width = localStorage.getItem("node-progress") + "%";
localStorage.getItem("node-progress") ? nodePercent.innerText = localStorage.getItem("node-progress") : nodePercent.innerText = "0";


for (nodeCheckbox of nodeCheckboxs) {
    nodeCheckbox.addEventListener("change", () => {
        let localOverallProgress = localStorage.getItem("Overall-progress");
        let localNodeProgress = localStorage.getItem("node-progress");
        if (event.target.checked == true) {

            nodePercent.innerText = `${Number(localNodeProgress) + (1 / nodeCheckboxs.length) * 100}`;
            nodeProgress.style.width = `${Number(nodePercent.innerText)}%`;

            /* local storage maintainence */
            localStorage.setItem("node-progress", nodePercent.innerText)
            if (Number(localNodeProgress) >= 100) {
                console.log("greater than 100 node,check here");
                nodePercent.innerText = "100";
                nodeProgress.style.width = `100%`;
                localStorage.setItem("node-progress", nodePercent.innerText);
                localStorage.setItem("total-topics-cover", Number(localStorage.getItem("total-topcis-cover")) + 1)

            }
            else {
                localStorage.setItem("Overall-progress", `${Number(localOverallProgress) + (1 / nodeCheckboxs.length) * 6.6}`);

            }

        }
        else if (event.target.checked == false) {
            nodePercent.innerText = `${Number(localNodeProgress) - (1 / nodeCheckboxs.length) * 100}`;
            nodeProgress.style.width = `${Number(nodePercent.innerText)}%`;

            /* local storage maintainence */
            localStorage.setItem("node-progress", nodePercent.innerText)
            if (Number(localNodeProgress) < 0) {
                nodePercent.innerText = "0";
                nodeProgress.style.width = `0%`;
                localStorage.setItem("node-progress", nodePercent.innerText);
            }
            else {
                localStorage.setItem("Overall-progress", `${Number(localOverallProgress) - (1 / nodeCheckboxs.length) * 6.6}`);

            }

        }
    })
}


/* for exp */
const expProgress = document.querySelector("#exp-progress");
const expPercent = document.querySelector("#exp-percent");
const expCheckboxs = document.querySelectorAll(".exp-checkbox");


/* setting up the starting data for exp */
expProgress.style.width = localStorage.getItem("exp-progress") + "%";
localStorage.getItem("exp-progress") ? expPercent.innerText = localStorage.getItem("exp-progress") : expPercent.innerText = "0";


for (expCheckbox of expCheckboxs) {
    expCheckbox.addEventListener("change", () => {
        let localOverallProgress = localStorage.getItem("Overall-progress");
        let localExpProgress = localStorage.getItem("exp-progress");
        if (event.target.checked == true) {

            expPercent.innerText = `${Number(localExpProgress) + (1 / expCheckboxs.length) * 100}`;
            expProgress.style.width = `${Number(expPercent.innerText)}%`;

            /* local storage maintainence */
            localStorage.setItem("exp-progress", expPercent.innerText)
            if (Number(localExpProgress) >= 100) {
                console.log("greater than 100 exp,check here");
                expPercent.innerText = "100";
                expProgress.style.width = `100%`;
                localStorage.setItem("exp-progress", expPercent.innerText);
                localStorage.setItem("total-topics-cover", Number(localStorage.getItem("total-topcis-cover")) + 1)

            }
            else {
                localStorage.setItem("Overall-progress", `${Number(localOverallProgress) + (1 / expCheckboxs.length) * 6.6}`);

            }

        }
        else if (event.target.checked == false) {
            expPercent.innerText = `${Number(localExpProgress) - (1 / expCheckboxs.length) * 100}`;
            expProgress.style.width = `${Number(expPercent.innerText)}%`;

            /* local storage maintainence */
            localStorage.setItem("exp-progress", expPercent.innerText)
            if (Number(localExpProgress) < 0) {
                expPercent.innerText = "0";
                expProgress.style.width = `0%`;
                localStorage.setItem("exp-progress", expPercent.innerText);
            }
            else {
                localStorage.setItem("Overall-progress", `${Number(localOverallProgress) - (1 / expCheckboxs.length) * 6.6}`);

            }

        }
    })
}


/* for boot */
const bootProgress = document.querySelector("#boot-progress");
const bootPercent = document.querySelector("#boot-percent");
const bootCheckboxs = document.querySelectorAll(".boot-checkbox");


/* setting up the starting data for boot */
bootProgress.style.width = localStorage.getItem("boot-progress") + "%";
localStorage.getItem("boot-progress") ? bootPercent.innerText = localStorage.getItem("boot-progress") : bootPercent.innerText = "0";


for (bootCheckbox of bootCheckboxs) {
    bootCheckbox.addEventListener("change", () => {
        let localOverallProgress = localStorage.getItem("Overall-progress");
        let localBootProgress = localStorage.getItem("boot-progress");
        if (event.target.checked == true) {

            bootPercent.innerText = `${Number(localBootProgress) + (1 / bootCheckboxs.length) * 100}`;
            bootProgress.style.width = `${Number(bootPercent.innerText)}%`;

            /* local storage maintainence */
            localStorage.setItem("boot-progress", bootPercent.innerText)
            if (Number(localBootProgress) >= 100) {
                console.log("greater than 100 boot,check here");
                bootPercent.innerText = "100";
                bootProgress.style.width = `100%`;
                localStorage.setItem("boot-progress", bootPercent.innerText);
                localStorage.setItem("total-topics-cover", Number(localStorage.getItem("total-topcis-cover")) + 1)

            }
            else {
                localStorage.setItem("Overall-progress", `${Number(localOverallProgress) + (1 / bootCheckboxs.length) * 6.6}`);

            }

        }
        else if (event.target.checked == false) {
            bootPercent.innerText = `${Number(localBootProgress) - (1 / bootCheckboxs.length) * 100}`;
            bootProgress.style.width = `${Number(bootPercent.innerText)}%`;

            /* local storage maintainence */
            localStorage.setItem("boot-progress", bootPercent.innerText)
            if (Number(localBootProgress) < 0) {
                bootPercent.innerText = "0";
                bootProgress.style.width = `0%`;
                localStorage.setItem("boot-progress", bootPercent.innerText);
            }
            else {
                localStorage.setItem("Overall-progress", `${Number(localOverallProgress) - (1 / bootCheckboxs.length) * 6.6}`);

            }

        }
    })
}


/* for tail */
const tailProgress = document.querySelector("#tail-progress");
const tailPercent = document.querySelector("#tail-percent");
const tailCheckboxs = document.querySelectorAll(".tail-checkbox");


/* setting up the starting data for tail */
tailProgress.style.width = localStorage.getItem("tail-progress") + "%";
localStorage.getItem("tail-progress") ? tailPercent.innerText = localStorage.getItem("tail-progress") : tailPercent.innerText = "0";


for (tailCheckbox of tailCheckboxs) {
    tailCheckbox.addEventListener("change", () => {
        let localOverallProgress = localStorage.getItem("Overall-progress");
        let localTailProgress = localStorage.getItem("tail-progress");
        if (event.target.checked == true) {

            tailPercent.innerText = `${Number(localTailProgress) + (1 / tailCheckboxs.length) * 100}`;
            tailProgress.style.width = `${Number(tailPercent.innerText)}%`;

            /* local storage maintainence */
            localStorage.setItem("tail-progress", tailPercent.innerText)
            if (Number(localTailProgress) >= 100) {
                console.log("greater than 100 tail,check here");
                tailPercent.innerText = "100";
                tailProgress.style.width = `100%`;
                localStorage.setItem("tail-progress", tailPercent.innerText);
                localStorage.setItem("total-topics-cover", Number(localStorage.getItem("total-topcis-cover")) + 1)

            }
            else {
                localStorage.setItem("Overall-progress", `${Number(localOverallProgress) + (1 / tailCheckboxs.length) * 6.6}`);

            }

        }
        else if (event.target.checked == false) {
            tailPercent.innerText = `${Number(localTailProgress) - (1 / tailCheckboxs.length) * 100}`;
            tailProgress.style.width = `${Number(tailPercent.innerText)}%`;

            /* local storage maintainence */
            localStorage.setItem("tail-progress", tailPercent.innerText)
            if (Number(localTailProgress) < 0) {
                tailPercent.innerText = "0";
                tailProgress.style.width = `0%`;
                localStorage.setItem("tail-progress", tailPercent.innerText);
            }
            else {
                localStorage.setItem("Overall-progress", `${Number(localOverallProgress) - (1 / tailCheckboxs.length) * 6.6}`);

            }

        }
    })
}


/* for next */
const nextProgress = document.querySelector("#next-progress");
const nextPercent = document.querySelector("#next-percent");
const nextCheckboxs = document.querySelectorAll(".next-checkbox");


/* setting up the starting data for next */
nextProgress.style.width = localStorage.getItem("next-progress") + "%";
localStorage.getItem("next-progress") ? nextPercent.innerText = localStorage.getItem("next-progress") : nextPercent.innerText = "0";


for (nextCheckbox of nextCheckboxs) {
    nextCheckbox.addEventListener("change", () => {
        let localOverallProgress = localStorage.getItem("Overall-progress");
        let localNextProgress = localStorage.getItem("next-progress");
        if (event.target.checked == true) {

            nextPercent.innerText = `${Number(localNextProgress) + (1 / nextCheckboxs.length) * 100}`;
            nextProgress.style.width = `${Number(nextPercent.innerText)}%`;

            /* local storage maintainence */
            localStorage.setItem("next-progress", nextPercent.innerText)
            if (Number(localNextProgress) >= 100) {
                console.log("greater than 100 next,check here");
                nextPercent.innerText = "100";
                nextProgress.style.width = `100%`;
                localStorage.setItem("next-progress", nextPercent.innerText);
                localStorage.setItem("total-topics-cover", Number(localStorage.getItem("total-topcis-cover")) + 1)

            }
            else {
                localStorage.setItem("Overall-progress", `${Number(localOverallProgress) + (1 / nextCheckboxs.length) * 6.6}`);

            }

        }
        else if (event.target.checked == false) {
            nextPercent.innerText = `${Number(localNextProgress) - (1 / nextCheckboxs.length) * 100}`;
            nextProgress.style.width = `${Number(nextPercent.innerText)}%`;

            /* local storage maintainence */
            localStorage.setItem("next-progress", nextPercent.innerText)
            if (Number(localNextProgress) < 0) {
                nextPercent.innerText = "0";
                nextProgress.style.width = `0%`;
                localStorage.setItem("next-progress", nextPercent.innerText);
            }
            else {
                localStorage.setItem("Overall-progress", `${Number(localOverallProgress) - (1 / nextCheckboxs.length) * 6.6}`);

            }

        }
    })
}


/* for api */
const apiProgress = document.querySelector("#api-progress");
const apiPercent = document.querySelector("#api-percent");
const apiCheckboxs = document.querySelectorAll(".api-checkbox");


/* setting up the starting data for api */
apiProgress.style.width = localStorage.getItem("api-progress") + "%";
localStorage.getItem("api-progress") ? apiPercent.innerText = localStorage.getItem("api-progress") : apiPercent.innerText = "0";


for (apiCheckbox of apiCheckboxs) {
    apiCheckbox.addEventListener("change", () => {
        let localOverallProgress = localStorage.getItem("Overall-progress");
        let localApiProgress = localStorage.getItem("api-progress");
        if (event.target.checked == true) {

            apiPercent.innerText = `${Number(localApiProgress) + (1 / apiCheckboxs.length) * 100}`;
            apiProgress.style.width = `${Number(apiPercent.innerText)}%`;

            /* local storage maintainence */
            localStorage.setItem("api-progress", apiPercent.innerText)
            if (Number(localApiProgress) >= 100) {
                console.log("greater than 100 api,check here");
                apiPercent.innerText = "100";
                apiProgress.style.width = `100%`;
                localStorage.setItem("api-progress", apiPercent.innerText);
                localStorage.setItem("total-topics-cover", Number(localStorage.getItem("total-topcis-cover")) + 1)

            }
            else {
                localStorage.setItem("Overall-progress", `${Number(localOverallProgress) + (1 / apiCheckboxs.length) * 6.6}`);

            }

        }
        else if (event.target.checked == false) {
            apiPercent.innerText = `${Number(localApiProgress) - (1 / apiCheckboxs.length) * 100}`;
            apiProgress.style.width = `${Number(apiPercent.innerText)}%`;

            /* local storage maintainence */
            localStorage.setItem("api-progress", apiPercent.innerText)
            if (Number(localApiProgress) < 0) {
                apiPercent.innerText = "0";
                apiProgress.style.width = `0%`;
                localStorage.setItem("api-progress", apiPercent.innerText);
            }
            else {
                localStorage.setItem("Overall-progress", `${Number(localOverallProgress) - (1 / apiCheckboxs.length) * 6.6}`);

            }

        }
    })
}



/* for mongo */
const mongoProgress = document.querySelector("#mongo-progress");
const mongoPercent = document.querySelector("#mongo-percent");
const mongoCheckboxs = document.querySelectorAll(".mongo-checkbox");


/* setting up the starting data for mongo */
mongoProgress.style.width = localStorage.getItem("mongo-progress") + "%";
localStorage.getItem("mongo-progress") ? mongoPercent.innerText = localStorage.getItem("mongo-progress") : mongoPercent.innerText = "0";


for (mongoCheckbox of mongoCheckboxs) {
    mongoCheckbox.addEventListener("change", () => {
        let localOverallProgress = localStorage.getItem("Overall-progress");
        let localMongoProgress = localStorage.getItem("mongo-progress");
        if (event.target.checked == true) {

            mongoPercent.innerText = `${Number(localMongoProgress) + (1 / mongoCheckboxs.length) * 100}`;
            mongoProgress.style.width = `${Number(mongoPercent.innerText)}%`;

            /* local storage maintainence */
            localStorage.setItem("mongo-progress", mongoPercent.innerText)
            if (Number(localMongoProgress) >= 100) {
                console.log("greater than 100 mongo,check here");
                mongoPercent.innerText = "100";
                mongoProgress.style.width = `100%`;
                localStorage.setItem("mongo-progress", mongoPercent.innerText);
                localStorage.setItem("total-topics-cover", Number(localStorage.getItem("total-topcis-cover")) + 1)

            }
            else {
                localStorage.setItem("Overall-progress", `${Number(localOverallProgress) + (1 / mongoCheckboxs.length) * 6.6}`);

            }

        }
        else if (event.target.checked == false) {
            mongoPercent.innerText = `${Number(localMongoProgress) - (1 / mongoCheckboxs.length) * 100}`;
            mongoProgress.style.width = `${Number(mongoPercent.innerText)}%`;

            /* local storage maintainence */
            localStorage.setItem("mongo-progress", mongoPercent.innerText)
            if (Number(localMongoProgress) < 0) {
                mongoPercent.innerText = "0";
                mongoProgress.style.width = `0%`;
                localStorage.setItem("mongo-progress", mongoPercent.innerText);
            }
            else {
                localStorage.setItem("Overall-progress", `${Number(localOverallProgress) - (1 / mongoCheckboxs.length) * 6.6}`);

            }

        }
    })
}


/* for deploy */
const deployProgress = document.querySelector("#deploy-progress");
const deployPercent = document.querySelector("#deploy-percent");
const deployCheckboxs = document.querySelectorAll(".deploy-checkbox");


/* setting up the starting data for deploy */
deployProgress.style.width = localStorage.getItem("deploy-progress") + "%";
localStorage.getItem("deploy-progress") ? deployPercent.innerText = localStorage.getItem("deploy-progress") : deployPercent.innerText = "0";


for (deployCheckbox of deployCheckboxs) {
    deployCheckbox.addEventListener("change", () => {
        let localOverallProgress = localStorage.getItem("Overall-progress");
        let localDeployProgress = localStorage.getItem("deploy-progress");
        if (event.target.checked == true) {

            deployPercent.innerText = `${Number(localDeployProgress) + (1 / deployCheckboxs.length) * 100}`;
            deployProgress.style.width = `${Number(deployPercent.innerText)}%`;

            /* local storage maintainence */
            localStorage.setItem("deploy-progress", deployPercent.innerText)
            if (Number(localDeployProgress) >= 100) {
                console.log("greater than 100 deploy,check here");
                deployPercent.innerText = "100";
                deployProgress.style.width = `100%`;
                localStorage.setItem("deploy-progress", deployPercent.innerText);
                localStorage.setItem("total-topics-cover", Number(localStorage.getItem("total-topcis-cover")) + 1)

            }
            else {
                localStorage.setItem("Overall-progress", `${Number(localOverallProgress) + (1 / deployCheckboxs.length) * 6.6}`);

            }

        }
        else if (event.target.checked == false) {
            deployPercent.innerText = `${Number(localDeployProgress) - (1 / deployCheckboxs.length) * 100}`;
            deployProgress.style.width = `${Number(deployPercent.innerText)}%`;

            /* local storage maintainence */
            localStorage.setItem("deploy-progress", deployPercent.innerText)
            if (Number(localDeployProgress) < 0) {
                deployPercent.innerText = "0";
                deployProgress.style.width = `0%`;
                localStorage.setItem("deploy-progress", deployPercent.innerText);
            }
            else {
                localStorage.setItem("Overall-progress", `${Number(localOverallProgress) - (1 / deployCheckboxs.length) * 6.6}`);

            }

        }
    })
}