import type { IAttachRenderer } from "@/core/abstraction/renderer/i-attach-renderer";
import type { IVirtualRenderer } from "@/core/abstraction/renderer/virtual/i-virtual-renderer";
import { isAttach } from "../is";
import { Renderer } from "../renderer";

export abstract class VirtualRenderer extends Renderer implements IVirtualRenderer {
  public abstract droper: IAttachRenderer;

  public get isVirtual(): boolean {
    return true;
  }

  public override calcDimension(): void {
    if(!this.root) return;

    if(!this.children.length){
      this.droper.calcDimension();
      this.box.width = this.droper.box.width;
      this.box.height = this.droper.box.height;
      return;
    }

    this.children.forEach(child => child.calcDimension());

    const childWidths = this.children.map(child => child.box.width);
    const maxChildWidth = Math.max(...childWidths);
    this.box.width = maxChildWidth;

    const childHeights = this.children.reduce((ret, child)=> (ret += child.box.height) && ret, 0) + this.root.rowGap * (this.children.length - 1);
    this.box.height = childHeights;
  }

  public override calcCoord(): void {
    if(!this.root) return;

    const pre = this.pre();
    if(!pre) return;

    const { rowGap, columnGap } = this.root;

    if(isAttach(pre)){
      this.box.left = this.parent!.box.left;
      this.box.top = pre.box.bottom + rowGap;
    } else {
      this.box.left = pre.box.right + columnGap;
      this.box.top = pre.box.top;
    }

    if(!this.children.length){
      this.droper.calcCoord();
    } else {
      this.children.forEach(child => child.calcCoord());
    }
  }
}