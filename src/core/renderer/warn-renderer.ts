import { DecorateRenderer } from "./decorate-renderer";

export abstract class WarnRenderer extends DecorateRenderer {
  public calcCoord(): void {
    const { left, centerY } = this.target.box;
    const { width, height, marginLeft, marginRight, marginTop } = this.box;
    this.box.left = left - marginRight - width - marginLeft;
    this.box.top = centerY - height / 2 - marginTop;
  }
}