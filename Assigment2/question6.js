function calcDistance(x1,y1,x2,y2){
   let distance = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
   return distance;
}
console.log(calcDistance(0,0,5,5));