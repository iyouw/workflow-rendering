import type { INode } from "@linker-design/work-flow";
import type { IAttachRenderer } from "./i-attach-renderer";
import type { IRenderer } from "./i-renderer";

export interface IRendererFactory {
  createApp(node: INode): IRenderer;
  createAbility(node: INode): IRenderer;
  createIf(node: INode): IRenderer;
  createParallel(node: INode): IRenderer;
  createVirtual(node: INode): IRenderer;
  
  createAppStart(target: IRenderer, node: INode): IAttachRenderer;
  createAppEnd(target: IRenderer, node: INode): IAttachRenderer;
  createIfStart(target: IRenderer, node: INode): IAttachRenderer;
  createIfEnd(target: IRenderer, node: INode): IAttachRenderer;
  createParallelStart(target: IRenderer, node: INode): IAttachRenderer;
  createParallelEnd(target: IRenderer, node: INode): IAttachRenderer;
  createPlus(target: IRenderer, node: INode): IAttachRenderer;
  createDelete(target: IRenderer, node: INode): IAttachRenderer;
  createWarn(target: IRenderer, node: INode): IAttachRenderer;
  createDroper(target: IRenderer, node: INode): IAttachRenderer;
}