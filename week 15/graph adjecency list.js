adjecencylist={
    'A':['B'],
    'B':['A','C'],
    'C':['B']
}
console.log(adjecencylist['C']);


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

            this.list[vertex].forEach(neighbor=>{
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

}

const graph=new Graph()
graph.addvertex(1)
graph.addvertex(2)
graph.addvertex(3)
graph.addedge(1,2)
graph.addedge(2,3)  
graph.display()
console.log(graph.hasedge(1,2));
graph.removeedge(1,2)
graph.display()
graph.removevertex(2)



