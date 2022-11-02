import { AttachRenderer } from "./attach-renderer";

export abstract class DeletorRenderer extends AttachRenderer {
  public calcCoord(): void {
    const { right, centerY } = this.target.box;
    const { height, marginLeft } = this.box;
    this.box.left = right + marginLeft;
    this.box.top = centerY - height / 2;
  }
}