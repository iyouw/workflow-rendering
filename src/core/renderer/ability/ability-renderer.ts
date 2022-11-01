import type { IRenderer } from "@/core/abstraction/renderer/i-renderer";
import { Renderer } from "../renderer";

export abstract class AbilityRenderer extends Renderer {
  public abstract plus: IRenderer;
  public abstract warn: IRenderer;
  public abstract deletor: IRenderer;
  public abstract droper: IRenderer;

  public get isAbility(): boolean {
    return true;
  }
}