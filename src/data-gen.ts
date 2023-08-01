import { parse } from "papaparse";
import { readFileSync } from "fs";

export type Node = {
  id: string;
  name: string;
  link: string;
};

export type Link = {
  source: string;
  target: string;
};

const links: Link[] = [];
const nodes: Node[] = [];

const file_links = readFileSync("data/links.csv", "utf8");
const result_links = parse(file_links);

const file_nodes = readFileSync("data/nodes.csv", "utf8");
const result_nodes = parse(file_nodes);

for (let index = 1; index < result_nodes["data"].length; index += 1) {
  nodes.push({
    id: `${result_nodes["data"][index][4]}`,
    name: `${result_nodes["data"][index][0]}`,
    link: `${result_nodes["data"][index][2]}`
  });
}

for (let i = 1; i < result_links["data"].length; i += 1) {
  links.push({
    source: `${result_links["data"][i][0]}`,
    target: `${result_links["data"][i][1]}`
  });
}

export { nodes, links };
