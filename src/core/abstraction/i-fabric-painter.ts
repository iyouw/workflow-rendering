import type { IPainter } from "./i-painter";
import type { IShape } from "./shape/i-shape";

export interface IFabricPainter extends IPainter<IShape> {
  
}