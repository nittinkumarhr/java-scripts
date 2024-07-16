// Day-3  Loops
// Activity 1: For Loop

// Task 1: Create a for loop that prints the numbers 1 to 10 to the console.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// Task 2: write a program to print the multiplication table of 5
for (let i = 1; i <= 10; i++) {
    console.log(i * 5);
}

// Activity 2: While Loop
// Task 1: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let sum = 0;
let i = 1;
while (i <= 10) {
    sum += i;
    i++;
}
console.log(sum);
// Task 2: Write a program to print the numbers from 10 to 1 using a while loop.
let j = 10;
while (j >= 1) {
    console.log(j);
    j--;

}

// Activity 3: Do-While Loop
// Task 1: Write a program to print the numbers from 1 to 5 using a do-while loop.
let k = 1;
do {
    console.log(k);
    k++;

} while (k <= 5);

// Task 2: write a program to calculate the factorial of a number using a do-while loop.
let num = 5;
let factorial = 1;
let l = 1;
do {
    factorial *= l;
    l++;
}   while (l <= num);
console.log('factorila:',factorial);

// Activity 4: Nested Loops

// Task 1: Write a program to print a pattern of stars using nested loops.
for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        if (j<=i){
            row += '*';
        }
        else{
            row += ' ';
        }

    }
    console.log(row);
}

// Activity 5: Loop Control Statements

// Task 1: Write a program to print the numbers from 1 to 10, but skip the number 5.
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}
// Task 2: Write a program to print the numbers from 1 to 10, but break the loop when the number reaches 7.
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
    
}
