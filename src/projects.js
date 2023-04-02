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
      }
] 

let idCounter = 3;

export const createProjects = (name) => {
    idCounter++;
    const newProject = document.createElement("li");
    newProject.classList.add("proyecto");
    newProject.textContent = name;
    newProject.id = idCounter;
    projects.push({ name: newProject.textContent, id: newProject.id, task: []});
    return newProject;
}