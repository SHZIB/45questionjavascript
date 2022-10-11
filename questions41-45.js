//Question:41


/*var magicians = [" Cameron", "Charles ", "Canuplin "]
 function show_magicians() {
     for (var i = 0; i < magicians.length; i++) {
         console.log(magicians[i])
     }
 }
 show_magicians();*/

 //Question : 42 :

/*var magicians = [" Cameron", "Charles ", "Canuplin "]
function show_magicians() {
    for (let x in magicians) {
       console.log(magicians[x]);
    }
 }
function make_great() {
    var message = "the Great";
   for (let x in magicians) {
       console.log(magicians[x] + message);
   }
}

 show_magicians();
 make_great(); */


//Question : 43: Unchanged Magicians:

/*var magicians = [" Cameron", "Charles ", "Canuplin "]
function show_magicians() {
    for (let x in magicians) {
       console.log(magicians[x]);
    }
 }
function make_great() {
    var message = "the Great";
   for (let x in magicians) {
       console.log(magicians[x] + message);
   }
}
show_magicians();
console.log("Great Magacian")
 make_great();
 console.log("Original Magacian")
 show_magicians(); */

//Question:44:Sandwiches: 

// // Question  no 44n 
/*var sandwhich = ['roasted chicken', 'egg chilli cheese', 'beef crispy']
 console.log("Steps to make a sandwhich.....")
 for (var i = 0; i < sandwhich.length; i++) {
     make_sandwich(sandwhich[i]);
 }
 function make_sandwich(item) {
     console.log("  ...adding " + item + " to your sandwich.");

}
 console.log("Your sandwich is ready!")
 var sandwhich = ['roasted', 'chessey', 'grilled chicken']
console.log("Steps to make a sandwhich.....")
for (var i = 0; i < sandwhich.length; i++) {
    make_sandwich(sandwhich[i]);
}
function make_sandwich(item) {
    console.log("  ...adding " + item + " to your sandwich.")
 }
console.log("Your sandwich is ready!")
 var sandwhich = ['honey cured', 'mayyo garlic']
 console.log("Steps to make a sandwhich.....")
 for (var i = 0; i < sandwhich.length; i++) {
    make_sandwich(sandwhich[i]);
 }
 function make_sandwich(item) {
     console.log("  ...adding " + item + " to your sandwich.")

 }
 console.log("Your sandwich is ready!") */



 //Question no 45
 function Car(manufacture, model, options) {
    manufacture: manufacture;
    model: model;
    console.log("Manufacture: " + manufacture + "Colour: " + options + "Model: " + model)
 }
 Car("America", "car", "White")
 Car("china", "Bike", "Yello");