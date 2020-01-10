(() => {
  let sources = [0x1F929, 0x1F92A, 0x1F914, 0x1F62C, 0x1F924, 0x1F635, 0x1F920, 0x1F60E, 0x1F47B, 0x1F639, 0x1F346, 0x1F351];
  let palm = 0x1F334;

  const init = () => {
    drawEmojis();
    setInterval(drawEmojis, 1000);
  };
  
  const drawEmojis = () => {
    let element = document.getElementById("title");
    let title = "Memes at work";
    let index = Math.floor(Math.random()*title.length);

    let randomCharacter = Math.floor(Math.random()*sources.length);
    let character = String.fromCodePoint(sources[randomCharacter]);
    title = title.substr(0, index) + character + title.substr(index + 1);

    element.innerHTML = title;
  };

  init();
})();