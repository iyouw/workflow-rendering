import type { IAttachRenderer } from "../i-attach-renderer";

export interface IAppStartRenderer extends IAttachRenderer {
  plus: IAttachRenderer;
  droper: IAttachRenderer;
}