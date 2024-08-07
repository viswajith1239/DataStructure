class Node{
    constructor(){
        this.children={}
        this.isEndOfWord=false
    }
}
class Trie{
    constructor(){
        this.root=new Node()
    }
    insert(word){
    let node=this.root
        for(let i=0;i<word.length;i++){
            let char=word[i]
            if(!node.children[char]){
                node.children[char]=new Node()
            }
            node=node.children[char]
            if(i===word.length-1){
                node.isEndOfWord =true;
            }
        }
    }
    contains(word){
        let node=this.root
        for(let i=0;i<word.length;i++){
            let char=word[i]
            if(node.children[char]){
                 node = node.children[char];
            }else{
                return false
            }
           
        }
        return node.isEndOfWord
    }
    startWithPrefix(prefix){
        let node=this.root
        for(let i=0;i<prefix.length;i++){
            let char=prefix[i]
            if(node.children[char]){
                node=node.children[char]
            }else{
                return false
            }
        }
        return true

    }
    delete(word){
        if(!this.contains(word)){
            return false
        }
        let nodes=[]
        let node=this.root
        for(let char of word){
            nodes.push({char,node})
            node=node.children[char]
            
        }
        node.isEndOfWord=false
       
        while(nodes.length>0){
            let {char,node}=nodes.pop()
            if(Object.keys(node.children[char].children).length==0&&!node.children[char].isEndOfWord){
             delete node.children[char]
            }else{
                break
            }
            

        }
        return true

    }
    getWordWithPrefix(prefix){
        let node=this.root
        for(let char of prefix){
            if(!node.children[char]){
                return []
            }
            node=node.children[char]
        }
        let words=[]
        this.getWord(node,prefix,words)
        return words
    }
    getWord(node,prefix,words){
        if(node.isEndOfWord){
            words.push(prefix)
        }
        for (let [char, childNode] of Object.entries(node.children)) {
          this.getWord(childNode, prefix + char, words);
        }

    }
}
const trie=new Trie()

trie.insert("hello")
trie.insert("hell")
trie.insert("helowssss")

console.log(trie.getWordWithPrefix("he"))


