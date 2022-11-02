import type { IFabricPainter } from "@/core/abstraction/i-fabric-painter";
import type { IShape } from "@/core/abstraction/shape/i-shape";

import { fabric } from 'fabric'

export class FabricPainter implements IFabricPainter {
  private canvas: fabric.Canvas;

  public clientWidth: number = 0;
  public clientHeight: number = 0;

  public paddingLeft: number = 0;
  public paddingRight: number = 0;
  public paddingTop: number = 80;
  public paddingBottom: number = 0;
  
  public rowGap: number = 60;
  public columnGap: number = 50;

  public constructor(element: string | HTMLCanvasElement, option: any){
    this.canvas = new fabric.Canvas(element, option);
    this.clientWidth = this.canvas.getWidth();
    this.clientHeight = this.canvas.getHeight();
  }

  public rect(width: number, height: number, left?: number, top?: number): IShape {
    const rect = new fabric.Rect({
      width,
      height,
      left,
      top,
      fill: '',
      stroke:'purple'
    })
    this.canvas.add(rect);
    return rect;
  }


  public text(content: string, fontSize: number, left?: number, top?: number): IShape {
    const text = new fabric.Text(content,{
      left,
      top,
      fontSize
    });
    this.canvas.add(text);
    return text;
  }

  public icon(img: string, width: number, height: number, left?: number, top?: number): IShape {
    const image = new Image(width, height)
    image.src = img;

    const icon = new fabric.Image(image,{
      left,
      top
    })

    this.canvas.add(icon);
    return icon;
  }


  public line(): IShape {
    const rect = new fabric.Rect()
    this.canvas.add(rect);
    return rect;
  }

  public polyline(): IShape {
    const rect = new fabric.Rect()
    this.canvas.add(rect);
    return rect;
  }

  public polygon(): IShape {
    const rect = new fabric.Rect()
    this.canvas.add(rect);
    return rect;
  }

  public path(): IShape {
    const rect = new fabric.Rect()
    this.canvas.add(rect);
    return rect;
  }

  public button(text: string, fontSize: number, width: number, height: number, borderRadius: number, left?: number, top?: number): IShape {
    const rect = new fabric.Rect()
    this.canvas.add(rect);
    return rect;
  }

  public if(text: string, fontSize: number, width: number, height: number, borderRadius: number, left?: number, top?: number): IShape {
    const rect = new fabric.Rect()
    this.canvas.add(rect);
    return rect;
  }

  public parallel(text: string, fontSize: number, width: number, height: number, borderRadius: number, left?: number, top?: number): IShape {
    const rect = new fabric.Rect()
    this.canvas.add(rect);
    return rect;
  }
}