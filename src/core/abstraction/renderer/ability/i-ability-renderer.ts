import type { IAttachRenderer } from "../i-attach-renderer";
import type { IRenderer } from "../i-renderer";

export interface IAbilityRenderer extends IRenderer {
  plus: IAttachRenderer;
  warn: IAttachRenderer;
  deletor: IAttachRenderer;
  droper: IAttachRenderer;
}