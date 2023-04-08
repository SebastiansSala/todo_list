import { renderProject } from "./renderProjects";
import { projects } from "./tasks";

const renderProyectos = document.querySelector(".list-group");
projects.forEach((project) => {
    if(project.id > 4){
        const newProject = document.createElement("li");
        newProject.classList.add("hover");
        newProject.id = project.id;
        newProject.textContent = project.name;
        renderProyectos.appendChild(newProject);
    }
});

renderProject();
