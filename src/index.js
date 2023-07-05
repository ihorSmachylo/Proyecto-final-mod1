const form = document.querySelector("form");
const title = document.getElementById("titleInput");
const image = document.getElementById("imageInput");
const description = document.getElementById("description");
const grid = document.getElementById("projectsGrid");
const featurecontainer = document.getElementById("feature");

let projects = [];
let projectID = 0;

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const project = {
    id: projectID,
    title: title.value,
    image: image.value,
    description: description.value,
  };
  projects.push(project);
  projectID++;
  console.log(projects);
  title.value = "";
  image.value = "";
  description.value = "";

  const card = document.createElement("div");
  card.innerHTML = `<div class="h-[300px] w-[300px]" ><img src="${project.image}" class="object-cover h-full w-full"/> </div> <h4 class="font-bold text-xl text-[#2a3034]">${project.title}</h4> <p>${project.description}</p>`;
  card.classList.add(
    "bg-[#FDFCF6]",
    "rounded-lg",
    "px-3",
    "py-3",
    "shadow-lg",
    "border",
    "border-emerald-600/10"
  );
  card.addEventListener("click", function () {
    removeCardHandler(project.id);
   
  });
    

  grid.appendChild(card);
}

function removeCardHandler(id) {
  const removeProject = projects.find((e) => e.id === id);
  const index = projects.indexOf(removeProject);
  projects.splice(index, 1);
  console.log(projects);
  grid.removeChild(grid.children[index]);
}
