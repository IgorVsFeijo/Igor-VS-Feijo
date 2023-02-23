tela = document.getElementById("tela")
ctx = tela.getContext("2d")

let bolinha = {
    x : 150,
    y : 150,
    raio : 5,
    inicio : 0,
    fim : 2*Math.PI
}

function drawCircle(c){
    ctx.beginPath()
    ctx.arc(c.x, c.y, c.raio, c.inicio, c.fim)
    ctx.fillStyle = "pink"
    ctx.strokeStyle = "#cc4158"
    ctx.lineWidth =  3
    ctx.stroke()
    ctx.fill()
}

const arrowKeys = [
    "ArrowUp",
    "ArrowRight",
    "ArrowLeft",
    "ArrowDown"
]

function animation(cdd, op){
    for(let i=0; i < 60; i++){
        setTimeout(()=>{
          if(op == "+"){
            bolinha[cdd]+= 0.1
            }

            else{
                bolinha[cdd]-= 0.1
            }

            if(bolinha.x >= 295 || bolinha.x <= 5){
                bolinha.x <= 5 ? bolinha.x = 5 : bolinha.x = 295
            }

            if(bolinha.y >= 295 || bolinha.y <= 5){
                bolinha.y <= 5 ? bolinha.y = 5 : bolinha.y = 295
            }

            // ctx.beginPath()
            // ctx.fillStyle = "white"
            // ctx.fillRect(0, 0, 300, 300)

            drawCircle(bolinha)
            console.log(bolinha)  
        }, 10)
        
    }
}

function keyDown(e){
    if(arrowKeys.includes(e.key)){
        
        switch(e.key){
            case "ArrowUp":
                animation("y", "-")
            break
            case "ArrowDown":
                animation("y", "+")
            break
            case "ArrowRight":
                animation("x", "+")
            break
            case "ArrowLeft":
                animation("x", "-")
            break
        }

    }
    
}

drawCircle(bolinha)

document.onkeydown = keyDown
