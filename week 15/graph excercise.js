// class graph{
//     constructor(){
//         this.adjecencylist={}
//     }
//     addvertex(vertex){
//         if(!this.adjecencylist[vertex]){
//             this.adjecencylist[vertex]=new Set()
//         }
//     }
//     addedge(vertex1,vertex2){
//         if(!this.adjecencylist[vertex1]){
//             this.addvertex(vertex1)
//         }
//         if(!this.adjecencylist[vertex2]){
//             this.addvertex(vertex2)
//         }
//         this.adjecencylist[vertex1].add(vertex2)
//         this.adjecencylist[vertex2].add(vertex1)
//     }
//     removededge(vertex1,vertex2){
//         this.adjecencylist[vertex1].delete(vertex2)
//         this.adjecencylist[vertex2].delete(vertex1)
//     }
//     removevertex(vertex){
//         if(!this.adjecencylist[vertex]){
//             return
//         }
//         for(let adjecentvertex of this.adjecencylist[vertex]){
//             this.removededge(vertex,adjecentvertex)
//         }
//         delete this.adjecencylist[vertex]
//     }
//     hasedge(vertex1,vertex2){
//         return(
//             this.adjecencylist[vertex1].has(vertex2)&&
//             this.adjecencylist[vertex2].has(vertex1)
//         )
//     }
//     display(){
//         for(let vertex in this.adjecencylist){
//             console.log(vertex+"->"+[...this.adjecencylist[vertex]]);
//         }
//     }
// }

// const gr=new graph()

// gr.addvertex("A")
// gr.addvertex("B")
// gr.addvertex("C")
// gr.addvertex("D")
// gr.addvertex("E")
// gr.addvertex("F")

// gr.addedge("A","B")
// gr.addedge("A","D")
// gr.addedge("C","B")
// gr.addedge("F","E")
// gr.addedge("B","C")
// gr.addedge("C","A")
// gr.addedge("A","F")

// gr.display()
// console.log("after deleting");
// gr.removededge("A","B")
// console.log("vertex");
// gr.removevertex("C")

// gr.display()


// class graph{
//     constructor(){
//         this.adjecencylist={}
//     }

//     addvertex(vertex){
//         if(!this.adjecencylist[vertex]){
//             this.adjecencylist[vertex]=new Set()
//         }
//     }
//     addedge(vertex1,vertex2){
//         if(!this.adjecencylist[vertex1]){
//             this.addvertex(vertex1)
//         }
//         if(!this.adjecencylist[vertex2]){
//             this.addvertex(vertex2)
//         }
//         this.adjecencylist[vertex1].add(vertex2)
//         this.adjecencylist[vertex2].add(vertex1)
//     }
//     removededge(vertex1,vertex2){
//         this.adjecencylist[vertex1].delete(vertex2)
//         this.adjecencylist[vertex2].delete(vertex1)
//     }

//     removevertex(vertex){
//         if(!this.adjecencylist[vertex]){
//             return
//         }

//         for(let adjecentvertex of this.adjecencylist[vertex]){
//             this.removededge(vertex,adjecentvertex)
//         }
//         delete this.adjecencylist[vertex]
//     }
//     hasedge(vertex1,vertex2){
//         return(
//             this.adjecencylist[vertex1].has(vertex2)&&
//             this.adjecencylist[vertex2].has(vertex1)

//         )
//     }
//     display(){
//         for(let vertex in this.adjecencylist){
//             console.log(vertex+"->"+[...this.adjecencylist[vertex]]);
//         }
//     }


// }


// class graph{
//     constructor(){
//         this.adjecencylist={}
//     }
//     addvertex(vertex){
//         if(!this.adjecencylist[vertex]){
//             this.adjecencylist[vertex]=new Set()
//         }
//     }
//     addedge(vertex1,vertex2){
//         if(!this.adjecencylist[vertex1]){
//             this.addvertex(vertex1)
//         }
//         if(this.adjecencylist[vertex2]){
//             this.addvertex(vertex2)
//         }
//         this.adjecencylist[vertex1].add(vertex2)
//         this.adjecencylist[vertex2].add(vertex1)
//     }

//     removeedge(vertex1,vertex2){
//         this.adjecencylist[vertex1].delete(vertex2)
//         this.adjecencylist[vertex2].delete(vertex1)
//     }

//     removevertex(vertex){
//         if(!this.adjecencylist[vertex]){
//             return
//         }

//         for(let adjecentvertex of this.adjecencylist[vertex]){
//             this.removeedge(vertex,adjecentvertex)
//         }
//         delete adjecencylist[vertex]
//     }

//     hasedge(vertex1,vertex2){
//         this.adjecencylist[vertex1].has(vertex2)&&
//         this.adjecencylist[vertex2].has(vertex1)
//     }

//     display(){
//         for(let vertex in this.adjecencylist){
//             console.log(vertex+"->"+[...this.adjecencylist[vertex]]);
//         }
//     }
   
// }



// class graph{
//     constructor(){
//         this.adjecencylist={}
//     }

//     addvertex(vertex){
//         if(!this.adjecencylist[vertex]){
//             this.adjecencylist[vertex]=new Set()
//         }
//     }

//     addedge(vertex1,vertex2){
//         if(!this.adjecencylist[vertex1]){
//             this.addvertex(vertex1)
//         }

//         if(!this.adjecencylist[vertex2]){
//             this.addvertex(vertex2)
//         }
//         this.adjecencylist[vertex1].add(vertex2)
//         this.adjecencylist[vertex2].add(vertex1)
//     }

//     removeedge(vertex1,vertex2){
//         this.adjecencylist[vertex1].delete(vertex2)
//         this.adjecencylist[vertex2].deleteV(vertex2)
//     }

//     removevertex(vertex){
//         if(!this.adjecencylist[vertex]){
//             return
//         }
//         for(let adjecentvertex of this.adjecencylist[vertex]){
//             this.removeedge(vertex,adjecentvertex)
//         }
//         delete this.adjecencylist[vertex]
//     }

//     hasedge(){
//      return(
//         this.adjecencylist[vertex1].has(vertex2)&&
//         this.adjecencylist[vertex2].has(vertex1)
//      )

//     }

//     display(){
//         for(let vertex in this.adjecencylist){
//             console.log(vertex+"=>"+[...this.adjecencylist[vertex]]);
//         }
//     }
// }



// class graph{
//     constructor(){
//         this.adjecencylist={}
//     }

//     addvertex(vertex){
//         if(!this.adjecencylist[vertex]){
//             this.adjecencylist[vertex]=new Set()
//         }
//     }

//     addedge(vertex1,vertex2){
//         if(!this.adjecencylist[vertex1]){
//             this.addvertex(vertex1)
//         }
//         if(!this.adjecencylist[vertex2]){
//             this.addvertex(vertex2)
//         }

//         this.adjecencylist[vertex1].add(vertex2)
//         this.adjecencylist[vertex2].add(vertex1)
//     }

//     removededge(vertex1,vertex2){
//         this.adjecencylist[vertex1].delete(vertex2)
//         this.adjecencylist[vertex2].delete(vertex1)
//     }

//     removevertex(vertex){
//         if(!this.adjecencylist[vertex]){
//             return
//         }
//         for(let adjecentvertex of this.adjecencylist[vertex]){
//             this.removededge(vertex,adjecentvertex)
//         }
//         delete this.adjecencylist[vertex]
//     }

//     hasedge(vertex1,vertex2){
//         return(
//             this.adjecencylist[vertex1].has(vertex2)&&
//             this.adjecencylist[vertex2].has(vertex1)
//         )
//     }

//     display(){
//         for(let vertex in this.adjecencylist){
//             console.log(vertex+"=>"+[...this.adjecencylist[vertex]]);
//         }
//     }
// }



class graph{
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

    removededge(vertex1,vertex2){
        this.adjecencylist[vertex1].delete(vertex2)
        this.adjecencylist[vertex2].delete(vertex1)
    }

    removevertex(vertex){
        if(!this.adjecencylist[vertex]){
            return
        }
        for(let adjecentvertex of this.adjecencylist[vertex]){
            this.removededge(vertex,adjecentvertex)
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
                        visited.push(v)
                    }
                }
            }
        }
    }
    return false
  }
}

const g=new graph()
g.addvertex("a")
g.addvertex("b")
g.addvertex("c")
g.addvertex("d")
g.addvertex("e")
g.addvertex("f")
g.addvertex("g")
g.addvertex("h")

g.display()
g.addedge("a","b")
g.addedge("c","b")
g.addedge("g","a")
g.addedge("c","f")
g.addedge("h","f")
g.addedge("d","c")
g.addedge("h","b")
g.addedge("c","h")
g.addedge("h","e")

g.display()

g.removededge("a","b")
g.display()
g.removevertex("h")
g.display()
console.log(g.hascycle());





