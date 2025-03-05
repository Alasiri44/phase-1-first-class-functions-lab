// Code your solution in this file!
const drivers = ['Antonio','Nuru','Amari','Mo'];

const returnFirstTwoDrivers = (arrayPassed) => {
    return arrayPassed.slice(0,2);
}

const returnLastTwoDrivers = (arrayPassed) => {
    return arrayPassed.slice(-2);
}


const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];


function createFareMultiplier(value){
    return function fareMultiplier(){
        return value ** 2;
    }
}

const fareDoubler = (value) => value * 2;

const fareTripler = (value)=> value * 3;

function selectDifferentDrivers(drivers, functionPassed){
    return functionPassed(drivers);
    
}