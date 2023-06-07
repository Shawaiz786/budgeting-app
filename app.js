function abc() {
     var input = document.getElementById("lol").value; 
     if (input === "") {
          alert("Please Insert a Value");
     }
     else{
          document.getElementById("lar").style.display="block";
     } 

let new1 = new Date();
let month = new1.getMonth();
let date = new1.getDate();
let year = new1.getFullYear();
switch(month){
case 0 :
    month = "January";
    break;
case 1 :
    month = "Feburary";
    break;
case 2 :
    month = "March";
    break;
case 3 :
    month = "April";
    break;
case 4 :
    month = "May";
    break;
case 5 :
    month = "June";
    break;
case 6 :
    month = "July";
    break;
case 7 :
    month = "Augest";
    break;
case 8 :
    month = "September";
    break;
case 9 :
    month = "Octuber";
    break;
case 10 :
    month = "November";
    break;
case 11 :
    month = "December";
    break;
}
document.getElementById("da").innerText = month + " " + date + " " + year;;
let target = document.getElementById("blast");


let userInp = document.getElementById("lol").value;
document.getElementById("val").innerText = "Value: $" + userInp;
document.getElementById("tot").innerText = " $" + userInp;
     
}


function display() {

    
    var inputo = document.getElementById("input").value; 
     if (inputo === "") {
          alert("Please Insert a Value");
          return;
     } 

     var inputo = document.getElementById("du").value; 
     if (inputo === "") {
          alert("Please Insert a Date");
          return;
     } 

  
     else{
        var select = document.getElementById("option").value;
    var para = document.getElementsByTagName("p");
    for(var i = 0; i < para.length; i++){
        para[i].style.display = "none"
    }
 
    var selectpara =document.getElementById("para" + select.substr(-1));
    selectpara.style.display = "block";
      
     } 

     let userInp54 = document.getElementById("input").value;
     let par = userInp54 * 8.75 / 100 ;
    
    
    document.getElementById("resultBox").value = Math.round(par);
    let int =  userInp54 *100 /100 + par;
    document.getElementById("inputBox").value = Math.round(int);
     
      
     

     const inputsh = document.getElementById('du');
     const inputva = inputsh.value;
     const date5 = new Date(inputva);
     

     if(document.getElementById("option").value === "option1") {
 
     let userIn = document.getElementById("inputBox").value;
     document.getElementById("ded").innerText =  userIn;
     const out = document.getElementById('gra');
     out.textContent = date5.toDateString();
     let userInp4 = document.getElementById("dis").value;
    var input = document.getElementById("dis").value; 

 if (input === "") {
    document.getElementById("dha").innerText = " Discription requid" + userInp4; 
 }
 else{
    document.getElementById("dha").innerText = "" + userInp4;
}
      }

     else if(document.getElementById("option").value === "option2") {
     let userIn1 = document.getElementById("inputBox").value;
     document.getElementById("ded1").innerText = userIn1;
     const out1 = document.getElementById('gra1');
     out1.textContent = date5.toDateString();
     let userInp4 = document.getElementById("dis").value;
    var input = document.getElementById("dis").value; 
    if (input === "") {
       document.getElementById("dha1").innerText = " Discription requid" + userInp4; 
    }
    else{
       document.getElementById("dha1").innerText = "" + userInp4;
   }
     }
     else if(document.getElementById("option").value === "option3") {
     let userIn2 = document.getElementById("inputBox").value;
     document.getElementById("ded2").innerText =  userIn2;
     const out2 = document.getElementById('gra2');
     out2.textContent = date5.toDateString();
     let userInp4 = document.getElementById("dis").value;
    var input = document.getElementById("dis").value; 
    if (input === "") {
       document.getElementById("dha2").innerText = " Discription requid" + userInp4; 
    }
    else{
       document.getElementById("dha2").innerText = "" + userInp4;
   }
     }
     else if(document.getElementById("option").value === "option4") {
     let userIn3 = document.getElementById("inputBox").value;
     document.getElementById("ded3").innerText = userIn3;
     const out3 = document.getElementById('gra3');
     out3.textContent = date5.toDateString();
     let userInp4 = document.getElementById("dis").value;
    var input = document.getElementById("dis").value; 
    
    if (input === "") {
       document.getElementById("dha3").innerText = " Discription requid" + userInp4; 
    }
    else{
       document.getElementById("dha3").innerText = "" + userInp4;
   }
     }

    

setInterval(function(){
     var arr = [] ;

     let userIp = document.getElementById("ded").innerText;
     userIp = parseInt(userIp) ;
     arr.push(userIp);

     let userIp1 = document.getElementById("ded1").innerText ;
     userIp1 = parseInt(userIp1) ;
     arr.push(userIp1);

     let userIp2 = document.getElementById("ded2").innerText;
     userIp2 = parseInt(userIp2) ;
     arr.push(userIp2);

     let userIp3 = document.getElementById("ded3").innerText;
     userIp3 = parseInt(userIp3) ;
     arr.push(userIp3);

     const sum = arr.reduce((accumulator, value) => {
        return accumulator + value;
      }, 0);

      var nums = arr.map(function(str) {
        return parseInt(str); });

        var abd = document.getElementById("lol").value;
   
        document.getElementById("bal").innerHTML =  abd - sum;
        document.getElementById("ex").innerHTML = sum;
}, 50)



}

function ear() {

    document.getElementById("para1").style.display="none";
     let userIp9 = document.getElementById("ded").innerText;
     document.getElementById("ded").innerText =  userIp9 - userIp9;
}

function ear1() {

    document.getElementById("para2").style.display="none";
     let userIp9 = document.getElementById("ded1").innerText;
     document.getElementById("ded1").innerText =  userIp9 - userIp9;
}

function ear2() {

    document.getElementById("para3").style.display="none";
     let userIp9 = document.getElementById("ded2").innerText;
     document.getElementById("ded2").innerText =  userIp9 - userIp9;
}

function ear3() {

    document.getElementById("para4").style.display="none";
     let userIp9 = document.getElementById("ded3").innerText;
     document.getElementById("ded3").innerText =  userIp9 - userIp9;
}

function ear11 () {

    document.getElementById("dha").style.display="block";
 }

function ear12 () {
    document.getElementById("dha1").style.display="block";

    

}
function ear13 () {
    document.getElementById("dha2").style.display="block";

    

}
function ear14 () {
    
    
    document.getElementById("dha3").style.display="block";
    

}


