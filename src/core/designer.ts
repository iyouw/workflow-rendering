import { NodeFactory, NodeType, type IModel, type IModelParser, type IModelTransformer, type INode, type INodeMetaDict, type IScheduleModel, type IScheduleTransformer } from "@linker-design/work-flow";
import type { IDesigner } from "./abstraction/i-designer";
import type { IRenderer } from "./abstraction/renderer/i-renderer";
import type { IRendererFactory } from "./abstraction/renderer/i-renderer-factory";
import type { IRendererTransformer } from "./abstraction/renderer/i-renderer-transfomer";
import { EventTarget } from "./event/event-target";

export class Designer extends EventTarget implements IDesigner {
  private _selectedRenderer?: IRenderer;
  private metaDict?: INodeMetaDict;

  private nodeTree?: INode;
  private rendererTree?: IRenderer;

  private modelParser: IModelParser;
  private modelTransformer: IModelTransformer;
  private scheduleTransformer: IScheduleTransformer;
  private rendererTransformer: IRendererTransformer;

  private rendererFactory: IRendererFactory;

  public constructor(
    modelParser: IModelParser, 
    modelTransformer: IModelTransformer, 
    scheduleTransformer: IScheduleTransformer, 
    rendererTransformer: IRendererTransformer,
    rendererFactory: IRendererFactory
  ){
    super();

    this.modelParser = modelParser;
    this.modelTransformer = modelTransformer;
    this.scheduleTransformer = scheduleTransformer;
    this.rendererTransformer = rendererTransformer;

    this.rendererFactory = rendererFactory;
  }

  public get selectedNode(): INode | undefined {
    return this._selectedRenderer?.node;
  }

  public get selectedRenderer(): IRenderer | undefined {
    return this._selectedRenderer;
  }

  public init(metaDict: INodeMetaDict, model?: IModel): void {
    this.metaDict = metaDict;
    this.initNodeTree(metaDict, model);
    this.initRendererTree();
  }

  public render(): void {
    this.rendererTree?.layout();
    this.rendererTree?.render();
  }

  public parseModel(model: IModel, metaDict: INodeMetaDict): INode {
    return this.modelParser.parse(model, metaDict);
  }

  public getSchedule(): Array<IScheduleModel> {
    return this.scheduleTransformer.transform(this.nodeTree!);
  }

  public getModel(): IModel {
    return this.modelTransformer.transform(this.nodeTree!);
  }

  private initNodeTree(metaDict: INodeMetaDict, model?: IModel): void {
    if (model){
      this.nodeTree = this.parseModel(model, metaDict);
    } else {
      this.nodeTree = NodeFactory.Create(NodeType.App.value, metaDict[NodeType.App.key]);
    }
  }

  private initRendererTree(): void {
    this.rendererTree = this.rendererTransformer.transform(this.nodeTree!);
  }
}