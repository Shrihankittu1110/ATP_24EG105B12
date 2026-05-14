/*
 
       ii. task.js - Task operations
                    // TODO: Import validator functions
                    // import { ... } from './validator.js';
                    
                    const tasks = [];
                    
                    // 1. Add new taskfunction addTask(title, priority, dueDate)
                     {
                      // Validate using imported functions
                      // If valid, add to tasks array
                      // Return success/error message
                    }
                    
                    // 2. Get all tasks
                    function getAllTasks() {
                      // Return all tasks
                    }
                    
                    // 3. Mark task as complete
                    function completeTask(taskId) {
                      // Find task and mark as complete
                    }

                  // Export functions
                  */
import { validateTitle, validatePriority, validateDueDate } from "./validator.js";

let tasks = [];
let id = 1;

// 1. Add Task
export function addTask(title, priority, dueDate) {

  if (!validateTitle(title)) {
    return "Invalid Title";
  }

  if (!validatePriority(priority)) {
    return "Invalid Priority";
  }

  if (!validateDueDate(dueDate)) {
    return "Invalid Due Date";
  }

  let task = {
    id: id,
    title: title,
    priority: priority,
    dueDate: dueDate,
    completed: false
  };

  tasks.push(task);
  id++;

  return "Task Added";
}

// 2. Get All Tasks
export function getAllTasks() {
  return tasks;
}

// 3. Complete Task
export function completeTask(taskId) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === taskId) {
      tasks[i].completed = true;
      return "Task Completed";
    }
  }
  return "Task Not Found";
}