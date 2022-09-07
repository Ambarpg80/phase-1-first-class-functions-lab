// Code your solution in this file!

const returnFirstTwoDrivers = function(names){
   names = ['Antonia', 'Nuru', 'Amari', 'Mo']
    return names.slice(0,2);
}
returnFirstTwoDrivers();

const returnLastTwoDrivers = function(names){
    names = ['Antonia', 'Nuru', 'Amari', 'Mo']
     return names.slice(2);
 }
 returnLastTwoDrivers();

 const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(number){
   return function fareMultiplier(number2){
    return number * number2;
}

}
createFareMultiplier(2);
createFareMultiplier(5);
;

function fareDoubler(number){
    return number * 2;
}
fareDoubler(10);

function fareTripler(number){
    return number * 3;
}
fareTripler(12);


function selectDifferentDrivers(drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'],returnFirstTwoDrivers){
    return returnFirstTwoDrivers();
}
function selectDifferentDrivers(drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'],returnLastTwoDrivers){
    return returnLastTwoDrivers();
}