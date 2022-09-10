function relogio() {
  let infoHoras = document.getElementById("infoHoras");
  let infoDia = document.getElementById("infoDia");
  let infoData = document.getElementById("infoData");

  let data = new Date();

  let horas = data.getHours(data).toLocaleString().padStart(2, 0);
  let minutos = data.getMinutes(data).toLocaleString().padStart(2, 0);
  let segundos = data.getSeconds(data).toLocaleString().padStart(2, 0);
  let novoHorario = `${horas}:${minutos}:${segundos}`;

  let arrayDias = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  let diaDaSemana = arrayDias[data.getDay()];

  let dataExtensa = data.toLocaleDateString(data);

  infoHoras.innerHTML = novoHorario;
  infoDia.innerHTML = diaDaSemana;
  infoData.innerHTML = dataExtensa;
}

setInterval(relogio, 1000);
