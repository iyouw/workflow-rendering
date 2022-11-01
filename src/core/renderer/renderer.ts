import type { INode } from "@linker-design/work-flow";
import type { IBox } from "../abstraction/i-box";
import type { IAppRenderer } from "../abstraction/renderer/app/i-app-renderer";
import type { IRenderer } from "../abstraction/renderer/i-renderer";

import { Box } from "../box";
import { isApp, isGroup } from "./is";

export abstract class Renderer implements IRenderer {
  public box: IBox;
  public node: INode;
  public parent?: IRenderer;
  public pre?: IRenderer;

  public readonly children = new Array<IRenderer>();

  public constructor(node: INode, parent?: IRenderer){
    this.node = node;
    this.parent = parent;
    this.box = new Box();
  }

  public get root(): IAppRenderer | undefined {
    let root: IRenderer | undefined = this;
    while (root.parent){
      root = root.parent;
    }
    return isApp(root) ? root : undefined;
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
    return false;
  }

  public get isVirtual(): boolean {
    return false;
  }

  public get isGroup(): boolean {
    return false;
  }

  public appendChild(renderer: IRenderer): IRenderer {
    let pre = this.children[this.children.length - 2];
    if(!pre) pre = isGroup(this) ? this.start : this;
    renderer.pre = pre;
    this.children.push(renderer);
    return this;
  }

  public removeChild(renderer: IRenderer): IRenderer {
    const index = this.children.findIndex(x => x === renderer);
    const next = this.children[index + 1];
    if(next) next.pre = renderer.pre;
    this.children.splice(index, 1);
    return this;
  }

  public appendChildren(renderers: Array<IRenderer>): IRenderer {
    return this;
  }

  public removeChildren(renderers: Array<IRenderer>): IRenderer {

    return this;
  }

  public layout(): void {
    this.calcDimension();
    this.calcCoord();
  }

  public abstract render(): void;

  public abstract calcDimension(): void;

  public abstract calcCoord(): void;
}