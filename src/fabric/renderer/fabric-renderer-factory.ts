import type { IFabricPainter } from "@/core/abstraction/i-fabric-painter";
import type { IAttachRenderer } from "@/core/abstraction/renderer/i-attach-renderer";
import type { IRenderer } from "@/core/abstraction/renderer/i-renderer";
import type { IRendererFactory } from "@/core/abstraction/renderer/i-renderer-factory";
import type { INode } from "@linker-design/work-flow";

import { FabricAbilityRenderer } from "./ability/fabric-ability-renderer";
import { FabricAppEndRenderer } from "./app/fabric-app-end-renderer";
import { FabricAppRenderer } from "./app/fabric-app-renderer";
import { FabricAppStartRenderer } from "./app/fabric-app-start-renderer";
import { FabricDeletorRenderer } from "./fabric-deletor-renderer";
import { FabricDroperRenderer } from "./fabric-droper-renderer";
import { FabricPlusRenderer } from "./fabric-plus-renderer";
import { FabricWarnRenderer } from "./fabric-warn-renderer";
import { FabricIfEndRenderer } from "./if/fabric-if-end-renderer";
import { FabricIfRenderer } from "./if/fabric-if-renderer";
import { FabricIfStartRenderer } from "./if/fabric-if-start-renderer";
import { FabricParallelEndRenderer } from "./parallel/fabric-parallel-end-renderer";
import { FabricParallelRenderer } from "./parallel/fabric-parallel-renderer";
import { FabricParallelStartRenderer } from "./parallel/fabric-parallel-start-renderer";
import { FabricVirtualRenderer } from "./virtual/fabric-virtual-renderer";

export class FabricRendererFactory implements IRendererFactory {
  private painter: IFabricPainter;

  public constructor(painter: IFabricPainter) {
    this.painter = painter;
  }

  public createApp(node: INode): IRenderer {
    return new FabricAppRenderer(this.painter, node);
  }

  public createAbility(node: INode): IRenderer {
    return new FabricAbilityRenderer(this.painter, node);
  }

  public createIf(node: INode): IRenderer {
    return new FabricIfRenderer(this.painter, node);
  }

  public createParallel(node: INode): IRenderer {
    return new FabricParallelRenderer(this.painter, node);
  }

  public createVirtual(node: INode): IRenderer {
    return new FabricVirtualRenderer(this.painter, node);
  }
  
  public createAppStart(target: IRenderer, node: INode): IAttachRenderer {
    return new FabricAppStartRenderer(this.painter, target, node, target);
  }

  public createAppEnd(target: IRenderer, node: INode): IAttachRenderer {
    return new FabricAppEndRenderer(this.painter, target, node, target);
  }

  public createIfStart(target: IRenderer, node: INode): IAttachRenderer {
    return new FabricIfStartRenderer(this.painter, target, node, target);
  }

  public createIfEnd(target: IRenderer, node: INode): IAttachRenderer {
    return new FabricIfEndRenderer(this.painter, target, node, target);
  }

  public createParallelStart(target: IRenderer, node: INode): IAttachRenderer {
    return new FabricParallelStartRenderer(this.painter, target, node, target);
  }

  public createParallelEnd(target: IRenderer, node: INode): IAttachRenderer {
    return new FabricParallelEndRenderer(this.painter, target, node, target);
  }

  public createPlus(target: IRenderer, node: INode): IAttachRenderer {
    return new FabricPlusRenderer(this.painter, target, node, target);
  }

  public createDelete(target: IRenderer, node: INode): IAttachRenderer {
    return new FabricDeletorRenderer(this.painter, target, node, target);
  }

  public createWarn(target: IRenderer, node: INode): IAttachRenderer {
    return new FabricWarnRenderer(this.painter, target, node, target);
  }

  public createDroper(target: IRenderer, node: INode): IAttachRenderer {
    return new FabricDroperRenderer(this.painter, target, node, target);
  }
}