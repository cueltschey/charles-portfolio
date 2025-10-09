(function () {
  const projects_json = [
    { img: "assets/test.png", title: "Test1", desc: "A testing project about visualization." },
    { img: "assets/test.png", title: "Test2", desc: "An experiment with interactive graphics." },
    { img: "assets/test.png", title: "Test3", desc: "A project on data-driven animations." },
    { img: "assets/test.png", title: "Test4", desc: "A prototype for a minimal UI tool." },
    { img: "assets/test.png", title: "Test5", desc: "Another experiment with modern web design." },
    { img: "assets/test.png", title: "Test6", desc: "A simple proof of concept in 3D." },
    { img: "assets/test.png", title: "Test7", desc: "An AI-assisted image manipulation demo." },
    { img: "assets/test.png", title: "Test8", desc: "A music visualization interface." },
    { img: "assets/test.png", title: "Test7", desc: "An AI-assisted image manipulation demo." },
    { img: "assets/test.png", title: "Test8", desc: "A music visualization interface." },
  ];

  const projectsPerPage = 8;
  let currentPage = 0;

  const projects_pane = document.querySelector(".proj-panel");
  const prevBtn = document.getElementById("prevPage");
  const nextBtn = document.getElementById("nextPage");

  function renderProjects() {
    projects_pane.innerHTML = "";
    const start = currentPage * projectsPerPage;
    const end = start + projectsPerPage;
    const currentProjects = projects_json.slice(start, end);

    currentProjects.forEach((obj, idx) => {
      if(!obj.img || !obj.title || !obj.desc) return;
      const new_project = document.createElement("div");
      new_project.classList.add("project");
      new_project.style.animationDelay = `${idx * 0.1}s`;
      new_project.innerHTML = `
        <img src="${obj.img}" class="proj-bg" alt="${obj.title}">
        <h1 class="proj-title">${obj.title}</h1>
        <p class="proj-desc">${obj.desc}</p>
      `;
      projects_pane.appendChild(new_project);
    });

    prevBtn.style.display = currentPage === 0 ? "none" : "block";
    nextBtn.style.display = end >= projects_json.length ? "none" : "block";
  }

  prevBtn.addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage--;
      renderProjects();
    }
  });

  nextBtn.addEventListener("click", () => {
    if ((currentPage + 1) * projectsPerPage < projects_json.length) {
      currentPage++;
      renderProjects();
    }
  });

  renderProjects();
})();

