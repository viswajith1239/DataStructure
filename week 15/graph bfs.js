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



    bfs(start){
        const result=[]
        const visited={}
        const queue=[start]
        visited[start]=true

        while(queue.length){
            const currentVertex=queue.shift()
            result.push(currentVertex)
            this.adjacencylist[currentVertex].forEach((neighbour)=>{
                if(!visited[neighbour]){
                    visited[neighbour]=true
                    queue.push(neighbour)
                }
            })
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

console.log(gr.bfs("a"));