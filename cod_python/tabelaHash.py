# votou = dic() # equivalente abaixo
votou = {}

def verificar_eleitor(nome):
	if votou.get(nome):
		return "Ja votou"
	else:
		votou[nome] = True
		return "Deixe votar"


print(verificar_eleitor("Nil"))
print(verificar_eleitor("Joao"))
print(verificar_eleitor("Nil"))