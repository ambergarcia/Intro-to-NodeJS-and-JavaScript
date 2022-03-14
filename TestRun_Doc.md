 
 # GWC Intro to NodeJS & JavaScript - Test Run Documentation
 ## *Written by Amber Garcia, Spring 2022*
 
---

### **Important Start Up Information**

 * Official download & documentation for NodeJS: https://nodejs.org/en/
    * Any inquiries you might have about methods are here. If you're using methods foreign to the workshop, I suggest using this documentation for reference.
    * Download the recommended 16.14.0 LTS release. 
 * Pick a directory / folder path of where you plan to store & run the workshop material. Download and move the `test-run.js` file there.

### Navigating the Terminal / Command Line
* If it's your first time navigating a terminal prompt, search `terminal` in the Finder for Mac **OR** enter `command prompt` in the search bar for Windows (Otherwise skip this bullet point):

    * On Mac & Windows: `> cd "folder name"` will go to the folder that is a child of the parent directory.
    * You can chain commands like so: `> cd "f1" && cd "f2" && ... && cd "fn"` for `n` children of the parent directory.
    * To retrace your steps, use: `> cd ..` this will go up to the parent directory.
    * If you still have trouble navigating the CMD or Terminal, check out [this website.](https://towardsdatascience.com/a-quick-guide-to-using-command-line-terminal-96815b97b955)

 * In the root folder of where this file is stored, run the following command in your CMD or Terminal: 

    * `> node -v`
    * `> node test_run.js`

> If your program hasn't quit, push: CTRL + C to force stop running the file. Let me know if there are issues.

> *Otherwise, you're all set. Feel free to look at the Workshop Notes, and the documentation for the `test_run.js` file below. This was written to give you a preview of what is to come for the workshop, and to get you set up. Challenge problems are all the way at the bottom of this document!*
---

## `test_run.js`

The following are persistent variables that are necessary for the rest of the file. The `line_divider` is purely a cosmetic string. The `dir` is the necessary folder for the workshop.
* [`fs`](https://nodejs.org/api/fs.html) is a module for interacting with the **File System** of your operating system.
* [`readLine`](https://nodejs.org/api/readline.html) is a module for reading data from a **Readable Stream**, in this case your terminal / cmd prompt. This is referred to as your [`process.stdin`](https://nodejs.org/api/process.html#processstdin) and [`process.stdout`](https://nodejs.org/api/process.html#processstdout) for your input and output respectively.

```JS
 const line_divider = `\n━━━━━━━━━━━━━━━━━━\n`;
 const dir = `./Intro to NodeJS & JavaScript/`
 const fs = require("fs")
 const rl = require('readline').createInterface({
     input: process.stdin,
     output: process.stdout
 })
```

Next up we ask the user a question using [`readLine.question()`](https://nodejs.org/api/readline.html#rlquestionquery-options-callback). The way our asynchronous calls are written to be within the callbacks of each other, is an example of synchronous programming. 

```JS
console.clear()
 rl.question(`Is this file in the same directory that you'll be running the workshop in? (Y/N)\n> `, (input) => {/*...*/});
```

Inside of the callback, we check the input as a string in lowercase. This is given based on the returned value of the question's callback. We use [`fs.access`](https://nodejs.org/api/fs.html#fsaccesspath-mode-callback) to check for the folder's existence in the same directory the `test_run.js` is in. An error indicates that it doesn't exist, and we use that information to create the folder using our pre-defined function.
* `process.version` gives your current version of NodeJS.
* `create_local()` is our function that will be reviewed in the next block.
```JS
    console.clear()
    console.log(`${line_divider}\nYour ${process.version} version of NodeJS, is working fine.`)
    if(input.toLowerCase() === `y` || input.toLowerCase() === `yes`){
        fs.access(`${dir}`, (err)=>{
            if(err){
                console.log(`\n${err}: Creating file directory.`)
                create_local()
            }else{
                console.log(`\nYou're all set up, nice job! Make sure you read the rest of the instructions for the workshop.\n${line_divider}`)
            }
        });
    }else{
        console.log(`\nMove file to correct directory, compile this file again when you're ready.\n${line_divider}`)
    }
    rl.close()
```

This is the last chunk of our file. We obtain our luckynumber at the very beginning of compilation. We call [`fs.mkdir`](https://nodejs.org/api/fs.html#fsmkdirpath-options-callback) to create a directory with the folder name at the beginning of the file. We then call [`fs.writeFile`](https://nodejs.org/api/fs.html#fswritefilefile-data-options-callback) to create the luckynumber file.

```JS
const luckynumber = Math.floor(Math.random() * 78);
function create_local(){
    fs.mkdir((dir), (err) =>{
        if(err){
            console.log(`${err}, reach out to Amber for further instructions.`)
        }else{
            fs.writeFile(`${dir}/luckynumber.txt`, `${luckynumber}`, (err) =>{
                if(err){
                    console.log(`${err}, instructions for this error will be posted in the workshop github.`)
                }else{
                    console.log(`\nYou've pulled: ${luckynumber}. Remember that number!`)
                    console.log(`\nThis file created your workshop directory and an important file. Make sure to move this file into your new folder.\n\nThis test file also serves as more reference for you!\n${line_divider}`)
                }
            })
        }
    })
}
```
---
# Workshop Challenge Problems

> *Both Challenges require modifications to the current `test_run.js` file. Try these after the workshop (Or before, if you like the challenge & are a bit more intermediate with code).*

### **SIMPLE SECRET CHALLENGE:** *Incorrect user input*
* Right now no matter what the user enters, there isn't anything that handles wrong input (not inputting y/n or yes/no). Try adding a handler to ensure the prompt doesn't close if it's the wrong input.


### **MODERATE SECRET CHALLENGE:** *Error handling for the `luckynumber.txt` file*
 * There's no check or error handling if the user deletes this file after the folder has been created. 
 * Try adding either a check or error handle for the determining file's existence, and remake the luckynumber if it doesn't exist but the folder does.

### **COMPLEX SECRET CHALLENGE:** *Reshuffle Lucky Number*
 * Lets say you ran the program and it ran without errors. What if you want to change your number? 
 * Incoporate a new method such that, upon load up instead of immediately asking if they are using their current directory for the workshop, you check for the existence of a `luckynumber.txt` and `dir`. You prompt the user to 

> *You will definitely need to chain asynch methods to get synchronous flow for your program for both of these challenges.*
---
