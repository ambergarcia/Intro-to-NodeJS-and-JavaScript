/**------------------------------------------------------------------------------------------------------------------------
    main_synch.js
    Goals:
        * `EventEmitter` module
        * Create Synchronous Calls
        * Tying in everything you've learned
 ------------------------------------------------------------------------------------------------------------------------*/


const fs = require("fs");
const tarot_filename = `./tarot-deck.json`;
const line_divider = `━━━━━━━━━━━━━━━━━━`
const chunk_size = 12;
const rl = require("readline").createInterface({
    input: process.stdin, output: process.stdout
});
let tarot_deck;
let tarot_bytesize;

function load_bar(num, den){
    let str = `█`;
 if(num <= den && den != 0){
    for(let i = 0; i < num / den; i += 0.1){
        str += `█`;
    }
    process.stdout.clearLine();
    process.stdout.cursorTo(0,2);
    console.log(`${str} ${Math.floor((num / den) * 100)}%`);
    console.log(`${line_divider}`)
 }
}

fs.stat(tarot_filename, (err,stats) =>{
    if(err){
        console.err(`${err}, unable to find or parse file.`)
    }else{
        let progress = 0;
        tarot_bytesize = stats.size;
        const read_tarotdeck = fs.createReadStream(tarot_filename,{ highWaterMark: chunk_size})
        read_tarotdeck.on('open', () =>{
            console.clear();
            console.log(`${line_divider}\nReading json file...`)        
        })
        read_tarotdeck.on('data', (chunk) => {
            tarot_deck += chunk;
            progress++;
            load_bar(chunk_size * progress,tarot_bytesize);
        })    
        read_tarotdeck.on('end', () =>{
            read_tarotdeck.close((err) => {
                console.log(`Tarot deck successfully read. Ready for use.`);
                rl.question(`How many cards will you draw? [Up to 3]`, (answer) =>{
                    if(parseInt(answer) <= 3){
                        console.log(tarot_deck);
                        rl.close()
                    }else{
                        console.log(`Invalid number, try again.`);
                    }
                })

            })
        })

    }
})




