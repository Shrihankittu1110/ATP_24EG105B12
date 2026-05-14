/*
Assignment 2: Online Course Name Processor
------------------------------------------
Scenario : You are preparing a course list for display on a website.

Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];


Tasks:
    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node"
*/

const courses = ["javascript", "react", "node", "mongodb", "express"];

// Courses with name length > 5
const longCourses = courses.filter(function(course){
    return course.length>5;
});
console.log("Length > 5:", longCourses);

//  Convert to uppercase
const upperCaseCourses=courses.map(function(course){
    return course.toUpperCase();
});
console.log("Uppercase:",upperCaseCourses);

//  Generate single string using reduce
const combinedString=courses
    .map(course=>course.toUpperCase())
    .reduce(function(result,course,index){
        if(index ==0){
            return course;
        } else{
            return result+"|"+course;
        }
    });

console.log("Combined String:",combinedString);

//  Find "react"
const foundReact = courses.find(function(course){
    return course =="react";
});
console.log("Found:",foundReact);

//  Find index of "node"
const nodeIndex=courses.findIndex(function(course){
    return course=="node";
});
console.log("Index of node:",nodeIndex);