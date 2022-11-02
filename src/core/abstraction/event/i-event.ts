import type { IRenderer } from "../renderer/i-renderer";

export interface IEvent {
  type: string;
  target: IRenderer;
  path: Array<IRenderer>;
  [key: string]: unknown;
}