import { renderTasks } from "./renderTasks";
import { projectTasks, projects } from "./tasks";
import { createProjects } from "./projects";
import { renderTaskModal } from "./renderForms";


export const renderProjects = (proyecto) => {
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
      projectTasks(proyecto).removeTask(index);
      renderProjects(proyecto);
    });
  });
};

export const renderProject = () => {
  let proyectoTasks = projects[0];
  const createProject = document.createElement("div");
  createProject.innerHTML = `
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Create Project</button>
  `;
  const proyecto = document.querySelector(".projects");
  proyecto.appendChild(createProject);

  renderProjects(proyectoTasks);

  const add = document.querySelector(".add");
      add.addEventListener("click", () => {
        renderTaskModal(proyectoTasks);
    });

  createProject.addEventListener("click", () => {
    const modalContainer = document.createElement("div");
    modalContainer.innerHTML = `
              <div class="modal" tabindex="-1" role="dialog" id="myModal">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">Ingresa tu nombre</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <form>
                        <div class="form-group">
                          <input type="text" class="form-control" id="name">
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                      <button type="button" class="btn btn-primary" data-dismiss="modal" id="save-name">Guardar</button>
                    </div>
                  </div>
                </div>
              </div>
            `;
    document.body.appendChild(modalContainer);
    const saveButton = modalContainer.querySelector("#save-name");
    saveButton.addEventListener("click", () => {
      const nameInput = modalContainer.querySelector("#name");
      const name = nameInput.value;
      if (!name) {
        return;
      } else {
        const currentProject = createProjects(name);
        nameInput.value = "";
        const projects = document.querySelector(".list-group");
        projects.appendChild(currentProject);
        currentProject.addEventListener("click", () => {
          proyectoTasks = currentProject;
          renderProjects(proyectoTasks);
        });
        modal.hide();
      }
    });
    const modal = new bootstrap.Modal(
      modalContainer.querySelector("#myModal"),
      {}
    );
    modal.show();
  });

  const proyectos = document.querySelectorAll(".hover");
  proyectos.forEach((proyecto) => {
    proyecto.addEventListener("click", () => {
      proyectoTasks = proyecto;
      renderProjects(proyectoTasks);
    });
  });

};
