/* EXERCISE 4 - Reverse Array
Write a program that takes an array of size N as input and gives the output as an array in the reverse order. The format of the input is as follow:

    N
    a1 a2 a3 a4 a5 … an

'N' is the size of the array and a1, a2, a3, … an, are its elements. Your program should give output (on the same line and separated by a space) as follows:

    an an-1 an-2 … a1
*/

const numbers = [1, 2, 1, 0];
const reverseArray = (array) => array.reverse();
console.log(reverseArray(numbers));

/* EXERCISE 5 - Palindrome
Write a program that takes a string as input and prints whether this string is a true palindrome or not. A true palindrome is a string such that if you remove all characters except for letters (uppercase and lowercase), the string is equal if read from left to right and from right to left. If the inputted string is a true palindrome, the message YES (uppercase required) is displayed else NO is displayed.

Notice that lowercase letters are equal to uppercase letters and vice-versa.
*/

const isPalindrome = (string) => {
    string = string.toLowerCase().replace(/[^a-z]+/g, " ");
    let check = (string === string.split("").reverse().join("")) ? "YES" : "NO";
    console.log(check)
}
isPalindrome("abut-1-tuba");
isPalindrome("@allula");

/* EXERCISE 6 - Permutation
Write a program that takes two 11 integer array elements (one input per line) and gives output YES, if there's a permutation of the first array that is equal to the second array or gives output NO, if there's no such permutation.
*/

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const array2 = [6, 5, 4, 3, 2, 0, 11, 10, 9, 8, 7];

function checkPermutation (firstArray, secondArray) {

    const sort = (array) => array.sort();
    const numbersInFirstArray = sort(firstArray);
    const numbersInSecondArray = sort(secondArray);

    const compare = (firstArray, secondArray) => {
        if(firstArray.length !== secondArray.length)
        return false;

        for(let i = firstArray.length; i--;) {
            if(firstArray[i] !== secondArray[i])
            return false;
        } return true;
    }

    const numberResults = compare(numbersInFirstArray, numbersInSecondArray);

    if(numberResults){
        return "YES";
    } return "NO";
}

console.log(checkPermutation(array1, array2));

/* EXERCISE 9 - Optional Power
Write a function in JS optionalPow that will receive two numeric arguments. The function is required to create some confirmation logic, where if the user agrees with the question (presses OK), then the function is required to compute the result of raising the first argument to the power determined by the second argument. If the user does not agree with the question (presses Cancel), then it should compute the power of the second argument raised to the first one. In both cases, the function must return the computed value.

For example, optionalPow(2, 3) should return 8 if OK is pressed, otherwise it should return 9.
*/

let optionalPow;
(optionalPow = function(num1, num2){
    if (confirm("Press a button!")) {
        return Math.pow(num1, num2)
    } else return Math.pow(num2, num1)
})();

console.log(optionalPow(2, 5))