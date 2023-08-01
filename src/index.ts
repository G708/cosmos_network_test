import "./styles.css";
import { nodes, links, Node, Link } from "./data-gen";
import { Graph, GraphConfigInterface } from "@cosmograph/cosmos";

const canvas = document.querySelector("canvas") as HTMLCanvasElement;
const config: GraphConfigInterface<Node, Link> = {
  backgroundColor: "#151515",
  nodeSize: 10,
  nodeColor: "#A04040",
  linkWidth: 2,
  linkColor: "#8A8C8C",
  linkArrows: true,
  simulation: {
    linkDistance: 10,
    linkSpring: 2,
    repulsion: 1,
    gravity: 0.25,
    decay: 100000
  },
  events: {
    onClick: (node) => {
      console.log("Clicked node: ", node);
    }
  }
};

const graph = new Graph(canvas, config);
graph.setData(nodes, links);
graph.zoom(0.9);
