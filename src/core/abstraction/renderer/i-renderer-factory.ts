import type { INode } from "@linker-design/work-flow";
import type { IRenderer } from "./i-renderer";

export interface IRendererFactory {
  createApp(node: INode): IRenderer;
  createAbility(node: INode): IRenderer;
  createIf(node: INode): IRenderer;
  createParallel(node: INode): IRenderer;
  createVirtual(node: INode): IRenderer;
  createPlus(target: IRenderer, node: INode): IRenderer;
  createDelete(target: IRenderer, node: INode): IRenderer;
  createWarn(target: IRenderer, node: INode): IRenderer;
  createDroper(target: IRenderer, node: INode): IRenderer;
}