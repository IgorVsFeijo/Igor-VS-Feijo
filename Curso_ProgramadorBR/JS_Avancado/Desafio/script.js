function pedido(nome, bebida){
    this.nome = nome,
    this.bebida = bebida
}

let comandas = [
    new pedido("Verissimo", "Café"),
    new pedido("Arhur", "Chocolate"),
    new pedido("Kaiser", "Energético"),
    new pedido("Joui", "Chá"),
    new pedido("Thiago", "Café"),
    new pedido("Daniel", "Café")
]


Object.defineProperty(comandas, "maping", {value: function(fc){
    result = []

    for (ob of this){
        result.push(fc(ob))
    }

    return result
}})

Object.defineProperty(comandas, "reducing", {value: function(fc, total){

    for(ob of this){
        total = fc(total, ob)
    }

    return total

}})

function pedidoEditado (pedido){
    return pedido.nome + " pediu um " + pedido.bebida
}

let totalPedidos = {
    cafes : 0,
    chocolate: 0,
    energetico: 0,
    cha: 0
}

function separarPedidos(objF, objI){

    switch(objI.bebida){
        case "Café":
            objF.cafes++
        break
        case "Chocolate":
            objF.chocolate++
        break
        case "Energético":
            objF.energetico++
        break
        case "Chá":
            objF.cha++
        break
    }

    return objF
}

console.log(comandas.reduce(separarPedidos, {...totalPedidos})) //Enviando uma cópia
console.log(comandas.reducing(separarPedidos, totalPedidos))

console.log(comandas.map(pedidoEditado))
console.log(comandas.maping(pedidoEditado))


