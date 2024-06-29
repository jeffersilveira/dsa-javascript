class Node{
    constructor(element){
        this.value = element;
        this.next = undefined;
    }
}

class List{
    constructor(){
        this.head = undefined;
        this.length = 0;
    }

    // Metodo push()
    push(element){
        const node = new Node(element);
        let current;

        if(this.head == null){
            this.head = node;            
        }else{
            current = this.head;

            while(current.next != null){
                current = current.next;                
            }
            current.next = node;
        }
        this.length++;
    }

    // Metedo getElementAt()
    getElementAt(position){
        if(position >= 0 && position <= this.length){
            let node = this.head;
            for (let i = 0; i < position && node != null; i++) {
                node = node.next;                
            }
            return node;
        }
        return undefined;
    }

    // Metodo insertAt()
    insertAt(element, position){
        if (position >= 0 && position <= this.length) {
            const node = new Node(element);

            if (position === 0) {
                let current = this.head;
                node.next = current;
                this.head = node;
            } else {
                let previous = this.getElementAt(position -1);
                let current = previous.next;
                node.next = current;
                previous.next = node;
            }
            this.length++;
            return true;
        }
        return false;
    }
}

const list = new List();

list.push(10);
console.log(list);
list.push(20);
list.push(30);
console.log(list);
console.log(JSON.stringify(list, null, 2));

// let thirdNode = list.getElementAt(2);
// console.log(thirdNode);

list.insertAt(25, 2);
console.log(JSON.stringify(list, null, 2));
