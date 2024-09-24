// Code your solution in this file!
const headquarters = 42;
function distanceFromHqInBlocks(block){
return Math.abs(block - headquarters);
}

function distanceFromHqInFeet(block){
const blocklength = 264;
const blocks = distanceFromHqInBlocks(block);
return blocks * blocklength;
}

distanceTravelledInFeet(){
    
}
