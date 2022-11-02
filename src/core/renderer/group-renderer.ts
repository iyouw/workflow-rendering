import type { IAttachRenderer } from "../abstraction/renderer/i-attach-renderer";
import type { IGroupRenderer } from "../abstraction/renderer/i-group-renderer";
import { Renderer } from "./renderer";

export abstract class GroupRenderer extends Renderer implements IGroupRenderer {
  public abstract start: IAttachRenderer;
  public abstract end: IAttachRenderer;
}