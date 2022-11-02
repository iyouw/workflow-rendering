import type { IAttachRenderer } from "../abstraction/renderer/i-attach-renderer";
import type { IStartRenderer } from "../abstraction/renderer/i-start-renderer";
import { AttachRenderer } from "./attach-renderer";

export abstract class StartRenderer extends AttachRenderer implements IStartRenderer {
  public abstract warn: IAttachRenderer;
  public abstract deletor: IAttachRenderer;
}