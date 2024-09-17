AOS.init();

const dataDoEvento = new Date("Dec 12, 2024 19:00:00");
const timeSampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function () {
    const agora = new Date();
    const timeSampAtual = agora.getTime();

    const distanciaAteOEvento = timeSampDoEvento - timeSampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundoAteoEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    console.log(diasAteOEvento);
    console.log(horasAteOEvento);
    console.log(minutosAteOEvento);
    console.log(segundoAteoEvento);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundoAteoEvento}s`;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }
}, 1000);


// AOS.init();

// const dataDoEvento = new Date("Dec 12, 2024 19:00:00");
// const timeSampDoEvento = dataDoEvento.getTime();

// const contaAsHoras = setInterval(function () {
//     const agora = new Date();
//     const timeSampAtual = agora.getTime();

//     const distanciaAteOEvento = timeSampDoEvento - timeSampAtual;

//     const diaEmMs = 1000 * 60 * 60 * 24;
//     const horaEmMs = 1000 * 60 * 60;
//     const minutoEmMs = 1000 * 60;

//     const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
//     const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
//     const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
//     const segundoAteoEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

//     console.log(diasAteOEvento);
//     console.log(horasAteOEvento);
//     console.log(minutosAteOEvento);
//     console.log(segundoAteoEvento);

//     document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundoAteoEvento}s`
// }, 1000);