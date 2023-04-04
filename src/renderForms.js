import { projectTasks } from "./tasks";
import { renderProjects } from "./renderProjects";

export const renderTaskModal = (currentProject) => {
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
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="important">
                  <label class="form-check-label" for="important">
                    Important
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="not-important" checked>
                  <label class="form-check-label" for="not-important">
                    Not Important
                  </label>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
              <button type="button" class="btn btn-primary" id="save-name">Guardar tarea</button>
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
    const priorityInputImportant = modalContainer.querySelector("#important");
    const priorityInputNotImportant =
      modalContainer.querySelector("#not-important");
    modalContainer.querySelector("#notImportant");
    const title = titleInput.value;
    const desc = descInput.value;
    let priorityImportant = null;
    if (priorityInputImportant) {
      priorityImportant = priorityInputImportant.checked;
    } else {
      priorityImportant = priorityInputNotImportant.checked;
    }
    if (!title && !desc) {
      return;
    } else {
      projectTasks(currentProject).createTask(title, desc);
      renderProjects(currentProject);
      modal.hide();
    }
  });

  const modal = new bootstrap.Modal(
    modalContainer.querySelector("#miModal"),
    {}
  );
  modal.show();
};

