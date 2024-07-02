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

    // Metodo removeAt()
    removeAt(position){
        if(position >= 0 && position <= this.length){
            const current = this.head;

            if(position === 0){
                this.head = current.next;
            } else {
                const previous = this.getElementAt(position -1);
                const current = previous.next;

                previous.next = current.next;
            }
            this.length--;
            return true;
        }
        return false;
    }
}

const list = new List();

// console.log(JSON.stringify(list, null, 2));
list.push(10);
list.push(20);
list.push(30);

// let thirdNode = list.getElementAt(2);
// console.log(thirdNode);

list.insertAt(40, 3);

list.removeAt(3);   // output:   "head": { "value": 10, "next": { "value": 20, "next": { "value": 30 }
console.log(JSON.stringify(list, null, 2));
