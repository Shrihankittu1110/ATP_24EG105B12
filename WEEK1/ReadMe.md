WEEK 1 - Basics of JavaScript
📌 Introduction

JavaScript is one of the most widely used programming languages for building websites, web applications, mobile applications, and backend services.
This repository contains beginner-level JavaScript programs created to practice and understand the core fundamentals of programming logic.

The exercises included in this week focus on:

Conditional statements
Loops
Arrays
Searching techniques
Aggregation logic
Object manipulation

These are simple console-based programs where results are displayed in the terminal using Node.js.

This project acts as the foundation for learning advanced JavaScript concepts in future weeks.

🎯 Objectives of This Week

The main objective of this repository is to understand how programming logic works using JavaScript.

After completing these exercises, learners will be able to:

Understand conditional statements
Traverse arrays using loops
Implement searching logic
Work with arrays and objects
Build logical thinking and problem-solving skills
🛠️ Technologies Used
Technology	Purpose
JavaScript	Programming language
Node.js	Runtime environment
📂 Project Structure
WEEK-1-Basics-of-JavaScript/
│
├── Biggest_of_2Numbers.js
├── Biggest_of_3Numbers.js
├── FindingBigAmong_3numbers(arr).js
├── FIndingSmallAmongArr.js
├── OperationsWithEmpDetails.js
├── serarchingElementInArr.js
├── sumOfAnArr.js
└── README.md
⚙️ Prerequisites

Before running the programs, ensure the following software is installed on your system.

✅ Node.js

Node.js is required to execute JavaScript files outside the browser.

Check Node.js Installation
node -v

If installed successfully, the version number will appear in the terminal.

▶️ How To Run The Programs
Step 1: Open Terminal

You can use:

VS Code Terminal
Command Prompt
PowerShell
Git Bash
Step 2: Navigate To Project Folder
cd WEEK-1-Basics-of-JavaScript
Step 3: Run JavaScript Files
node Biggest_of_2Numbers.js

Similarly, any JavaScript file can be executed using Node.js.

📘 Detailed Explanation of Programs
1️⃣ Biggest_of_2Numbers.js
📌 Definition

This program compares two numbers and prints which number is larger.

This is one of the most basic examples used to understand:

Conditional statements
Comparison operators
Decision making
🧠 Concepts Used
Concept	Definition	Why It Is Used
Variables	Used to store data values	To store numbers
if/else	Conditional statement used for decision making	To compare values
Comparison Operators	Operators used to compare values	To identify bigger number
console.log()	Used to display output	To print result
🔍 Logic Explanation

The program stores two values in variables and compares them using a conditional statement.
If the first number is greater, it prints the first number; otherwise, it prints the second number.

2️⃣ Biggest_of_3Numbers.js
📌 Definition

This program finds the largest number among three numbers using multiple conditions.

🧠 Concepts Used
Concept	Definition	Why It Is Used
if Statement	Executes block when condition is true	First comparison
else if	Checks another condition	Additional comparison
else	Executes remaining case	Handles final possibility
Logical AND (&&)	Combines multiple conditions	Checks multiple comparisons
🔍 Logic Explanation

The program compares three numbers step by step:

Checks whether the first number is greater than the other two.
If false, checks the second number.
Otherwise, the third number is considered the largest.
3️⃣ FindingBigAmong_3numbers(arr).js
📌 Definition

This program finds the largest element present inside an array.

🧠 Concepts Used
Concept	Definition	Why It Is Used
Arrays	Collection of multiple values	To store numbers
Loops	Repeats execution	To traverse array
Functions	Reusable block of code	To perform operation
Maximum Tracking	Keeping track of largest value	To update maximum element
🔍 Logic Explanation

The program assumes the first element is the largest value initially.
Then it traverses the array and compares every element with the current maximum value.
Whenever a larger value is found, the maximum value gets updated.

4️⃣ FIndingSmallAmongArr.js
📌 Definition

This program finds the smallest value present inside an array.

🧠 Concepts Used
Concept	Definition	Why It Is Used
Arrays	Stores multiple values	To hold numbers
Loops	Iterates repeatedly	To scan all elements
Minimum Tracking	Keeps track of smallest value	To update minimum element
🔍 Logic Explanation

The program initially assumes the first element is the smallest.
Then it traverses the array and compares all elements one by one.
If a smaller element is found, the minimum value gets updated.

5️⃣ OperationsWithEmpDetails.js
📌 Definition

This program demonstrates operations performed on employee records stored as objects inside an array.

The operations resemble CRUD operations:

Create
Read
Update
Delete
🧠 Concepts Used
Concept	Definition	Why It Is Used
Objects	Stores data as key-value pairs	Employee information
Arrays of Objects	Multiple structured records	Employee database
Insert Operation	Adds new record	Add employee
Update Operation	Modifies existing data	Change employee details
Delete Operation	Removes record	Delete employee
🔍 Logic Explanation

The program:

Creates employee records using objects.
Stores them inside an array.
Demonstrates inserting a new employee.
Updates existing employee information.
Removes an employee record from the array.
6️⃣ serarchingElementInArr.js
📌 Definition

This program implements Linear Search to find an element inside an array.

Linear Search checks elements one by one until the target value is found.

🧠 Concepts Used
Concept	Definition	Why It Is Used
Searching	Process of finding data	Locate target element
Loop Traversal	Accessing all elements sequentially	Compare each element
Equality Operator	Compares values	Match target value
🔍 Logic Explanation

The program traverses the array from beginning to end:

Compares every element with the target value.
If a match is found, its index is returned.
If traversal completes without finding the element, it returns "Not Found".
7️⃣ sumOfAnArr.js
📌 Definition

This program calculates the sum of all elements present inside an array.

🧠 Concepts Used
Concept	Definition	Why It Is Used
Arrays	Collection of values	Store numbers
Loops	Repeats operations	Traverse array
Accumulator Pattern	Running total storage	Calculate sum
Addition Assignment Operator	Short form addition	Efficient summation
🔍 Logic Explanation

The program initializes a variable called sum with value 0.
Then it traverses the array and continuously adds each element to the sum variable.
After traversal is completed, the total sum is printed.

📚 Core JavaScript Concepts Learned
Concept	Description
Variables	Store data values
Arrays	Store multiple values
Objects	Structured key-value storage
Loops	Repeat execution
Conditions	Decision making
Functions	Reusable logic blocks
Searching	Finding elements
Aggregation	Combining values
🌍 Real World Applications
Concept	Real World Usage
Searching Arrays	Contact searching systems
Sum Calculation	Billing applications
Finding Maximum	Highest marks calculation
Finding Minimum	Lowest price detection
CRUD Operations	Employee management systems
Conditional Statements	Login validation systems
🚀 Skills Gained

After completing this week, learners will be able to:

Write basic JavaScript programs
Understand logical problem solving
Traverse arrays efficiently
Work with objects and arrays
Implement searching techniques
Debug beginner-level programs
