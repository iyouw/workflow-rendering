import type { IRenderer } from "../../abstraction/renderer/i-renderer";
import { DecorateRenderer } from "../decorate-renderer";
import type { IAppRenderer } from "@/core/abstraction/renderer/app/i-app-renderer";

export abstract class AppStartRenderer extends DecorateRenderer {
  public abstract plus: IRenderer;
  public abstract droper: IRenderer;

  public get isApp(): boolean {
    return true;
  }

  public calcCoord(): void {
    const { clientWidth } = this.target as IAppRenderer;
    const { width, marginTop } = this.box;
    this.box.left = (clientWidth - width) / 2;
    this.box.top = marginTop;
  }
}