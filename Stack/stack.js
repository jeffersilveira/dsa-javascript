'use strict';

class Stack {
    constructor() {
        this.items = [];        // array a ser passado aos objetos
    }

    // Incluir elementos no stack
    push(element) {
        this.items.push(element);
    }
    // Excluir elementos no stack
    pop() {
        return this.items.pop();
    }

    // Verificar elementos no topo da stack
    peek() {
        return this.items[this.items.length -1];
    }
    
    // Verificar se a stack está vazia
    isEmpty() {
        return this.items.length === 0;     // retorna true our false
    }

    // Limpar a stack
    clear() {
        this.items = [];
    }

    // Listar elementos incluídos na stack
    size() {
        return this.items.length;
    }
}

let stack = new Stack();

stack.push(1);
stack.push(2);
console.log(stack);
stack.clear();
console.log(stack);

stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack);

console.log(stack.peek());

stack.pop();
console.log(stack);

console.log(stack.size());

console.log(stack.isEmpty());

/* OUTPUT:
Stack { items: [ 1, 2 ] }
Stack { items: [] }
Stack { items: [ 10, 20, 30 ] }
30
Stack { items: [ 10, 20 ] }
2
false
*/