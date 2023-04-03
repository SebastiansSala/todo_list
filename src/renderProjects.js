import { renderModals } from "./renderForms";
import { renderTasks } from "./renderTasks";
import { projectTasks } from "./tasks";

export const renderProject = () => {
  const createProject = document.createElement("div");
  createProject.innerHTML = `
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Create Project</button>
  `;

  createProject.addEventListener("click", () => {
    renderModals().renderProjectModal();
  });
  
  const proyecto = document.querySelector(".projects");
  proyecto.appendChild(createProject);

  let proyectoTasks = null;

  const renderProjects = (proyecto) => {
    const main = document.querySelector(".main");
    const mainContainer = main.querySelector(".main-container");
    const renderMainContainer = renderTasks(proyecto);
    if (mainContainer) {
      main.replaceChild(renderMainContainer, mainContainer);
    } else {
      main.appendChild(renderMainContainer);
    }
    const taskContainers = document.querySelectorAll(".task-container");
    taskContainers.forEach((taskContainer, index) => {
      const item = taskContainer.querySelector(".item-2");
      const removeButton = item.querySelector(".remove");
      removeButton.addEventListener("click", () => {
        const taskIndex = index;
        projectTasks(proyecto).removeTask(taskIndex);
        renderProjects(proyecto);
      });
    });
  };

  const proyectos = document.querySelectorAll(".hover");
  proyectos.forEach((proyecto) => {
    proyecto.addEventListener("click", () => {
      proyectoTasks = proyecto;
      renderProjects(proyectoTasks);
    });
  });

  const add = document.querySelector(".add");
  add.addEventListener("click", () => {
    const addTask = projectTasks(proyectoTasks);
    addTask.createTask("hola", "quetal");
    renderProjects(proyectoTasks);
  });

};
