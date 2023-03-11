let players = {
    player1 : {
        name: "Jogador 1",
        emote: "😁",
        score: 0,
    },

    player2 : {
        name: "Jogador 2",
        emote: "✌️",
        score: 0,
    }
}


document.body.onload = ()=>{
    console.log(players)
}

let arrayDivSquares = document.querySelectorAll("#tabuleiro > div")

function matriz (array){
    let currentPlayer = 0
    let matrizResult = []

    for(let x = 0; x < 3; x++){
        matrizResult.push([])
        for(let y = 0; y < 3; y++){
            matrizResult[x].push(array[x*3 + y])
            array[x*3 + y].addEventListener("click", ()=>{
                console.log(`${Object.values(players)[currentPlayer].name} Linha ${x+1} Coluna ${y+1}`)

                currentPlayer == 0 ? currentPlayer = 1 : currentPlayer = 0
            })
        }
    }

    return matrizResult
}

console.log(matriz(arrayDivSquares))