/*Reverse a string in javascript*/
/*-----------------------------*/
function reverse(word) {

var opp=word.split("");
var str="";
for(var i=opp.length-1;i>=0;i--){
str=str+opp[i];
}
console.log(str);

}

reverse("Soumya");

/*Palindrome in javascript*/
/*-----------------------------*/

function palindrom(word) {

var opp=word.split("");
var str="";
for(var i=opp.length-1;i>=0;i--){
str=str+opp[i];
}
    if(word===str)
console.log("Palindrome");
    else
console.log("not Palindrome");

}

palindrom("bob");
