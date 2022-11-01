import { EndRenderer } from "../end-renderer";

export abstract class IfEndRenderer extends EndRenderer {
  public get isIf(): boolean {
    return true;
  }
}