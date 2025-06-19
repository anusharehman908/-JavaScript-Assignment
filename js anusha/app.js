//____________________________________ALERT____________________________________         TASK 2




//Q1
alert("Welcome to my website!");
// ANS: Alert box will show — "Welcome to my website!"
//Q2
alert("Error! Please enter a valid password.");
// ANS: Alert box will show — "Error! Please enter a valid password."
//Q3
alert("Welcome to JS Land...\nHappy Coding!");
// ANS: Alert box will show — "Welcome to JS Land...
// Happy Coding!"
//Q4
alert("Welcome to JS Land...");
alert("Happy Coding!");
// ANS: Alert box will show — "Welcome to JS Land..." and then "Happy Coding!"
//Q5
alert("Hello... I can run JS through my web browser's console");
// ANS: Alert box will show — "Hello... I can run JS through my web
// browser's console"







//____________________________________VARIABLES FOR STRINGS____________________________________         TASK 2


// Q1 Student Bio Data
let studentName = "Anusha Rehman Qureshi";
let studentAge = "18 years old";
let studentCourse = "Certified Mobile Application Development";

alert(studentName);  
alert(studentAge);  
alert(studentCourse); 
//ANS: Anusha Rehman Qureshi
//ANS: 18 years old 
//ANS: Certified Mobile Application Development









//Q:2

let pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(pizza);
//ANS:  PIZZA
//ANS: PIZZ
//ANS:  PIZ
//ANS:  PI
//ANS:  P






//Q:3

let email = "anusharehmanqureshi@gmail.com";
alert("My email address is " + email);
//ANS:  My email address is anusharehmanqureshi@gmail.com






//Q:4

let book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " + book);
//ANS: I am trying to learn from the Book A smarter way to learn JavaScript




//Q:5
document.writeln("Yah! I can write HTML content through JavaScript");
//ANS: Yah! I can write HTML content through JavaScript












//____________________________________VARIABLES FOR STRINGS____________________________________         TASK 3


//Q:1

let Age = " I am 18 years old";
alert(Age)
//ANS: I am 18 years old



//Q:2

let student = "you have visited this site 14 times";
alert(student);
//ANS: you have visited this site 14 times


//Q:3

let birthInfo = "My birth year is <b>2005</b> <br> Data type of my declared variable is <b>number</b>";
document.writeln(birthInfo);
//ANS: My birth year is 2005
//ANS: Data type of my declared variable is number



//Q:4
let orderMessage = "<b>Anusha Rehman Qureshi</b> ordered 5 T-shirts on <b>XYZ Clothing store</b>";
document.writeln(orderMessage);
//ANS: Anusha Rehman Qureshi ordered 5 T-shirts on XYZ Clothing store









//____________________________________VARIABLE NAMES: LEGAL & ILLEGAL____________________________________         TASK 4

//Q:1


    let name, age, country;

    // 2. Legal and Illegal Variable Names
    let legalNames = ["firstName", "$user", "_age", "user1", "my_var"];
    let illegalNames = ["1name", "my-name", "var", "user name", "alert"];

    document.writeln("<p>1. Variable names can only contain <span class='highlight'>letters</span>, <span class='highlight'>numbers</span>, <span class='highlight'>$</span>, and <span class='highlight'>_</span>.<br>For example: <b>$my_1stVariable</b></p>");
    // Ans:1. Variable names can only contain letters, numbers, $, and _. For example: $my_1stVariable
    document.writeln("<p>2. Variables must begin with a <span class='highlight'>letter</span>, <span class='highlight'>$</span> or <span class='highlight'>_</span>.<br>For example: <b>$name, _name, name</b></p>");
    // Ans:2. Variables must begin with a letter, $ or _. For example: $name, _name, name
    document.writeln("<p>3. Variable names are <b>case sensitive</b>.</p>");
    // Ans:3. Variable names are case sensitive.
    document.writeln("<p>4. Variable names should not be JS <b>keywords</b>.</p>");
    // Ans:4. Variable names should not be JS keywords.

    document.writeln("<h3>Legal Variable Names:</h3><p class='highlight'>" + legalNames.join(", ") + "</p>");
    //Ans: Legal Variable Names:        firstName, $user, _age, user1, my_var

    document.writeln("<h3>Illegal Variable Names:</h3><p class='illegal'>" + illegalNames.join(", ") + "</p>");
    //Ans: Illegal Variable Names:       1name, my-name, var, user name, alert











    //____________________________________MATH EXPRESSIONS____________________________________         TASK 5

//Q:1
    let num1 = 3;
    let num2 = 5;
    let sum = num1 + num2;

    document.writeln("<div class='result'>");
    document.writeln("Sum of " + num1 + " and " + num2 + " is " + sum);
    document.writeln("</div>");
//ANS: Sum of 3 and 5 is 8









//Q:2
let a;
// ANS: undefined

document.write("Value after variable declaration is: " + a + "<br>");
// ANS: Value after variable declaration is: undefined

a = 5;
document.write("Initial value: " + a + "<br>");
// ANS: Initial value: 5

a++;
document.write("Value after increment is: " + a + "<br>");
// ANS: Value after increment is: 6

a = a + 7;
document.write("Value after addition is: " + a + "<br>");
// ANS: Value after addition is: 13

a--;
document.write("Value after decrement is: " + a + "<br>");
// ANS: Value after decrement is: 12

let remainder = a % 3;
document.write("The remainder is: " + remainder + "<br>");
// ANS: The remainder is: 0








//Q:3

let ticketPrice = 600;
let totalCost = ticketPrice * 5;
document.write("Total cost to buy 5 tickets to a movie is " + totalCost + " PKR");
// ANS: Total cost to buy 5 tickets to a movie is 3000 PKR







//Q:4
let number = 5;
// ANS: 5

document.write("<h3>Multiplication Table of " + number + "</h3>");

document.write(number + " x 1 = " + (number * 1) + "<br>");
// ANS: 5 x 1 = 5

document.write(number + " x 2 = " + (number * 2) + "<br>");
// ANS: 5 x 2 = 10

document.write(number + " x 3 = " + (number * 3) + "<br>");
// ANS: 5 x 3 = 15

document.write(number + " x 4 = " + (number * 4) + "<br>");
// ANS: 5 x 4 = 20

document.write(number + " x 5 = " + (number * 5) + "<br>");
// ANS: 5 x 5 = 25

document.write(number + " x 6 = " + (number * 6) + "<br>");
// ANS: 5 x 6 = 30

document.write(number + " x 7 = " + (number * 7) + "<br>");
// ANS: 5 x 7 = 35

document.write(number + " x 8 = " + (number * 8) + "<br>");
// ANS: 5 x 8 = 40

document.write(number + " x 9 = " + (number * 9) + "<br>");
// ANS: 5 x 9 = 45

document.write(number + " x 10 = " + (number * 10) + "<br>");
// ANS: 5 x 10 = 50



//Q:5
// a. Store a Celsius temperature into a variable
let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
document.write(celsius + "°C is " + fahrenheit + "°F<br>");
// ANS: 25°C is 77°F
let cels = (fahren - 32) * 5/9;
// ANS: 21.111...
document.write(fahren + "°F is " + cels.toFixed(2) + "°C<br>");
// ANS: 70°F is 21.11°C





//Q:6
let priceItem1 = 650;
let priceItem2 = 100;
let quantityItem1 = 3;
let quantityItem2 = 7;
let shippingCharges = 100;
let totalCost1 = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;
document.writeln("<h2>Shopping Cart</h2>");
document.writeln("Price of item 1 is " + priceItem1 + " PKR<br>");
// ANS: Price of item 1 is 650 PKR

document.writeln("Quantity of item 1 is " + quantityItem1 + "<br>");
// ANS: Quantity of item 1 is 3

document.writeln("Price of item 2 is " + priceItem2 + " PKR<br>");
// ANS: Price of item 2 is 100 PKR

document.writeln("Quantity of item 2 is " + quantityItem2 + "<br>");
// ANS: Quantity of item 2 is 7

document.writeln("Shipping Charges " + shippingCharges + " PKR<br><br>");
// ANS: Shipping Charges 100 PKR

document.writeln("<strong>Total cost of your order is " + totalCost1 + " PKR</strong>");
// ANS: Total cost of your order is 2750 PKR










//Q:7
let totalMarks = 980;
let marksObtained = 804;    
let percentage = (marksObtained / totalMarks) * 100;
document.writeln("<h2>Marks Sheet</h2>");
document.writeln("Total Marks: " + totalMarks + "<br>");
// ANS: Total Marks: 980
document.writeln("Marks Obtained: " + marksObtained + "<br>");
// ANS: Marks Obtained: 804
document.writeln("Percentage: " + percentage.toFixed(2) + "%<br>");
// ANS: Percentage: 82.04%
document.writeln("Grade: " + (percentage >= 80 ? "A" : percentage >= 70 ? "B" : percentage >= 60 ? "C" : percentage >= 50 ? "D" : "F") + "<br>");
// ANS: Grade: A






//Q:8
let totalCurrency = 10 * 104.80 + 25 * 28;
document.writeln("<h2>Currency in PKR</h2>");
document.writeln("Total Currency in PKR: " + totalCurrency + "<br>");
// ANS: Total Currency in PKR: 1748





//Q:9
let currentYear = 2025;
// ANS: 2025

let birthYear = 2003;
// ANS: 2003

let age1 = currentYear - birthYear;
// ANS: 22

let age2 = age1 - 1;
// ANS: 21

document.write("They are either " + age2 + " or " + age1 + " years old.");
// ANS: They are either 21 or 22 years old.




//Q:10
let radius = 20;
let pi = 3.142;

let circumference = 2 * pi * radius;
let area = pi * radius * radius;

document.write("<h2>The Geometrizer</h2>");

document.write("Radius of a circle is: " + radius + "<br>");
// ANS: Radius of a circle is: 20

document.write("The circumference is: " + circumference + "<br>");
// ANS: The circumference is: 125.68

document.write("The area is: " + area + "<br>");
// ANS: The area is: 1256.8




//Q:11

let favoriteSnack = "Chocolate Chip Cookies";
// ANS: Chocolate Chip Cookies

let currentAge = 22;
let maxAge = 80;

let amountPerDay = 3;

let yearsRemaining = maxAge - currentAge;
// ANS: 80 - 22 = 58

let totalNeeded = yearsRemaining * 365 * amountPerDay;
// ANS: 58 * 365 * 3 = 63,510

document.write("<h2>The Lifetime Supply Calculator</h2>");
document.write("Favorite Snack: " + favoriteSnack + "<br>");
document.write("Current Age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount Per Day: " + amountPerDay + "<br><br>");

document.write(
  "You will need <strong>" +
    totalNeeded +
    " " +
    favoriteSnack +
    "</strong> to last you until the ripe old age of " +
    maxAge +
    "."
);
// ANS: You will need 63510 Chocolate Chip Cookies to last you until the ripe old age of 80.
