
const Basic = () => {

  const fib = (num) => {
    let a = 1, b = 0, temp;
    while (num > 0) {
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }
    return b;
  }

  const fizzBuzz = (n) => {
    let result = null
    const map = {
      3: 'Fizz',
      5: 'Buzz',
      15: 'FizzBuzz'
    };
    for (let i = 2; i <= n; i++) {
      const fizz = i % 3 * -1 + 3;
      const buzz = i % 5 + 5;
      const fizzBuzz = fizz * buzz;
      const value = map[fizzBuzz] || map[fizz] || map[buzz] || i;
      result = value
    }
    return result
  }



  console.log('fib', fib(12))
  console.log('fizzBuzz', fizzBuzz(45))
  return <div><ul><li><p>Fibonacci Sequence</p></li></ul></div>
}

export default Basic