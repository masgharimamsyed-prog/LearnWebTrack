console.log("rightbar.js running...");

/* sticky note */
let notes = document.querySelector("#notes");
let addNote = document.querySelector("#add-note");
const toast = document.getElementById("toast");


addNote.addEventListener("click", () => {
    let newNoteCard = document.createElement("div");
    newNoteCard.classList.add("notes-card");

    let btnDiv = document.createElement('div');
    let delBtn = document.createElement("i");
    delBtn.addEventListener("click", () => {
        event.target.parentElement.parentElement.remove();
    });
    delBtn.classList.add("delete-button");
    delBtn.classList.add("fa-solid");
    delBtn.classList.add("fa-x");
    btnDiv.appendChild(delBtn);


    let textArea = document.createElement("textarea");
    textArea.classList.add("notes-card-para");
    textArea.placeholder = "Enter Note Here";

    newNoteCard.append(btnDiv);
    newNoteCard.appendChild(textArea);

    notes.appendChild(newNoteCard);
    toast.classList.add("show");

    let bg = generatebg();
    newNoteCard.style.backgroundColor = bg + ',0.1';
    newNoteCard.style.borderLeft = bg + ',0.9';
    newNoteCard.style.borderLeftStyle = "solid";
    newNoteCard.style.borderLeftWidth = "2px";
    console.dir(newNoteCard);
    newNoteCard.spellcheck = false;

    setTimeout(() => {
        toast.classList.remove("show");
    }, 500); // disappears after 3 seconds
})


function generatebg() {
    let red = Math.floor((Math.random() * 255) + 1);
    let green = Math.floor((Math.random() * 255) + 1);
    let blue = Math.floor((Math.random() * 255) + 1);
    return `rgb(${red},${green},${blue}`;
}

/* END sticky note */

/* js quiz code */
// challenges.js
// Array of 15 coding challenge objects, each with only a "description" field.

const challenges = [
    { description: "Write a function reverseString(str) that returns the input string reversed." },
    { description: "Write a function fizzBuzz(n) that returns an array of strings from 1 to n, replacing multiples of 3 with 'Fizz', multiples of 5 with 'Buzz', and multiples of both with 'FizzBuzz'." },
    { description: "Write a function findMax(arr) that returns the largest number in an array of numbers." },
    { description: "Write a function isPalindrome(str) that returns true if the string reads the same forwards and backwards, ignoring case and spaces." },
    { description: "Write a function flattenArray(arr) that flattens an arbitrarily nested array into a single-level array." },
    { description: "Write a function countChars(str) that returns an object mapping each character in the string to how many times it appears." },
    { description: "Write a function debounce(fn, delay) that returns a debounced version of fn, which only runs after 'delay' ms have passed since the last call." },
    { description: "Write a function removeDuplicates(arr) that returns a new array with duplicate values removed, preserving order." },
    { description: "Write a function deepClone(obj) that returns a deep copy of a nested object or array." },
    { description: "Write a function groupBy(arr, key) that groups an array of objects into an object of arrays, keyed by the given property." },
    { description: "Write a class EventEmitter with methods on(event, callback), off(event, callback), and emit(event, ...args)." },
    { description: "Write a function sumDigits(n) that returns the sum of all digits in a positive integer n." },
    { description: "Write a function myMap(arr, callback) that behaves like Array.prototype.map(), without using the built-in map method." },
    { description: "Write a function myPromiseAll(promises) that behaves like Promise.all(), resolving with an array of results or rejecting on the first failure." },
    { description: "Write a function twoSum(nums, target) that returns the indices of two numbers in the array that add up to target." }
];

let quizBtn = document.querySelector("#js-quiz-button");
let quizAttemptNo = document.querySelector('#quiz-attempt-no');
quizBtn.addEventListener("click", async () => {
    quizAttemptNo.innerText = `${Number(quizAttemptNo.innerText) + 1}`;
    alert(challenges[Number(quizAttemptNo.innerText)].description);




});
/* END Js quiz box */





