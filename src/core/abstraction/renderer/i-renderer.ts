import type { INode } from "@linker-design/work-flow";
import type { IBox } from "../i-box";
import type { IPoint } from "../shape/i-point";
import type { IAppRenderer } from "./app/i-app-renderer";

export interface IRenderer {
  readonly root?: IAppRenderer;
  readonly box: IBox;

  node: INode;
  parent?: IRenderer;
  selected: boolean;
  lines: Array<Array<IPoint>>;

  readonly children: Array<IRenderer>;
  readonly isApp: boolean;
  readonly isAbility: boolean;
  readonly isIf: boolean;
  readonly isParallel: boolean;
  readonly isVirtual: boolean;
  readonly isGroup: boolean;
  readonly isAttach: boolean;

  appendChild(renderer: IRenderer): IRenderer;
  removeChild(renderer: IRenderer): IRenderer;
  appendChildren(renderers: Array<IRenderer>): IRenderer;
  removeChildren(renderers: Array<IRenderer>): IRenderer;

  pre(): IRenderer | undefined;
  next(): IRenderer | undefined;

  layout(): void;
  render(): void;

  calcDimension(): void;
  calcCoord(): void;
  calcLines(): void;

  renderLine(): void;

  getLineByBox(start: IBox, end: IBox): Array<IPoint>;
}