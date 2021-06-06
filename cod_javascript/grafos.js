const grafo = {}

grafo.voce = ['alice', 'bob', 'claire']
grafo.bob = ['anuj', 'peggy']
grafo.alice = ['peggy']
grafo.claire = ['thom', 'jonny']
grafo.anuj = []
grafo.peggy = []
grafo.thom = []

const eVendedor = name => name[name.length -1] === "m"

const pesquisa = (name, grafo = {}) => {
	const iterador = ( procurado = [], visitado) => {
		if(procurado.length === 0){
			return false
		}
		const [corrente, ...rest] = procurado

		if(visitado.has(corrente)){
			return iterador(rest, visitado)
		}

		if(eVendedor(corrente)){
			console.log(`${corrente} é vendedor de manga!`)
			return true
		}

		visitado.add(corrente)

		const pessoaAmiga = grafo[corrente]
	 	return iterador([...rest, ...pessoaAmiga], visitado)
	}
	return iterador(grafo[name], new Set())
}

console.log(pesquisa('voce', grafo))
