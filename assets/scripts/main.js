document.addEventListener("DOMContentLoaded", function(event) {
  if(sessionStorage.getItem("hasLoaded")) {
    document.getElementById("about").classList.remove("animate");
    document.getElementById("about").classList.add("revisit");
  } else {
    document.getElementById("about").classList.add("animate");
    sessionStorage.setItem("hasLoaded", true);
  }

  var projectTabs = document.querySelectorAll(".projects-gallery-nav--desktop a");
  projectTabs.forEach(function(projectTab){
    projectTab.addEventListener("click", function(){
      removeActiveClassFromProjects();
      var destination = this.dataset.destination;
      this.classList += " " + "active";
      var projectDestination = document.querySelector("#"+destination);
      var className = "active";
      if (projectDestination.classList)
        projectDestination.classList.add(className);
      else
        projectDestination.classList += ' ' + className;
    })
  })

  function removeActiveClassFromProjects () {
    var projects = document.querySelectorAll(".project");
    var projectTabs = document.querySelectorAll(".projects-gallery-nav--desktop a");
    for (var i = 0; i< projects.length; i++){
        projects[i].classList.remove("active");
      if(projectTabs[i].classList){
        projectTabs[i].classList.remove("active");
      }
    }
  }
});
