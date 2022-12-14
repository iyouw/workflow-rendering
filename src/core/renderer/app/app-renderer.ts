import type { IAppRenderer } from "@/core/abstraction/renderer/app/i-app-renderer";
import { GroupRenderer } from "../group-renderer";

export abstract class AppRenderer extends GroupRenderer implements IAppRenderer {
  public abstract clientWidth: number;
  public abstract rowGap: number;
  public abstract columnGap: number;

  public get isApp(): boolean {
    return true;
  }

  public get isGroup(): boolean {
    return true;
  }

  public override calcDimension(): void {
    this.start.calcDimension();
    this.children.forEach((child) => child.calcDimension());
    this.end.calcDimension();

    const childWidths = this.children.map( child => child.box.width);
    this.box.width = Math.max(...childWidths, this.start.box.width, this.end.box.width);

    const childHeights = this.children.reduce((ret, child) => (ret += child.box.height) && ret , 0);
    this.box.height = this.start.box.height + this.rowGap + childHeights + this.rowGap * (this.children.length - 1) + this.rowGap + this.end.box.height;
  }

  public override calcCoord(): void {
    this.box.left = (this.clientWidth - this.box.width) / 2;
    this.box.top = this.box.marginTop;
    
    this.start.calcCoord();
    this.children.forEach(child => child.calcCoord());
    this.end.calcCoord();
  }

  public override calcLines(): void {
    this.lines = [];
    const points = [this.start, ...this.children, this.end];
    for (let i = 0; i < points.length - 1; i++) {
      const cur = points[i];
      const next = points[i + 1];
      const line = this.getLineByBox(cur.box, next.box);
      this.lines.push(line);
    }

    this.children.forEach((child) => child.calcLines());
  }
}