import type { IEvent } from "./i-event";

export interface IEventHandler {
  (event: IEvent): void;
}