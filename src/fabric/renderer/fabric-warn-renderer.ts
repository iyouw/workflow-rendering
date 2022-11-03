import type { IFabricPainter } from "@/core/abstraction/i-fabric-painter";
import type { IRenderer } from "@/core/abstraction/renderer/i-renderer";
import { AttachRenderer } from "@/core/renderer/attach-renderer";
import type { INode } from "@linker-design/work-flow";

export class FabricWarnRenderer extends AttachRenderer {
  private painter: IFabricPainter;
  
  public target: IRenderer;

  public constructor(painter: IFabricPainter, target: IRenderer, node: INode, parent?: IRenderer){
    super(node, parent);

    this.painter = painter;
    this.target = target;
  }

  public override calcCoord(): void {
    this.box.marginRight = 17;
    const { left, centerY } = this.target.box;
    this.box.left = left - this.box.marginRight - this.box.width;
    this.box.top = centerY - this.box.width / 2;
  }

  public override calcDimension(): void {
    this.box.width = 14;
    this.box.height = 14;
  }

  public override render(): void {
    this.painter.icon('./images/warn.png', this.box.width, this.box.height, this.box.left, this.box.top)
    // this.painter.rect(this.box.width, this.box.height, this.box.left, this.box.top);
  }
}