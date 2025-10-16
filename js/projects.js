(function () {
  const projects_json = [
    { img: "./assets/proj/x64_64-asm.png", title: "Linux x86_64 Assembler", desc: "A fully functional x86 assembler 1.5 times faster than GCC as", link: "https://github.com/cueltschey/x86_64-asm" },
    { img: "assets/proj/qr-generator.png", title: "C++ QR Code Generator", desc: "CLI app that converts text to QR codes of various sizes", link: "https://github.com/cueltschey/qr-generator" },
    { img: "assets/proj/codebase-graph.png", title: "Graph Codebase Visualizer", desc: "A program to parse and display functions, classes, and files as nodes in a graph", link: "https://github.com/cueltschey/t-ue-analyzer" },
    { img: "assets/proj/squared-away.png", title: "Calendar iOS/Android/Desktop App", desc: "Task management inspired by github contribution squares", link: "https://github.com/cueltschey/squared_away" },
    { img: "assets/proj/microbenet.png", title: "Microbe Identification System", desc: "An advanced series of AI models that classify the genus and species of microbes", link: "https://github.com/cueltschey/MicrobeNet" },
    { img: "assets/proj/gitget.png", title: "Github CLI Manager", desc: "Ncurses TUI application for managing github repos", link: "https://github.com/cueltschey/gitget" },
    { img: "assets/proj/some-pkgmgr.png", title: "Go based package manager", desc: "A package manager for debian format packages (2x faster than apt)", link: "https://github.com/cueltschey/some-pkgmgr" },
    { img: "assets/proj/boids.png", title: "OpenGL boids & planets simulator", desc: "A physics simulation of a solar system with flying boids", link: "https://docs.google.com/presentation/d/1DrFNAMv_OXZpIIbzYsZ6iOUGm8Ywn8Ybfqt5EtJfPnU/edit?usp=sharing" },
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
			const link_container = document.createElement('a');
			link_container.href = obj.link || '';
			link_container.appendChild(new_project);
      projects_pane.appendChild(link_container);
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

