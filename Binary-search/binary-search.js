const binarySearch = (arr, target) => {
    let lower = 0;
    let higher = arr.length -1;

    // Definida as variáveis de inicio e fim da busca(lower e higher), atribuindo sua média a 'mid'
    while(lower <= higher) {
        const mid = Math.floor((lower + higher) /2);
        let guess = arr[mid];
        // console.log('loop', target);        // Verifica quantas etapas no seu tempo de execução.

        if(guess === target) {
            return mid;
        } else if (guess > target) {
            higher = mid -1;
        } else {
            lower = mid +1;
        }
    }
    return null;
}

const mySearch = [1,2,3,4,5,6,7,8];

console.log(binarySearch(mySearch, 7)); 
console.log(binarySearch(mySearch, -1));

/* OUTPUT:
6 - posição de index na qual se encontra
null - elemento não encontrado na lista
*/