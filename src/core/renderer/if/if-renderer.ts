import { GroupRenderer } from "../group-renderer";

export abstract class IfRenderer extends GroupRenderer {
  public abstract branches: number;
  public abstract setBranches(branches: number): IfRenderer;

  public get isIf(): boolean {
    return true;
  }
}