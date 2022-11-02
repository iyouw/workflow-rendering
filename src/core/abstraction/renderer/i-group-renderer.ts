import type { IAttachRenderer } from "./i-attach-renderer";
import type { IRenderer } from "./i-renderer";

export interface IGroupRenderer extends IRenderer {
  start: IAttachRenderer;
  end: IAttachRenderer;
}