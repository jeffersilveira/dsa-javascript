Pilha (Stack).

Pilha é uma estrutura de dados baseada no principio LIFO(Last in, First out), onde o ultimo elemento inserido é o primeiro a ser removido, como por exemplo, pilha de Livros ou Pratos.
Já que nativamente por linguagens não é possivel gerenciar essas pilhas. Por meio de arrays é possivel implementar manipulação dessas pilhas.

![Execução da estrutura Stack](https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221219100314/stack.drawio2.png)

As operações da Pilha(Array Methods) são chamadas de:
- Push (empilhar) que adiciona um ou mais elementos no topo da pilha e retorna o novo comprimento. 
- Pop (desempilhar) que remove o ultimo elemento e retorna o topo da pilha.
- Peek (consultar) para consultar o elemento no topo da pilha sem remover.

- Aplicação:
    - Caso de uso mais comum da pilha é call stack ou pilha de chamada de um programa, onde a ordem de execução dos processos são chamados pelo programa em forma de pilha.
    - Outro é o recurso de Avançar e Voltar que os endereços visitados se empilham, ao chamar a função ‘voltar’ o ultimo endereço visitado que esta no topo é o primeiro a retornar.

    [Fila (Queue)](https://github.com/jeffersilveira/dsa-javascript/blob/main/Queue/Readme.md).