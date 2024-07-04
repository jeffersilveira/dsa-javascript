'use strict';

class Stack {
    constructor() {
        this.items = [];        // array a ser passado aos objetos
    }

    // push(elementos) Incluir elementos no stack
    push(elements) {
        this.items.push(elements);
    }
    // pop() Excluir elementos no stack
    pop() {
        return this.items.pop();
    }

    // peek() Verificar elementos no topo da stack
    peek() {
        return this.items[this.items.length -1];
    }
    
    // isEmpty() Verificar se a stack está vazia
    isEmpty() {
        return this.items.length === 0;     // retorna true our false
    }

    // clear() Limpar a stack
    clear() {
        this.items = [];
    }

    // size() Listar elementos incluídos na stack
    size() {
        return this.items.length;
    }
}

let stack = new Stack();

stack.push(1);
stack.push(2);
console.log(stack);
stack.clear();      // Limpa os elementos da Stack
console.log(stack);

stack.push(10);     //
stack.push(20);     //  Inserido elementos na Stack
stack.push(30);     //
console.log(stack);

console.log(stack.peek());      // Retorna o ultimo elemento da Stack

stack.pop();
console.log(stack);     //  Excluido valor '30' e retornado no log

console.log(stack.size());      //  Retorna numero de elementos na Stack

console.log(stack.isEmpty());        //  Retorna um boolean se a Stack está vazia

/* OUTPUT:
Stack { items: [ 1, 2 ] }
Stack { items: [] }
Stack { items: [ 10, 20, 30 ] }
30
Stack { items: [ 10, 20 ] }
2
false
*/