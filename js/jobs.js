(function () {
  const jobs_json = [
    { img: "assets/test.png", title: "Test1", desc: "A testing job about visualization." },
    { img: "assets/test.png", title: "Test2", desc: "An experiment with interactive graphics." },
    { img: "assets/test.png", title: "Test3", desc: "A job on data-driven animations." },
    { img: "assets/test.png", title: "Test4", desc: "A prototype for a minimal UI tool." },
    { img: "assets/test.png", title: "Test5", desc: "Another experiment with modern web design." },
    { img: "assets/test.png", title: "Test6", desc: "A simple proof of concept in 3D." },
    { img: "assets/test.png", title: "Test7", desc: "An AI-assisted image manipulation demo." },
    { img: "assets/test.png", title: "Test8", desc: "A music visualization interface." },
    { img: "assets/test.png", title: "Test7", desc: "An AI-assisted image manipulation demo." },
    { img: "assets/test.png", title: "Test8", desc: "A music visualization interface." },
  ];

  const jobsPerPage = 3;
  let currentPage = 0;

  const jobs_pane = document.querySelector(".job-panel");
  const prevBtn = document.getElementById("prevPageJob");
  const nextBtn = document.getElementById("nextPageJob");

  function renderProjects() {
    jobs_pane.innerHTML = "";
    const start = currentPage * jobsPerPage;
    const end = start + jobsPerPage;
    const currentProjects = jobs_json.slice(start, end);

    currentProjects.forEach((obj, idx) => {
      if(!obj.img || !obj.title || !obj.desc) return;
      const new_job = document.createElement("div");
      new_job.classList.add("job");
      new_job.style.animationDelay = `${idx * 0.1}s`;
      new_job.innerHTML = `
        <img src="${obj.img}" class="job-bg" alt="${obj.title}">
        <h1 class="job-title">${obj.title}</h1>
        <p class="job-desc">${obj.desc}</p>
      `;
      jobs_pane.appendChild(new_job);
    });

    prevBtn.style.display = currentPage === 0 ? "none" : "block";
    nextBtn.style.display = end >= jobs_json.length ? "none" : "block";
  }

  prevBtn.addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage--;
      renderProjects();
    }
  });

  nextBtn.addEventListener("click", () => {
    if ((currentPage + 1) * jobsPerPage < jobs_json.length) {
      currentPage++;
      renderProjects();
    }
  });

  renderProjects();
})();

