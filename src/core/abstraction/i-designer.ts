import type { IModel, IModelParser, IModelTransformer, INode, INodeMetaDict } from "@linker-design/work-flow";
import type { IRenderer } from "./renderer/i-renderer";
import type { IRendererFactory } from "./renderer/i-renderer-factory";

export interface IDesigner {
  readonly modelParser: IModelParser;
  readonly modelTransformer: IModelTransformer;
  readonly rendererFactory: IRendererFactory;
  readonly selectedModel: INode;
  readonly selectedRenderer: IRenderer;
  parserModel(model: IModel, metaDict: INodeMetaDict): void;
  getSchedule(): any;
  getModel(): any;
}