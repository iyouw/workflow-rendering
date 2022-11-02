import type { IParallelRenderer } from "@/core/abstraction/renderer/parallel/i-parallel-renderer";
import type { INode } from "@linker-design/work-flow";
import { GroupRenderer } from "../group-renderer";

export abstract class ParallelRenderer extends GroupRenderer implements IParallelRenderer {
  public abstract branches: number;
  public abstract setBranches(branches: number, nodes?: Array<INode>): IParallelRenderer;

  public get isParallel(): boolean {
    return true;
  }

  public get isGroup(): boolean {
    return true;
  }
}