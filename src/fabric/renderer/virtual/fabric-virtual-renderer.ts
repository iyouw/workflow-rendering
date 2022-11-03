import type { IFabricPainter } from "@/core/abstraction/i-fabric-painter";
import type { IAttachRenderer } from "@/core/abstraction/renderer/i-attach-renderer";
import type { IRenderer } from "@/core/abstraction/renderer/i-renderer";
import { VirtualRenderer } from "@/core/renderer/virtual/virtual-render";
import type { INode } from "@linker-design/work-flow";
import { FabricDroperRenderer } from "../fabric-droper-renderer";

export class FabricVirtualRenderer extends VirtualRenderer {
  private painter: IFabricPainter;

  public droper: IAttachRenderer;

  public constructor(painter: IFabricPainter, node: INode, parent?: IRenderer) {
    super(node, parent);

    this.painter = painter;

    this.droper = new FabricDroperRenderer(this.painter, this, this.node, this);
  }

  public override renderLine(): void {
    this.lines.forEach(line => this.painter.polyline(line));
  }
}