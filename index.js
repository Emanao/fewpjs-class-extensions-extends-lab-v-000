// Your code here
class Polygon{
  constructor(sidesAry){
    this.sidesAry = sidesAry;

  }
  get countSides(){
    return this.sidesAry.length;
  }
  get perimeter(){
    return this.sidesAry.reduce((acc, side)=>acc+=side);
  }
}
