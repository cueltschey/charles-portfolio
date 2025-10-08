(async function() {
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function type_after(elem, text, speed, cursor) {
    elem.textContent = '';
    for (let i = 0; i < text.length; i++) {
      elem.textContent = text.substring(0, i + 1) + cursor;
      await sleep(speed);
    }
    elem.textContent = text;
    elem.classList.add('blink');
  }

  async function del_text(elem, text, speed, cursor) {
    for (let i = text.length; i >= 0; i--) {
      elem.textContent = text.substring(0, i) + cursor;
      await sleep(speed);
    }
    elem.textContent = ' ';
    elem.classList.add('blink');
  }

  const typewriter = document.querySelector('.typewriter');
  if (!typewriter) return;

  typewriter.textContent = '';
  await type_after(
    typewriter,
    typewriter.dataset.text || '',
    Number(typewriter.dataset.speed) || 50,
    typewriter.dataset.cursor || '|'
  );

	await sleep(500)

  const subtext_list = ["Developer", "Researcher", "Pentester", "Freelancer", "Project Manager"];
  const subtext = document.querySelector(".subtext");

  if (subtext) {
		let i = 0;
    while (true) {
			i = i % subtext_list.length;
			t = subtext_list[i];
			i++;
      await type_after(
        subtext,
        t,
        Number(subtext.dataset.speed) || 50,
        subtext.dataset.cursor || '|'
      );
      await sleep(500);
      await del_text(
        subtext,
        t,
        Number(subtext.dataset.speed) || 50,
        subtext.dataset.cursor || '|'
      );
      await sleep(250);
    }
  }
})();
