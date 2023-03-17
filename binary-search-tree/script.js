class Node {
    constructor(element) {
        this.element = element
        this.right = null
        this.left = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
        this.size = 0
    }

    insert(element, current_node = this.root) { // should never fail ever ever
        if (!this.root){
            // if there's no element here, make one (function ends)
            this.root = new Node(element)
            this.size++
        } else if (element > current_node.element) {
            if (!current_node.right){
                current_node.right = new Node(element)
                this.size++
                return
            }
            // if there is an element here and the current one is larger, move to the right subtree
            this.insert(element, current_node.right)
        } else {
            if (!current_node.left){
                current_node.left = new Node(element)
                this.size++
                return
            }
            // else move to the left subtree (element is smaller or equal to)
            this.insert(element, current_node.left)
        }
    }

    find(key, current_node = this.root) { // returns a node, not a value
        if (!current_node){
            return -1
        } else if (current_node.element == key) {
            return current_node
        } else if (current_node.element < key) {
            return this.find(key, current_node.right)
        } else {
            return this.find(key, current_node.left)
        }
    }
    
    remove(key, current_node = this.root) { // returns the removed node
        if (!current_node) {
            return -1
        } else if (current_node.element == key) {
            let holder = current_node
            current_node = null
            this.size--
            return holder
        } else if (current_node.element < key) {
            return this.remove(key, current_node.right)
        } else {
            return this.remove(key, current_node.left)
        }
    }

    length() {
        return this.size
    }

    print() {
        
    }
}