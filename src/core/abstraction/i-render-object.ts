export interface IRenderObject {
  id: string;
  left?: number;
  top?: number;
  right?: number;
  bottom?: number;
  width?: number;
  height?: number;
  rowGap?: number;
  columnGap?: number;
  readonly centerX?: number;
  readonly centerY?: number;
  data?: any;
  readonly children: Array<IRenderObject>;
  parent?: IRenderObject;
  showWarning: boolean;
  showDelete: boolean;

  append(node: IRenderObject): IRenderObject;

  layout(): void;

  renderDelete(): void;
  renderWarn(): void;
  renderEdit(): void;
  render(): void;
}