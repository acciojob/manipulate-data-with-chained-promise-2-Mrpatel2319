//your JS code here. If required.
// Function to return a promise that resolves with an array of numbers after 3 seconds
function getNumbers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

// Start the promise chain
getNumbers()
  .then((numbers) => {
    // Filter out odd numbers
    return new Promise((resolve) => {
      setTimeout(() => {
        const evenNumbers = numbers.filter((num) => num % 2 === 0);
        document.getElementById("output").textContent = `Filtered Even Numbers: ${evenNumbers.join(", ")}`;
        resolve(evenNumbers);
      }, 1000);
    });
  })
  .then((evenNumbers) => {
    // Multiply even numbers by 2
    return new Promise((resolve) => {
      setTimeout(() => {
        const multipliedNumbers = evenNumbers.map((num) => num * 2);
        document.getElementById("output").textContent = `Multiplied Numbers: ${multipliedNumbers.join(", ")}`;
        resolve(multipliedNumbers);
      }, 2000);
    });
  })
  .catch((error) => {
    // Handle any potential errors
    document.getElementById("output").textContent = `An error occurred: ${error}`;
  });
