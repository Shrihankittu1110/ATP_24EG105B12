WEEK 2 - Array Methods, Timers, and Mini Projects

📌 Introduction

This week focuses on intermediate-level JavaScript concepts that are commonly used in real-world applications.
The exercises are designed to improve understanding of array methods, timers, rest parameters, copying techniques, and modular project structures.

The programs included in this repository demonstrate how JavaScript can be used to:

Process and analyze data
Transform arrays efficiently
Perform searching and aggregation
Handle asynchronous timing functions
Manage modular application logic
Build small project-based systems

The examples are console-based and executed using Node.js.

This week strengthens problem-solving skills and introduces cleaner, more scalable coding practices.

🎯 Objectives of This Week

The main objective of this repository is to understand advanced array operations and modular JavaScript development.

After completing these exercises, learners will be able to:

Use array methods effectively
Work with timers using JavaScript
Understand rest parameters
Differentiate shallow copy and deep copy
Build modular applications
Process structured datasets
Perform CRUD-like operations in memory
🛠️ Technologies Used
Technology	Purpose
JavaScript	Programming language
Node.js	Runtime environment

📂 Project Structure

WEEK-2-Array-Methods-Timers-and-Mini-Projects/
│
├── BankTransactionAnalyzer.js
├── CopyExtendArray.js
├── DailyTemperatureAnalyzer.js
├── EmployeePayrollProcessor.js
├── MovieStreamingPlatform.js
├── Online CourseNameProcessor.js
├── recordingTemperature.js
├── restParameter.js
├── setInterval.js
├── setTimeout.js
├── ShallowDeepCopy.js
├── shoppingcartsummary.js
├── StudentMarksList.js
├── StudentPerformanceDashboard.js
│
├── ProblemStatment/
│   │
│   ├── LibaryManagementSystem.js
│   │
│   ├── EcommerceShopping/
│   │   ├── product.js
│   │   ├── cart.js
│   │   ├── discount.js
│   │   ├── payment.js
│   │   └── app.js
│   │
│   └── TaskManagementSystem/
│       ├── validator.js
│       ├── task.js
│       └── app.js
│
└── README.md
⚙️ Prerequisites

Before running the programs, ensure the following software is installed.

✅ Node.js

Node.js is required to execute JavaScript files outside the browser.

Check Node.js Installation
node -v

If installed successfully, the version number will appear.

▶️ How To Run The Programs

Step 1: Open Terminal

You can use:

VS Code Terminal
Command Prompt
PowerShell
Git Bash
Step 2: Navigate To Project Folder
cd WEEK-2-Array-Methods-Timers-and-Mini-Projects
Step 3: Run JavaScript Files
node DailyTemperatureAnalyzer.js

Run modular applications:

node ProblemStatment/EcommerceShopping/app.js
node ProblemStatment/TaskManagementSystem/app.js


📘 Detailed Explanation of Programs

1️⃣ BankTransactionAnalyzer.js

📌 Definition

This program analyzes a collection of bank transactions and performs multiple operations on transaction data.

🧠 Concepts Used

Concept	Definition	Why It Is Used
filter()	Selects matching elements	Find credit transactions
map()	Transforms array elements	Extract amounts
reduce()	Combines values into single result	Calculate balance
find()	Finds first matching element	Search transaction

🔍 Logic Explanation

The program processes transaction records by:

Filtering transactions based on type
Extracting transaction amounts
Calculating total account balance
Searching for specific entries

This resembles real-world banking systems where transaction histories are analyzed dynamically.

2️⃣ CopyExtendArray.js

📌 Definition

This program demonstrates how arrays and objects can be copied and extended using the spread operator.

🧠 Concepts Used

Concept	Definition	Why It Is Used
Spread Operator (...)	Expands array/object values	Copy and extend data
Array Copying	Creates duplicate arrays	Prevent mutation
Object Copying	Creates duplicate objects	Maintain original data

🔍 Logic Explanation

The program creates copies of arrays and objects instead of directly modifying the originals.
This helps avoid unwanted side effects and improves data safety.

This technique is commonly used in:

React.js state management
Immutable programming
Data updates

3️⃣ DailyTemperatureAnalyzer.js

📌 Definition

This program analyzes temperature records using different array methods.

🧠 Concepts Used

Concept	Definition	Why It Is Used
filter()	Select values conditionally	Find hot days
map()	Transform values	Convert Celsius to Fahrenheit
reduce()	Aggregate values	Calculate average
find()	Search matching value	Locate high temperature
findIndex()	Find index position	Search array position

🔍 Logic Explanation

The program:

Filters temperatures above a threshold
Converts temperatures to another scale
Calculates average temperature
Finds specific temperature values

This resembles weather analysis systems.

4️⃣ EmployeePayrollProcessor.js

📌 Definition

This program processes employee salary data and performs payroll-related calculations.

🧠 Concepts Used

Concept	Definition	Why It Is Used
Objects	Store employee details	Employee records
filter()	Select employees	IT department filtering
map()	Modify salary values	Bonus calculation
reduce()	Total accumulation	Total payout

🔍 Logic Explanation

The program:

Filters employees by department
Calculates updated salaries with bonuses
Computes overall payroll payout
Searches employee records

This resembles HR and payroll management systems.

5️⃣ MovieStreamingPlatform.js

📌 Definition

This program simulates a simple movie streaming platform dataset analysis.

🧠 Concepts Used

Concept	Definition	Why It Is Used
filter()	Selects movies	Genre filtering
map()	Formats data	Display formatting
reduce()	Calculates totals	Average rating
find()	Searches movie	Locate title

🔍 Logic Explanation

The program processes movie data by:

Filtering genres
Formatting movie display strings
Calculating average ratings
Searching for specific movies

This resembles OTT platform recommendation systems.

6️⃣ Online CourseNameProcessor.js

📌 Definition

This program processes course names using array transformation methods.

🧠 Concepts Used

Concept	Definition	Why It Is Used
filter()	Select matching items	Long course names
map()	Transform values	Convert uppercase
join()	Combines array values	Create string
includes()	Checks existence	Search course

🔍 Logic Explanation

The program filters and formats course names, then combines them into a single string for display.

This resembles educational platform course processing systems.

7️⃣ recordingTemperature.js

📌 Definition

This file appears to be an incomplete or experimental version of the temperature analyzer project.

🧠 Concepts Used

Concept	Definition	Why It Is Used
Arrays	Store values	Temperature records
Loops	Traverse data	Process temperatures

🔍 Logic Explanation

The script seems intended for temperature processing but does not complete all required calculations.

It may have been used for practice or testing.

8️⃣ restParameter.js

📌 Definition

This program demonstrates how rest parameters work in JavaScript functions.

🧠 Concepts Used

Concept	Definition	Why It Is Used
Rest Parameters (...)	Collect multiple arguments	Flexible functions
Functions	Reusable logic	Sum calculation
Loops	Iterate values	Accumulate total

🔍 Logic Explanation

The function accepts multiple values dynamically and stores them as an array.
The values are then summed together.

This technique is useful when the number of inputs is unknown.

9️⃣ setInterval.js

📌 Definition

This program demonstrates repeated execution using setInterval().

🧠 Concepts Used
Concept	Definition	Why It Is Used
setInterval()	Executes repeatedly after interval	Countdown simulation
Timers	Delayed execution	OTP resend timer

🔍 Logic Explanation


The program repeatedly executes logic after a fixed delay to simulate countdown behavior.

This resembles:

OTP resend systems
Timer applications
Auto-refresh systems

🔟 setTimeout.js

📌 Definition

This program demonstrates delayed execution using setTimeout().

🧠 Concepts Used

Concept	Definition	Why It Is Used
setTimeout()	Executes once after delay	Delayed workflow
Asynchronous Execution	Non-blocking execution	Simulate processes

🔍 Logic Explanation

The program delays certain actions for a specified time duration.

This resembles:

Notification systems
Exam submission timers
Delayed alerts

1️⃣1️⃣ ShallowDeepCopy.js

📌 Definition

This program explains the difference between shallow copy and deep copy.

🧠 Concepts Used
Concept	Definition	Why It Is Used
Shallow Copy	Copies top-level values only	Demonstrate reference behavior
Deep Copy	Copies complete nested structure	Independent duplication
Nested Objects	Objects inside objects	Compare modifications

🔍 Logic Explanation

The program demonstrates how nested objects behave differently when copied shallowly versus deeply.

This concept is important in:

React state management
Redux
Object manipulation

1️⃣2️⃣ shoppingcartsummary.js

📌 Definition

This program analyzes shopping cart data and calculates totals.

🧠 Concepts Used

Concept	Definition	Why It Is Used
filter()	Select available products	In-stock filtering
map()	Transform product data	Calculate totals
reduce()	Aggregate values	Grand total
find()	Search products	Locate item
🔍 Logic Explanation

The program:

Filters available products
Calculates product totals
Computes overall cart amount
Searches for products

This resembles ecommerce cart systems.

1️⃣3️⃣ StudentMarksList.js

📌 Definition

This program processes student marks using multiple array methods.

🧠 Concepts Used

Concept	Definition	Why It Is Used
filter()	Select passing marks	Passing students
map()	Modify marks	Grace marks
reduce()	Aggregate values	Highest score
find()	Locate value	First failing student
findIndex()	Search position	Index lookup

🔍 Logic Explanation

The program performs:

Passing score filtering
Grace mark addition
Highest score identification
Failure detection

This resembles academic result processing systems.

1️⃣4️⃣ StudentPerformanceDashboard.js

📌 Definition

This file appears to be the beginning of a dashboard-based student performance analyzer.

🧠 Concepts Used

Concept	Definition	Why It Is Used
Filtering	Select data	Student analysis
Grading Logic	Categorize performance	Dashboard system

🔍 Logic Explanation

The file starts implementing performance analysis features but appears incomplete.

It may have been intended for a larger analytics dashboard.

📂 ProblemStatement Folder

📚 LibraryManagementSystem.js

📌 Definition

This project simulates a simple library management system.

🧠 Concepts Used

Concept	Definition	Why It Is Used
Objects	Store book details	Book records
CRUD Operations	Create, update, delete	Manage library
Functions	Reusable operations	Borrow/return system

🔍 Logic Explanation

The system handles:

Book storage
Borrowing books
Returning books
Displaying book details

This resembles real library management software.

🛒 EcommerceShopping Project

📌 Definition

This is a modular ecommerce shopping system divided into multiple files.

product.js

Stores product catalog data and stock-related helper functions.

cart.js

Handles:

Add to cart
Remove from cart
Update quantity
Calculate totals
Clear cart
discount.js

Manages:

Coupon validation
Discount calculations
payment.js

Handles:

Payment validation
Checkout flow
Discount application
Order summary generation
app.js

Acts as the main entry point that runs the ecommerce demo.

🔍 Overall Logic

This project demonstrates modular programming where different responsibilities are separated into individual files.

This resembles real-world ecommerce applications.

✅ TaskManagementSystem Project

📌 Definition

This project simulates a modular task management system.

validator.js

Validates:

Task title
Task priority
Due date
task.js

Handles:

Task creation
Task storage
Completion tracking
Task listing
app.js

Runs the demo workflow for task management operations.

🔍 Overall Logic

This project demonstrates:

Validation systems
Task lifecycle management
Modular file structures

This resembles productivity and project management applications.

📚 Core JavaScript Concepts Learned

Concept	Description
filter()	Conditional selection
map()	Data transformation
reduce()	Aggregation and totals
find()	Search first match
findIndex()	Locate position
Rest Parameters	Dynamic arguments
Timers	Delayed execution
Spread Operator	Copy and extend data
Modules	Separate application logic
CRUD Operations	Data management

🌍 Real World Applications

Concept	Real World Usage
Payroll Processing	HR systems
Shopping Cart	Ecommerce websites
Timers	OTP systems
Dashboard Analytics	Reporting platforms
Task Management	Productivity tools
Library Systems	Book tracking
Movie Filtering	Streaming platforms
🚀 Skills Gained


After completing this week, learners will be able to:

Use advanced array methods
Build modular JavaScript applications
Process structured datasets
Work with timers
Implement CRUD operations
Understand shallow vs deep copying
Develop scalable project structures
## Notes
- These scripts demonstrate practical array-method patterns.
- Several files use fixed sample data to keep the focus on transformation logic.
- `recordingTemperature.js` and `StudentPerformanceDashboard.js` look incomplete and may need follow-up work before they can be used as finished examples.
- The project files are organized by concept rather than by framework.
