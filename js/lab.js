'use strict';

var day = new Date();
var flag;
function userName() {
    var name = prompt("Name (don't use numbers)");
    if (/\d/.test(name) || name === null) {  //not my code (from stack overflow)
        ///checks if the string has any numbers/// if it has numbers (true ) if not false
        return userName();  //will call the prompt again if there's numbers 
    }else { 
        return name; //there's no numbers will return the name
         }
}
function storeOpen(currentH) {
    if (currentH >= 10 && currentH <= 13) {
        if (13 - currentH == 1) {
            document.write("<h3> You have " + (13 - currentH) + " hour to place an order </h3>");

        } else {
            document.write("<h3> You have " + (13 - currentH) + " hours to place an order </h3>");
        }
        return true;
    } else {

        document.write("<h3> Orders are closed </h3>");

        if (currentH <= 10) {
            document.write("<p> We will open in  " + (10 - currentH) + " hours </p>");

        } else if (currentH >= 13) {
            document.write("<p> Come again tomorrow </p>");

        }
        return false;
    }
}
function welcomeNote(fl) {
    if (fl) {
        confirm("you can place an order");
    } else {
        confirm("sorry we're closed");
    }

}
function howManyCookies (){

    var cookie = prompt("How many cookies you would like to order?");
    while(cookie === null || cookie == 0){
        cookie = prompt("How many cookies you would like to order? ( will loop if 0 or null) ");
    }
    document.write('<p> '+ cookie +' cookies have been placed in the oven <p>'); //this should only work when the orders are open
    //call it in the storeOpen function and not let the 
}

// document.write("<h3> Hello " + userName() + " !!</h3>");

flag = storeOpen(day.getHours());

// welcomeNote(flag);

// howManyCookies();


