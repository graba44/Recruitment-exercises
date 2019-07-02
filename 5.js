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
    let check = (string === string.split("").reverse().join("")) ? console.log("YES" ) : console.log("NO")
}
isPalindrome("abut-1-tuba")
isPalindrome("@allula");

/* EXERCISE 6 - Permutation
Write a program that takes two 11 integer array elements (one input per line) and gives output YES, if there's a permutation of the first array that is equal to the second array or gives output NO, if there's no such permutation.
*/