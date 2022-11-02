import { AttachRenderer } from "./attach-renderer";

export abstract class EndRenderer extends AttachRenderer {
  public override calcCoord(): void {
    const { centerX, bottom } = this.target.box;
    const { width, height } = this.box;
    this.box.left = centerX - width / 2;
    this.box.top = bottom - height;
  }
} 