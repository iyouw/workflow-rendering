import type { IParallelRenderer } from "@/core/abstraction/renderer/parallel/i-parallel-renderer";
import { GroupRenderer } from "../group-renderer";

export abstract class ParallelRenderer extends GroupRenderer implements IParallelRenderer {
  public abstract branches: number;
  public abstract setBranches(branches: number): IParallelRenderer;

  public get isParallel(): boolean {
    return true;
  }

  public get isGroup(): boolean {
    return true;
  }
}