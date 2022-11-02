import type { IEvent } from "./i-event";
import type { IEventHandler } from "./i-event-handler";

export interface IEventTarget {
  on(type: string, handler: IEventHandler): void;
  un(type: string, handler?: IEventHandler): void;
  trigger(type: string, event: IEvent): void;
}