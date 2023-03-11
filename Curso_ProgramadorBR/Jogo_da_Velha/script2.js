function erro(type, insert){
    this.type = type,
    this.insert = insert
}

if(JSON.parse(localStorage.getItem("players")) != null && JSON.parse(localStorage.getItem("players")) != ""){
    players = JSON.parse(localStorage.getItem("players"))
}


Object.entries(players).forEach((key)=>{

    let e = key[1]

    function playerNameSpace (e){
        let tar = e

    try{

        if (tar.value == ""){
            throw new erro("all", players[tar.id].name + " " + players[tar.id].emote)
        }
        else{

            let string = tar.value.trim()

            if(string.split(" ").length == 1){

                let splited = string.split("")

                for (i in splited){
                    if(splited[i].codePointAt(0) > 500){
                        splited.splice(i, 0, " ")
                        console.log(splited.join(""))
                        tar.value = splited.join("")
                        break
                    }
                }
                
            }

            if(string.split(" ").length == 1) tar.value += " 🤦‍♀️"

            string = tar.value.trim()
            let emote = string.split(" ")[string.split(" ").length - 1]
            let nome = string.split(" ").slice(0, -1).join(" ")

            let emoteExists = false

            Object.values(players).forEach((e)=>{
                if (e.emote == emote) emoteExists = true
            })

            if(emote.codePointAt(0) < 128512 || emoteExists){
                throw new erro("emote", players[tar.id].emote)
            }
        }
    }

    catch(erro){

        tarParc = tar.value.trim().split(" ")

        switch(erro.type){
            case "all":
                tar.value = erro.insert
            break 
            case "emote":
                if(tarParc.length <= 1){
                    tar.value += erro.insert
                }

                else{
                    tarParc[tarParc.length - 1] = erro.insert
                    tar.value = tarParc.join(" ")
                }
                
            break
        }
    }

    finally{
            let string = tar.value.trim()
            let emote = string.split(" ")[string.split(" ").length - 1]
            let nome = string.split(" ").slice(0, -1).join(" ")
            let nomeExists = false

            players[tar.id].emote = emote
            
            Object.values(players).forEach((e)=>{
                if (e.name == nome) nomeExists = true
            })

            if(!nomeExists){
                players[tar.id].name = nome
            }

            

            localStorage.setItem("players", JSON.stringify(players))

            showScore = document.getElementById(`score${key[0].slice(-1)}`)
            showScore.innerHTML = key[1].score
            console.log(showScore)
    }

    }

    element = document.getElementById(key[0])
    element.addEventListener("change", (e)=>playerNameSpace(e.target))

    playerNameSpace(element)

})