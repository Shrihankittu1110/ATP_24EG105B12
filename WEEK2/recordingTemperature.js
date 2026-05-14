/*Assignment 1: Daily Temperature Analyzer
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
    const tempeature=[32,35,28,40,38,30,42]
     let r=tempeature.filter((temperature)=>tempeature>35)
     console.log(r)
     let r1=tempeature.map((temperature)=>tempeature*(1.8)+32)
     console.log(r1)
     let r2=temperature