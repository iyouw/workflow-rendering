import type { IBox } from "./abstraction/i-box"

export class Box implements IBox {
  public left: number = 0;
  public top: number = 0;
  public width: number = 0;
  public height: number = 0;
  public marginLeft: number = 0;
  public marginRight: number = 0;
  public marginTop: number = 0;
  public marginBottom: number = 0;

  public get bottom(): number {
    return this.top + this.height + this.marginBottom;
  }

  public get right(): number {
    return this.left + this.marginLeft + this.width + this.marginRight;
  }

  public get centerX(): number {
    return this.left + (this.marginLeft + this.width + this.marginRight) / 2;
  }

  public get centerY(): number {
    return this.top + (this.marginTop + this.height + this.marginBottom) / 2;
  }
}