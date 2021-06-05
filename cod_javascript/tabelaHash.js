const votou = {}

function verificar_eleitor(nome){
	if(votou.hasOwnProperty(nome)){
		return "Já votou"
	}else{
		votou[nome] = true
		return "Deixe votar"
	}
}

console.log(verificar_eleitor("Nil"))
console.log(verificar_eleitor("Joao"))
console.log(verificar_eleitor("Nil"))