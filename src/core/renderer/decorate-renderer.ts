import type { IRenderer } from "../abstraction/renderer/i-renderer";
import { Renderer } from "./renderer";

export abstract class DecorateRenderer extends Renderer {
  public abstract target: IRenderer;
}