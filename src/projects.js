import { projects } from "./tasks";

let idCounter = 4;

export const createProjects = (name) => {
    const storedProjects = JSON.parse(localStorage.getItem('projects'));
    if (storedProjects) {
        projects = storedProjects;
    }
    let lastId = 0;
    if (projects.length > 0) {
        lastId = projects[projects.length - 1].id;
    }
    idCounter = lastId + 1;
    const newProject = document.createElement("li");
    newProject.id = idCounter;
    newProject.classList.add("hover");
    newProject.textContent = name;
    projects.push({ name: newProject.textContent, id: idCounter, task: []});
    localStorage.setItem('projects', JSON.stringify(projects));
    console.log(localStorage.setItem('projects', JSON.stringify(projects)));
    console.log(projects)
    return newProject;
}

