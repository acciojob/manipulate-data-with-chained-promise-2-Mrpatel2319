//your JS code here. If required.
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]); 
    }, 3000); // Resolve after 3 seconds
  });
}

function filterOdd(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const evenNumbers = data.filter(num => num % 2 === 0);
      resolve(evenNumbers);
      updateOutput(evenNumbers.toString()); 
    }, 1000); // Resolve after 1 second
  });
}

function multiplyByTwo(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const multipliedNumbers = data.map(num => num * 2);
      resolve(multipliedNumbers);
      updateOutput(multipliedNumbers.toString()); 
    }, 2000); // Resolve after 2 seconds
  });
}

function updateOutput(output) {
  const outputElement = document.getElementById('output');
  outputElement.textContent = output;
}

getData()
  .then(filterOdd)
  .then(multiplyByTwo);