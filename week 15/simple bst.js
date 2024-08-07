class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.rigth=null
    }
}

class binarysearchtree{
    constructor(){
        this.root=null
    }

    isempty(){
        return this.root===null
    }
}

const bst=new binarysearchtree()
console.log("it is empty?",bst.isempty());