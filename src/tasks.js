export let projects = [
  {
      name: "All",
      id: 1,
      task: [
        {
          title: "Task 1",
          desc: "Do something",
        },
        {
          title: "Task 2",
          desc: "Do something else",
        },
      ],
    },
    {
      name: "Today",
      id: 2,
      task: [
        {
          title: "Task 1",
          desc: "Do something",
        },
        {
          title: "Task 3",
          desc: "Do",
        },
      ],
    },
    {
      name: "Week",
      id: 3,
      task: [
        {
          title: "Task 1",
          desc: "Do something",
        },
        {
          title: "Task 2",
          desc: "Do something else",
        },
      ],
    },
    {
      name: "Uno",
      id: 4,
      task: [
      ],
    }
] 

export const projectTasks = (proyecto) => {
  const projectId = parseInt(proyecto.id);
  const currentProject = projects.find((project) => project.id === projectId);

  const createTask = (title, desc) => {
    const newTask = { title, desc };
    currentProject.task.push(newTask);
  };

  const getTasks = () => {
    if(currentProject){
      return currentProject.task;
    }
    return [];
  };

  const removeTask = (taskIndex) => {
    currentProject.task.splice(taskIndex, 1);
    console.log(projects)
  }

  return { createTask, getTasks, removeTask };
};
