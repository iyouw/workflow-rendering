import type { IFabricPainter } from "@/core/abstraction/i-fabric-painter";
import type { IAttachRenderer } from "@/core/abstraction/renderer/i-attach-renderer";
import type { IRenderer } from "@/core/abstraction/renderer/i-renderer";
import { IfRenderer } from "@/core/renderer/if/if-renderer";
import type { INode } from "@linker-design/work-flow";
import { FabricVirtualRenderer } from "../virtual/fabric-virtual-renderer";
import { FabricIfEndRenderer } from "./fabric-if-end-renderer";
import { FabricIfStartRenderer } from "./fabric-if-start-renderer";

export class FabricIfRenderer extends IfRenderer {
  private painter: IFabricPainter;

  public branches: number;
  public start: IAttachRenderer;
  public end: IAttachRenderer;

  public constructor(painter: IFabricPainter, node: INode, parent?: IRenderer, branches: number = 2) {
    super(node, parent);

    this.painter = painter
    this.branches = branches;
    this.start = new FabricIfStartRenderer(this.painter, this, this.node, this);
    this.end = new FabricIfEndRenderer(this.painter, this, this.node, this);

    this.setBranches(this.branches);
  }

  public override setBranches(branches: number, nodes?: Array<INode>): FabricIfRenderer {
    const diff = branches - this.children.length;
    if(diff < 0){
      this.children.splice(this.children.length + diff - 1, Math.abs(diff));
    }
    if(diff > 0 && nodes && nodes.length >= diff){
      for (let i = 0; i < diff; i++) {
        this.appendChild(new FabricVirtualRenderer(this.painter, nodes[i], this));
      }
    }
    return this;
  }

  public override render(): void {
    this.start.render();
    this.children.forEach(child => child.render());
    this.end.render();
  }
}