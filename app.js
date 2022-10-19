// SOLUTION'S TO MEMORIZE

// REVERSE STRING

let str = "shivom"

const reverseString = (str) => {
    return str.split("").reverse().join("")
}
console.log(reverseString(str))

// PALINDROME

let pal = "racecar"

const palindrome = (pal) => {
    const reverse = pal.split("").reverse().join("")
    return pal === reverse
}
console.log(palindrome(pal))

// REVERSE INTEGER

let int = 503

const reverseInteger = (int) => {
    const reverse = int.toString().split("").reverse().join("")
    return parseInt(reverse) * Math.sign(int)
}
console.log(reverseInteger(int))

// STRINGIFY ID

let arr = [
    {id: 1, name: 'shiv'},
    {id: 2, name: 'kive'},
    {id: 3, name: 'paudel'},
    {id: 4, name: 'satyam'},
    {id: 5, name: 'riddhi'}
]

const stringifyId = (arr) => {
    const idArr = arr.map(obj => obj.id)
    const uniqueArr = [... new Set(idArr)]
    return uniqueArr.join(", ")
}

console.log(stringifyId(arr))

// MAXIMUM CHARACTERS

let kive = 'aabbbbbbcccdd'

const maxCharacter = (kive) => {
    const charMap = new Map()
    let max = 0
    let maxChar = ""
    for (const char of kive){
        const count = charMap.get(char)
        charMap.set(char, count + 1 || 1)
    }
    for (const [char, count] of charMap){
        if (count > max){
            max = count
            maxChar = char
        }
    }
    return maxChar
}
console.log(maxCharacter(kive))

// ANAGRAMS

const strA = "cat"
const strB = "act"

// const cleanString = .toLowerCase().replaceAll(" ", "").split("").sort().join("")

const anagrams = (strA, strB) => {
    
    return  strA.toLowerCase()
                .replaceAll(" ", "")
                .split("")
                .sort()
                .join("")
                 === 
            strB.toLowerCase()
                .replaceAll(" ", "")
                .split("")
                .sort()
                .join("")
}
console.log(anagrams(strA, strB))

// ARRAY CHUNK

const array = [0, 1, 2, 3]
const size = 2

const arrayChunk = (array, size) => {
    const chunkedArray = []
    for (let i = 0; i < array.length; i += size){
        const subarray = array.slice(i, i + size)
        chunkedArray.push(subarray)
    }
    return chunkedArray
}

console.log(arrayChunk(array, size))

// CAPITALIZE SENTENCE

let sentence = "a green apple"

const capitalize = (sentence) => {
    const result = []
    for(let word of sentence.split(" ")){
        const capsWord = word[0].toUpperCase() + word.slice(1)
        result.push(capsWord)
    }
    return result.join(" ")
}
console.log(capitalize(sentence))

// STEPS

let n = 4

const steps = (n) => {
    for(let rows = 0; rows < n; ++rows){
        let step = ""
        for (let columns = 0; columns < n; ++columns){
            if (columns <= rows){
                step += "#"
            }
            else{
                step += " "
            }
        }
        console.log(step)
    }
}
console.log(steps(n))

// PYRAMID

let p = 3

const pyramid = (p) => {
    const pyramidWidth = 2 * p - 1
    const middle = Math.floor(pyramidWidth / 2)
    for (let row = 0; row < p; ++row){
        let step = ""
        for(let column = 0; column < pyramidWidth; ++column){
            if (column >= middle - row && column <= middle + row){
                step += "#"
            }
            else{
                step += " "
            }
        }
        console.log(step)
    }
}
console.log(pyramid(p))