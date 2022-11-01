import type { IRenderer } from "../i-renderer";

export interface IVirtualRenderer extends IRenderer {
  droper: IRenderer;
}