import { StartRenderer } from "../start-renderer";

export abstract class ParallelStartRenderer extends StartRenderer {
  public get isParallel(): boolean {
    return true;
  }
}