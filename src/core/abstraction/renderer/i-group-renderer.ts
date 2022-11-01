import type { IRenderer } from "./i-renderer";

export interface IGroupRenderer extends IRenderer {
  start: IRenderer;
  end: IRenderer;
}