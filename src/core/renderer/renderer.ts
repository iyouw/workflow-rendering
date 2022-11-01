import type { INode } from "@linker-design/work-flow";
import type { IBox } from "../abstraction/i-box";
import type { IRenderer } from "../abstraction/renderer/i-renderer";
import { Box } from "../box";

export abstract class Renderer implements IRenderer {
  public box: IBox;
  public node: INode;
  public parent?: IRenderer;

  public readonly children = new Array<IRenderer>();

  public constructor(node: INode, parent?: IRenderer){
    this.node = node;
    this.parent = parent;
    this.box = new Box();
  }

  public get root(): IRenderer | undefined {
    let root: IRenderer | undefined = this;
    while (root.parent){
      root = root.parent;
    }
    return root.isApp ? root : undefined;
  }

  public get isApp(): boolean {
    return false;
  }

  public get isAbility(): boolean {
    return false
  }

  public get isIf(): boolean {
    return false;
  }

  public get isParallel(): boolean {
    return false
  }

  public get isVirtual(): boolean {
    return false;
  }

  public layout(): void {
    this.calcDimension();
    this.calcCoord();
  }

  public abstract render(): void;

  public abstract calcDimension(): void;

  public abstract calcCoord(): void;
}