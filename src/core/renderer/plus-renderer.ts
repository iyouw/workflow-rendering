import { AttachRenderer } from "./attach-renderer";

export abstract class PlusRenderer extends AttachRenderer {
  public calcCoord(): void {
    const { bottom, centerX } = this.target.box;
    const { width, marginTop } = this.box;
    this.box.left = centerX - width / 2;
    this.box.top = bottom + marginTop;
  }
}