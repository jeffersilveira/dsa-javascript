Busca binária (Binary search). 

zA busca binária é um eficiente algoritmo para localizar um elemento em uma lista ordenada, ela opera dividindo a lista pela metade do seu comprimento e verifica se a busca é maior ou menor ao elemento a ser localizado.

[diagrama].

Algoritmo:

- 1 - Defina min = 1 e max = n.
- 2 - Encontre a média de min e max, arredondando para baixo para ser um Int.
- 3 - Se arr[guess] = target, fim.
- 4 - Se palpite (n) for baixo, definir min = 1 a mais que ‘n’.
- 5 - Se palpite (n) for alto, definir max = 1 a menos que ‘n’.
- 6 - Repita passo 2.

[cod].