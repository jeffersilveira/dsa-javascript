Busca binária (Binary search). 

A busca binária é um eficiente algoritmo para localizar um elemento em uma lista ordenada, ela opera dividindo a lista pela metade do seu comprimento e verifica se a busca é maior ou menor ao elemento a ser localizado.
>Algoritmo de complexidade O(log<sub>2</sub> n).

![](https://media.geeksforgeeks.org/wp-content/uploads/20220309171621/BinarySearch.png).

Algoritmo:

- 1 - Definir comprimento da lista, por Ex. Baixo e Alto.
- 2 - Atribuir o Meio da lista, efetuar arredondamento para manipular numeros inteiros.
- 3 - Se a busca(guess) que contém elemento Meio for igual ao elemento alvo(target), fim.
- 4 - Se guess for baixo, Baixo é igual a Meio +1.
- 5 - Se guess for alto, Alto é igual a Meio -1.
- 6 - Repita passo 2.

[cod].

[Ordenaçao por seleção (Selection Sort)](https://github.com/jeffersilveira/dsa-javascript/blob/main/Selection-sort/Readme.md).
