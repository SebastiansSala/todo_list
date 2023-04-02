import { renderModals } from "./renderForms";
import { renderTasks } from "./renderTasks";

export const renderProject = () => {
  const createProject = document.createElement("div");
  createProject.innerHTML = `
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Create Project</button>
  `;
  const proyecto = document.querySelector('.projects');
  proyecto.appendChild(createProject);

  createProject.addEventListener('click', () => {
    renderModals().renderProjectModal();
  })

  const proyectos = document.querySelectorAll(".hover");
  proyectos.forEach((proyecto) => {
    proyecto.addEventListener("click", function projectClickHandler() {
      const main = document.querySelector(".main");
      const mainContainer = main.querySelector(".main-container");
      const renderMainContainer = renderTasks(proyecto); 
      if (mainContainer) {
        main.replaceChild(renderMainContainer, mainContainer);
      } else {
        main.appendChild(renderMainContainer);
      }
    });
  });
};
