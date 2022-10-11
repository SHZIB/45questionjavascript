/*question 11
Names: Store the names of a few of your friends in a array called names. 
Print each person’s name by accessing each element in the list, one at a time.*/


/*const names= ["ainy", "bushra", "china"];
for (const element of names) { // You can use `let` instead of `const` if you like
    console.log(element);
}
// a
// b
// c*/

//Question 12:Greetings: 
/*const names= ["ainy", "bushra", "china"];
for (var i = 0; i < names.length; i++) {
        console.log("Hello!, "+names[i]+" How are you")
     }*/
    

//Question 13:

/*var cars = [
    { 
      1: "vitz",
      2: "civic",
      3: "toyota",
      4: "mehran"
       },
       {
        1: "Rolls-Royce Boat Tail",
        2: "Bugatti Divo",
        3: "Bugatti Bolide",
     },

]
for (var i = 0; i < cars.length; i++) {
    for (var j = 1; j < cars.length; j++){
    console.log("my favorite car,i will buy a " + cars[i][j]);
 }
  }*/

  //Question 14:Guest List:

 /* var invitation = ["ainy","shazib","Noreen"];
  for (var i = 0; i < invitation.length; i++) {
    console.log(invitation[i] + "\n I would like to inivte you to have dinner with at 9:00pm venue Bella vita")
  } 
 */

  //question :15:Changing Guest List: 
 /*var invitation = ["ainy","shazib","Noreen"];
  for (var i = 0; i < invitation.length; i++) {
    console.log(invitation[i] + "\n one of you is unable to attend the dinner thats why list is been changed now")
  } 

  var invitation = ["ainy","shazib","Noreen"];
  invitation[2] = "China";
  for (var i = 0; i < invitation.length; i++) {
    console.log(invitation[2] + "\n I would like to inivte you to have dinner with at 9:00pm venue Bella vita")
  } */

  //Question :16 :More Guests: You just found a bigger dinner table,
  /*var invitation = ["ainy","shazib","china"];
  for (var i = 0; i < invitation.length; i++) {
    console.log(invitation[i] + "   " + "i just found a bigger dinner table so inviting more people.")
 
  var invitation = ["ainy","shazib","china"];
  invitation.unshift("wajiha");
  invitation.splice(2, 0, "alia", "ayman");
 //append in 
 invitation.push("Ali"); }
 console.log(invitation[0] + "  I would like to inivte you to have dinner with at 9:00pm venue Bella vita")*/

 //Question :17:Shrinking Guest List:

/*var invitation = ["wajiha","ainy","alia","aymen","shazib","china","Ali"];
for (var i = 0; i < invitation.length; i++) {
console.log(invitation[i] + "  sorry, i can only invite two people for dinner.")
}
var invitation = ["wajiha","ainy","alia","aymen","shazib","china","Ali"];
invitation.pop();
invitation.slice(2,3);
invitation.shift();
invitation.pop();
console.log(invitation[0],"  " ,"&","  ", invitation[1], "you are still invited");
invitation.shift();
invitation.pop();
console.log();
*/

//Question 18:

/*var places = ["Madina","Turkey","spain","Makka"];
console.log(places);
var newPlaces = [...places];
console.log(newPlaces.sort());
console.log(newPlaces.reverse());

console.log(places);
console.log(newPlaces.reverse());
console.log(newPlaces.sort());
console.log(newPlaces.reverse())*/

//Question 19
/*var invitation = ["ainy","shazib","Noreen"];
  for (var i = 0; i < invitation.length; i++) {
    console.log(invitation[i] + "\n I would like to inivte you to have dinner with at 9:00pm venue Bella vita")
  } 
  var invitation = ["ainy","shazib","Noreen"];
  for (var i = 0; i < invitation.length; i++) {
    console.log(invitation[i] + "\n one of you is unable to attend the dinner thats why list is been changed now")
  } 

  var invitation = ["ainy","shazib","Noreen"];
  invitation[2] = "China";
  for (var i = 0; i < invitation.length; i++) {
    console.log(invitation[2] + "\n I would like to inivte you to have dinner with at 9:00pm venue Bella vita");
    var invitation = ["ainy","shazib","china"];
  for (var i = 0; i < invitation.length; i++) {
    console.log(invitation[i] + "   " + "i just found a bigger dinner table so inviting more people.");
 
  var invitation = ["ainy","shazib","china"];
  invitation.unshift("wajiha");
  invitation.splice(2, 0, "alia", "ayman");
 //append in 
 invitation.push("Ali"); }
 console.log(invitation[0] + "  I would like to inivte you to have dinner with at 9:00pm venue Bella vita");
 var invitation = ["wajiha","ainy","alia","aymen","shazib","china","Ali"];
 for (var i = 0; i < invitation.length; i++) {
 console.log(invitation[i] + "  sorry, i can only invite two people for dinner.")
 }
 var invitation = ["wajiha","ainy","alia","aymen","shazib","china","Ali"];
 invitation.pop();
 invitation.slice(2,3);
 invitation.shift();
 invitation.pop();
 console.log(invitation[0],"  " ,"&","  ", invitation[1], "you are still invited");
 */

 // Question :20:

 /*var languages = ["english", "Arabic", "French", "Germon", "Chinies"];
 for (var i = 0; i < languages.length; i++) {
    console.log(languages[i]);
}
*/
