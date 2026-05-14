
import { addTask, getAllTasks, completeTask } from "./task.js";

console.log(addTask("Study", "high", "2026-12-31"));
console.log(addTask("Do", "medium", "2026-01-01"));   // Invalid
console.log(addTask("sleeping","high","2026-12-31"));

console.log("All Tasks:");
console.log(getAllTasks());

console.log(completeTask(1));

console.log("After Completing:");
console.log(getAllTasks());

