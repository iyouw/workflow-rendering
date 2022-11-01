import type { IAppRenderer } from "@/core/abstraction/renderer/app/i-app-renderer";
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

  public override calcCoord(): void {
    if (!this.parent || !this.root) return;
    const { centerX } = this.parent.box;
    const preBottom = this.pre!.box.bottom;
    this.box.left = centerX - this.box.width / 2;
    this.box.top = preBottom + this.root.rowGap;
  }
}