import { projectTasks } from "./tasks";
import { renderProjects } from "./renderProjects";
import { format } from 'date-fns'
import { projects } from "./tasks";

export const renderWatchTask = (task) => {
  const modalContainer = document.createElement("div");
  modalContainer.innerHTML = `
    <div class="modal fade" id="miModal" tabindex="-1" role="dialog" aria-labelledby="miModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-center" id="miModalLabel">${task.title}</h5>
          </div>
          <div class="modal-body">
            <div class="row mb-3">
              <div class="col-4">Importancia:</div>
              <div class="col-8">
                <button id="not-important-btn" class="btn btn-sm btn-success mr-2" ${
                  task.importance ? "disabled" : ""
                }>No importante</button>
                <button id="important-btn" class="btn btn-sm btn-danger" ${
                  !task.importance ? "disabled" : ""
                }>Importante</button>
              </div>
            </div>
            <div class="row">
              <div class="col-4">Descripción:</div>
              <div class="col-8" id="task-description">${task.desc}</div>
            </div>
            <div class="row">
              <div class="col-4">Date:</div>
              <div class="col-8" id="task-date">${task.date}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modalContainer);

  const modal = new bootstrap.Modal(modalContainer.querySelector("#miModal"));
  modal.show();
};

export const renderEditTask = (task, currentProject) => {
  const modalContainer = document.createElement("div");
  modalContainer.innerHTML = `
  <div class="modal fade" id="miModal" tabindex="-1" role="dialog" aria-labelledby="miModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="miModalLabel">Edit Task</h5>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="titulo">Título</label>
            <input type="text" class="form-control" id="titulo" placeholder="${task.title}">
          </div>
          <div class="form-group">
            <label for="descripcion">Descripción</label>
            <textarea class="form-control" id="descripcion" rows="3" placeholder="${task.desc}"></textarea>
          </div>
          <div class='form-group'>
            <input type='date' id='date'>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="important">
            <label class="form-check-label" for="important">
              Importante
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="not-important" checked>
            <label class="form-check-label" for="not-important">
              No Importante
            </label>
          </div>
        </form>
      </div>
      <div class="modal-footer">
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
    const dateInput = modalContainer.querySelector("#date");
    const priorityInputImportant = modalContainer.querySelector("#important");
    const priorityInputNotImportant = modalContainer.querySelector("#not-important");
    let priorityImportant = null;

    if (priorityInputImportant) {
      priorityImportant = priorityInputImportant.checked;
    } else {
      priorityImportant = priorityInputNotImportant.checked;
    }

    const title = titleInput.value;
    const desc = descInput.value;
    const date = format(new Date(dateInput.value), 'MM/dd/yyyy');

    if (!title || !desc || !date) {
      return;
    } else {
      task.title = title; 
      task.desc = desc;
      task.date = date;
      task.importance = priorityImportant;
      renderProjects(currentProject);
      modal.hide();
    }
  });
  const modal =  new bootstrap.Modal(modalContainer.querySelector("#miModal"));
  modal.show();
};

export const renderTaskModal = (currentProject) => {
  const modalContainer = document.createElement("div");
  modalContainer.innerHTML = `
    <div class="modal fade" id="miModal" tabindex="-1" role="dialog" aria-labelledby="miModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="miModalLabel">Create Task</h5>
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
              <div class='form-group'>
                <input type='date' id='date'>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="important">
                <label class="form-check-label" for="important">
                  Importante
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="not-important" checked>
                <label class="form-check-label" for="not-important">
                  No Importante
                </label>
              </div>
            </form>
          </div>
          <div class="modal-footer">
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
    const dateInput = modalContainer.querySelector("#date");
    const priorityInputImportant = modalContainer.querySelector("#important");
    const priorityInputNotImportant = modalContainer.querySelector("#not-important");
    let priorityImportant = null;

    if (priorityInputImportant) {
      priorityImportant = priorityInputImportant.checked;
    } else {
      priorityImportant = priorityInputNotImportant.checked;
    }

    const title = titleInput.value;
    const desc = descInput.value;
    const date = format(new Date(dateInput.value), 'MM/dd/yyyy');

    if (!title || !desc) {
      return;
    } else {
      projectTasks(currentProject).createTask(title, desc, priorityImportant, date);
      renderProjects(currentProject);
      modal.hide();
    }
  });

  const modal = new bootstrap.Modal(modalContainer.querySelector("#miModal"));

  modal.show();
};
