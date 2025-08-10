// Chapter No. 1

// Answer No. 1

alert ("Welcome to my Website");

// Answer No. 2

alert("Error! Please enter a valid password.");

// Answer No. 3

alert("Welcome to JS Land...\nHappy Coding!");

// Answer No. 4

alert("Welcome to JS Land...");
alert("Happy Coding!");

// Answer No. 5

alert("\nHello... I can run JS through my web browser’s console");


// Chapter No. 2

// Answer No. 1

var username;

// Answer No. 2
 
var myName = "Muhammad Shahrukh"

// Answer No. 3

// a) Declare a variable
var message;

// b) Assign a string
message = "Hello World";

// c) Show in alert
alert(message);

// Answer No. 4

var studentName = "Muhammad Shahrukh";
var studentAge = "30 years old";
var studentClass = "Web and App Development";

// Show alerts
alert(studentName);
alert(studentAge);
alert(studentClass);


// Answer No. 5

var pattern = "Pizza\nPizz\nPiz\nPi\nP";
alert(pattern);


// Answer No. 6

var email = "sharhukhayub6111@gmail.com";
alert("My email address is " + email);

// Answer No. 7

var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the book " + book);



// Chapter No. 3

// Answer No. 1

var age = 30;

alert ("I am " + age + " years old");

// Answer No. 2

var count = 14;

alert("You have visited this site " + count +" times");

// Answer No. 3

var birthYear = 1993;

alert("My birth year is " + birthYear + "\nData type of my declared variable is number");

// Answer No. 4

var visitorName = "John Doe";
var productTitle = "T-Shirts";
var quantity = 5;

alert(visitorName + "ordered " + quantity + productTitle + " on XYZ Clothing store");


// Chapter No. 4

// Answer No. 1

var firstName = "Muhammad";
var middleName = "Shahrukh";
var lastName = "Ayub";

alert(firstName + " " + middleName + " " + lastName);

alert(firstName + " " + middleName + " " + lastName);


// Answer No. 2

// Legal Variable

var firstName;     // userName – Starts with a letter.
var _count;       // _count – Starts with an underscore (valid).
var $price;       // $price – Starts with a dollar sign (valid).
var number1;      // total5 – Contains a number but not at the start.
var first_Name;   // my_variable – Uses underscore, which is allowed.

// Illegal Variable

// var var           // Reserved keyword in JavaScript. 
// var 1number;       // Starts with a number (invalid).
// var user-Name;     // Hyphens are not allowed in variable names.
// var My variable;   // Spaces are not allowed.
// var @value;        // @ is not a valid character for variable names.


// Answer No. 2

// b- letters, numbers, underscore, dollar sign
// c- letter, underscore, dollar sign
// d- case sensitive
// e- keywords


// Chapter No. 5

// Answer No. 1 & 2

var firstNum = 4;
var secondNum = 6;

var totalNum = (firstNum + secondNum);

alert(totalNum);

alert(firstNum + secondNum);
alert(firstNum - secondNum);
alert(firstNum * secondNum);


// Answer No. 3

var myNumb;

myNumb = 5;

alert(myNumb)

alert("Initial value: " + myNumb + "'");

myNumb++;

alert("Value after increment is: " + myNumb);

myNumb += 7;

alert("Value after addition is " + myNumb);

myNumb--;

alert("Value after decrement is " + myNumb);

var remainder = myNumb % 3;

alert("The remainder is : " + remainder);


// Answer No. 4

var ticketPrice;
ticketPrice = 600;

var tC = ticketPrice * 5;

alert("Total cost to buy 5 tickets to a movie is " + tC + "PKR");


// Answer No. 5

var num = prompt ("Enter a number for table");

var num = Number(num);

document.write("<h2>" + "Multiplicaion Table of " + num + "</h2>");

document.write("<br>")
document.write("<br>")

document.write(num + " x 1 = " + num * 1 + "<br>");
document.write(num + " x 2 = " + num * 2 + "<br>");
document.write(num + " x 3 = " + num * 3 + "<br>");
document.write(num + " x 4 = " + num * 4 + "<br>");
document.write(num + " x 5 = " + num * 5 + "<br>");
document.write(num + " x 6 = " + num * 6 + "<br>");
document.write(num + " x 7 = " + num * 7 + "<br>");
document.write(num + " x 8 = " + num * 8 + "<br>");
document.write(num + " x 9 = " + num * 9 + "<br>");
document.write(num + " x 10 = " + num *10 + "<br>");

document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")

// Answer No. 6

var celsius = 25;

var fahrenheit = (celsius * 9 / 5) + 32;

document.write(celsius + "&deg;C" + " is " + fahrenheit + "&deg;" + "F");

document.write("<br>")

var fahrenheit2 = 70;

var celsius2 = (fahrenheit2 - 32) * 5 / 9;

document.write(fahrenheit2 + "&deg;F" + " is " + celsius2 + "&deg;C");

document.write("<br>")
document.write("<br>")
document.write("<br>")

// Answer No. 7

var pI1 = 650;
var pI2 = 100;
var shippingCharges = 100;

document.write("<h2>" + "Shopping Cart" + "</h2>" + "<br>");

document.write("Price of item 1 is " + pI1 + " <br> ");
document.write("Quantity of item 1 is 3" + " <br> ");
document.write("Price of item 1 is " + pI2 + " <br> ");
document.write("Quantity of item 2 is 7" + " <br> ");
document.write("Shipping Charges " + shippingCharges);

var totalCost = ((pI1 * 3) + (pI2 * 7));

document.write("<br>")
document.write("<br>")

document.write("Total cost of your order is " + totalCost);

document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")

// Answer No. 8

document.write("<h2>" + "Marks Sheet" + "</h2>" + "<br>");

var totalMarks = 980;
var marksObtained = 804;

document.write("Total Marks: " + totalMarks + "<br>");
document.write("Mark Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + (marksObtained / totalMarks) * 100 + "%" + "<br>");

console.log("Percentage: " + (marksObtained / totalMarks) * 100 + "%");

document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")


document.write("<h2>" + "Currency in PKR" + "</h2>" + "<br>");

document.write("<br>")
document.write("<br>")

var usDollar = 104.80;
var saudiRiyal = 28;

var totalCurrency = (10 * usDollar + 25 * saudiRiyal);



document.write("Total Currency in PKR: " + totalCurrency);

document.write("<br>")
document.write("<br>")


