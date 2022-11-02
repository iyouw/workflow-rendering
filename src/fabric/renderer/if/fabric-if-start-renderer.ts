import type { IFabricPainter } from "@/core/abstraction/i-fabric-painter";
import type { IAttachRenderer } from "@/core/abstraction/renderer/i-attach-renderer";
import type { IRenderer } from "@/core/abstraction/renderer/i-renderer";
import { IfStartRenderer } from "@/core/renderer/if/if-start-renderer";
import type { INode } from "@linker-design/work-flow";
import { FabricDeletorRenderer } from "../fabric-deletor-renderer";
import { FabricWarnRenderer } from "../fabric-warn-renderer";

export class FabricIfStartRenderer extends IfStartRenderer {
  private painter: IFabricPainter;

  public target: IRenderer;

  public warn: IAttachRenderer;
  public deletor: IAttachRenderer;

  public constructor(painter: IFabricPainter, target: IRenderer, node: INode, parent?: IRenderer){
    super(node, parent);

    this.painter = painter;
    this.target = target;

    this.warn = new FabricWarnRenderer(this.painter, this, this.node, this);
    this.deletor = new FabricDeletorRenderer(this.painter, this, this.node, this);
  }

  public override calcDimension(): void {
    this.box.width = 200;
    this.box.height = 48;
  }

  public override render(): void {
    this.painter.rect(this.box.width, this.box.height, this.box.left, this.box.top);
  }
}