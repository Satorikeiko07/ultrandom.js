const crypto = require('node:crypto') 
//remove ^ if you use this on web

function randNum(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min 
}

function mth1() { return crypto.getRandomValues(new Uint8Array(1))[0] > 127 }

function mth2() { return Boolean(Math.round(Date.now() * Math.random()) % 2) }

function mth3() {
    let arr = [true, false]
    for (let i = 1; i < randNum(10, 100); i++)
        arr.push(arr[Math.floor(Math.random() * arr.length)])

    let currentIndex = arr.length, randomIndex
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--;
        [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]]
    }
    return arr[Math.floor(Math.random() * arr.length)]
}

function ultrandom() {
    let T = 0, F = 0
    for (let i = 0; i < randNum(100,1000); i++) {
        mth1() ? T+=1 : F+=1
        mth2() ? T+=1 : F+=1
        mth3() ? T+=1 : F+=1
    }
    return T>F
}
module.exports = {mth1,mth2,mth3,ultrandom}