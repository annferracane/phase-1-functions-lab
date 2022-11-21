// Code your solution in this file!

function distanceFromHqInBlocks(currentBlock) {
    return Math.abs(42 - currentBlock);
}

function distanceFromHqInFeet(currentBlock) {
    return distanceFromHqInBlocks(currentBlock) * 264; 
}

function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(start - destination);
    return blocksTravelled * 264; 

}

/*
Given the same starting and ending block as the previous test (hint hint), 
return the fare for the customer. The first four hundred feet are free. 
For a distance between 400 and 2000 feet, the price is 2 cents per foot 
(not including 400, which are free!). Then Scuber charges a flat fare for a distance over 
2000 feet and under 2500 feet. Finally, Scuber does not allow any rides over 2500 feet — the 
function returns 'cannot travel that far' if a ride over 2500 feet is requested.
*/

function calculatesFarePrice(start, destination) {
    const blocksTravelled = distanceTravelledInFeet(start, destination);

    if(blocksTravelled < 400) {

    } else if (blocksTravelled)

}
