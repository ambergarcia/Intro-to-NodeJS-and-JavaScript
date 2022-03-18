### **Introduction:**

JavaScript is very important to know if you're getting involved with any web development. This workshop will cover the basics of writing in JavaScript, and introduce three major modules of NodeJS. This workshop is intended for beginners to both programming and the language, for intermediate attendees try to read over the exercises later down this file and try them.

**Difference between NodeJS and JavaScript?**
> JavaScript is the language, whereas NodeJS is what reads and interprets said language. JavaScript is an interpretted and compiled language, most browsers have a JavaScript interpretter to run code. Browser code bars access from sensitive information, whereas NodeJS is a JavaScript engine that will allow us to access browser and file system information as we please.

*Did you know that Discord was made using an Electron framework, which allows the application to be available as software and a browser application? This leads to most hack/phishing attempts to be made using malicious JavaScript!*

### Code Along #1: Initializing Variables & Primitive Data

```JS
   // I'm a secret comment
   /* I too, am I secret comment*/
   const user_id = 12345678;
   let evening = false;
   let seasons = [1,2,'spring',true]
   let user;

   user = "Your Name";
   console.log(`I'm ${user}, and the current season is ${seasons[2]}`); 
   //${} Expression evaluates to a string at runtime, as long as it returns a type or piece of data it will execute.

   ```
   This is the way of setting variables to data types. `const` means constant variable, aka after being assigned data you can't modify it afterwards. `let` is your usual local declaration variable.
   * There are 5 major data types:
     * string, number, boolean, object, function, null, undefined
  
   > Errors or issues you may run into are `undefined` variables. This means that there is no data inside of the variable. Trying to use a variable name before it was created, will also throw an error.


---

### Javascript Fact A - Different types of variable declaration

There are more ways to declare variables, particularly using `var` or global scope. This involves understanding what scope means, scope is basically the spot of code where the variable exists. For example, the variables we created in the last exercise are all local variables to our file.

```JS
x = `I'm a global variable that can be accessed by any file that includes me as a module`
var x = "I'm a functionally scoped variable with a hoisting property, my declaration is pushed to the top during interprettation."
    {
        let block = 'This is my scope, it was made for me!'
    }
 ```
 > Function Scope, is where variables defined in a function are only available inside of the function it has been created in. The exception is technical scope variables, like the `var` declaration type.
 > Lexical / Block scope associates declaration within the nearest set of curly braces. When you call `let`. `var`, `const` outside any curly braces, they become local to the whole file.

---

### Code Along #2: Conditional Statements & If Statements

```JS
    let max_char = 10;

    if(user.length <= max_char){
        console.log(`Cool your name is shorter than ${max_char}`)
    }   
    if(user.length == max_char || user_id == valid_id){

    }else if(user.length < 0 && user_id != valid_id){

    }else{
        console.log(`This will run`)
    }

   ```

   Conditional statements are statements that involve one or more pieces of data to compare with each other, and return a boolean value (true or false). Above we are using comparison operators such as:
   * `>` Greater Than
   * `<` Less than
   * `>=` Greater than or equal to
   * `<=` Less than or equal to 
   * `==` Equal to
   * `!=` Not equal to

If statments will evaluate the conditional statement, and select which block of code to execute. The styles of if statements are above. If you want to chain conditional statements, you can use the && or || operator. AND or OR respectively. Conditional statements using the && property, must all evaluate to true for the entire expression to be true. If using the || property, only one condition needs to be true for the whole condition to evaluate to true.


---
### Code Along #3: Loops

```JavaScript
    const ending_number = 3;

    let index = 0;
    while(index <= ending_number){
        console.log(index);
        index++;
    }

    for(let index = 0; index <= ending_number; index++){
        console.log(index);
    }
```

Trying to read the total number of even integers in an array is tough if you try doing it by hand, and thats just one of many examples that you may be going through. In instances where you need to perform an operation or arithmetic multiple times, using a loop is a good idea. Starting with a while loop. Loops will run a piece of code until a condition that you specify is met. The above demonstrates the same operation using two different styles of loops. 
* While loops take a conditional statement and will check for the true value returned, before running the rest of the code.
* For loops will take three arguements: A counting variable, a conditional statement, and the increment operation to perform.

---
### Code Along #4: Objects
```JS
    let seedless_grape = {
        type:  "Seedless purple grape",
        season: "Spring"
    }
    let bird_sanctuary = {
        num_of_birds: 38,
        birds: {
            flightless: [
                `penguins`,
                `ostriches`,
                `casowary`
            ],
            fliers:[
                `ravens`,
                `hawks`,
                `woodpeckers`
            ]
        }
    }
    console.log(bird_sanctuary[0])    
    console.log(bird_sanctuary['birds']['flightless'][0])      
 ```
Objects are considered as complex types in Javascript.  Objects are containers, with properies that are written as `name:value` pairs. Defining an object requires curly brackets, and a list of key value pairs we want to store in the object. Accessing the data for an object requires us to provide the name of the key. Accessing data for an array requires us to provide the index of the element.

---
### Code Along #5: Functions

```JS
   function hello(){
    console.log("hi");
   }
   hello();
   function addOne(num){
       return num + 1;
   }
   let i = addOne(3);
   console.log(addOne(4));

   function makeGrape(t,s){
       return {
           type: t,
           season: s
       }
   }
   cottoncandy_grape = makeGrape("Cotton candy", "Spring");
   seedless_grape = makeGrape("Seedless purple", "Spring");
```

There will be moments where, whenenever we want to define an object or loop through an array it will feel repetitive. If you want to run an operation multiple times throughout a program a function will help you out. A function will store a piece of code, and will run that piece of code whenever we call the function.
---

### Javascript Fact B - Pass by Reference vs Pass by Value

```JS
// Primitive data (strings, bool, integers) are Pass by value
   let i = 0;
   let a = i;
   a = 3;
   console.log(`${a} versus ${i}`)
   console.log()

//All objects are Pass by Reference
    let seedless_grape = {
        type: "Seedless purple",
        season: "Spring"
    }
    console.log(seedless_grape.type);
    let cottoncandy_grape = seedless_grape;
    cottoncandy_grape.type = "Cotton candy, green";
    console.log(seedless_grape);
    console.log(cottoncandy_grape);
 ```
Pass by value means that when you try to access data, you get that raw data back. If a number is assigned to variable, you can get that raw number and use it anywhere. This is the nature of Pass by Value. Pass by reference is where things get tricky, objects use this method of accessing data. Reference is the location of where the data is stored, like a piece of memory that tells the program where the object is. This is what gets returned, and what it looks like when a variable is assigned an object. 

In the above example, it shows a common mistake that you might try when assigning objects. When you assign `seedless_grape` to `cottoncandy_grape` you are giving the variable the exact location of `seedless_grape`. As a result, anything you do to modify `cottoncandy_grape` will also modify the data stored in that location. The location that, `cottoncandy_grape` and `seedless_grape` are sharing. Its a bit like sharing a pizza pie, you take a slice and now everyone only has 7 slices left to choose from.

---
### Code Along #6: Asynchronous Functions
```JS
function testAccess(filename){
    fs.access(filename, callback(err))
    function callback(err){
        if(err){
            console.error(err);
        }else{
            console.log('Accessed 1')
        }
    }
    fs.access(filename, (err) =>{
        if(err){
            console.error(err);
        }else{
            console.log('Accessed 2')
        }
    }
    })
    fs.access(filename, (err) => function(err){
        if(err){
            console.error(err);
        }else{
            console.log('Accessed 3')
        }
    }
    })
    console.log("Asynchronous tasks.")
}

 ```

The previous file ran its problems exclusively on a single thread and in order using NodeJS' v8 engine. This basically means that everything will be processed in order (top-down) from when it is read, interpretted, and compiled by NodeJS. 

Asynchronous calls are used for operations that may be heavy on the thread, or cause blocking behavior. Blocking behavior is when you run a piece of code that takes a long time and doesn't allow other operations to perform.

Asynchronous calls happen on the backend while your main thread is runing using LibUV's engine. Asynchronous calls are queued up, and are processed in worker-threads. Aka, it's basically a behind the scenes operation.

When a call is finished, it will push its returned data or information to a call back we give the function call. This call back is just a function that takes in data returned by the function as parameters so that we can do something with the results. 

Its important to note, that the order of which asynchronous calls finish are defined by which finishes the fastest. We will discuss how to fix this after the next exercise.

---
### Code Along #7: Manipulating JSON data & Synchronous Code
```JS
// note that this function must be called in the exercise 1 function else statement!
function manipulate_tarotdata(tarot){
    console.log("\n━━━━━━━━━━━━━━ Code-Along 7 ━━━━━━━━━━━━━━")
    console.log(tarot)
    console.log(tarot[`Tarot-Deck`])
    console.log(tarot[`Tarot-Deck`][0])
    console.log(tarot[`Tarot-Deck`][0].position)
    console.log(tarot[`Tarot-Deck`][0].position[0])
    console.log(tarot[`Tarot-Deck`][0].position[0].upright)
    console.log(Object.keys(tarot))
    drawACard(tarot, Object.keys(tarot)[0]);
}
```

JSON is JavaScript Object Notation, it's a way to read and write data. It's written in a text format so that other languages can read the data, it's used for languages that are familiar with the notation such as C, C++, Java, JavaScript, Python, etc. The above is just me introducing how to manuever through the JSON data that I provided for you since it's a mixture of arrays and object definitions.

What we just did, by putting the function in the asynchronous call, is an example of synchronous code. We are performing operations one at a time, using functions to keep ourselves organized.

---
### Code-Along #8: Writing Classes
```JS 
const Tarot = class Tarot{

    constructor(t){
        // for the input assume its an array of objects
        this.tarot_deck = t;
        this.draw_history = []
    }
    // Give the flip_a_coin() and draw_card() code to them

    add_card(card){
        if(typeof card == "string"){
            this.draw_history.push({
                card: card,
                date_drawn: new Date()
            });
        }else{
            console.log(`${typeof card} is not a valid string!`)
        }

    }
    clear(){
        this.card_history = [];
        console.log("Card history cleared");
    }
//... operations
}

//...operations
module.exports = Tarot;
 ```

 Classes are a type of objects that can be instantiated and called. It stores functions and variables so that we can reuse an object throughout our programs.

 A constructor is called when a class is initialized, and in our case the constructor takes in a paramater t. For our purposes, t is the object that holds all of are tarot deck information.

 You can write classes as variables in the same file as your program, or as a seperate file. If you make a seperate file, you need to export the class as a module so that NodeJS can reference the class. I'll show you how to require the class in the next file.

> Provide the following for the Exercises. We'll be using stuff we've already written for the class.

 ```JS
     flip_a_coin(){
        return parseInt(Math.random() * 2);
    }
     draw_card(num){
        let i = 0;
        let rand, flip;
        while(i < num){
            rand = parseInt(Math.random() * this.tarot_deck.length);
            if(this.flip_a_coin() == 0){
                console.log(`Reversed ${this.tarot_deck[rand].cardname}`)   
                console.log(`${this.tarot_deck[rand].position[0].upright}\n`)
                this.add_card(`Reversed ${this.tarot_deck[rand].cardname}`);
            }else{
                console.log(`Upright ${this.tarot_deck[rand].cardname}`)   
                console.log(`${this.tarot_deck[rand].position[1].reversed}\n`)
                this.add_card(`Upright ${this.tarot_deck[rand].cardname}`);
            }
            i++;
        }
    }

 ```

 ---
### Code-Along #8: Writing Classes

```JS
const SecretCode = class SecretCode extends EventEmitter{
    constructor(phrase){
        super()
        this.phrase = phrase;
        this.key = true;
    }
    check_code(phrase){
        if(this.key && phrase == this.phrase){
            this.emit('unlock', phrase)
            this.key = false;
        }
    }
}
let secret = new SecretCode('Tell me my luck.');
function inquiry(){
    console.clear();
    rl.question("Will you be drawing from a tarot?\n", (input) =>{
        if(input == 'yes' || input == 'y'){
            console.log("Enter your secret phrase.");
        }else{
            console.log(`When you're ready to continue enter: ?Q`);
            console.log(`When you're ready to end program enter: ?E\n`);
        }
    })
}
rl.on('line', (input) => {
    if(input == '?Q'){
        inquiry();
    }else if(input == '?E'){
        rl.close();
    }else{
        secret.check_code(input);   
    }
    
});
 ```

 Start with the inquiry function. We'll be using the rl, readLine, module to first explain what exactly the observer design pattern is. 

When we call `readline.question`, we are directly looking for the input of the user from our terminal. When this happens, it is waiting for an input to occur. This question is observing, us the subject, for our input in the commandline. When we have a situation of code observing a subject for something that they do, then we have an instance of the observer design pattern. To demonstrate clearly, we'll use the `rl.on` function.

`rl.on` creates an eventListener, the observer. We are listening for the event that will be returned by the terminal, when we make a new line. When we press enter or return, we are emitting or airing ourselves out to the rest of the program that: "Hey, I'm doing this operation right now. Are you going to react?"

Now, what if we want to customize an event? Lets say we want to wait for a special input by the user. To do this we're going to manually create our subject that our program will be observing by creating an EventEmitter class.

super() is for calling the constructor of our EventEmitter class to get itself instantiated along with all of its functions.

`this.emit('eventname', dataparam);` is our subject, we emit out to the program that this event is occuring.

