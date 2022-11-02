import type { IAttachRenderer } from "../i-attach-renderer";
import type { IRenderer } from "../i-renderer";

export interface IVirtualRenderer extends IRenderer {
  droper: IAttachRenderer;
}