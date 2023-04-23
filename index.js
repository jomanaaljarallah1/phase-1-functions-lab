// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){
    const ScuberLocation = 42;
   
   let blocks= Math.abs( pickupLocation - ScuberLocation)  ; 
   return blocks;

}

 distanceFromHqInBlocks(50);
 distanceFromHqInBlocks(43);
 distanceFromHqInBlocks(34);

 function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    let feet= distanceFromHqInBlocks(someValue)*264 ;
    return feet;
}
distanceFromHqInFeet(43);
distanceFromHqInFeet(50);
distanceFromHqInFeet(34);

function distanceTravelledInFeet(start, destination){
    let block = Math.abs(destination - start);
  let TravelledInFeet =block *264 ;
  return TravelledInFeet ;  
}
distanceTravelledInFeet(43, 48);
distanceTravelledInFeet(50, 60);
distanceTravelledInFeet(34, 28);

function calculatesFarePrice(start, destination){
let feets = distanceTravelledInFeet(start,destination);
if (feets<=400){
return 0 ; }
else if(feets>400 &&feets<=2000){
return (feets - 400)*0.02;}
else if (feets>2000 && feets<2500)
{
    return 25 ;
}
else( feets>=2500 )
{
    return 'cannot travel that far';
}

}
calculatesFarePrice(43, 44);
calculatesFarePrice(34, 32);
calculatesFarePrice(50, 58);
calculatesFarePrice(34, 24);