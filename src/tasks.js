let projects = [
  {
    name: "All",
    id: 1,
    task: [
      {
        title: "Main task",
        desc: "Complete the todoList",
        importance: true,
        date: '01/10/24'
      }
    ],
  },
  {
    name: "Today",
    id: 2,
    task: [
      {
        title: "nyaaaa",
        desc: "test bruh",
        importance: false,
        date: '01/10/23'
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
        date: '01/10/23'
      },
      {
        title: "Task 2",
        desc: "Do something else",
        importance: false,
        date: '01/10/23'
      },
    ],
  },
  {
    name: "Uno",
    id: 4,
    task: [],
  },
];

const storedProjects = JSON.parse(localStorage.getItem('projects'));
if (storedProjects) {
  projects = storedProjects;
} else {
  localStorage.setItem('projects', JSON.stringify(projects));
}

export const projectTasks = (proyecto) => {
  const projectId = parseInt(proyecto.id);
  const currentProject = projects.find((project) => project.id === projectId);

  const createTask = (title, desc, importance, date) => {
    const newTask = { title, desc, importance, date};
    currentProject.task.push(newTask);
    localStorage.setItem('projects', JSON.stringify(projects));
  };

  const getTasks = () => {
    if(currentProject){
      const tasks = currentProject.task;
      return tasks;
    }
    return [];
  };

  const removeTask = (taskIndex) => {
    currentProject.task.splice(taskIndex, 1);
    localStorage.setItem('projects', JSON.stringify(projects));
  }

  const watchTask = (taskIndex) => {
    return currentProject.task[taskIndex];
  }

  return { createTask, getTasks, removeTask, watchTask };
};

export {projects}
