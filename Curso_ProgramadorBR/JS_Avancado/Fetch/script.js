function mapUrls(obj){
    let array = []
    let array2 = ["back_default", "back_female", "back_shiny", "front_default", "front_female", "front_shiny"]
    
    for (item of array2){
        if(obj[item] != null){
          array.push(obj[item])  
        } 
    }

    return array
}

function consultarApi(url){

    return fetch(url).then((res)=>{
        return res.json()
    }).then((data)=>{
        return data
    })

}

function chamarSprites(){

    let urlInicial = "https://pokeapi.co/api/v2/pokemon/"
    let poke = document.getElementById("entrada").value
    urlInicial += poke.toLowerCase()

    consultarApi(urlInicial).then((data)=>{

        return consultarApi(data.forms[0].url)
    }).then((result)=>{

        links = mapUrls(result.sprites)

        div = document.createElement("div")
        document.body.appendChild(div)

        links.forEach((e) => {
            img = document.createElement("img")
            img.setAttribute("src", e)
            lastDiv = document.querySelectorAll("div")
            lastDiv[lastDiv.length - 1].appendChild(img)
        });

        console.log(document.getElementsByTagName("div"))
        console.log(document.body)

    })
}




