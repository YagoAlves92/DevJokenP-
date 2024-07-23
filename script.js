const result = document.querySelector('.result')
const playMachineHands = document.querySelector('.play-machine')
const humanScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")


let humanScoreNumber = 0
let machineScoreNumber = 0

/*
humanScoreNumber --> Camel Case
GAME_OPTION --> Snake Case

*/

const GAME_OPTION = {
    PEDRA: 'pedra' ,
    PAPEL: 'papel' ,
    TESOURA: 'tesoura'


}

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())

}

const playMachine = () => {
    const choices = [GAME_OPTION.PEDRA, GAME_OPTION.PAPEL, GAME_OPTION.TESOURA]
    const radomNumber = Math.floor(Math.random() * 3)


    return choices[radomNumber]
}

const playTheGame = (human, machine) => {
    
    if (human === machine) {
        result.innerHTML = "Deu Empate"
        playMachineHands.innerHTML = "&#128528;"

    } else if (human === GAME_OPTION.PAPEL && machine === GAME_OPTION.PEDRA ||
        human === GAME_OPTION.PEDRA && machine === GAME_OPTION.TESOURA ||
        human === GAME_OPTION.TESOURA && machine === GAME_OPTION.PAPEL) {
            humanScoreNumber++
            humanScore.innerHTML = humanScoreNumber 
        result.innerHTML = "Você Ganhou"
        playMachineHands.innerHTML = "&#128516;"    
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber 
        result.innerHTML = "Você Perdeu"
        playMachineHands.innerHTML = "&#128557;"
    }




}

