'use strict';

var name = prompt("what is your name");
var currentH = new Date();
var flag;
document.write("<h3> Hello "+ name +" !!<h3>");


if (currentH.getHours() >= 10 && currentH.getHours() <= 13){
    if (13-currentH.getHours() == 1){
        document.write("<h3> You have "+ (13-currentH.getHours())+ " hour to place an order <h3>");

    }else{
        document.write("<h3> You have "+ (13-currentH.getHours())+ " hours to place an order <h3>");
    }
     flag = true;
} else {

    document.write("<h3> Orders are closed <h3>");
    flag = false;
    if (currentH.getHours() <= 10){
        document.write("<p> We will open in  "+ (10-currentH.getHours())+ " hours <p>");
    
    } else if (currentH.getHours() >= 13){
        document.write("<p> Come again tomorrow <p>");
    
    }
}

if (flag){
    confirm("you can place an order");
} else {
    confirm ("sorry we're closed");
}

