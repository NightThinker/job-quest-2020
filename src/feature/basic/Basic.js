
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

  const secondMax = (arr) => {
    const max = Math.max(...arr)
    try {
      if (max === -Infinity) throw Error
      const sort = arr.sort((a, b) => b - a).find(i => i < max) || arr[0]
      return sort
    } catch (error) {
      throw error
    }
  };

  const shift = (arr, position, number) => {
    if (position === 'right') {
      for (var i = 0; i < number; i++) {
        arr.unshift(arr.pop());
      }
      return arr
    }
    for (var i = 0; i < number; i++) {
      arr.push(arr.shift())
    }
    return arr
  }



  console.log('fib', fib(1), fib(3), fib(12))
  console.log('shift', shift(['john', 'jane', 'sarah', 'alex'], 'left', 2), shift([1, 2, 3, 4, 5], 'right', 3))
  console.log('secondMax', secondMax([2, 3, 4, 5]), secondMax([9, 2, 21, 21]), secondMax([4, 4, 4, 4]), secondMax([4123]))
  // console.log('secondMax error', secondMax([]))
  console.log('fizzBuzz', fizzBuzz(21), fizzBuzz(25), fizzBuzz(45))
  return <div><ul><li><p>Fibonacci Sequence</p></li></ul></div>
}

export default Basic