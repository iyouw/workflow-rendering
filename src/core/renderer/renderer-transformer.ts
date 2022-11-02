import { NodeType, type ICompositionNode, type INode } from "@linker-design/work-flow";
import type { IRenderer } from "../abstraction/renderer/i-renderer";
import type { IRendererFactory } from "../abstraction/renderer/i-renderer-factory";
import type { IRendererTransformer } from "../abstraction/renderer/i-renderer-transfomer";

const isComposition = (node:INode): node is ICompositionNode => node.type.equal(NodeType.App) || node.type.equal(NodeType.If) || node.type.equal(NodeType.Parallel) || node.type.equal(NodeType.Virtual);

export class RendererTransformer implements IRendererTransformer {

  private factory: IRendererFactory

  public constructor(factory: IRendererFactory){
    this.factory = factory;
  }

  public transform(node: INode): IRenderer {
    const renderer = this.createRendererByNode(node);
    if(isComposition(node)){
      for (const child of node.children) {
        renderer.appendChild(this.transform(child));
      }
    }
    return renderer;
  }

  private createRendererByNode(node: INode): IRenderer {
    if(node.type.equal(NodeType.App)){
      return this.factory.createApp(node);
    } else if(node.type.equal(NodeType.Ability)) {
      return this.factory.createAbility(node);
    } else if(node.type.equal(NodeType.If)){
      return this.factory.createIf(node)
    } else if(node.type.equal(NodeType.Parallel)){
      return this.factory.createParallel(node);
    } else if(node.type.equal(NodeType.Virtual)){
      return this.factory.createVirtual(node)
    } else {
      throw new Error('not valid node type');
    }
  }
}