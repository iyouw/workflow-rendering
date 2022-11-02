import type { IFabricPainter } from "@/core/abstraction/i-fabric-painter";
import type { IRenderer } from "@/core/abstraction/renderer/i-renderer";
import { ParallelEndRenderer } from "@/core/renderer/parallel/parallel-end-renderer";
import type { INode } from "@linker-design/work-flow";

export class FabricParallelEndRenderer extends ParallelEndRenderer {
  private painter: IFabricPainter;

  public target: IRenderer;

  public constructor(painter: IFabricPainter, target: IRenderer, node: INode, parent?: IRenderer) {
    super(node, parent);

    this.painter = painter;
    this.target = target;
  }

  public override calcDimension(): void {
    this.box.width = 200;
    this.box.height = 48;
  }

  public override render(): void {
    this.painter.rect(this.box.width, this.box.height, this.box.left, this.box.top);
  }
}