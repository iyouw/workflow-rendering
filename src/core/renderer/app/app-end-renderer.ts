import { EndRenderer } from "../end-renderer";

export abstract class AppEndRenderer extends EndRenderer {
  public get isApp(): boolean {
    return true;
  }
}