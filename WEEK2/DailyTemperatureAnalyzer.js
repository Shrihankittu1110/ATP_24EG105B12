/*
Assignment 1: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app.

Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28
*/


const temperatures = [32, 35, 28, 40, 38, 30, 42];

// Filter temperatures above 35
const highTemperatures=temperatures.filter(function(temp){
    return temp>35;
});
console.log("Above 35:",highTemperatures);

// Convert Celsius to Fahrenheit
const fahrenheitTemps=temperatures.map(function(temp){
    return (temp*9/5)+32;
});
console.log("Fahrenheit:",fahrenheitTemps);

//  Calculate Average using reduce
const totalTemp=temperatures.reduce(function(sum,temp){
    return sum+temp;
},0);

const averageTemp=totalTemp/temperatures.length;
console.log("Average Temperature:",averageTemp);

// First temperature above 40
const firstAbove40=temperatures.find(function(temp){
    return temp>40;
});
console.log("First Above 40:",firstAbove40);

//  Index of temperature 28
const indexOf28=temperatures.findIndex(function(temp){
    return temp==28;
});
console.log("Index of 28:",indexOf28);































