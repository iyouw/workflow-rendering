import type { IAbilityRenderer } from "@/core/abstraction/renderer/ability/i-ability-renderer";
import type { IAttachRenderer } from "@/core/abstraction/renderer/i-attach-renderer";;
import { Renderer } from "../renderer";

export abstract class AbilityRenderer extends Renderer implements IAbilityRenderer {
  public abstract plus: IAttachRenderer;
  public abstract warn: IAttachRenderer;
  public abstract deletor: IAttachRenderer;
  public abstract droper: IAttachRenderer;

  public get isAbility(): boolean {
    return true;
  }

  public override calcCoord(): void {
    if (!this.parent || !this.root) return;
    const { centerX } = this.parent.box;
    const preBottom = this.pre()!.box.bottom;
    this.box.left = centerX - this.box.width / 2;
    this.box.top = preBottom + this.root.rowGap;
  }
}