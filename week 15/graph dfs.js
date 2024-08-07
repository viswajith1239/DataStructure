class graph{
    constructor(){
        this.adjacencylist={}
    }
    addvertex(vertex){
        if(!this.adjacencylist[vertex]){
            this.adjacencylist[vertex]=new Set()
        }
    }

    addedge(vertex1,vertex2){
        if(!this.adjacencylist[vertex1]){
            this.addvertex(vertex1)
        }
        if(!this.adjacencylist[vertex2]){
            this.addvertex(vertex2)
        }
        this.adjacencylist[vertex1].add(vertex2)
        this.adjacencylist[vertex2].add(vertex1)
    }

    dfs(start){
        const result=[]
        const visited={}
        const stack=[start]
        visited[start]=true
        while(stack.length){
            const currentVertex=stack.pop()
            result.push(currentVertex)
            for(let neighbor of this.adjacencylist[currentVertex]){
                if(!visited[neighbor]){
                    visited[neighbor]=true
                    stack.push(neighbor)
                }
            }
        }
        return result
        
    }
}
const gr=new graph()

gr.addvertex("a")
gr.addvertex("b")
gr.addvertex("c")
gr.addvertex("d")
gr.addvertex("e")
gr.addvertex("f")

gr.addedge("a","b")
gr.addedge("c","b")
gr.addedge("a","d")
gr.addedge("e","f")
gr.addedge("a","f")
gr.addedge("d","b")
gr.addedge("c","b")

console.log(gr.dfs("a"));