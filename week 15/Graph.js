class Graph{
    constructor(){
        this.adjecencylist={}
    }
    addvertex(vertex){
    if(!this.adjecencylist[vertex]){
        this.adjecencylist[vertex]=new Set()
    }
        
    }
    addedge(vertex1,vertex2){
        if(!this.adjecencylist[vertex1]){
            this.addvertex(vertex1)
        }
        if(!this.adjecencylist[vertex2]){
            this.addvertex(vertex2)
        }
        this.adjecencylist[vertex1].add(vertex2)
        this.adjecencylist[vertex2].add(vertex1)
    }
    removeedge(vertex1,vertex2){
        this.adjecencylist[vertex1].delete(vertex2)
        this.adjecencylist[vertex2].delete(vertex1)
    }
   
    removevertex(vertex){
        if(!this.adjecencylist[vertex]){
            return
        }
        for(let adjecentvertex of this.adjecencylist[vertex]){
            this.removeedge(vertex,adjecentvertex)
        }
        delete this.adjecencylist[vertex]
    }

    hasedge(vertex1,vertex2){
        return(
            this.adjecencylist[vertex1].has(vertex2)&&
            this.adjecencylist[vertex2].has(vertex1)
        )
    }
    display(){
        for(let vertex in this.adjecencylist){
            console.log(vertex+"->"+[...this.adjecencylist[vertex]]);
        }
    }

    dfs(start){
        const result=[]
        const visited=new Set()
        const adjecencylist=this.adjecencylist
        (function dfsHelper(vertex){
            if(!vertex){
                return
            }
            visited.add(vertex)
            result.push(vertex)
            adjecencylist[vertex].forEach(neighbor => {
                if(!visited.has(neighbor)){
                    dfsHelper(neighbor)
                }
            });
        })(start)
        
        return result
    }

    dfsTraversal(startVertex){
        let visited={}
        let result=[]
        const dfs=(vertex)=>{
            visited[vertex]=true
            result.push(vertex)

            for(let neighbor of this.adjecencylist[vertex]){
                if(!visited[neighbor]){
                    dfs(neighbor)
                }
            }
        }
        dfs(startVertex)

        return result
    }

    dfs(start){
        let stack=[start]
        let visited=new Set()
        let result=[]
        visited.add(start)
        while(stack.length){
            let vertex=stack.pop()
            result.push(vertex)

            this.adjecencylist[vertex].forEach(neighbor=>{
                if(!visited.has(neighbor)){
                    visited.add(neighbor)
                    stack.push(neighbor)
                }
            })
        }
        return result
    }

    bfs(start){
        const result=[]
        const visited=new Set()
        const queue=[start]
        visited.add(start)
        while(queue.length){
            const vertex=queue.shift()
            result.push(vertex)
            this.adjecencylist[vertex].forEach(neighbor=>{
                if(!visited.has(neighbor)){
                    visited.add(neighbor)
                    queue.push(neighbor)
                }
            })
        }
        return result
    }

    hascycle(){
        let visited=[]
        let stack=[]
        for(let vertex in this.adjecencylist){
            if(!visited.includes(vertex)){
                stack.push(vertex)
                while(stack.length){
                    let curr=stack.pop()
                    if(visited.includes(curr)){
                        return true
                    }
                    visited.push(curr)
                    for(const v of this.adjecencylist[curr]){
                        if(!visited.includes(v)){
                            stack.push(v)
                        }
                    }
                }
            }
        }
        return false
    }

    bfsTraversal(startVertex){
        let visited={}
        let result=[]
        let queue=[startVertex]
        visited[startVertex]=true
        while(queue.length>0){
            let currentVertex=queue.shift()
            result.push(currentVertex)
            for(let neighbor of this.adjecencylist[currentVertex]){
                if(!visited[neighbor]){
                    visited[neighbor]=true
                    queue.push(neighbor)
                }
            }
        }
        return result
    }

    bfsShortestpath(startVertex,endVertex){
        if(startVertex===endVertex){
            return 0
        }
        let visited={}
        let queue=[]
        let distance={}
        let predecessors={}

        distance[startVertex]=0
        queue.push(startVertex)
        visited[startVertex]=true
        while(queue.length>0){
            let currentVertex=queue.shift()
            if(currentVertex===endVertex){
                return this.getpath(predecessors,startVertex,endVertex)
            }
            for(let neighbor of  this.adjecencylist[currentVertex]){
                if(!visited[neighbor]){
                    visited[neighbor]=true
                    distance[neighbor]=distance[currentVertex]+1
                    predecessors[neighbor]=currentVertex
                    queue.push(neighbor)
                }
            }
        }
        return []
    }
    getpath(predecessors,startVertex,endVertex){
        const path=[]
        let currentVertex=endVertex
        while(currentVertex!==startVertex){
            path.unshift(currentVertex)
            currentVertex=predecessors[currentVertex]
        }
        path.unshift(startVertex)
        return path
    }

}

const graph=new Graph()

graph.addvertex("A")
graph.addvertex("B")
graph.addvertex("C")
graph.addvertex("D")
graph.addvertex("E")
graph.addvertex("F")

graph.addedge("A","B")
graph.addedge("A","C")
graph.addedge("B","D")
graph.addedge("C","E")
graph.addedge("D","E")
graph.addedge("D","F")
graph.addedge("E","F")

graph.display()
console.log("DFS:",graph.dfs("A"));
console.log("BFS:",graph.bfs("A"));
console.log(graph.hascycle());
console.log(graph.dfsTraversal("A"));
console.log(graph.bfsTraversal("A"));
console.log("shortest",graph.bfsShortestpath("A","E"));


class graphs{
    constructor(){
        this.adjecencylist={}
    }
    addvertex(vertex){
        if(!this.adjecencylist[vertex]){
            this.adjecencylist[vertex]=new Set()
        }
    }

    addedge(vertex1,vertex2){
        if(!this.adjecencylist[vertex1]){
            this.addvertex(vertex1)
        }
        if(!this.adjecencylist[vertex2]){
            this.addvertex(vertex2)
        }

        this.adjecencylist[vertex1].add(vertex2)
        this.adjecencylist[vertex2].add(vertex1)
    }

    removeedge(vertex1,vertex2){
        this.adjecencylist[vertex1].delete(vertex2)
        this.adjecencylist[vertex2].delete(vertex1)
    }

    removevertex(vertex){
        if(!this.adjecencylist[vertex]){
            return
        }
        for(let adjecentvertex of this.adjecencylist[vertex]){
            this.removeedge(adjecentvertex,vertex)
        }
        delete this.adjecencylist[vertex]
    }
    hasedge(vertex1,vertex2){
        return(
            this.adjecencylist[vertex1].has(vertex2)&&
            this.adjecencylist[vertex2].has(vertex1)
        )
    }
    display(){
        for(let vertex in this.adjecencylist){
            console.log(vertex+"=>"+[...this.adjecencylist[vertex]]);
        }
    }

  hascycle(){
    let visited=[]
    let stack=[]
    for(let vertex in this.adjecencylist){
        if(!visited.includes(vertex)){
            stack.push(vertex)
            while(stack.length){
                let curr=stack.pop()
                if(visited.includes(curr)){
                    return true
                }
                visited.push(curr)
                for(let v of this.adjecencylist[curr]){
                    if(!visited.includes(v)){
                        stack.push(v)
                    }
                }
            }
        }
    }
    return false
  }
}

