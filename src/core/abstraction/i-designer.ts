import type { IModel, INode, INodeMetaDict } from "@linker-design/work-flow";
import type { IEventTarget } from "./event/i-event-target";
import type { IRenderer } from "./renderer/i-renderer";

export interface IDesigner extends IEventTarget {
  readonly selectedNode?: INode;
  readonly selectedRenderer?: IRenderer;
  parseModel(model: IModel, metaDict: INodeMetaDict): void;
  getSchedule(): any;
  getModel(): any;
}