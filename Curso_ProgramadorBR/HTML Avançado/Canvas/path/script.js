let tela = document.getElementById("tela")

let ctx = tela.getContext("2d")

const time = 500

ctx.beginPath() //Inicia um caminho, uma figura, o estilo aplicado a qualquer item até o fim do Path ou outro inicio é o mesmo

ctx.lineWidth = 4;
ctx.strokeStyle = "red"
ctx.moveTo(250, 225)
ctx.lineTo(400, 125)
ctx.stroke()

setTimeout(()=>{
    ctx.moveTo(250, 125)
    ctx.lineTo(400, 225)
    ctx.strokeStyle = "blue"
    ctx.stroke() 

    setTimeout(()=>{

        //Quando temos dois beginPath, uma figura não interfere na outra

        ctx.beginPath()
        ctx.lineWidth = 3
        ctx.strokeStyle = "red"
        ctx.moveTo(250, 225)
        ctx.lineTo(100, 325)
        ctx.stroke()

        setTimeout(()=>{
            ctx.beginPath()
            ctx.lineWidth = 3
            ctx.strokeStyle = "blue"
            ctx.moveTo(250, 325)
            ctx.lineTo(100, 225)
            ctx.stroke()

            //Podemos utilizar o comando closePath() para fechar uma figura

            setTimeout(()=>{
                ctx.beginPath()
                ctx.lineWidth = 4
                ctx.strokeStyle = "pink"
                ctx.fillStyle = "#87cfeb4b"
                ctx.moveTo(100, 125)
                ctx.lineTo(400, 125)
                ctx.lineTo(400, 325)
                ctx.lineTo(100, 325)
                ctx.closePath() //Fecha a figura. unindo o ultimo ponto declarado ao primeiro
                ctx.stroke()
                ctx.fill() //Imprime o preenchimento da figura
            }, time)

            
        }, time)
    }, time)
}, time)


