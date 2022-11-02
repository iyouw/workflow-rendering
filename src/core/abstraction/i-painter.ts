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

  rect(width: number, height: number, left?: number, top?: number): T;
  text(text: string, fontSize: number, left?: number, top?: number): T;
  icon(img: string, width: number, height: number, left?: number, top?: number): T;
  line(): T;
  polyline(): T;
  polygon(): T;
  path(): T;
  button(text: string, fontSize: number, width: number, height: number, borderRadius: number, left?: number, top?: number): T;
  if(text: string, fontSize: number, width: number, height: number, left?: number, top?: number): T;
  parallel(text: string, fontSize: number, width: number, height: number, left?: number, top?: number): T;
}