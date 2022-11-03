import type { IFabricPainter } from "@/core/abstraction/i-fabric-painter";
import type { IAttachRenderer } from "@/core/abstraction/renderer/i-attach-renderer";
import type { IRenderer } from "@/core/abstraction/renderer/i-renderer";
import type { IParallelRenderer } from "@/core/abstraction/renderer/parallel/i-parallel-renderer";
import { ParallelRenderer } from "@/core/renderer/parallel/parallel-renderer";
import type { INode } from "@linker-design/work-flow";
import { FabricVirtualRenderer } from "../virtual/fabric-virtual-renderer";
import { FabricParallelEndRenderer } from "./fabric-parallel-end-renderer";
import { FabricParallelStartRenderer } from "./fabric-parallel-start-renderer";

export class FabricParallelRenderer extends ParallelRenderer {
  private painter: IFabricPainter;

  public start: IAttachRenderer;
  public end: IAttachRenderer;

  public branches: number;

  public constructor(painter: IFabricPainter, node: INode, parent?: IRenderer, branches: number = 2) {
    super(node, parent);

    this.painter = painter;
    this.branches = branches;

    this.start = new FabricParallelStartRenderer(this.painter, this, this.node, this);
    this.end = new FabricParallelEndRenderer(this.painter, this, this.node, this);
    this.setBranches(this.branches);
  }

  public override setBranches(branches: number, nodes?: Array<INode>): IParallelRenderer {
    const diff = branches - this.children.length;
    if (diff < 0){
      this.children.splice(this.children.length + diff - 1, Math.abs(diff));
    }
    if (diff > 0 && nodes && nodes.length >= diff){
      for (let i = 0; i < diff; i++) {
        this.appendChild( new FabricVirtualRenderer(this.painter, nodes[i], this));
      }
    }
    return this;
  }

  public override renderLine(): void {
    this.lines.forEach((line) => this.painter.polyline(line));
  }
}