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
class Square extends Polygon{
  get isValid(){
    if (this.countSides===4){
      const sqLength = this.sidesAry[0];
      return this.sidesAry.every(side=>side===sqLength)
    }
  }
  get area(){
    if (this.countSides===4 && this.isValid){
        return Math.pow(this.sidesAry[0],2);
    }
  }
}
