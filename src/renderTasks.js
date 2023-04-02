import { projectTasks } from "./tasks";

export const renderTasks = (project) => {
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('main-container');
    const currentProject = projectTasks(project);
    const tasks = currentProject.getTasks();
    console.log(tasks);
    for(const task of tasks){
      const taskContainer = document.createElement('div');
        taskContainer.classList.add('task-container');
        const taskItem = document.createElement('div');
        taskItem.classList.add('item-1');
        taskItem.textContent = `${task.title}`;
        const taskFeatures = document.createElement('div');
        taskFeatures.classList.add('item-2');
        taskFeatures.innerHTML = `<i class="large material-icons">mode_edit</i>
        <i class="large material-icons">info_outline</i>
        <i class="gg-remove"></i>`;
        taskContainer.appendChild(taskItem);
        taskContainer.appendChild(taskFeatures);
        mainContainer.appendChild(taskContainer);
    }
    return mainContainer;
};

