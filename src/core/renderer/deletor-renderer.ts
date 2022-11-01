import { DecorateRenderer } from "./decorate-renderer";

export abstract class DeletorRenderer extends DecorateRenderer {
  public calcCoord(): void {
    const { right, centerY } = this.target.box;
    const { height, marginLeft } = this.box;
    this.box.left = right + marginLeft;
    this.box.top = centerY - height / 2;
  }
}