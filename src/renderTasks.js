import { projectTasks } from "./tasks";

export const renderTasks = (project) => {
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container");
  const currentProject = projectTasks(project);
  const tasks = currentProject.getTasks();

  for (const task of tasks) {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");
    const taskItem = document.createElement("div");
    taskItem.classList.add("item-1");
    taskItem.textContent = `${task.title}`;
    const taskFeatures = document.createElement("div");
    taskFeatures.classList.add("item-2");
    taskFeatures.innerHTML = `<i class="large material-icons edit">mode_edit</i>
        <i class="large material-icons watch">info_outline</i>
        <i class="large material-icons remove">remove_circle_outline</i>`;
    taskContainer.appendChild(taskItem);
    taskContainer.appendChild(taskFeatures);
    mainContainer.appendChild(taskContainer);
  }
  return mainContainer;
};
