import type { IRenderer } from "../../abstraction/i-renderer";
import { Renderer } from "../renderer";

export abstract class VirtualRenderer extends Renderer {
  public abstract droper: IRenderer;

  public get isVirtual(): boolean {
    return true;
  }
}