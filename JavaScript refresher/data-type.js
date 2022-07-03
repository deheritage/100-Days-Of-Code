

// //Primitive Data Types
// const numOne = 3
// const numTwo = 3
// console.log(numOne == numTwo);

// const js = 'JavaScript'
// const py = 'Python'
// console.log(js == py);

// const lightOn = true
// const lightOff = false

// console.log(lightOn == lightOff);


// //Non-Primitive Data Types
// const nums = [1, 2, 3]
// nums[0] = 10
// console.log(nums);

// const num = [1, 2, 3]
// const numbers = [1, 2, 3]
// console.log(num == numbers);

// const userOne = {
//     name: 'Akinbinu',
//     role: 'learning',
//     country: 'Finland'
// }

// const userTwo = userOne
// console.log(userOne == userTwo);


// //Numbers
// const age = 35
// const gravity = 9.81
// const mass = 72
// const PI = 3.14


// const boilingPoint = 100
// const bodyTemp = 37
// console.log(age, gravity, mass, PI, boilingPoint, bodyTemp)


// //Math Object

// const randNum = Math.random()
// console.log(randNum);

// //random number btw 0 to 10
// const number = Math.floor(Math.random() * 11)
// console.log(number);

// //Absolute value
// console.log(Math.abs(-10));

// //Square root
// console.log(Math.sqrt(100));

// console.log(Math.sqrt(2));

// //Power 
// console.log(Math.pow(3, 2));
// console.log(Math.E);


// // Logarithm
// // Returns the natural logarithm with base E of x, Math.log(x)

// console.log(Math.log(2));
// console.log(Math.log(10));

// //Returns the natural logarithm of 2 and 10 respectively
// console.log(Math.LN2);
// console.log(Math.LN10);

// //Trigonometry
// Math.sin(0)
// Math.sin(60)

// Math.cos(0)
// Math.cos(60)


// //Strings
// const space = ' '           // an empty space string
// const firstName = 'Akinbinu'
// const lastName = 'Arike'
// const country = 'Nigeria'
// const city = 'Lagos'
// const language = 'JavaScript'
// const job = 'student'
// const quote = "The saying,'Seeing is Believing' is not correct in 2020."
// const quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`

// const fullName = firstName + space + lastName
// const personInfoOne = fullName + '. I am ' + age + '. I live in ' + country;
// console.log(personInfoOne);


// //Long Literal Strings
// const paragraph = "My name is Arike Akinbinu. I live in Nigeria, Lagos"
// console.log(paragraph);

// //String Methods
// const jvs = 'JavaScript'
// console.log(jvs.length);

// const birthName = 'Akinbinu'
// console.log(birthName.length);


// //Access different characters in 'JavaScript' string.

// const string = 'JavaScript'
// const firstLetter = string[0]
// console.log(firstLetter);

// const secondLetter = string[1]
// const thirdLetter = string[2]
// const lastLetter = string[9]

// console.log(lastLetter);

// //Class Constructor
// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//         this.country = country
//     this.city = city
//     }
// }

// const person = new Person('Akinbinu', 'Arike')
// const person1 = new Person('Arike', 'Akinbinu')
// const person2 = new Person('Anuoluwapo', 'Arike')
// const person3 = new Person('Akinbinu', 'Arike', 250, 'Nigeria', 'Lagos',)
// console.log(person);
// console.log(person1);
// console.log(person2);

class Person {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
      this.score = 0
      this.skills = []
    }
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
}

const person4 = new Person('Akinbinu', 'Akinbinu', 35, 'Nigeria', 'Lagos')
const person5 = new Person('Anuoluwapo', 'Arike', 28, 'Nigeria', 'Abuja')
// console.log(person4.getFullName())
// console.log(person5.getFullName())

console.log(person4.score)
console.log(person5.score)

console.log(person4.skills);
console.log(person5.skills);