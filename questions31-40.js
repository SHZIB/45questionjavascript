//Question 31:No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
/*var greeting = [];
if (greeting.length === 0) {
         console.log("We need to find some users!")
 }
else {
    for (var i = 0; i < greeting.length; i++) {
        }
}
*/

//Question 32:Checking Usernames:
/*var current_users = ["wajiha","ainy","alia","aymen","shazib","china","Ali"];
var new_users = ["salman","summaya","shazib","robi","Ali"];
for (var i = 0; i < new_users.length; i++) {
      for (var j = 0; j < current_users.length; j++) {
             if (current_users[j] === new_users[i]) {
                 console.log("username has already been used")
             }
             else {
                 console.log("username is available")
             }
         }
     }
*/
    

// Question 33: Ordinal Numbers:
/*const toOrdinalSuffix = num => {
    const int = parseInt(num),
      digits = [int % 10, int % 100],
      ordinals = ['st', 'nd', 'rd', 'th'],
      oPattern = [1, 2, 3, 4],
      tPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19];
    return oPattern.includes(digits[0]) && !tPattern.includes(digits[1])
      ? int + ordinals[digits[0] - 1]
      : int + ordinals[3];
  };
  
  console.log(toOrdinalSuffix('1')); 
  console.log(toOrdinalSuffix('4')); 
  console.log(toOrdinalSuffix('50')); 
  console.log(toOrdinalSuffix('123'));
  */

  //Question 34:Pizzas: 
  /*var pizzas = ["sensassion fajita","tikka flavor","arabic"];
  for(let i in pizzas){
    console.log("i like to eat", "  "+ pizzas[i]);
  }
  console.log("i like pizza to eat in dinner,i love all flavors,i like topped chese pizza more");
  */

  //Question 35:Animals:

 /* var animals = ["Dog", "Cat", "goat"];
 for (var i = 0; i < animals.length; i++) {
    if (animals[i] === "Dog") {
        console.log("Dog is very loyal animal");
     }
     if (animals[i] === 1) {
         console.log("Cat is lovable pet ");
     }
     if (animals[i] === 2) {
         console.log("goat gives us milk");
     }
 }
 console.log("All animal have four legs"); */

 //Question 36:T-Shirt:

 /*function make_shirt(message, size){
    console.log("this is my shirt "," "+ size);
    console.log("the line written on my shirt"," "+ message);
 }
 make_shirt("I am energetic","small"); */

 //Question:37 Large Shirts: 

 /*function make_shirt(message, size){
    console.log(" I love JavaScript "," "+ size);
    console.log("the line written on my shirt"," "+ message);
 }
 make_shirt("I am energetic","small");
 make_shirt("I love my DAD","medium");
 make_shirt("my Mom is my evrything","Large");
 */

 //Question:38 Cities:
 
 /*function city_describe(city,country = "Pakistan"){
    console.log(city + " ","in"," " + country)
 }
 city_describe("karachi"," Pakistan");
 city_describe("islamabad" , "Pakistan");
 city_describe("Mumbai" , "India"); */

 //Question :39 

 /*function city_country(city,country ){
    console.log("'" + city + " , " + country + "'")
 }
 city_country("karachi"," Pakistan");
 city_country("Dhaka" , "Bangladesh");
 city_country("Mumbai" , "India");  */

 //Question:40

 /* function make_album(artist, album) {
     console.log("{ Album: " + album + ", " + "Artist: " + artist + " }");
 }


 make_album("Justin Bieber", "My world");
 make_album("Katy Perry", "Prism");
 make_album("Beyoncé", "the Home comming ,Live");*/

 