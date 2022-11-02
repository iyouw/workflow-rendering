import type { IRenderer } from "./i-renderer";

export interface IAttachRenderer extends IRenderer {
  target: IRenderer;
}