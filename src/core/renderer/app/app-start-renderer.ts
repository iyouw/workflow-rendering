import { AttachRenderer } from "../attach-renderer";
import type { IAppRenderer } from "@/core/abstraction/renderer/app/i-app-renderer";
import type { IAppStartRenderer } from "@/core/abstraction/renderer/app/i-app-start-renderer";
import type { IAttachRenderer } from "@/core/abstraction/renderer/i-attach-renderer";

export abstract class AppStartRenderer extends AttachRenderer implements IAppStartRenderer {
  public abstract plus: IAttachRenderer;
  public abstract droper: IAttachRenderer;

  public get isApp(): boolean {
    return true;
  }

  public calcCoord(): void {
    const appTarget = this.target as IAppRenderer;
    const { top, centerX } = appTarget.box;
    const { width, marginTop } = this.box;
    this.box.left = centerX - width / 2;
    this.box.top = top + marginTop;
  }
}