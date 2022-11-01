import type { IDecorateRenderer } from "./i-decorate-renderer";
import type { IRenderer } from "./i-renderer";

export interface IGroupRenderer extends IRenderer {
  start: IDecorateRenderer;
  end: IDecorateRenderer;
}