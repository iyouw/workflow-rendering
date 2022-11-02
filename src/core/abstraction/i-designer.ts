import type { IModel, INode, INodeMetaDict, IScheduleModel } from "@linker-design/work-flow";
import type { IEventTarget } from "./event/i-event-target";
import type { IRenderer } from "./renderer/i-renderer";

export interface IDesigner extends IEventTarget {
  readonly selectedNode?: INode;
  readonly selectedRenderer?: IRenderer;
  init(metaDict: INodeMetaDict, model?: IModel): void;
  render(): void;
  getSchedule(): Array<IScheduleModel>;
  getModel(): IModel;
}