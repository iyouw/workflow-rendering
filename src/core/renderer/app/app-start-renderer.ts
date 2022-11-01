import type { IRenderer } from "../../abstraction/renderer/i-renderer";
import type { AppRenderer } from "./app-renderer";
import { DecorateRenderer } from "../decorate-renderer";

export abstract class AppStartRenderer extends DecorateRenderer {
  public abstract plus: IRenderer;
  public abstract droper: IRenderer;

  public get isApp(): boolean {
    return true;
  }

  public calcCoord(): void {
    const { clientWidth } = this.target as AppRenderer;
    const { width, marginTop } = this.box;
    this.box.left = (clientWidth - width) / 2;
    this.box.top = marginTop;
  }
}