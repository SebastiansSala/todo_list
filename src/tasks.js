export let projects = [
  {
      name: "All",
      id: 1,
      task: [
        {
          title: "Cosita buena",
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
          importance: true,
        },
        {
          title: "Task 2",
          desc: "Do something else",
          importance: false,
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

  const createTask = (title, desc, importance, date) => {
    const newTask = { title, desc, importance, date};
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

  const watchTask = (taskIndex) => {
    return currentProject.task[taskIndex];
  }

  return { createTask, getTasks, removeTask, watchTask };
};
