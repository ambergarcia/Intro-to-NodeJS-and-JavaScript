
/**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CODE BELOW, see TestRun_Doc.md for documetiation.
Written by Amber Garcia (03/2022) for QC Girls Who Code Intro to NodeJS & JavaScript Workshop, Spring 2022
 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
 const line_divider = `\n━━━━━━━━━━━━━━━━━━\n`;
 const dir = `./Intro to NodeJS & JavaScript/`
 const fs = require("fs")
 const rl = require('readline').createInterface({
     input: process.stdin,
     output: process.stdout
 })
 
 console.clear()
 rl.question(`Is this file in the same directory that you'll be running the workshop in? (Y/N)\n> `, input => {
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
  });

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
