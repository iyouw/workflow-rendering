import type { IEvent } from "../abstraction/event/i-event";
import type { IEventHandler } from "../abstraction/event/i-event-handler";
import type { IEventTarget } from "../abstraction/event/i-event-target";

export class EventTarget implements IEventTarget {
  private map = new Map<string, Array<IEventHandler>>();

  public on(type: string, handler: IEventHandler): void {
    const handlers = this.map.get(type);
    if(handlers){
      if(!handlers.some(x => x === handler)) handlers.push(handler);
    } else {
      this.map.set(type, [ handler ]);
    }
  }

  public un(type: string, handler?: IEventHandler | undefined): void {
    if(!handler){
      this.map.delete(type);
    } else {
      const handlers = this.map.get(type);
      if(handlers) {
        const index = handlers.findIndex(x => x === handler);
        if(index !== -1) handlers.splice(index, 1);
      }
    }
  }

  public trigger(type: string, event: IEvent): void {
    const handlers = this.map.get(type);
    if(handlers) handlers.forEach(handler => handler(event));
  }
}