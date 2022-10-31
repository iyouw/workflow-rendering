import type { IRenderObject } from "../abstraction/i-render-object";
let ID = 0;

export class RenderObject implements IRenderObject {
  public id: string;
  public left?: number;
  public top?: number;
  public width?: number;
  public height?: number;
  public data?: any;
  public readonly children: Array<IRenderObject>;
  public parent?: IRenderObject;
  public showPlus: boolean;
  public showWarning: boolean;
  public showDelete: boolean;

  constructor(id?: string, parent?: IRenderObject){
    this.id = id ?? `${ID++}`;

    this.children = new Array<IRenderObject>();
    this.parent = parent;
    if(parent) parent.append(this);

    this.showPlus = true;
    this.showWarning = false;
    this.showDelete = false;
  }

  public get centerX(): number | undefined {
    if(this.left && this.width){
      return this.left + this.width / 2;
    }
  }

  public get centerY(): number | undefined{
    if(this.top && this.height){
      return this.top + this.height / 2;
    }
  }

  public get bottom(): number | undefined {
    if(this.top && this.height) return this.top + this.height;
  }

  public get right(): number | undefined {
    if(this.left && this.width) return this.left + this.width;
  }


  public append(node: IRenderObject): IRenderObject {
    this.children.push(node);
    return this;
  }

  public layout(): void {
    this.children.forEach(child=> child.layout());
  }

  public renderDelete(): void {

  }
  public renderWarn(): void {

  }

  public renderEdit(): void {

  }

  public render(): void {

  }
}