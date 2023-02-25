let line = document.getElementById("perlujs")
let txts = ['a Coder', 'a Web Developer', 'a Cloud Computing Student'];
let speed = 50

async function typewriter(txt){
    for (let i = 0; i < txt.length; i++){
        line.innerHTML  += txt[i];
        await delay(speed)
    }
}

async function reverseTypewritter(txt){
    for(let i = txt.length; i > 0; i-- ){
        line.innerHTML = line.innerHTML.slice(0, -1)
        await delay(speed)
    }
}

async function writeLoop(){
    for (let i = 0; i< txts.length; i++){
        await typewriter(txts[i])
        await delay(1000)
        await reverseTypewritter(txts[i])
        await delay(300)
    }
    writeLoop()
}

function delay(ms){
    return new Promise((resolve) => { setTimeout(() => {resolve()}, ms)})
}

writeLoop()