import { projects } from "./tasks";

let idCounter = 4;

export const createProjects = (name) => {
    idCounter++;
    const newProject = document.createElement("li");
    newProject.id = idCounter;
    newProject.classList.add("hover");
    newProject.textContent = name;
    projects.push({ name: newProject.textContent, id: idCounter, task: []});
    return newProject;
}