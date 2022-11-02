import type { INode } from "@linker-design/work-flow";
import type { IGroupRenderer } from "../i-group-renderer";

export interface IIfRenderer extends IGroupRenderer {
  branches: number;
  setBranches(branches: number, nodes?: Array<INode>): IIfRenderer;
}