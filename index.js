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
class Triangle extends Polygon{
  get isValid(){
    if (this.countSides===3){
      return (this.sidesAry[0]+this.sidesAry[1]>this.sidesAry[2] &&
      this.sidesAry[0]+this.sidesAry[2]>this.sidesAry[1]&&
      this.sidesAry[1]+this.sidesAry[2]>this.sidesAry[0])
    }
  }
}
