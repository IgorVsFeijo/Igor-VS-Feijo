let circle = {
    x: -50,
    y: 225,
    raio: 50,
    inicio: 0,
    fim: 0
}

let tela = document.getElementById("tela")
let ctx = tela.getContext("2d")

function drawCircle(c){
    ctx.beginPath()
    ctx.rect(0, 0, 500, 450)
    ctx.fillStyle = "white"
    ctx.fill()

    ctx.beginPath()
    ctx.arc(c.x, c.y, c.raio, c.inicio, c.fim)
    ctx.strokeStyle = "pink"
    ctx.lineWidth = 4
    ctx.stroke()
}

setInterval(()=>{
    if(circle.x < 550){
        circle.x++
        circle.fim += 0.3
        circle.inicio += 0.2

        if(circle.fim > circle.inicio){
            circle.fim = 0
        }
    }

    drawCircle(circle)
}, 50)