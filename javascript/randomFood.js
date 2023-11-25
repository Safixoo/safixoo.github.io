function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let comidaa;  // Declare the variable outside the switch statement
switch (getRandomInt(4)) {
    case 0:
        comidaa = "Minalesa";
        break;
    case 1:
        comidaa = "Estofado";
        break;
    case 2:
        comidaa = "Arroz";
        break;
    case 3:
        comidaa = "Huevo";
        break;
    default:
        comidaa = "Bondiola";
        break;
}
document.getElementById("comida").innerHTML = comidaa;