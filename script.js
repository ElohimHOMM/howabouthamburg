const qs = (selector) => document.querySelector(selector);
const question = qs(".question");
const idea = qs(".idea");
const gif = qs("#gif");
const [yesBtn, noBtn] = [".yes-btn", ".no-btn"].map(qs);
let firstDate = true;

const handleYesClick = () => {
  question.innerHTML = "Hehe! Can't wait to finally see you in person!!";
  gif.src = "https://cdn.discordapp.com/emojis/471963848191246336.webp?size=96";

  noBtn.removeEventListener("mouseover", handleNoMouseOver);

  noBtn.remove();

  const dateIdeas = [
    "Cuddle in my hotel for a while",
    "Dick you down relentlessly",
    "Have you show just how much of a sub you truly are",
    "Cook a romantic dinner together",
    "Go for a moonlit walk on the beach",
    "Have a picnic in the park",
    "Explore a botanical garden",
    "Visit an art gallery",
    "Go on a sunrise or sunset photo shoot",
    "Attend a local farmers' market",
    "Explore a historic neighborhood",
    "Attend a live theater performance",
    "Visit a local chocolate or dessert shop",
    "Have a karaoke night at home or at a local venue",
    "Attend a local festival or fair",
    "Go on a scenic boat tour",
    "Have a picnic in a local park",
    "Attend a wine and paint night",
    "Visit a nearby beach or lake",
    "Plan a game night with board games or card games",
    "Plan a movie night with your favorite films",
    "Visit a local art gallery",
    "Go on a brewery tour",
    "Visit a local botanical garden",
  ];

  const letsGoBtn = document.createElement("button");
  letsGoBtn.textContent = "Let's Go!";
  letsGoBtn.classList.add("letsgo-btn");
  letsGoBtn.style.position = "absolute";

  if (window.innerWidth <= 800) {
    letsGoBtn.style.left = "95%";
  } else {
    letsGoBtn.style.left = "63%";
  }

  letsGoBtn.style.transform = "translate(-75%, -75%)";
  letsGoBtn.style.width = "200px";

  letsGoBtn.addEventListener("click", () => {
    let randomIndex;
    if (firstDate) {
      randomIndex = Math.floor(Math.random() * (dateIdeas.length - 3)) + 3;
    } else {
      randomIndex = Math.floor(Math.random() * dateIdeas.length);
    }
    firstDate = false;
    const selectedDateIdea = dateIdeas[randomIndex];

    idea.innerHTML = `How about this idea: ${selectedDateIdea}`;
  });

  yesBtn.replaceWith(letsGoBtn);
};

const handleNoMouseOver = () => {
  const { width, height } = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - width;
  const maxY = window.innerHeight - height;

  noBtn.style.left = `${Math.floor(Math.random() * maxX)}px`;
  noBtn.style.top = `${Math.floor(Math.random() * maxY)}px`;
};

yesBtn.addEventListener("click", handleYesClick);
noBtn.addEventListener("mouseover", handleNoMouseOver);
