import type { IGroupRenderer } from "../abstraction/renderer/i-group-renderer";
import type { IRenderer } from "../abstraction/renderer/i-renderer";
import { Renderer } from "./renderer";

export abstract class GroupRenderer extends Renderer implements IGroupRenderer {
  public abstract start: IRenderer;
  public abstract end: IRenderer;
}