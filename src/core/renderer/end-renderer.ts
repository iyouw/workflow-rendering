import { DecorateRenderer } from "./decorate-renderer";

export abstract class EndRenderer extends DecorateRenderer {
  public override calcCoord(): void {
    const { bottom, centerX } = this.target.box;
    const { width, height } = this.box;
    this.box.left = centerX - width / 2;
    this.box.top = bottom - height;
  }
} 