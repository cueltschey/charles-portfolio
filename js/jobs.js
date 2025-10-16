(function () {
  const jobs_json = [
    { img: "assets/job/rtue.png", title: "RAN Tester UE Project Lead Developer", desc: "For 2 years I have worked to create and maintain an enterprise open source 5G pentesting framework", link: "https://linktr.ee/rantesterue" },
    { img: "assets/job/aerpaw.png", title: "AERPAW Wireless Testbed Developer", desc: "Developed and maintained the AERPAW platform, adding support for 5G OAI and local UAV emulation over the course of 1.5 years", link: "https://aerpaw.org" },
    { img: "assets/job/freelancing.png", title: "Freelance Web & Security Specialist", desc: "I have worked with 30+ small businesses and individuals to create database systems, websites, APIs, AI models etc.", link: "https://hire.cueltschey.com" },
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
			const link_container = document.createElement('a');
			link_container.href = obj.link || '';
			link_container.appendChild(new_job);
      jobs_pane.appendChild(link_container);
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

