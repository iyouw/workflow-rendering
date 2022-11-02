import type { IAttachRenderer } from "../abstraction/renderer/i-attach-renderer";
import type { IStartRenderer } from "../abstraction/renderer/i-start-renderer";
import { AttachRenderer } from "./attach-renderer";

export abstract class StartRenderer extends AttachRenderer implements IStartRenderer {
  public abstract warn: IAttachRenderer;
  public abstract deletor: IAttachRenderer;

  public override calcCoord(): void {
    const { centerX, bottom } = this.target.box;

    this.box.left = centerX - this.box.width / 2;
    this.box.top = bottom;
  }
}