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

  return { renderProjectModal, renderTaskModal };
};
