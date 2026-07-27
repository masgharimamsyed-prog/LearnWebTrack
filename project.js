console.log("project js running...");



let addProjectBtn = document.querySelector("#add-project-btn");
let projectsContainer = document.querySelector("#projects")


/* getting project from local storgae*/
if (localStorage.getItem("projects-info")) {
    let localProjects = JSON.parse(localStorage.getItem("projects-info"));
    for (let i = 0; i < localProjects.length; i++) {

        let title = localProjects[i].Title;
        let description = localProjects[i].Description;
        let techstack = localProjects[i].TechStack;



        let div = document.createElement("div");
        let h3 = document.createElement("h3");
        h3.innerText = title;

        let p = document.createElement("p");
        p.innerText = description;

        let h6 = document.createElement("h6");
        h6.innerText = "Tech Stack";

        let span = document.createElement("span");
        span.innerText = techstack;

        /* adding in container */
        div.appendChild(h3);
        div.appendChild(p);
        div.appendChild(h6);
        div.appendChild(span);
        div.classList.add('project');
        projectsContainer.appendChild(div);

    }
}




addProjectBtn.addEventListener("click", () => {
    let title = prompt("Enter Project Title");
    let description = prompt("Enter the description");
    let techstack = prompt("Enter the Tech Stack You used");

    let div = document.createElement("div");
    let h3 = document.createElement("h3");
    h3.innerText = title;

    let p = document.createElement("p");
    p.innerText = description;

    let h6 = document.createElement("h6");
    h6.innerText = "Tech Stack";

    let span = document.createElement("span");
    span.innerText = techstack;

    /* adding in container */
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(h6);
    div.appendChild(span);
    projectsContainer.appendChild(div);
    div.classList.add('project');

    /* adding in local stoarge */
    let projectsInfo = [];
    if (localStorage.getItem("projects-info")) {
        projectsInfo = JSON.parse(localStorage.getItem("projects-info"));
    }

    projectsInfo.push({
        Title: title,
        Description: description,
        TechStack: techstack
    })
    localStorage.setItem("projects-info", JSON.stringify(projectsInfo));


    localStorage.setItem("projects", Number(localStorage.getItem("projects")) + 1);
});