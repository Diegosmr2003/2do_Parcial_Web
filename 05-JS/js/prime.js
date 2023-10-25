var getPrimeFactors = function () {
  "use strict";

  const input = document.querySelector("#num");
  const n = input.value;

  function isPrime(num) {
    var divisor;
    for (divisor = 2; divisor <= Math.sqrt(num); divisor++) {
      if (num % divisor === 0) {
        return false;
      }
    }
    return true;
  }

  var i,
    primeFactors = [];

  for (i = 2; i <= n; i++) {
    if (n % i === 0 && isPrime(i)) {
      primeFactors.push(i);
    }
  }

  const output = document.querySelector("#pf");
  pf.innerText = primeFactors;
};

console.log(getPrimeFactors(30030));
