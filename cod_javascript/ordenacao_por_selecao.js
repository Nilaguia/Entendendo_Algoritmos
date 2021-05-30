function buscarMenor(arr){
	let menor = arr[0]
	let menor_indice = 0

	for(let i = 0; i < arr.length; i++){
		if(arr[i] < menor){
			menor = arr[i]
			menor_indice = i
		}
	}

	return menor_indice
}

let arr = [5, 3, 6, 2, 10]

function ordenacaoPorSelecao(arr){
	novoArr = []
	let tamanho = arr.length

	for(let i = 0; i < tamanho; i++){
		let menor = buscarMenor(arr)
		novoArr.push(arr.splice(menor, 1)[0])
	}

	return novoArr
}

console.log(ordenacaoPorSelecao(arr))