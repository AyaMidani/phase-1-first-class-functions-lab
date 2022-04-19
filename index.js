function returnFirstTwoDrivers()
{
    const returnFirstTwoDrivers=function(array=[ 'Antonia', 'Nuru' ,'Lia'])
    {
        return array.slice(0,2);
    }
    return returnFirstTwoDrivers();
}
console.log(returnFirstTwoDrivers())
function returnLastTwoDrivers()
{
    const LastTwoDrivers=function(array=[ 'Antonia', 'Nuru' ,'Amari', 'Mo'])
    {
        return array.slice(-2);
    }
    return LastTwoDrivers();
}
console.log(returnLastTwoDrivers())
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]
const createFareMultiplier = function (fareMultiplier) {
    return function(number) {
      return fareMultiplier * number;
    }
  }
console.log(createFareMultiplier(5))
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
function selectDifferentDrivers(array=[ 'Antonia', 'Nuru' ,'Amari', 'Mo'], somefunction) {
    return somefunction(array);
  }
