import { GroupRenderer } from "../group-renderer";

export abstract class AppRenderer extends GroupRenderer {
  public abstract clientWidth: number;
  public abstract rowGap: number;
  public abstract columnGap: number;

  public get isApp(): boolean {
    return true;
  }
}