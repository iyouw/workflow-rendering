import type { IShape } from "./i-shape";

export interface IPainter {
  paddingLeft: number;
  paddingRight: number;
  paddingTop: number;
  paddingBottom: number;
  rowGap: number;
  columnGap: number;

  rect(): IShape;
  text(text: string): IShape;
  icon(): IShape;
  line(): IShape;
  polyline(): IShape;
  polygon(): IShape;
}