export interface IPainter {
  rect(): void;
  text(text: string): void;
  icon(): void;
  line(): void;
  polyline(): void;
  polygon(): void;
}