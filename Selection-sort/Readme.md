Ordenação por Seleção (Selection Sort).

Selection sort é um algoritmo que se baseia em passar o menor valor do vetor para a primeira posição (dependendo do tipo da ordenação), depois o segundo menor valor para segunda posição e assim por diante. 

Formado por dois laços For, um externo que percorre o Index que inicia por 0 e itera em +1 até n -1 elementos e um mais inteiro que percorre o Vetor a partir do Index externo +1 até o  final desse vetor.

![](https://www.italoinfo.com.br/algoritmos/selectionsort/img/selectionsort.png)

![](https://res.cloudinary.com/practicaldev/image/fetch/s--WIPK2ija--/c_limit,f_auto,fl_progressive,q_66,w_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/o6rqz66o9kca8aq0l32u.gif)

- Aplicação:    
    Uma das formas de implementar esse algoritmo seria por exemplo em um sistema de classificação de favoritos ou por ordem alfabética. Onde os elementos de uma lista são passados para uma segunda lista, um elemento por vez e ordenados de acordo com o critério desejado. A Ordenação por seleção não é tão  rápida, seu tempo de execução é de O(n²), visto que esse algoritmo é executado nos dois laços, interno e externo.
