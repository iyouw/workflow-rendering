import type { IFabricPainter } from "@/core/abstraction/i-fabric-painter";
import type { IAttachRenderer } from "@/core/abstraction/renderer/i-attach-renderer";
import type { IRenderer } from "@/core/abstraction/renderer/i-renderer";
import { AppRenderer } from "@/core/renderer/app/app-renderer";
import type { INode } from "@linker-design/work-flow";
import { FabricAppEndRenderer } from "./fabric-app-end-renderer";
import { FabricAppStartRenderer } from "./fabric-app-start-renderer";

export class FabricAppRenderer extends AppRenderer {
  private painter: IFabricPainter;

  public clientWidth: number;
  public rowGap: number;
  public columnGap: number;

  public start: IAttachRenderer;
  public end: IAttachRenderer;

  public constructor(painter: IFabricPainter, node: INode, parent?: IRenderer){
    super(node, parent);

    this.painter = painter;
    
    this.clientWidth = this.painter.clientWidth;
    this.rowGap = this.painter.rowGap;
    this.columnGap = this.painter.columnGap;
    this.box.marginTop = this.painter.paddingTop;

    this.start = new FabricAppStartRenderer(this.painter, this, this.node, this);
    this.end = new FabricAppEndRenderer(this.painter, this, this.node, this);
  }

  public override renderLine(): void {
    this.lines.forEach((line) => this.painter.polyline(line));
  }
}