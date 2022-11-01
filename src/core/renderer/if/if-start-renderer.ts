import { StartRenderer } from "../start-renderer";

export abstract class IfStartRenderer extends StartRenderer {
  public get isIf(): boolean {
    return true;
  }
}