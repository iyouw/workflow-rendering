import { EndRenderer } from "../end-renderer";

export abstract class ParallelEndRenderer extends EndRenderer {
  public get isParallel(): boolean {
    return true;
  }
}