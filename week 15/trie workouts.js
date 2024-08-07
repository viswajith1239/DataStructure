class Node{
    constructor(){
        this.childern={}
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
            if(!node.childern[char]){
                node.childern[char]=new Node()

            }
            node=node.childern[char]
        }
        node.isendofword=true
    }

    conatins(word){
        let node=this.root
        for(let char of word){
            if(!node.childern[char]){
                return false
            }
            node=node.childern[char]
        }
        return true
    }


    startwithprefix(prefix){
        let node=this.root
        for(let char of prefix){
            if(!node.childern[char]){
                return false
            }
           node= node.childern[char]
        }
        return true
    }

    getwordwithprefix(prefix){
        let node=this.root
        for(let char of prefix){
            if(!node.childern[char]){
                return []
            }
            node=node.childern[char]
        }
        const words=[]
        this.collectwords(node,prefix,words)
        return words
    }

    collectwords(node,prefix,words){
        if(node.isendofword){
            words.push(prefix)
        }
        for(let char in node.childern){
            this.collectwords(node.childern[char],prefix+char,words)
        }
    }
}

const tr=new trie()
tr.insert("apple")
tr.insert("app")
tr.insert("blob")
tr.insert("mhhfy")
console.log(tr.conatins("app"));
console.log(tr.conatins("applb"));
console.log(tr.startwithprefix("ap"));
console.log(tr.getwordwithprefix("a"));


