function isFibonacciNumber(num) {
    if (num < 0) return { isFibonacci: false, fibSequence: [] }; 

    const fib = [0, 1];
    
    while (fib[fib.length - 1] < num) {
        const nextValue = fib[fib.length - 1] + fib[fib.length - 2];
        fib.push(nextValue);
    }
    
    const isFibonacci = fib.includes(num);
    
    return { isFibonacci, fibSequence: fib };
}

const number = 221; 
const result = isFibonacciNumber(number);

if (result.isFibonacci) {
    console.log(`${number} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${number} não pertence à sequência de Fibonacci.`);
}
console.log(`Sequência de Fibonacci até o número ${number}:`, result.fibSequence);
