let tela = document.getElementById("tela")

let ctx = tela.getContext("2d")

ctx.fillStyle = "skyblue" //Define a cor de preenchimento do retangulo
ctx.fillRect(10, 10, 100, 200) //Crie um retangulo preenchido

//As primeiras coordenadas se referem ao ponto inicial, e as seguintes se referem as dimensões do retangulo, largura e altura, não são coordenadas

ctx.strokeStyle = "pink" //Define a cor do contorno de um retangulo
ctx.strokeRect(150, 10, 100, 200) //Cria um retangulo sem preenchimento

ctx.rect(10, 250, 480, 150) //Cria um retangulo
ctx.fillStyle = "skyblue" //Define a cor de preenchimento
ctx.strokeStyle = "pink" //Define a cor de contorno
ctx.lineWidth = 3 //Define a largura da linha de contorno
ctx.fill() //Imprime o preenchimento
ctx.stroke() //Imprime o contorno

ctx.clearRect(210, 285, 80, 80) //Cria um retangulo q limpa a tela