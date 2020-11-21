"use strict"

var books = [];

function book(name, topic, pages, isbnNum){
    this.name = name;
    this.topic = topic;
    this.pages = pages;
    this.isbnNum = isbnNum;
    this.getBookInfo = function(){
        
    };
    console.log("book: " + this.name + "\nTopic: " + this.topic + "\nPages: " + this.pages + "\nISBN: " + this.isbnNum + "\n-----");
}


books.push(new book("Harry Potter", "Magic", 470, "25252"));
books.push(new book("Art of War", "Strategy", 320, "32323"));
books.push(new book("Shining", "Horror", 400, "11114"));

function addBooks(){
    var bookAdd = prompt("How many books do you want to add?", "Enter a numeric number");
    
    bookAdd = parseInt(bookAdd);

    if (bookAdd){} // fånga error om bookAdd ej kan parseint
    
    for(var i = 0; i < bookAdd; i++){
        books.push(new book(prompt("Enter book title"), prompt("Enter genre"), prompt("Enter pages"), prompt("Enter ISBN number")));
    }
};

