//create two classes - Node & LinkedList

class Node {
    constructor() {
        this.value = null
        this.next = null
    }

}

//methods - *append(value), *prepend(value), *at(index), *pop(), *contains(value), *find(value), *toString()
//properties - *size, *head, *tail

export default class LinkedList {
    size = 0
    #head
    #tail
    constructor() {
        this.#head = null
    }

    #recurse(node,item) {
        if(node.next == null) {
            node.next = item
            this.#tail = item
        }else {
            return this.#recurse(node.next,item)
        }
    }

    append(value) {
        if(this.size == 0) {
            let item = new Node()
            item.value = value
            this.#head = item
            this.size++
        }else {
            let item = new Node()
            item.value = value
            this.size++
            this.#recurse(this.#head,item)
        }
    }

    get head() {
        return this.#head
    }

    prepend(value) {
        let previousHead = this.#head
        let newItem = new Node()
        newItem.value = value
        newItem.next = previousHead
        this.#head = newItem
        this.size++
    }

    toString() {
        let string = ''
        let result = (function concenate(node) {
            if(node.value === null) {
                console.log('value is null')
            }
            else {
                if(string == '') {
                    string+= `(${node.value}) `
                    return concenate(node.next)
                } 
                else if(node.next != null ){
                    string+= `-> (${node.value}) `
                    return concenate(node.next)
                } 
                else {
                    string+= `-> (${node.value}) -> null`
                    return string
                }
            }
    
        })(this.#head)

        return result
    }

    contains(value) {
        let result = (function checkValue(node) {
            if(node.value == value) {
                return true
            }else if(node.next == null) {
                return false
            }else {
                return checkValue(node.next)
            }
        })(this.#head)
        return result

    }

    find(value) {
        let index = 0
        let result = (function findValue(node) {
            if(node.value == value) {
                return index
            }else {
                index++
                return findValue(node.next)
            }
            
        })(this.#head)

        return result
    }

    at(index) {
        let arr = []
        function getValue(node) {
            if(node.value !== null) {
                arr.push(node.value)
            }
            if(node.next !== null) {
                return getValue(node.next)
            }
        }
        getValue(this.#head)
        console.log(arr)
        return arr[index]

    }

    pop() {
        function loop(node) {
            if(node.next.next == null) {
                let removedValue = node.next.value
                node.next = null
                return {removedValue, node}
            }
            else {
                return loop(node.next) 
            }
        }
        let result = loop(this.#head)
        this.#tail = result.node
        return result.removedValue
    }

    get tail() {
        return this.#tail.value
    }


}

