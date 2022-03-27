## Exercise Answers

Try your best on the exercises before tackling these. Read the code-along document too!

---
## `index.js` Exercises

### Exercise 1 - Create and assign variables
```JS
  const valid_id = 12345231;
  let new_to_code = false;
  let graduation_year = `2022`;
  let arr = [23,55,74,75,90,81,73,58,10,82];
  let empty;
  arr[2] = 15;

  console.log(`Valid id: ${valid_id} is type of ${typeof valid_id}`);
  console.log(`New to code: ${new_to_code} is type of ${typeof new_to_code}`);
  console.log(`Graduation: ${graduation_year} is type of ${typeof graduation_year}`);
  console.log(`Array of numbers: ${arr} is type of ${typeof arr}`);
  console.log(`Empty variable: ${empty} is type of ${typeof empty}`);
```

### Exercise 2 - Conditional If Statements
```JS
   const determiner = `i am a string`;
   if(typeof determiner == `string`){
       if(user != `Your Name`){
        console.log(`Nice to meet you ${user}, lets get started.`);
       }else{
        console.log(`What is ${user.toLowerCase()} Restart file!`);
       }
       
   }else{
    console.log(`Set the filename variable!`);
   }
```

### Exercise 3 - Loops
```JS
   const divisor = 5;
   for(let i = 0; i < arr.length; i++){
    if(arr[i] % divisor == 0){
        console.log(`${arr[i] / divisor} * ${divisor} = ${arr[i]}`);
    }
   }
```

### Exervise 4 - Objects

```JS
   let july_apples = {
       types: ["Gala", "Zestar", "Lodi", "William's Pride", "Pristine", "Redfree"],
       month: "July"
   }
   let summer_apples = {
       types: july_apples.types,
       month: "Summer"
   }
   summer_apples.types[0] = 0;
   console.log(july_apples)
   console.log(summer_apples)
```

### Exervise 5 - Functions

```JS
   function calcCharacters(str){
       let c = 0;
       let e = 0;
       for(let i = 0; i < str.length; i++){
            if(str.at(i) != ' ' && str.at(i) != ','){
                c++;
            }else{
                e++;
            }
       }
       return {
           characters: c,
           etc:  e
       }
   }
   let str = calcCharacters('jdds  jdss  djdskjds kjk,jdsau2 yu328313 ufgsjfjagf  j28713 2481')
   console.log(`String has ${str.characters} characters alphabetical/numerical with ${str.etc} commas or spaces.`)
```

---
## `asynchronous_code.js` Exercises

###  Exercise 6 - Handling data from fs.readFile 

```JS
fs.readFile(tarot_filename,(err, data) => {
    console.log("\n━━━━━━━━━━━━━━ Exercise 6 ━━━━━━━━━━━━━━");
    if(err){
        console.error(err);
    }else{
        tarot_deck = JSON.parse(data);
        console.log(`Successfully read data.`)
        console.log(tarot_deck);
        //manipulate_tarotdata(tarot_deck);
        
    }
});
 ```

 ---
 ###  Exercise 7 - Select random tarot card.

```JS
function drawACard(tarot, key){
    console.log("\n━━━━━━━━━━━━━━ Exercise 7 ━━━━━━━━━━━━━━")
    let random_index = parseInt(Math.random() * 10); 
    let card = tarot[key][random_index];
    function flip_a_coin(){
        return parseInt(Math.random() * 2);
    }
    if(flip_a_coin() == 0){
        console.log(`Reversed ${tarot[key][random_index].cardname}`)   
        console.log(tarot[key][random_index].position[0].upright)
    }else{
        console.log(`Upright ${tarot[key][random_index].cardname}`)   
        console.log(tarot[key][random_index].position[1].reversed)
    }
}
 ```

## `Tarot.js` Exercises

###  Exercise 8 - Get card from history

```JS
    get_card(card){
        for(let i = 0; i < this.draw_history.length; i++){
            if(this.draw_history[i].card == card){
                return this.draw_history[i].card;
            }
        }
        return null;
    }
```
###  Exercise 9 - Find a card in Tarot

```JS
    find_card(num){
        console.log(`The ${num} card is as follows:`)
        if(num >= 0 && num <= this.tarot_deck.length){
            console.log(`Upright ${this.tarot_deck[num].cardname}`)   
            console.log(`${this.tarot_deck[num].position[0].upright}\n`)
            
            console.log(`Reversed ${this.tarot_deck[num].cardname}`)   
            console.log(`${this.tarot_deck[num].position[1].reversed}\n`)
        }else{
            console.log(`Card doesn't exist.`)
        }
    }
```

###  Exercise 10 - Print cards drawn on date

```JS
    cards_drawn_on(mm, dd, yyyy){
        mm--;
        let drew_cards = false;
        // Note that January is 0.
        if(typeof mm == "number" && typeof dd == "number" && typeof yyyy == "number"){
            for(let c = 0; c < this.draw_history.length; c++){
                if(this.draw_history[c].date_drawn.getFullYear() == yyyy){
                    if(this.draw_history[c].date_drawn.getMonth() == mm){
                        if(this.draw_history[c].date_drawn.getDate() == dd){
                            drew_cards = true;
                            console.log(`${this.draw_history[c].card} drawn on ${this.draw_history[c].date_drawn}`)
                        }
                    }
                }
            }
        }else{
            console.log("Incorrect date information inputted, no check occured.")
        }
        if(!drew_cards){
            console.log(`No cards were drawn on: ${++mm}/${dd}/${yyyy}`)
        }

    }
```
---
## `observer_events.js` Exercises

###  Exercise 11 - Emit 'lock' 

```JS
    reset_code(phrase){
        this.phrase = phrase;
        this.key = true;
        this.emit('lock', phrase)
    }
```


###  Final Exercise 12: Draw your lucky number 

```JS
secret.on('unlock', (phrase)=>{
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
                    fs.readFile(luckynumber, (err,data) =>{
                        if(err){
                            console.error(err);
                        }else{
                          let num = data.toString();
                          if(parseInt(num) >= 0 && parseInt(num) < 77){
                              tarot.find_card(parseInt(num));
                          }
                        }
                    })
                }
            });
        }
    });
})
```

 ---
