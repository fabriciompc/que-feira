function weekDay() {
  var semana = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
  ];

  var d = new Date();

  var tag = document.createElement("h1");
  var text = document.createTextNode(`${semana[d.getDay()]} ${"🤡"}`);
  tag.appendChild(text);
  var element = document.getElementById("resposta");
  element.appendChild(tag);
}

function say() {
  for (let index = 0; index < 10000; index++) {
    weekDay();
  }
}
