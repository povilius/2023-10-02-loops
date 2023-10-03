// console.log('- ' + 1 + '!!!')
// console.log('- ' + 2 + '!!!')
// console.log('- ' + 3 + '!!!')
// console.log('- ' + 4 + '!!!')
// console.log('- ' + 5 + '!!!')
// console.log('- ' + 6 + '!!!')
// console.log('- ' + 7 + '!!!')
// console.log('- ' + 8 + '!!!')
// console.log('- ' + 9 + '!!!')
// console.log('- ' + 10 + '!!!')
// console.log('- ' + 11 + '!!!')
// console.log('- ' + 12 + '!!!')
// console.log('- ' + 13 + '!!!')
// console.log('- ' + 14 + '!!!')
// console.log('- ' + 15 + '!!!')
// console.log('- ' + 16 + '!!!')
// console.log('- ' + 17 + '!!!')
// console.log('- ' + 18 + '!!!')
// console.log('- ' + 19 + '!!!')
// console.log('- ' + 20 + '!!!')

function count(num) {
  console.log('- ' + num + ' !!!')
}

// count(1)
// count(2)
// count(3)
// count(4)
// count(5)

// FOR CIKLAS (LOOP)
// 1. Iniciavimo žodelis - for
// 2. Paprasti skliaustai - ()
// 2.1. Sukuriamas kintamasis (dažniausiai jo pavadinimas yra i)
// 2.2. Sąlyga
// 2.3. Kintamojo vertės keitimas
// 3. Riestiniai skliaustai - {}

/*

for (kintamasis; sąlyga; kintamojo keitimas) {
  .....
}

*/

// for (let i = 1; i <= 20; i++) {
//   console.log(i)
// } 

// for (let i = 0; i < 20; i++) {
//   console.log(i)
// }

// for (let i = 1; i <= 20; i++) {
//   count(i)
// }


function task1() {
  for (let i = 1; i <= 100; i++) {
    let num = 2
    let result = i * num
    console.log(`${i} * ${num} = ${result}`)
  }
}

// task1()

function task2() {
  for (let i = 1; i <= 100; i++) {
    let num = 5
    let result = i * num
    console.log(`${i} * ${num} = ${result}`)
  }
}

// task2()

function task3() {
  for (let i = 1; i <= 100; i++) {
    let num = 5
    let result = i + num
    console.log(`${i} + ${num} = ${result}`)
  }
}

// task3()

function task4() {
  for (let i = 1; i <= 100; i++) {
    // console.log(i - 2)
    let num = 2
    let result = i - num
    console.log(`${i} - ${num} = ${result}`)
  }
}

// task4()

function task5() {
  for (let i = 1; i <= 100; i++) {
    // console.log(Math.pow(i, 2))
    let num = 2
    let result = Math.pow(i, num)
    console.log(`${i}\u00B2 = ${result}`)
  }
}

// task5()

function task6() {
  for (let i = 1; i <= 100; i++) {
    // console.log(Math.pow(i, 3))
    let num = 3
    let result = Math.pow(i, num)
    console.log(`${i}\u00B3 = ${result}`)
  }
}

// task6()

function task7() {
  for (let i = 100; i >= 1; i--) {
    // console.log(i * 2)
    let num = 2
    let result = i * num
    console.log(`${i} * ${num} = ${result}`)
  }
}

// task7()

function task8() {
  for (let i = 100; i >= 1; i--) {
    // console.log(i * 5)
    let num = 5
    let result = i * num
    console.log(`${i} * ${num} = ${result}`)
  }
}

// task8()

function task9() {
  for (let i = 100; i >= 1; i--) {
    // console.log(i + 5)
    let num = 5
    let result = i + num
    console.log(`${i} + ${num} = ${result}`)
  }
}

// task9()

function task10() {
  for (let i = 100; i >= 1; i--) {
    // console.log(i - 2)
    let num = 2
    let result = i - num
    console.log(`${i} - ${num} = ${result}`)
  }
}

// task10()

function task11() {
  for (let i = 100; i >= 1; i--) {
    // console.log(Math.pow(i, 2))
    let num = 2
    let result = Math.pow(i, num)
    console.log(`${i}\u00B2 = ${result}`)
  }
}

// task11()

function task12() {
  for (let i = 100; i >= 1; i--) {
    // console.log(Math.pow(i, 3))
    let num = 3
    let result = Math.pow(i, num)
    console.log(`${i}\u00B3 = ${result}`)
  }
}

// task12()

// FIZZ BUZZ

// function fizzbuzz() {
//   for (let i = 1; i <= 300; i++) {
//     if (i % 7 === 0 && i % 5 === 0 && i % 3 === 0) {
//       console.log(`FizzBuzzBiff`)
//     } else if (i % 3 === 0 && i % 5 === 0) {
//       console.log(`Fizz`)
//     } else if (i % 7 === 0 && i % 3 === 0) {
//       console.log(`FizzBiff`)
//     } else if (i % 7 === 0 && i % 5 === 0) {
//       console.log(`BuzzBiff`)
//     } else if (i % 3 === 0) {
//       console.log(`Buzz`)
//     } else if (i % 5 === 0) {
//       console.log(`FizzBuzz`)
//     } else if (i % 7 === 0) {
//       console.log(`Biff`)
//     } else {
//       console.log(i)
//     }
//   }
// }

// fizzbuzz()


function fizzbuzz() {
for (let i = 1; i <= 300; i++) {
  let output = ""

  if (i % 3 === 0) {
      output += "Fizz"
  }
  
  if (i % 5 === 0) {
      output += "Buzz"
  }
  
  if (i % 7 === 0) {
      output += "Biff"
  }

  if (i % 9 === 0) {
      output += "Fuzz"
  }

  if (i % 11 === 0) {
      output += "Bizz"
  }

  if (!output) {
      output = i
  }

  console.log(output)
}
}

fizzbuzz()
