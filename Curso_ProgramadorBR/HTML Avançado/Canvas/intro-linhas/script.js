//Conteudo da Aula//

let tela = document.getElementById("tela")

let ctx = tela.getContext("2d") // Transforma o elemento Canvas em uma tela, em um contexto

/*
ctx.moveTo(0, 0) //Move o "pincel" ou cursor para o ponto 0,0. Ponto superior esquerdo
ctx.lineTo(250 , 250) //Apartir do cursor traça uma linha até o ponto 250, 250
ctx.stroke(); //Imprime o "traço" (stroke)
ctx.lineTo(500, 0) //Apartir do cursos traça uma linha até o ponto 500, 0
ctx.stroke(); //Imprime
*/

//Ao chamar duas vezes o stroke, na primeira ele imprime a linha até o ponto central, e depois ele imprime novamente o desenho inteiro, ou seja, ele percorre todo o caminho novamente, assim estaria passando o "lapis" duas vezes em cima da primeira linha

ctx.moveTo(0, 0)
ctx.lineTo(250, 250)
ctx.lineTo(500, 0)
ctx.lineWidth = 3 // Expessura da linha
ctx.strokeStyle = "gray"
ctx.stroke()

/* Coisa do Iguinho */

setTimeout(()=>{
   ctx.moveTo(250, 350)
    ctx.lineTo(300, 300)
    ctx.lineTo(350, 350)
    ctx.lineTo(250, 450)
    ctx.lineTo(150, 350)
    ctx.lineTo(200, 300)
    ctx.lineTo(250, 350)
    ctx.lineWidth = 2
    ctx.strokeStyle = "pink"
    ctx.stroke()

    document.getElementsByTagName("h2")[0].style.display = "block"
    
}, 5000)


