let usuarios = ["Adriano", "Marcia", "José"]

function inserirUsuario(nome){

    let promise = new Promise(function(resove, reject){ 
        usuarios.push(nome)
        let error = true
        let msg = "Erro"

        if(!error){
            resove(); // Se não houver erros a promise aciona o then
        } else{
            reject(msg) //Se houver algum erro, ela enviar o reject, que é captado pelo catch
        }

    })

    return promise
}

function listarUsuarios(){
    usuarios.forEach((e)=>{console.log(e)})
}

inserirUsuario("igor").then(listarUsuarios).catch((msg) =>{
    console.log(msg)
})