import { createProjects } from "./projects";

export const renderModals = () => {
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("button-container");

  const renderProjectModal = () => {
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
      const currentProject = createProjects(name);
      projectContainer.appendChild(currentProject);
      nameInput.value = "";
      const projects = document.querySelector(".list-group");
      projects.appendChild(currentProject);
      modalContainer
        .querySelector("form")
        .addEventListener("submit", (event) => {
          event.preventDefault();
        });
    });
    const modal = new bootstrap.Modal(document.getElementById("myModal"), {});
    modal.show();
  };

  const renderTaskModal = () => {
    const modalContainer = document.createElement("div");
    modalContainer.innerHTML = `
    <div class="modal fade" id="miModal" tabindex="-1" role="dialog" aria-labelledby="miModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="miModalLabel">Crear tarea</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="titulo">Título</label>
              <input type="text" class="form-control" id="titulo" placeholder="Ingresa el título de la tarea">
            </div>
            <div class="form-group">
              <label for="descripcion">Descripción</label>
              <textarea class="form-control" id="descripcion" rows="3" placeholder="Ingresa la descripción de la tarea"></textarea>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="importante" id="prioridad">
              <label class="form-check-label" for="prioridad">
                Importante
              </label>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
          <button type="button" class="btn btn-primary" id = 'save-name'>Guardar tarea</button>
        </div>
      </div>
    </div>
  </div>
          `;
    document.body.appendChild(modalContainer);
    const saveButton = modalContainer.querySelector("#save-name");
    saveButton.addEventListener("click", () => {
      const titleInput = modalContainer.querySelector("#titulo");
      const descInput = modalContainer.querySelector("#descripcion");
      const priorityInput = modalContainer.querySelector("#prioridad");
      const title = nameInput.value;
      const desc = nameInput.value;
      const priority = priorityInput.checked;
      console.log(title)
      
      titleInput.value = "";
      descInput.value = "";
      const projects = document.querySelector(".list-group");
      projects.appendChild(currentProject);
      modalContainer
        .querySelector("form")
        .addEventListener("submit", (event) => {
          event.preventDefault();
        });
    });
    const modal = new bootstrap.Modal(document.getElementById("miModal"), {});
    modal.show();
  };

  return { renderProjectModal, renderTaskModal };
};
