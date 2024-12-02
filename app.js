//Part 1: Fizz Buzz

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(` ${i} Fizz Buzz`);
  } else if (i % 3 === 0) {
    console.log(`${i} Fizz`);
  } else if (i % 5 === 0) {
    console.log(`${i} Buzz`);
  } else {
    console.log(`numbers that are not divisable by 3 or 5 are : ${i}`);
  }
}

console.log("=================================");

// check prime number

let number = 0; // Start from 0

while (number <= 20) {
  let isPrime = true; // Assume the number is prime

  if (number <= 1) {
    isPrime = false; // Numbers <= 1 are not prime
  } else {
    let divisor = 2; // Start checking divisors from 2
    while (divisor < number) {
      if (number % divisor === 0) {
        // Check if divisible
        isPrime = false; // Not a prime number
        break; // Exit the loop early
      }
      divisor++; // Check the next number
    }
  }

  if (isPrime) {
    console.log(number + " is a prime number");
  }

  number++; // Move to the next number
}
