var numeroPartidas = prompt("Indicanos cuantas veces desea jugar:");
numeroPartidas = parseInt(numeroPartidas);
var vicHuman = 0; // Para acumular victorias humanas
var vicPC = 0; // Para acumular para victorias de la PC
var empate = 0; // Para acumular empates

for (numeroPartidas; numeroPartidas >= 1; numeroPartidas--) //Comenzamos con un ciclo regresivo, comenzando en un numero alto, disminuyendo en cada ciclo y terminando al llegar a 0
{
    var jugadaHuman = prompt("¿Piedra, papel o tijeras?");
    jugadaHuman = jugadaHuman.toLowerCase();
    jugadaPC = Math.floor(Math.random() * 3); // 0 = Piedra; 1 = Tijera; 2 = Papel;

    // Comienzo del juego
    if (jugadaPC === 0) { // PC saco Piedra
        switch (jugadaHuman) {
            case "piedra":
                alert("La PC ha sacado piedra! Ha sido un empate!");
                empate++
                break;
            case "papel":
                alert("La PC ha sacado piedra! Ha sido una victoria!");
                vicHuman++
                break;
            case "tijeras":
                alert("La PC ha sacado piedra! Ha sido una derrota!");
                vicPC++
                break;
            default:
                alert("No ingresaste una jugada valida, no se incluira en el juego");
                break;
        }
    } else if (jugadaPC === 1) { // PC saco Tijera
        switch (jugadaHuman) {
            case "piedra":
                alert("La PC ha sacado tijera! Ha sido una victoria!");
                vicHuman++
                break;
            case "papel":
                alert("La PC ha sacado tijera! Ha sido una derrota!");
                vicPC++
                break;
            case "tijeras":
                alert("La PC ha sacado tijera! Ha sido un empate!");
                empate++
                break;
            default:
                alert("No ingresaste una jugada valida, no se incluira en el juego");
                break;
        }
    } else if (jugadaPC === 2) { // PC saco Papel
        switch (jugadaHuman) {
            case "piedra":
                alert("La PC ha sacado papel! Ha sido una derrota!");
                vicPC++
                break;
            case "papel":
                alert("La PC ha sacado papel! Ha sido un empate!");
                empate++
                break;
            case "tijeras":
                alert("La PC ha sacado papel! Ha sido una victoria!");
                vicHuman++
                break;
            default:
                alert("No ingresaste una jugada valida, no se incluira en el juego");
                break;
        }
    }
    // Fin del juego
    if (numeroPartidas === 1) { //Mensaje final
        if (vicPC > vicHuman) // Victoria de la PC
        {
            document.write(`Con ${vicPC} victorias de la PC, ${vicHuman} victorias del usuario y ${empate} empates, la PC ha ganado.`);
        } else if (vicPC < vicHuman) // Victoria del usuario
        {
            document.write(`Con ${vicPC} victorias de la PC, ${vicHuman} victorias del usuario y ${empate} empates, el usuario ha ganado.`);
        } else if (vicPC === vicHuman) // Empate
        {
            document.write(`Con ${vicPC} victorias de la PC, ${vicHuman} victorias del usuario y ${empate} empates, ha sido un empate.`);
        }
    }
}