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
  public selected: boolean = false;

  public _children = new Array<IRenderer>();

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

  public get children(): Array<IRenderer> {
    return this._children;
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

  public get isAttach(): boolean {
    return false;
  }

  public appendChild(renderer: IRenderer): IRenderer {
    this.children.push(renderer);
    renderer.parent = this;
    return this;
  }

  public removeChild(renderer: IRenderer): IRenderer {
    const index = this.children.findIndex(x => x === renderer);
    if(index !== -1) this.children.splice(index, 1);
    renderer.parent = undefined;
    return this;
  }

  public appendChildren(renderers: Array<IRenderer>): IRenderer {
    renderers.forEach(renderer=> this.appendChild(renderer));
    return this;
  }

  public removeChildren(renderers: Array<IRenderer>): IRenderer {
    renderers.forEach(renderer=> this.removeChild(renderer));
    return this;
  }

  public pre(): IRenderer | undefined {
    if(!this.parent) return undefined;
    const index = this.parent.children.indexOf(this);
    let pre = this.parent.children[index - 1];
    if(!pre){
      pre = isGroup(this.parent) ? this.parent.start : this.parent;
    }
    return pre;
  }

  public next(): IRenderer | undefined {
    if(!this.parent) return undefined;
    const index = this.parent.children.indexOf(this);
    return this.parent.children[index + 1];
  }

  public layout(): void {
    this.calcDimension();
    this.calcCoord();
  }

  public abstract render(): void;

  public abstract calcDimension(): void;

  public abstract calcCoord(): void;
}