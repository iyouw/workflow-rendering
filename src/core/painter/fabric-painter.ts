import type { IPainter } from "../abstraction/i-painter";
import { fabric } from 'fabric';
import type { IShape } from "../abstraction/i-shape";

export class FabricPainter implements IPainter {
  private readonly _painter: fabric.Canvas;

  public rowGap: number = 30;
  public columnGap: number = 50;

  public paddingLeft = 10;
  public paddingRight = 10;
  public paddingTop = 10;
  public paddingBottom = 10;

  constructor(el: string | HTMLCanvasElement){
    this._painter = new fabric.Canvas(el, {
      backgroundColor:'#F1F1F1'
    });
  }

  public get width() {
    return this._painter.width;
  }

  public get height() {
    return this._painter.height;
  }

  public rect(): IShape {

    const width = 200;
    const height = 48;

    const left = this.width &&  ((this.width - this.paddingLeft - this.paddingRight - width ) / 2);
    const top = this.paddingTop;

    const borderRadius = height / 2; 
    const borderColor = '#E4E6E9';
    const selectable = false;

    const geometry = new fabric.Rect({
      left,
      top,
      width,
      height,
      rx: borderRadius,
      ry: borderRadius,
      fill: '#fff',
      stroke: borderColor,
      selectable
    });

    this._painter.add(geometry);

    return geometry;
  }

  public text(text: string): IShape {
    const width = 200;
    const height = 48;

    const left = this.width &&  ((this.width - this.paddingLeft - this.paddingRight - width ) / 2);
    const top =  this.height &&  this.paddingTop + 48 + this.rowGap;

    const fontSize = 12;

    const textAlign = 'center';
    const selectable = false;

    const stroke = 'red';

    const geometry = new fabric.Text(text, {
      left,
      top,
      width,
      height,
      fontSize,
      selectable,
      textAlign,
      stroke
    })

    this._painter.add(geometry);

    return geometry;
  }

  public icon(): IShape {
    // const left = 0;
    // const top = 0;
    // const width = 0;
    // const height = 0;
    // const fontSize = 12;
    // const fontWeight = 400;
    // const textAlign = 'center';
    // const selectable = false;

    // const geometry = new fabric.Text({
    //   left,
    //   top,
    //   width,
    //   height,
    //   fontSize,
    //   fontWeight,
    //   selectable,
    //   textAlign
    // })

    // this._painter.add(geometry);
  }


  public line(): IShape {
    // const left = 0;
    // const top = 0;
    // const width = 0;
    // const height = 0;
    // const fontSize = 12;
    // const fontWeight = 400;
    // const textAlign = 'center';
    // const selectable = false;

    // const geometry = new fabric.Line({
    //   left,
    //   top,
    //   width,
    //   height,
    //   fontSize,
    //   fontWeight,
    //   selectable,
    //   textAlign
    // })

    // this._painter.add(geometry);
  }

  public polyline(): IShape {

  }

  public polygon(): IShape {

  }

  public button(content: string, left?: number, top?: number, width?: number, height?: number, borderRadius?: number, borderStyle?: string,
    borderColor?: string, fontSize?: number, textColor?: string, backgroundColor?: string): IShape {
    
    const selectable = false;

    width ??= 200;
    height ??= 48;

    left ??= this.width &&  ((this.width - this.paddingLeft - this.paddingRight - width ) / 2);
    top ??= this.paddingTop;

    backgroundColor ??= '#fff';

    borderRadius ??= height / 2; 
    borderColor ??= '#E4E6E9';

    fontSize ??= 14;
    textColor ??= '#000';
    const fontFamily = '"Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif';

    const strokeDashArray = borderStyle === 'dashed' ? [ 0, 1, 2 ] :  [0 ];

    const rect = new fabric.Rect({
      rx: borderRadius,
      ry: borderRadius,
      stroke: borderColor,
      fill: backgroundColor,
      width,
      height,
      originX: 'center',
      originY: 'center',
      strokeDashArray,
      selectable
    })

    const text = new fabric.Text(content, {
      fontSize,
      stroke: textColor,
      originX: 'center',
      originY: 'center',
      fontFamily,
      selectable
    })

    const group = new fabric.Group([ rect, text ], {
      left,
      top,
      width,
      height,
      selectable
    })

    this._painter.add(group)

    return group;
  }

  public select(content: string, left?: number, top?: number, width?: number, height?: number, borderRadius?: number, borderStyle?: string,
    borderColor?: string, fontSize?: number, textColor?: string, backgroundColor?: string): IShape {
    
    const selectable = false;

    width ??= 200;
    height ??= 48;

    left ??= this.width &&  ((this.width - this.paddingLeft - this.paddingRight - width ) / 2);
    top ??= this.paddingTop;

    backgroundColor ??= '#fff';

    borderRadius ??= height / 2; 
    borderColor ??= '#E4E6E9';

    fontSize ??= 14;
    textColor ??= '#000';
    const fontFamily = '"Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif';

    const strokeDashArray = borderStyle === 'dashed' ? [ 0, 1, 2 ] :  [0 ];

    const polygon = new fabric.Polygon([
      {
        x: 0,
        y: -height/2,
      },
      {
        x: width / 2,
        y: 0
      },
      {
        x: 0,
        y: height / 2
      },
      {
        x: - width / 2,
        y: 0
      }
    ],{
      stroke: borderColor,
      fill: backgroundColor,
      width,
      height,
      originX: 'center',
      originY: 'center',
      strokeDashArray,
      selectable
    })

    const text = new fabric.Text(content, {
      fontSize,
      stroke: textColor,
      originX: 'center',
      originY: 'center',
      fontFamily,
      selectable
    })

    const group = new fabric.Group([ polygon, text ], {
      left,
      top,
      width,
      height,
      selectable
    })

    this._painter.add(group)

    return group;
  }

  public parallel(){

  }

  public warn(left?: number, top?: number, width?: number, height?: number){
    width ??= 32;
    height ??= 32;
    left ??= this.width &&  ((this.width - this.paddingLeft - this.paddingRight - width ) / 2);
    top ??= this.paddingTop;
    fabric.Image.fromURL('./images/warn.png', img => {
      img.set({left, top, width, height, selectable: false});
      this._painter.add(img);
    });
  }

  public delete() {

  }

  public plus() {

  }

  public render(): void {
    this._painter.renderAll();
  }
}