/*
Assignment 3: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system.

Test data:
const marks = [78, 92, 35, 88, 40, 67];

Tasks:
    1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92
    */
   const marks = [78, 92, 35, 88, 40, 67];

//  Filter pass marks (≥ 40)
const passedStudents=marks.filter(function(mark){
    return mark>=40;
});
console.log("Passed:",passedStudents);

//  Add 5 grace marks
const updatedMarks=marks.map(function(mark){
    return mark+5;
});
console.log("With Grace:", updatedMarks);

//  Find highest mark using reduce
const highestMark=marks.reduce(function(max,mark){
    return mark>max?mark:max;
});
console.log("Highest:",highestMark);

//  First mark below 40
const firstFail=marks.find(function(mark){
    return mark<40;
});
console.log("First Fail:",firstFail);

//  Find index of 92
const indexOf92=marks.findIndex(function(mark){
    return mark==92;
});
console.log("Index of 92:",indexOf92);