import type { IAttachRenderer } from "../abstraction/renderer/i-attach-renderer";
import type { IRenderer } from "../abstraction/renderer/i-renderer";
import { Renderer } from "./renderer";

export abstract class AttachRenderer extends Renderer implements IAttachRenderer {
  public abstract target: IRenderer;

  public get isAttach(): boolean {
    return true;
  }
}