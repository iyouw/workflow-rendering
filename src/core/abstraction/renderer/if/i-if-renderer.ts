import type { IGroupRenderer } from "../i-group-renderer";

export interface IIfRenderer extends IGroupRenderer {
  branches: number;
  setBranches(branches: number): IIfRenderer;
}