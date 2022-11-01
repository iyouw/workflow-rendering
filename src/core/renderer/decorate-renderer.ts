import type { IRenderer } from "../abstraction/i-renderer";
import { Renderer } from "./renderer";

export abstract class DecorateRenderer extends Renderer {
  public abstract target: IRenderer;
}