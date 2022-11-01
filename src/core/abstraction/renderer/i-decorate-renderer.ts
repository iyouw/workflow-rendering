import type { IRenderer } from "./i-renderer";

export interface IDecorateRenderer extends IRenderer {
  attachment: IRenderer;
}