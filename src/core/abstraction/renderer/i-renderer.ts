import type { INode } from "@linker-design/work-flow";
import type { IBox } from "../i-box";

export interface IRenderer {
  readonly root: IRenderer | undefined;
  readonly box: IBox;
  node: INode;
  parent?: IRenderer;
  readonly children: Array<IRenderer>;
  readonly isApp: boolean;
  readonly isAbility: boolean;
  readonly isIf: boolean;
  readonly isParallel: boolean;
  readonly isVirtual: boolean;

  layout(): void;
  render(): void;
  calcDimension(): void;
  calcCoord(): void;
}