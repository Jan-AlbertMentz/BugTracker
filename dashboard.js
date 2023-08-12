// ########################################################################################################################
// Dashboard

document.addEventListener("DOMContentLoaded", function () {
  // Display when form is opened
  if (localStorage.countNewTickets === undefined) {
    document.getElementById("bugs-ready-number").innerHTML = 0;
  } else {
    document.getElementById("bugs-ready-number").innerHTML =
      localStorage.countNewTickets;
  }

  if (localStorage.countConfirmedTickets === undefined) {
    document.getElementById("bugs-in-progress-number").innerHTML = 0;
  } else {
    document.getElementById("bugs-in-progress-number").innerHTML =
      localStorage.countConfirmedTickets;
  }

  if (localStorage.countClosedTickets === undefined) {
    document.getElementById("bugs-completed-number").innerHTML = 0;
  } else {
    document.getElementById("bugs-completed-number").innerHTML =
      localStorage.countClosedTickets;
  }

  // Display Priorities when form is opened
  if (localStorage.highPriority === undefined) {
    document.querySelector(".high-priority-number").innerHTML = 0;
  } else {
    document.querySelector(".high-priority-number").innerHTML =
      localStorage.highPriority;
  }

  if (localStorage.mediumPriority === undefined) {
    document.querySelector(".medium-priority-number").innerHTML = 0;
  } else {
    document.querySelector(".medium-priority-number").innerHTML =
      localStorage.mediumPriority;
  }

  if (localStorage.lowPriority === undefined) {
    document.querySelector(".low-priority-number").innerHTML = 0;
  } else {
    document.querySelector(".low-priority-number").innerHTML =
      localStorage.lowPriority;
  }

  // Summary display when form is opened
  if (localStorage.totalTicketCounter === undefined) {
    document.querySelector(".total-bugs-summary").innerHTML = 0;
  } else {
    document.querySelector(".total-bugs-summary").innerHTML =
      localStorage.totalTicketCounter;
  }

  let tempProjectarr = localStorage.projectarrays.split(",");
  if (tempProjectarr.length === 0) {
    document.querySelector(".total-projects-summary").innerHTML = 0;
  } else {
    document.querySelector(".total-projects-summary").innerHTML =
      tempProjectarr.length;
  }

  const addNewProject = function (projectName) {
    const newProjectElement = document.createElement("div");
    newProjectElement.className = "project background-project-shadow";
    newProjectElement.textContent = projectName;
    addprojectcontainer.appendChild(newProjectElement);
  };

  let mainprojectsArray = [];
  const addbtn = document.querySelector(".add-project-button");
  const clearbtn = document.querySelector(".clear-project-button");
  const addprojectcontainer = document.querySelector(
    ".dynamic-project-container"
  );
  const projectNameElement = document.getElementById("new-project-name");

  if (localStorage.projectarrays) {
    mainprojectsArray = localStorage.projectarrays.split(",");
    const arrlength = mainprojectsArray.length;
    for (let a = 0; a < arrlength; a++) {
      let oldProjectName = mainprojectsArray[a];
      addNewProject(oldProjectName);
    }
  }

  addbtn.addEventListener("click", function () {
    const projectName = projectNameElement.value;
    if (projectName !== "") {
      addNewProject(projectName);
      mainprojectsArray.push(projectName);
      localStorage.projectarrays = mainprojectsArray;
      projectName.value = "";
    } else alert("Please enter a project Name");
  });

  clearbtn.addEventListener("click", function () {
    mainprojectsArray = [];
    localStorage.projectarrays = mainprojectsArray;
  });
});
