import { GroupRenderer } from "../group-renderer";

export abstract class ParallelRenderer extends GroupRenderer {
  public abstract branches: null;
  public abstract setBranches(branches: number): ParallelRenderer;

  public get isParallel(): boolean {
    return true;
  }

  public get isGroup(): boolean {
    return true;
  }
}