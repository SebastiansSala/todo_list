import { projects } from "./projects";

export const projectTasks = (proyecto) => {
  const proyectoId = parseInt(proyecto.id);

  const createTask = (title, desc) => {
    const newTask = { title, desc };
    const currentProject = projects.find((project) => project.id === proyectoId);
    currentProject.task.push(newTask);
  };

  const getTasks = () => {
    const currentProject = projects.find((project) => project.id === proyectoId);
    return currentProject.task;
  };

  return { createTask, getTasks };
};
