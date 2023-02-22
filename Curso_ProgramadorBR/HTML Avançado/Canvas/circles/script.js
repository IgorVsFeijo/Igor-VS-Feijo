tela = document.getElementById("tela")

ctx = tela.getContext("2d")

let x = 250 //Coordenada x do centro do circulo
let y = 225 //Coordenada y do centro do circulo
let raio = 100 //raio do circulo
let inicio = 0//Inicio do angulo e fim do angulo, tomando como base o circulo trigonométrico, a medida é dada em Radianos

let fim = 2 * Math.PI

ctx.beginPath()
ctx.strokeStyle = "pink"
ctx.lineWidth = 4

ctx.arc(x, y, raio, inicio, fim)
ctx.stroke()

//Obra do Iguinho

ctx.beginPath()
ctx.fillStyle = "pink"
ctx.arc(x+12.5, y-12.5, 25/2, Math.PI, 2*Math.PI)
ctx.arc(x-12.5, y-12.5, 12.5, Math.PI, 2*Math.PI)
ctx.moveTo(x-25, y-12.5)
ctx.lineTo(x, y+12.5)
ctx.lineTo(x+25, y-12.5)
ctx.closePath()
ctx.fill()