class Node{
    constructor(){
        this.children={}
        this.isendofword=false
    }
}

class trie{
    constructor(){
        this.root=new Node()
    }

    insert(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char]=new Node()
            }
            node=node.children[char]
        }
        node.isendofwod=true
    }

    contains(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node=node.children[char]
        }
        return node.isendofwod
    }

    startwithprefix(prefix){
        let node=this.root
        for(let char of prefix){
            if(!node.children[char]){
                return false
            }
            node=node.children[char]
        }
        return true
    }
}


class Node{
    constructor(){
        this.children={}
        this.isendofwod=false
    }
}

class trie{
    constructor(){
        this.root=new Node()
    }

    insert(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char]=new Node()
            }
            node=node.children[char]
        }
        node.isendofword
    }

    contains(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node=node.children[char]
        }
        return node.isendofwod
    }

    startwithprefix(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node=node.children[char]
        }
        return false
    }
}


class Node{
    constructor(){
        this.children={}
        this.isendofwod=false
    }
}

class trie{
    constructor(){
        this.root=new Node()
    }

    insert(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char]
            }
            node=node.children[char]
        }
        node.isendofwod
    }

    contains(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node=node.children[char]
        }
        return node.isendofwod
    }

    startwithprefix(prefix){
        let node=this.root
        for(let char of prefix){
            if(!node.children[char]){
                return false
            }
            node=node.children[char]
        }
        return true
    }
}


class Node{
    constructor(){
        this.children={}
        this.isendofwod=false
    }
}

class trie{
    constructor(){
        this.root=new Node()
    }

    insert(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char]
            }
            node=node.children[char]
        }
        node.isendofwod=true
    }

    contains(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node=node.children[char]
        }

        return node.isendofwod
    }

    startwithprefix(prefix){
        let node=this.root
        for(let char of prefix){
            if(!node.children[char]){
                return false
            }
            node=node.children[char]
        }
        return true
    }
}


class Node{
    constructor(){
        this.children={}
        this.isendofwod=false
    }
}

class trie{
    constructor(){
        this.root=new Node()
    }
    insert(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char]=new Node()
            }
            node=node.children[char]
        }
        node.isendofwod=true
    }

    contain(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char]){
               return false
            }
            node=node.children[char]

        }
        return node.isendofwod


    }

    startwithprefix(prefix){
        let node=this.root
        for(let char of prefix){
            if(!node.children[char]){
                return false
            }
            node=node.children[char]
        }
        return true
    }
}


console.log(tr.insert("hello"));
console.log(tr.insert("helloss"));

console.log(tr.contain("he"));
console.log(tr.istartwithprefit("hello"));


