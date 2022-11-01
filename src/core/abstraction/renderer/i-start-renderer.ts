import type { IDecorateRenderer } from "./i-decorate-renderer";
import type { IRenderer } from "./i-renderer";

export interface IStartRenderer extends IRenderer {
  warn: IDecorateRenderer;
  deletor: IDecorateRenderer;
}