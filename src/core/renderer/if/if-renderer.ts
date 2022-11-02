import type { IIfRenderer } from "@/core/abstraction/renderer/if/i-if-renderer";
import { GroupRenderer } from "../group-renderer";

export abstract class IfRenderer extends GroupRenderer implements IIfRenderer {
  public abstract branches: number;
  public abstract setBranches(branches: number): IfRenderer;

  public get isIf(): boolean {
    return true;
  }

  public get isGroup(): boolean {
    return true;
  }
}