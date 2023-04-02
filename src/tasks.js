let projects = [];

export const projectTasks = ((name) => {
  
  const createTask = (title, desc) => {
    const newTask = { title, desc };
    const currentProject = projectContainer.find(
      (project) => project.id === parseInt(proyecto.id)
    );
    currentProject.task.push(newTask);
  };

  const getTasks = () => {
    const currentProject = projectContainer.find(
      (project) => project.id === parseInt(proyecto.id)
    );
    return currentProject.task;
  };

  return { createTask, getTasks };
})();
