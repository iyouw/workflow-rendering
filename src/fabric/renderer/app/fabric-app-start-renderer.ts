import type { IFabricPainter } from "@/core/abstraction/i-fabric-painter";
import type { IAttachRenderer } from "@/core/abstraction/renderer/i-attach-renderer";
import type { IRenderer } from "@/core/abstraction/renderer/i-renderer";
import { AppStartRenderer } from "@/core/renderer/app/app-start-renderer";
import type { INode } from "@linker-design/work-flow";
import { FabricDroperRenderer } from "../fabric-droper-renderer";
import { FabricPlusRenderer } from "../fabric-plus-renderer";

export class FabricAppStartRenderer extends AppStartRenderer {
  private painter: IFabricPainter;

  public target: IRenderer;

  public plus: IAttachRenderer;
  public droper: IAttachRenderer;

  public constructor(painter: IFabricPainter, target: IRenderer, node: INode, parent?: IRenderer) {
    super(node, parent);

    this.painter = painter;
    this.target = target;

    this.plus = new FabricPlusRenderer(this.painter, this, this.node, this);
    this.droper = new FabricDroperRenderer(this.painter, this, this.node, this);
  }

  public override calcDimension(): void {
    // we need dynamic calc, because of the deference status  of this node
    this.box.width = 60;
    this.box.height = 60;
  }

  public override render(): void {
    this.painter.button('开始', 12, this.box.width, this.box.height, this.box.height / 2, this.box.left, this.box.top);
  }
}