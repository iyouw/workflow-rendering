import type { IAttachRenderer } from "@/core/abstraction/renderer/i-attach-renderer";
import type { IVirtualRenderer } from "@/core/abstraction/renderer/virtual/i-virtual-renderer";
import { Renderer } from "../renderer";

export abstract class VirtualRenderer extends Renderer implements IVirtualRenderer {
  public abstract droper: IAttachRenderer;

  public get isVirtual(): boolean {
    return true;
  }
}