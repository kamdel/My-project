const spanText = document.querySelector(".text");
const spanCursor = document.querySelector(".cursor");
const txt = ["Witam! :) ", "To jest moja strona", "Zapraszam :)"];

let actLetter = -20;
let actText = 0;

// Implementacja
const dodaj = () => {
  if (actLetter >= 0) {
    spanText.textContent += txt[actText][actLetter];
  }
  actLetter++;

  if (actLetter === txt[actText].length) {
    actText++;
    if (actText === txt.length) {
      // return zamiast acttext = 0;
      actText = 0;
    }
    return setTimeout(() => {
      actLetter = -15;
      spanText.textContent = "";
      dodaj();
    }, 2000);
  }
  setTimeout(dodaj, 100);
};
dodaj(); //pierwsze wywołanie

// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
  spanCursor.classList.toggle("active");
};
setInterval(cursorAnimation, 400);
