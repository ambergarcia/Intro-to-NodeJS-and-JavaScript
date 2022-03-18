## Workshop Guide & Exercises

### **Introduction:**

JavaScript is very important to know if you're getting involved with any web development. This workshop will cover the basics of writing in JavaScript, and introduce three major modules of NodeJS. This workshop is intended for beginners to both programming and the language, for intermediate attendees try to read over the exercises later down this file and try them.

We'll be working with the following files in order:
* `index.js`
  * Variables
  * If Statements
  * While Loop, For Loop
  * Objects
  * Functions

* `asynchronous_code.js`
  * `fs` module
  * Asynchronous Calls
  * Synchronous Programmming p.1
  * Reading & manipulating JSON data
* `Tarot.js`
  * Classes
  * Synchronous Programmming p.2
* `observer_events.js`
  * `Event Emitter` Module
  * `rl` Module
  * Observer Design Pattern (Observers & Subjects)

---
## `index.js` Exercises

   ### Exercise 1 - Create and assign variables
   **Functions / Definitions you need:**
   > typeof variable ---> Returns a string of the variables type. Options are in the previous section.


    1. Create the following variables:
        A. Constant number named valid_id, and set it to any 8 digit number.
        B. Boolean named new_to_code, set it true if you're a beginner or false if you know how to code.
        C. String named graduation_year, set it to the year you aim to graduate or when you graduated.
        D. Create an array with integers 0-99, of at least size 5.
        E. Create an empty variable called empty.
     1. Set the third position of your array to 15. ( HINT: array[0] = first element. Elements begin at index 0 instead of 1.)
     2. Print all of the variables you created and their type.
 
---

### Exercise 2 - Conditional If Statements
**Functions / Definitions you need:**
> typeof variable ---> Returns a string of the variables type. Options are in the previous section.

1. Create a constant variable named determiner. Set the value to `i am a string`
2. Use an if else block to evaluate the following:
   1. If filename is a string and user is not equal to the string `Your Name`, print: `Nice to meet you ${user}, lets get started.` 
   2. If filename is a string and user is equal to the string `Your Name`, print: `What is ${user.toLowerCase()} Restart file!`
   3. If filename is not a string, print `Set the filename variable!` 

---

###  Exercise 3 - Loops
**Functions / Definitions you need:**
> array.length gives the total size of the array.
> array.length - 1 gives the last element index of the array.
> array[i] for integer i returns the value, where array[0] is the first element. 

> Modulus returns the remainder after dividing two numbers. For example, 4 % 2 = 0 since 4 is divisible by 2. On the other hand, 5 % 2 = 1 means that there is a remainder of 1 after dividing (aka 5 is not divisible by 2!).

 1. Recall the array you created in Exercise 2 with at least five elements. Use this array for the program.
 2. Loop through the array using either a for loop or while loop.
    1. (HINT: You'll get an error for undefined if you try to select an index that is out of bounds. Note that, for
     elements 1 thru array.length, the actual indices are 0 thru `array.length - 1`)
    2. Determine if the given number is divisible by 5. If it is, print the `multiplier * 5 = array[index]`

---

###  Exercise 4 - Objects 
**Functions / Definitions you need:**
> array.length gives the total size of the array.
> array[i] for integer i returns the value, where array[0] is the first element. 
> console.log(array) to display raw contents of array

 1. Create an object named `july_apples`.
    1. Add a `key` to the object named types, which is an array containing the strings: "Gala", "Zestar", "Lodi", "William's Pride", "Pristine", "Redfree"
    2. Add a `key` named month, set it to "July"
1. Copy the `types` array into a new object named `summer_apples` (which has a `types` and `season` key).
    1. Change the first position of the `types` array in `summer_apples` to 0.
2. Display both arrays, what happened? (Remember you can access variables by: objectname.variablename)
  
---

###  Exercise 5 - Functions 
**Functions / Definitions you need:**
> array.length gives the total size of the array.
> array[i] for integer i returns the value, where array[0] is the first element. 
> console.log(array) to display raw contents of array

1. Create a function named calcWords, which will take any string.
   1. Take the string and count the number of characters excluding ' ' and ','.
   2. If you encounter those two characters above, track them in a seperate counter
   3. Return an object containing both counters
   4. Print / Display the results 


``` JS
function calcCharacters(str){
    // Your code
}
let numChar = calcCharacters('qwerty yuiot woapf jjej qqqqekkr kdkf,iowjf, h8uuwe, d')
//console.log(numChar)
 ```
 
---
## `asynchronous_code.js` Exercises

###  Exercise 6 - Handling data from fs.readFile 
**Functions / Definitions you need:**
> fs.readFile(filename, (err,data) => {...})
> data is a buffer, a compressed version of our data. Below, we can convert our file which was written in JSON, as a JSON object.

> JSON.parse(string || buffer); <- takes a large string and converts it into a JSON object.
> JSON.stringify(jsonObject);

1. Store the data from reading the tarot file into a variable.

```JS
fs.readFile(tarot_filename,(err, data) => {
    console.log("\n━━━━━━━━━━━━━━ Exercise 6 ━━━━━━━━━━━━━━");

});
 ```

 ---
 ###  Exercise 7 - Select random tarot card.
**Functions / Definitions you need:**
> parseInt(Math.random() * maximum) <- get a random integer.
> For example: parseInt(Math.random() * 10) generates a number between 0-10

1. Create a random number, print stating that you are selecting a card.
2. Select the card from the object data.
3. Create a function named flip a coin, which takes the object data from the random solection.
   1. Flip a coin, tails for upright heads for reverse. 
   2. Print the contents to the user.
(HINT: Position is an array, hence position[0] would get you one of its elements.)


```JS
function drawACard(tarot, key){
    console.log("\n━━━━━━━━━━━━━━ Exercise 7 ━━━━━━━━━━━━━━")

}
 ```
---
## `Tarot.js` Exercises

###  Exercise 8 - Get card from history

> `this.draw_history[i].card` will return the card as a string.
> `string.includes(substring)` Check if a string contains another string (substring)
> 
1. Write a function get_card(card) that accepts card as a string.
2. Search through `this.draw_history` for an equality. If it exists in the array, then return the card.

---
###  Exercise 9 - Find a card in Tarot
> Use tarot-deck.json as reference for what position the index is at.
 1. Create a function `find_card(num)`, where `num` is the index of a card.
 2. print the card information of the given index.
---

###  Exercise 10 - Print cards drawn on date
 > Note that `this.draw_history[i].date_drawn` is a Date object. To access integer values for the date, use the following:
 > date.getFullYear() // The whole year in the thousands i.e: 1900
 > date.getMonth() // The number month starting at 0 for january
 > date.getDate() //The number date from 1-31

1. Create a function that takes a date and prints all cards drawn on that `cards_drawn_on(month, date, year)`
2. Track if there were any cards drawn on the given date (hint: use a counting variable). If there weren't any, print that there arent any cards on the given date
---

### Test `Tarot.js`

Put this code snip at the bottom of your file and above `module.exports`. This is an example of synchronous code, where asynch methods are called one after the other in order. When you're ready to test your functions, uncomment the statements in the `fs.readFile` block.
```JS
fs.access(tarot_filename,(err)=>{
    if(err){
        console.error(`${err} Tarot doesn't exist, unable to instantiate variables.`);
    }else{
        fs.readFile(tarot_filename,(err, data) => {
            if(err){
                console.error(err);
            }else{
                let tarot_deck = JSON.parse(data);
                tarot_deck = tarot_deck[`Tarot-Deck`];

                let tarot = new Tarot(tarot_deck);
                
                tarot.draw_card(3);
                //tarot.find_card(23);
                //console.log(tarot.get_card(`IX: Nine of Wands`));
                //tarot.cards_drawn_on(3, 18, 2022)
                //tarot.cards_drawn_on(3, 17, 2022)
                tarot.clear();
            }
        });
    }
});
 ```
 ---
## `observer_events.js` Exercises

###  Exercise 11 - Emit 'lock' 
**Functions / Definitions you need:**
> `this.emit('eventname', data ...)`

1. Create a function that sets a new phrase, and emits a 'lock' event with the new phrase as the parameter.
2. Set key to false.

---

###  Final Exercise 12: Draw your lucky number 
**Functions / Definitions you need:**
> Use all of the knowledge you've used thusfar for this exercise.

1. Test access to the tarot file and read the tarot file.
2. Read the lucky number file.
3. Create a Tarot class object.
4. Use the tarot class to print the tarot associated with the lucky number.
5. Set a new code phrase.

```JS
secret.on('unlock', (phrase)=>{

})
 ```

---

###  Final Challenge: Draw your lucky number 
**Functions / Definitions you need:**
> fs.writeFile(file, data[, options], callback)

1. Generate a new number from 0-77.
2. Write into the same file with the new information.
3. You may need to do modifications to the code-along work.
```JS
secret.on('lock',(phrase)=>{

});
 ```
 ---

 *Congratulations! You made it to the end. In the `TestRun_Doc.md` at the bottom of the file there are three challenges to try. If you're feeling comfortable with what you've learned, give it a shot!*
