/*
Problem Statement: Library Book Management System
-------------------------------------------------
Objective : Create a Book class and use it to manage a collection of books in a library.

Requirements:
  Create a Book class with the following:

  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)


  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise




  1. Create at least 5 book objects using the class:
      Example: "Harry Potter", "1984", "The Hobbit", etc.


  2. Perform the following operations:

      i. Display info of all books
      ii. Borrow 2 books and show their availability status
      iii. Return 1 book and show updated status
      iv. Count how many books are "long books" (more than 300 pages)
      v. List all available books
	*/

	class Libary{
		title;
		autor;
		pages;
		isAvailable;

		constructor(title,author,pages,isAvailable){
			this.title=title;
			this.author=author;
			this.pages=pages;
			this.isAvailable=isAvailable;
		}
		borrow(){
			this.isAvailable=false;
		}
		returnBook(){
			this.isAvailable=true;
		}
		getInfo(){
			return (`The title is ${this.title} and author is ${this.author} and pages are ${this.pages}`)
		}
		isLongBook(){
			if(this.pages>500){
				return true;
			}
			else{
				return false;
			}
		}
	}
	//create the object
	const b1=new Libary('fybwvfbw','vfwuf',400,true)
	const b2=new Libary('vfbwbf','uyvqf',700,true)
	const b3=new Libary('pobfb','phwf',800,true)
	const b4=new Libary('uwfvc','yrefe',550,true)
	const b5=new Libary('bcyre','aiuif',650,true)
	console.log(b1.getInfo())
	console.log(b2.getInfo())
	console.log(b3.getInfo())
	console.log(b1.isLongBook())
	b1.borrow()
	console.log(b1.isAvailable)
	b3.borrow()
	console.log(b3.isAvailable)
	b3.returnBook()
	console.log(b3.isAvailable)
