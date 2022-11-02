import type { IFabricPainter } from "@/core/abstraction/i-fabric-painter";
import type { IRenderer } from "@/core/abstraction/renderer/i-renderer";
import { AppEndRenderer } from "@/core/renderer/app/app-end-renderer";
import type { INode } from "@linker-design/work-flow";

export class FabricAppEndRenderer extends AppEndRenderer {
  private painter: IFabricPainter;

  public target: IRenderer;

  public constructor(painter: IFabricPainter, target: IRenderer, node: INode, parent?: IRenderer) {
    super(node, parent);

    this.painter = painter;
    this.target = target;
  }

  public override calcDimension(): void {
    this.box.width = 60;
    this.box.height = 60;
  }

  public override render(): void {
    this.painter.button('结束', 12, this.box.width, this.box.height, this.box.height / 2, this.box.left, this.box.top);
  }
}