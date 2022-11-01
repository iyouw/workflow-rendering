import type { IRenderer } from "../i-renderer";

export interface IAbilityRenderer extends IRenderer {
  plus: IRenderer;
  warn: IRenderer;
  deletor: IRenderer;
  droper: IRenderer;
}