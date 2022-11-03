import type { IFabricPainter } from "@/core/abstraction/i-fabric-painter";
import type { IPoint } from "@/core/abstraction/shape/i-point";
import type { IShape } from "@/core/abstraction/shape/i-shape";

import { fabric } from 'fabric'

export class FabricPainter implements IFabricPainter {
  private canvas: fabric.Canvas;

  public clientWidth: number = 0;
  public clientHeight: number = 0;

  public paddingLeft: number = 0;
  public paddingRight: number = 0;
  public paddingTop: number = 50;
  public paddingBottom: number = 0;
  
  public rowGap: number = 60;
  public columnGap: number = 80;

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
      stroke: 'purple',
      selectable: false
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
    fabric.Image.fromURL(img, image =>{
      this.canvas.add(image)
    },{
      left,
      top,
      scaleX: 0.5,
      scaleY: 0.5,
      selectable: false
    })
    return new fabric.Rect();
  }


  public line(): IShape {
    const rect = new fabric.Rect()
    this.canvas.add(rect);
    return rect;
  }

  public polyline(points: Array<IPoint>): IShape {
    const polyline = new fabric.Polyline(points,{
      stroke: 'red',
      fill:'',
      selectable: false,
      
    })
    this.canvas.add(polyline);
    return polyline;
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

  public button(content: string, fontSize: number, width: number, height: number, borderRadius: number, left?: number, top?: number): IShape {
    const rect = new fabric.Rect({
      width,
      height,
      rx: borderRadius,
      ry: borderRadius,
      originX:'center',
      originY: 'center',
      fill: '',
      stroke: 'purple',
      selectable: false
    });

    const text = new fabric.Text(content,{
      fontSize,
      originX: 'center',
      originY: 'center'
    })

    const group = new fabric.Group([rect, text],{
      left,
      top,
      selectable: false
    });

    group.on('mouseover', e=>{
      console.log('mouse enter');
      rect.set({stroke:'blue'});
      this.canvas.renderAll();
    })

    group.on('mouseout', e=>{
      rect.set({stroke:'cyan'});
      this.canvas.renderAll();
    })

    this.canvas.add(group);
    return group;
  }

  public if(content: string, fontSize: number, width: number, height: number, left?: number, top?: number): IShape {
    const points = [
      { x: 0, y: -height / 2 },
      { x: width / 2, y: 0 },
      { x: 0, y: height / 2 },
      { x: -width / 2, y: 0 }
    ];
    const polygon = new fabric.Polygon(points, {
      width,
      height,
      originX:'center',
      originY: 'center',
      fill: '',
      stroke: 'purple',
      selectable: false
    });

    const text = new fabric.Text(content,{
      fontSize,
      originX: 'center',
      originY: 'center'
    })

    const group = new fabric.Group([polygon, text], {
      left,
      top,
      selectable: false
    });

    this.canvas.add(group);
    return group;
  }

  public parallel(content: string, fontSize: number, width: number, height: number, left?: number, top?: number): IShape {
    const points = [
      { x: 0, y: -height / 2 },
      { x: width / 2, y: 0 },
      { x: 0, y: height / 2 },
      { x: -width / 2, y: 0 }
    ];
    const polygon = new fabric.Polygon(points, {
      width,
      height,
      originX:'center',
      originY: 'center',
      fill: '',
      stroke: 'purple',
      selectable: false
    });

    const text = new fabric.Text(content,{
      fontSize,
      originX: 'center',
      originY: 'center'
    })

    const group = new fabric.Group([polygon, text], {
      left,
      top,
      selectable: false
    });

    this.canvas.add(group);
    return group;
  }
}