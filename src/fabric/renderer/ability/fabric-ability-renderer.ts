import type { IFabricPainter } from "@/core/abstraction/i-fabric-painter";
import type { IAttachRenderer } from "@/core/abstraction/renderer/i-attach-renderer";
import type { IRenderer } from "@/core/abstraction/renderer/i-renderer";
import { AbilityRenderer } from "@/core/renderer/ability/ability-renderer";
import type { INode } from "@linker-design/work-flow";
import { FabricDeletorRenderer } from "../fabric-deletor-renderer";
import { FabricDroperRenderer } from "../fabric-droper-renderer";
import { FabricPlusRenderer } from "../fabric-plus-renderer";
import { FabricWarnRenderer } from "../fabric-warn-renderer";

export class FabricAbilityRenderer extends AbilityRenderer {
  private painter: IFabricPainter;

  public warn: IAttachRenderer;
  public deletor: IAttachRenderer;
  public plus: IAttachRenderer;
  public droper: IAttachRenderer;

  public readonly width = 200;
  public readonly height = 48;

  public constructor(painter: IFabricPainter, node: INode, parent?: IRenderer) {
    super(node, parent);

    this.painter = painter;

    this.warn = new FabricWarnRenderer(this.painter, this, this.node, this);
    this.deletor = new FabricDeletorRenderer(this.painter, this, this.node, this);
    this.plus = new FabricPlusRenderer(this.painter, this, this.node, this);
    this.droper = new FabricDroperRenderer(this.painter, this, this.node, this);
  }

  public override calcDimension(): void {
    this.box.width = this.width;
    this.box.height = this.height;
    this.warn.calcDimension();
  }

  public override calcCoord(): void {
    super.calcCoord();
    this.warn.calcCoord();
  }

  public override render(): void {
    this.painter.button('ability', 12, this.width, this.height, this.box.height / 2, this.box.left, this.box.top);
    this.warn.render();
  }
}