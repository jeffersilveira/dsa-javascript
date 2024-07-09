const selectionSort = (arr) => {

    for(let i = 0; i < arr.length; i++){
        let min = i;

        // Percorre o vetor interno e compara os elementos adicionando o menor valor a variável 'min'
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        // swap dos elementos para que o de menor valor fique na primeira posiçao 
        [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    return arr;
}

let mylist = [21, 3, 6, 14, 13, 8];
console.log(selectionSort(mylist));

// 
/* OUTPUT:
[ 3, 6, 8, 13, 14, 21 ]
*/