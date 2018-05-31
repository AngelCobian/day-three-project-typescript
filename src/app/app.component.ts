import { Component, OnInit } from '@angular/core';

class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  add(newPoint: Point) {
    return newPoint = new Point( newPoint.x + this.x, newPoint.y + this.y);
  }
}
class Point3D extends Point {
  z: number;
  constructor(x: number, y: number, z: number) {
    super(x, y);
    this.z = z;
  }
  add(newPoint3D: Point3D) {
    return newPoint3D = new Point3D( newPoint3D.x + this.x, newPoint3D.y + this.y, newPoint3D.z + this.z);
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';


  ngOnInit() {
    this.liveTestingza();
  }
  liveTestingza() {
    const p1 = new Point( 21, 41);
    const p2 = new Point(51, 841);
    const p3 = p1.add(p2);
    const p3D1 = new Point3D(3, 5, 838);
    const p3D2 = new Point3D(878, 35, 3466);
    const p3D3 = p3D1.add(p3D2);
    console.log(p3);
    console.log(p3D3);
  }
}
