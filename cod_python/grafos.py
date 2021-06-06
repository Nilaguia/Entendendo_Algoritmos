from collections import deque

def pessoa_e_vendedora(nome):
	return nome[-1] == 'm'

grafo = {}
grafo["voce"] = ["alice", "bob", "claire"]
grafo["bob"] = ["anuj", "peggy"]
grafo["alice"] = ["peggy"]
grafo["claire"] = ["thom", "jonny"]
grafo["anuj"] = []
grafo["peggy"] = []
grafo["thom"] = []
grafo["jonny"] = []


def pesquisa(nome):
	pesquisa_nome = deque()
	pesquisa_nome += grafo[nome]

	procurado = set()

	while pesquisa_nome:
		pessoa = pesquisa_nome.popleft()

		if pessoa not in procurado:
			if pessoa_e_vendedora(pessoa):
				print(pessoa + " e um vendedor de manga!")
				return True
			else:
				pesquisa_nome += grafo[pessoa]

				procurado.add(pessoa)

	return False

pesquisa("voce")