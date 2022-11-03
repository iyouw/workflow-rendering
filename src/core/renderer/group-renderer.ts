import type { IAttachRenderer } from "../abstraction/renderer/i-attach-renderer";
import type { IGroupRenderer } from "../abstraction/renderer/i-group-renderer";
import { Renderer } from "./renderer";

export abstract class GroupRenderer extends Renderer implements IGroupRenderer {
  public abstract start: IAttachRenderer;
  public abstract end: IAttachRenderer;

  public override calcDimension(): void {
    if (!this.root) return;

    this.start.calcDimension();
    this.children.forEach((child) => child.calcDimension());
    this.end.calcDimension();

    const { rowGap, columnGap } = this.root;
    const childWidths = this.children.reduce((ret,child)=> (ret += child.box.width) && ret, 0) + columnGap * (this.children.length - 1);
    this.box.width = Math.max(childWidths, this.start.box.width, this.end.box.width);

    const childHeights = this.children.map(child => child.box.height);
    const maxChildHeight = Math.max(...childHeights);
    this.box.height = this.start.box.height + rowGap + maxChildHeight + rowGap + this.end.box.height;
  }

  public override calcCoord(): void {
    if(!this.root) return;

    const pre = this.pre();
    if(!pre) return;

    const { centerX, bottom } = pre.box;
    this.box.left = centerX - this.box.width / 2;
    this.box.top = bottom + this.root.rowGap;

    this.start.calcCoord();
    this.children.forEach(child => child.calcCoord());
    this.end.calcCoord();
  }

  public override calcLines(): void {
    this.lines = [];

    const startBox = this.start.box;
    const endBox = this.end.box;

    for (const child of this.children) {
      this.lines.push(this.getLineByBox(startBox, child.box));
      this.lines.push(this.getLineByBox(child.box, endBox));
    }

    this.children.forEach((child) => child.calcLines());
  }

  public override render(): void {
    this.start.render();
    this.children.forEach((child) => child.render());
    this.end.render();
    this.renderLine();
  }
}