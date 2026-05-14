# WEEK 2 - Array Methods, Timers, and Mini Projects

## Overview
This week covers common JavaScript array methods, rest parameters, timer functions, shallow versus deep copying, and two small modular problem statements.

## Files

### BankTransactionAnalyzer.js
Analyzes a list of bank transactions by filtering credits, extracting amounts, calculating the running balance, and finding specific entries.

### CopyExtendArray.js
Demonstrates how the spread operator can be used to copy and extend arrays and objects without mutating the original values.

### DailyTemperatureAnalyzer.js
Analyzes a temperature list by filtering hot days, converting Celsius to Fahrenheit, calculating the average, finding the first high temperature, and locating a value by index.

### EmployeePayrollProcessor.js
Processes employee salary data, filters IT employees, calculates net salary with bonus, computes total payout, and searches for a specific employee and salary.

### MovieStreamingPlatform.js
Processes a list of movies by filtering a genre, formatting display strings, calculating average rating, and searching for a movie title.

### Online CourseNameProcessor.js
Processes a course-name list by filtering longer names, converting them to uppercase, joining them into one string, and searching for a specific course.

### recordingTemperature.js
An incomplete temperature-processing script. It appears to be a rough or broken version of the temperature analyzer exercise.

### restParameter.js
Shows how rest parameters work by defining a `findsum(...a)` style function and accumulating values across arguments.

### setInterval.js
Simulates an OTP resend countdown using `setInterval`.

### setTimeout.js
Simulates an exam workflow using `setTimeout` to delay follow-up messages.

### ShallowDeepCopy.js
Compares shallow copying and deep copying, showing how nested objects behave differently in each case.

### shoppingcartsummary.js
Summarizes a shopping cart by filtering in-stock items, mapping totals, calculating a grand total, and finding specific products.

### StudentMarksList.js
Works with a marks array to filter passing scores, add grace marks, find the highest score, locate the first failing score, and find an index by value.

### StudentPerformanceDashboard.js
Begins a dashboard-style marks analysis with filters and grading logic, but the file appears incomplete and does not finish every planned calculation.

## ProblemStatment Folder

### LibaryManagementSystem.js
Implements a small library model with book details, borrowing, returning, and book information utilities.

### EcommerceShopping/
Contains a modular ecommerce demo with separate files for products, cart handling, discounts, payment, and an application entry point.

#### product.js
Stores the product catalog and provides product lookup and stock helpers.

#### cart.js
Manages cart operations such as add, remove, update quantity, total calculation, and clearing the cart.

#### discount.js
Defines coupon handling and discount calculation.

#### payment.js
Coordinates checkout by validating payment, applying discounts, updating stock, and producing an order summary.

#### app.js
Runs the ecommerce demo flow and prints products, cart data, and checkout output.

### TaskManagementSystem/
Contains a modular task manager with validation, task creation, completion, and a demo app.

#### validator.js
Validates task title, priority, and due date.

#### task.js
Stores tasks in memory, supports task creation, listing, and completion.

#### app.js
Demonstrates task creation, validation, and completion.

## Concepts Covered
- `filter` for conditional selection
- `map` for transforming arrays
- `reduce` for totals and summaries
- `find` and `findIndex` for lookups
- `...rest` parameters
- `setTimeout` and `setInterval`
- Shallow copy versus deep copy
- Module-based project structure
- In-memory CRUD-style logic

## How To Run
Use Node.js to run any file directly:

```bash
node DailyTemperatureAnalyzer.js
node shoppingcartsummary.js
node setTimeout.js
node ProblemStatment/EcommerceShopping/app.js
node ProblemStatment/TaskManagementSystem/app.js
```

## Notes
- These scripts demonstrate practical array-method patterns.
- Several files use fixed sample data to keep the focus on transformation logic.
- `recordingTemperature.js` and `StudentPerformanceDashboard.js` look incomplete and may need follow-up work before they can be used as finished examples.
- The project files are organized by concept rather than by framework.
