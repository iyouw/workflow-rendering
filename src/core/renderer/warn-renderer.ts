import { AttachRenderer } from "./attach-renderer";

export abstract class WarnRenderer extends AttachRenderer {
  public calcCoord(): void {
    const { left, centerY } = this.target.box;
    const { width, height, marginLeft, marginRight, marginTop } = this.box;
    this.box.left = left - marginRight - width - marginLeft;
    this.box.top = centerY - height / 2 - marginTop;
  }
}