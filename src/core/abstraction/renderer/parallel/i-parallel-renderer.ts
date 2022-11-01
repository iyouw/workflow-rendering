import type { IGroupRenderer } from "../i-group-renderer";

export interface IParallelRenderer extends IGroupRenderer {
  branches: number;
  setBranches(branches: number): IParallelRenderer;
}