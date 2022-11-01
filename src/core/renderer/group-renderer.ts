import type { IRenderer } from "../abstraction/renderer/i-renderer";
import { Renderer } from "./renderer";

export abstract class GroupRenderer extends Renderer {
  public abstract start: IRenderer;
  public abstract end: IRenderer;
}