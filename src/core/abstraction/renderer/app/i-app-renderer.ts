import type { IGroupRenderer } from "../i-group-renderer";

export interface IAppRenderer extends IGroupRenderer {
  clientWidth: number;
  rowGap: number;
  columnGap: number;
}