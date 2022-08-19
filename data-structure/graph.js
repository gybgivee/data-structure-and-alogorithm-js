class Graph { 
    constructor() { 
      this.numberOfNodes = 0; 
      this.adjacentList = {}; 
    }
    //addnode
    addVertex(node)  { 
      this.adjacentList[node] = []; 
      this.numberOfNodes++;
    } 
    //add relationship
    addEdge(node1, node2) { 
      //uniderected Graph 
      if(this.adjacentList[node1]&&this.adjacentList[node2]){
        this.adjacentList[node1].push(node2); 
        this.adjacentList[node2].push(node1); 
      }else{
        console.log('Node not exist,Please add node first');
      }
    
    } 
    showConnections() { 
        //console.log(this.adjacentList);
      
      for (const [key, value] of Object.entries(this.adjacentList)) {
        console.log(`${key} --> ${value}`);
      }
  } 
  } 
  
  var myGraph = new Graph();
  myGraph.addVertex('0');
  myGraph.addVertex('1');
  myGraph.addVertex('2');
  myGraph.addVertex('3');
  myGraph.addVertex('4');
  myGraph.addVertex('5');
  myGraph.addVertex('6');
  myGraph.addEdge('3', '1'); 
  myGraph.addEdge('3', '4'); 
  myGraph.addEdge('4', '2'); 
  myGraph.addEdge('4', '5'); 
  myGraph.addEdge('1', '2'); 
  myGraph.addEdge('1', '0'); 
  myGraph.addEdge('0', '2'); 
  myGraph.addEdge('6', '5');

  myGraph.showConnections(); 