let arrayOrders = []
let arrayOrdersSaved = JSON.parse(localStorage.getItem("array"))

if(arrayOrdersSaved != "" && arrayOrdersSaved != null){
    arrayOrders = arrayOrdersSaved
}

console.log(arrayOrders)

function mapListBR(order){
    dString = d => {
        switch(d){
            case "cafe": return "um Café"
            break
            case "leite": return "um copo de Leite"
            break
            case "chocolate": return "um Chocolate Quente"
            break
        }
    }
    return order.clientName + " pediu " + dString(order.drink)
    }

function coffesList(order){
    if(order.drink == "cafe"){
        return true
    }else 
        return false
}

function showList(){
    let ordersUl = document.getElementById("listOrders")
    let coffesUl = document.getElementById("listCoffes")

    arrayOrders.map(mapListBR).forEach((od)=>{
        ordersUl.innerHTML += `<li>${od}</li>`
    })

    arrayOrders.filter(coffesList).map(mapListBR).forEach((od)=>{
        coffesUl.innerHTML += `<li>${od}</li>`
    })
}

showList()

document.querySelector("[type='submit']").onclick = ()=>{
    let n = document.getElementById("name").value
    let drink = document.getElementById("drink").value

    function newOrder(clientName, drink){
        return {
            clientName,
            drink
        }

        }

    function listingOrders(){
        let promise = new Promise(function(resove){
            arrayOrders.push(newOrder(n, drink))
            localStorage.setItem("array", JSON.stringify(arrayOrders))
            resove()
        })

        return promise
    }

    listingOrders().then(console.log(arrayOrders))
}