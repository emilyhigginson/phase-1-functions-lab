// hq = 42 */
distanceFromHqInBlocks();
distanceFromHqInFeet();

function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42)
}
function distanceFromHqInFeet(someValue) {
    return Math.abs((someValue - 42) * 264 )
}
function distanceTravelledInFeet(start, destination) {
    return Math.abs((start-destination) *264)
  }
  function calculatesFarePrice(start, destination) {
    if (Math.abs((start-destination) *264) <= 400) {
    return 0
} else if ((Math.abs((start-destination) *264) >= 2500)){
    return 'cannot travel that far'
}else if (2000 <= (Math.abs((start-destination) *264) )){
    return 25   
} else if ( 400 < (Math.abs((start-destination) *264)) < 2000) {
    return ((Math.abs((start-destination) *264) -400)*.02)


  }}