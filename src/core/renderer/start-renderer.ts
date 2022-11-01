import type { IRenderer } from "../abstraction/renderer/i-renderer";
import { DecorateRenderer } from "./decorate-renderer";

export abstract class StartRenderer extends DecorateRenderer {
  public abstract warn: IRenderer;
  public abstract deletor: IRenderer;
}