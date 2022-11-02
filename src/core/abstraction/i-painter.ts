import type { IShape } from "./shape/i-shape";

export interface IPainter<T extends IShape> {
  clientWidth: number;
  clientHeight: number;

  paddingLeft: number;
  paddingRight: number;
  paddingTop: number;
  paddingBottom: number;
  
  rowGap: number;
  columnGap: number;

  rect(): T;
  text(text: string): T;
  icon(): T;
  line(): T;
  polyline(): T;
  polygon(): T;
  button(text: string): T;
}