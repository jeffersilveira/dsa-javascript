'use strict';

class Queue {
    constructor() {
        this.items = [];
    }

    // Adiciona um novo elemento na Queue
    enqueue(element) {
        this.items.push(element);
    }

    // Remove o primeiro elemento (frente) e retorna a Queue atual
    dequeue() {
        return this.items.shift();
    }

    // Retorna o primeiro elemento na Queue
    peek() {
        return this.items[0];
    }

    // Retorna o numero de elementos contidos na Queue
    size() {
        return this.items.length;
    }

    // Retorna um boolean se a Queue estiver vazia ou nao
    isEmpty() {
        return this.size() === 0;
    }
}

let queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);  
queue.enqueue(30);
console.log(queue);

queue.dequeue();
console.log(queue);

console.log(queue.peek());

console.log(queue.size());

console.log(queue.isEmpty());