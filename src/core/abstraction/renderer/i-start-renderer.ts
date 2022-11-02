import type { IAttachRenderer } from "./i-attach-renderer";

export interface IStartRenderer extends IAttachRenderer {
  warn: IAttachRenderer;
  deletor: IAttachRenderer;
}