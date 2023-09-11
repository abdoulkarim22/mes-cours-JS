









































// const input = document.getElementById("button")
// const phrase = document.getElementsByClassName("titre")
// input.addEventListener('click', function (event) {
//     if(event.target.checked){
//         for (let i = 0; i < phrase.length; i++) {
//             phrase[i].classList.add("garde")
//         }
//     }else{
//         for (let i = 0; i < phrase.length; i++) {
//             phrase[i].classList.remove("garde")
//         }

//     }
// })
// console.log(input);













































// 1
// const red = document.querySelectorAll(".red");

// for (let i = 0; i < red.length; i++) {
//     red[i].classList.remove('red');
//     red[i].classList.add('blue');
// }

// // console.log(title)
// // 2

// const refrains = document.querySelectorAll('.refrain');
// for (let i = 0; i < refrains.length; i++) {
//     refrains[i].setAttribute("style", "font-style: italic");

// }

// // 3
// const blue = document.querySelectorAll('.blue');
// for (let i = 0; i < blue.length; i++) {
//     blue[i].classList.remove('blue');
//     blue[i].setAttribute("style", "background-color: #6495ED");
    
// }

// // 4
// const paragraphe = document.querySelectorAll('p')
// for (let i = 0; i < paragraphe.length; i++) {
//     paragraphe[i].setAttribute("style", "margin: 0")
    
// }











































// function troisheuredix () {
//     console.log("3h:10")
// }
// troisheuredix();
// function Addittion(a,b) {
//     console.log(a+b)
    
// }
// Addittion();

// function list(a) {

//    console.log(a.slice(0, -2))
//   }
//   list("sofia");
  
//   function part(a) {
//     console.log(a.split())
//   }
  
























 




// const array1 = [1, 2, 3, 4];

// // Fill with 0 from position 2 until position 4
// console.log(array1.fill(0, 2, 4));



// const table = "aboul karim va au marcher il achete un velo pour son frere"
// const works = table.split();
// console.log(works);


//  const table = 'ABOUL faote force dad iker fzr'
// const zrr = table.split();

// console.log(zrr);















// for(let i = 0; i <= 5; i++){
//     if(i == 1){
//       continue
//     }
//     console.log(i)
//   }
  
//   // 0 1 2 4 5




























// for (i = 0; i <= 5; i++){
//     if (i == 5){
//         break
//     }
//     console.log(i);
// }






















// const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
// const newArr = []
// for(const country of countries){
//   newArr.push(country.toUpperCase())
// }

// console.log(newArr)  // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]









// const numbers = [1, 2, 3, 4, 5]

// for (const num of numbers) {
//   console.log(num)
// }

// // 1 2 3 4 5

// for (const num of numbers) {
//   console.log(num * num)
// }

// // 1 4 9 16 25

// // adding all the numbers in the array
// let sum = 0
// for (const num of numbers) {
//   sum = sum + num  
// 	// can be also shorten like this, sum += num
//   // after this we will use the shorter synthax(+=, -=, *=, /= etc)
// }
// console.log(sum) // 15

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ]

// for (const tech of webTechs) {
//   console.log(tech.toUpperCase())
// }

// // HTML CSS JAVASCRIPT REACT NODE MONGODB

// for (const tech of webTechs) {
//   console.log(tech[0]) // get only the first letter of each element,  H C J R N M
// }



















// let i = 0
// while (i <= 5) {
//   console.log(i)
//   i++
// }











// const table =[1, 2, 3, 4, 5];
// const newt =[];
// let sum = 0;
// for(let i = 0;i < table.length; i++){
//     newt.push(table[i] **2) 
// }
// console.log(newt)




// const numbers = [1, 2, 3, 4, 5]
// const newArr = []
// let sum = 0
// for(let i = 0; i < numbers.length; i++){
//   newArr.push( numbers[i] ** 2)

// }

// console.log(newArr)  // [1, 4, 9, 16, 25]























// let numbers = [0,1,2,4,5,6,7,8,9,10];
// let ensemble = 1;
// for(let i = 0; i < numbers.length; i++){
//    ensemble = ensemble + numbers[i];
// }
// console.log(ensemble);
























// const numbers = [1, 2, 3, 4, 5]
// let sum = 2
// for(let i = 0; i < numbers.length; i++){
//   sum  = sum + numbers[i]  

// }

// console.log(sum)

















// const table = ["niger", "gana","cap-vert","senegal"]
// const newArr=[]
// for (let i =  0; i < table.length; i++) {
//     newArr.push(table[i].toUpperCase())
// }
// console.log(newArr)












// for (let i = 5;i >= 0; i--){
//     console.log(i)
// }








// multiplucation

// for (let i = 0; i <= 32; i++){
//     console.log(`${i} + ${i} = ${i + i}`);
// }






// const fruits = ['Anana', 'Lemon', 'Banana', 'Goyave'];
// let darck = fruits.indexOf('oyave');
// console.log(darck);

// if (darck != -1){
//   console.log('sa existe');
// }
// else{
//   console.log('le fruit exite pas');
// }



















// const fruits = ['banana', 'orange', 'mango', 'lemon'];
// let index = fruits.indexOf('noe') ; // 0
// console.log(index);
// if(index != -1){
//   console.log('This fruit does exist in the array');
//  } else {
//      console.log('This fruit does not exist in the array');
//  }































// indexOf : pour vérifier si un élément existe dans un tableau. S'il existe, il renvoie l'index, sinon il renvoie -1.
// const numbers = [1,2,3,4,5,6,7,8,9]

// console.log(numbers.indexOf(44))
// console.log(numbers.indexOf(6))
// console.log(numbers.indexOf(8))






















//  const firstList = [1, 2, 3]
//  const secondList = [4, 5, 6]
//  const thirdList = firstList.concat(secondList)

//  console.log(thirdList) // [1, 2, 3, 4, 5, 6]



//  const firstList = [0, 1, 2]
//  const secondList = [6, 7, 8]
//  const thirdList = firstList.concat(secondList);

//  console.log(thirdList)

































// //  MANIPIULATION DE TABLEAU
// const names = Array(21).fill('KARIM BENZEMA')

// console.log(names)









































// const numbers = [1, 2, 3, 4, 5]
// numbers[0] = 10      // changing 1 at index 0 to 10
// numbers[1] = 20      // changing  2 at index 1 to 20

// console.log(numbers) // [10, 20, 3, 4, 5]

// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya'
// ]

// countries[0] = 'Afghanistan'  // Replacing Albania by Afghanistan
// let lastIndex = countries.length - 1
// countries[lastIndex] = 'Korea' // Replacing Kenya by Korea

// console.log(countries)
























//Méthodes pour manipuler un tableau


// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ] // List of web technologies
  
//   console.log(webTechs)        // all the array items
//   console.log(webTechs.length) // => to know the size of the array, which is 7
//   console.log(webTechs[0])     //  -> HTML
//   console.log(webTechs[6])     //  -> MongoDB
  
//   let lastIndex = webTechs.length - 1
//   console.log(webTechs[lastIndex]) // -> MongoDB

























// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ] // List of web technologies
  
//   console.log(webTechs)        // all the array items
//   console.log(webTechs.length) // => to know the size of the array, which is 7
//   console.log(webTechs[0])     //  -> HTML
//   console.log(webTechs[6])     //  -> MongoDB
  
//   let lastIndex = webTechs.length - 1
//   console.log(webTechs[lastIndex]) // -> MongoDB

























































//  const numbers = [0, 3.14, 9.81, 37, 98.6, 100]  // set of num
// //  console.log(numbers[5])
// //  console.log(numbers[2])
// //  console.log(numbers[1])
// //  console.log(numbers[3])

//  let lastname = numbers.length -3

//  console.log(numbers[lastname])

















// const fruits = ['banana', 'orange', 'mango', 'lemon']
// let firstFruit = fruits[0] // we are accessing the first item using its index
// console.log(firstFruit);
// let two = fruits[1]
// console.log(two);
// let fore = fruits[3]
// console.log(fore)

// let index = fruits.length -4
// unix = fruits[index]
// console.log(unix)
// Nous accédons à chaque élément d'un tableau en utilisant leur index. Un index de tableau commence à partir de 0. L'image ci-dessous montre clairement l'index de chaque élément du tableau.





























// const table =['Banana', 'orange', 'mango', 'lemon', 'anana']
// let hard = table[2]

// console.log(hard);


















// let KB = 'KARIMBENZEMA'
// const real = KB.split('')
// console.log(real)

// let social = 'facebook, google, Aplle, microsoft, Amazon'
// const RAR = social.split(',')
// console.log(social);

// let text = 'je suis codeur du sahel a codeloccol je suis fier et une fois fini le programme jaimairais alller au 42 mercie!'

// const works = text.split(' ')
// console.log(works);

// let js = 'JavaScript'
// const charsInJavaScript = js.split('')

// console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

// let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
// const companies = companiesString.split(',')

// console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
// let txt =
//   'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// const words = txt.split(' ')

// console.log(words)
// // the text has special characters think how you can just get only the words
// // ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]










































//Array can have items of different data types
// const arr = [
//     'KARIM',
//     250,
//     true,
//     {country: 'Nimaey', city:'dosso'},
//     { skills: ['HTML','JS','C','REACT'] }
// ]

// console.log(arr);



















// const country = [ 0,1,2,3,4,5,6,7,8,9,10]
// const language = ['js', 'phyton', 'HTML', 'REACT' , 'NODE',' LANGAGE.C']
// const fruits = ['orange', 'banana', 'lemon', ' anana '] 
// const names = ['ABOULKARIM','ABDOULMADJID','SALIM','HAFISOU','BAKI']


// console.log('Number:',names);
// console.log('les fruist:', fruits.length)
// console.log('les langages:', language.length)











// // if else if else
// let weather = 'sunny'
// if (weather === 'rainy') {
//   console.log('You need a rain coat.')
// } else if (weather === 'cloudy') {
//   console.log('It might be cold, you need a jacket.')
// } else if (weather === 'sunny') {
//   console.log('Go out freely.')
// } else {
//   console.log('No need for rain coat.')
// }
// let ali = 'nafissa'
// if (ali === 'mariam'){
//     console.log('vie');
// }else if(ali === 'majo'){
//     console.log('cousin')
// }else if(ali=== 'abass'){
//     console.log('frere')
// }else if(ali=== 'nafissa'){
//     console.log('sa wife i.a')
// }
// else{
//     console.log('fin')
// }
































// let a = 4
// if(a > 4){
//     console.log(`${a} positive`)
// }else if(a < 4){
//     console.log(`${a} negative`)
// }else if (a == 4){
//     console.log(`${a} yes the night king`)
// }
// else{
//     console.log(`${a} number`)
// }



















// let isRaining = true
// if (isRaining) {
//   console.log('You need a rain coat.')
// } else {
//   console.log('No need for a rain coat.')
// }
// // You need a rain coat.

// isRaining = false
// if (isRaining) {
//   console.log('You need a rain coat.')
// } else {
//   console.log('No need for a rain coat.')
// }
// // No need for a rain coat.























// let num = 3
// if (num > 0) {
//   console.log(`${num} is a positive number`)
// } else {
//   console.log(`${num} is a negative number`)
// }
// //  3 is a positive number

// num = -3
// if (num > 0) {
//   console.log(`${num} is a positive number`)
// } else {
//   console.log(`${num} is a negative number`)
// }
// //  -3 is a negative number



























// let isRaining = true
// if (isRaining) {
//   console.log('Remember to take your rain coat.')
// }

































// let num = 3
// if (num > 0) {
//   console.log(`${num} is a positive number`)
// }
// //  3 is a positive number


























//  const now = new Date()
//  const year = now.getFullYear() // return year
//  const month = now.getMonth() + 1 // return month(0 - 11)
//  const date = now.getDate() // return date (1 - 31)
//  const hours = now.getHours() // return number (0 - 23)
//  const minutes = now.getMinutes() // return number (0 -59)

//  console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56


// let number = 4 > 3 && 10 < 12;
// console.log(number);























// const now = new Date() //
// console.log(now.getTime()) // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41












///pour les seconds
// const now = new Date()
// console.log(now.getSeconds()) // 41, because the time is 00:56:41













// const now = new Date()
// console.log(now.getMinutes()) // 56, because the time is 00:56:41
//Let's extract or get the minutes from a time object.
// let yesterday = new Date()
// console.log(yesterday.getMinutes())

























// Extrayons ou obtenons l'année complète d'un objet temporel
// const now = new Date()
// console.log(now.getFullYear()) // 2020




















































// Extrayons ou obtenons l'année complète d'un objet temporel.
// const now = new Date()
// console.log(now) // Sat Jan 04 2020 00:56:41 GMT+0200 (Eastern European Standard Time)

// // Extrayons ou obtenons l'année complète d'un objet temporel.
// const now = new Date()
// console.log(now.getMonth()) // 0, because the month is January,  month(0-11)




































// const now = new Date()
// console.log(now.getDate()) // 4, because the day of the month is 4th,  day(1-31)


// let yesterday = new Date()
// console.log(yesterday.getDate()













































//Let's extract or get the day of the week from a time object.
// const now = new Date()
// console.log(now.getDay()) // 6, because the day is Saturday which is the 7th day
// //  Sunday is 0, Monday is 1 and Saturday is 6
// // Getting the weekday as a number (0-6)






















// const agree = confirm('Are you sure you like to delete? ')
// console.log(agree) // result will be true or false based on what you click on the dialog box














// let count = 4
// console.log(--count) // -1
// console.log(count)  // -1









// let count = 0
// console.log(count++)        // 0
// console.log(count)          // 1












// let count = 0
// console.log(++count)        // 1
// console.log(count)          // 1















// // && ampersand operator example

// const check = 4 > 3 && 10 > 5         // true && true -> true
// const check = 4 > 3 && 10 < 5         // true && false -> false
// const check = 4 < 3 && 10 < 5         // false && false -> false

// // || pipe or operator, example

// const check = 4 > 3 || 10 > 5         // true  || true -> true
// const check = 4 > 3 || 10 < 5         // true  || false -> true
// const check = 4 < 3 || 10 < 5         // false || false -> false

// //! Negation examples

// let check = 4 > 3                     // true
// let check = !(4 > 3)                  //  false
// let isLightOn = true
// let isLightOff = !isLightOn           // false
// let isMarried = !false                // true









// let empty = null
// console.log(empty) // -> null , means no value

// console.log(3 > 2)              // true, because 3 is greater than 2
// console.log(3 >= 2)             // true, because 3 is greater than 2
// console.log(3 < 2)              // false,  because 3 is greater than 2
// console.log(2 < 3)              // true, because 2 is less than 3
// console.log(2 <= 3)             // true, because 2 is less than 3
// console.log(3 == 2)             // false, because 3 is not equal to 2
// console.log(3 != 2)             // true, because 3 is not equal to 2
// console.log(3 == '3')           // true, compare only value
// console.log(3 === '3')          // false, compare both value and data type
// console.log(3 !== '3')          // true, compare both value and data type
// console.log(3 != 3)             // false, compare only value
// console.log(3 !== 3)            // false, compare both value and data type
// console.log(0 == false)         // true, equivalent
// console.log(0 === false)        // false, not exactly the same
// console.log(0 == '')            // true, equivalent
// console.log(0 == ' ')           // true, equivalent
// console.log(0 === '')           // false, not exactly the same
// console.log(1 == true)          // true, equivalent
// console.log(1 === true)         // false, not exactly the same
// console.log(undefined == null)  // true
// console.log(undefined === null) // false
// console.log(NaN == NaN)         // false, not equal
// console.log(NaN === NaN)        // false
// console.log(typeof NaN)         // number

// console.log('mango'.length == 'avocado'.length)  // false
// console.log('mango'.length != 'avocado'.length)  // true
// console.log('mango'.length < 'avocado'.length)   // true
// console.log('milk'.length == 'meat'.length)      // true
// console.log('milk'.length != 'meat'.length)      // false
// console.log('tomato'.length == 'potato'.length)  // true
// console.log('python'.length > 'dragon'.length)   // false

















// let firstName
// console.log(firstName) //not defined, because it is not assigned to a value yet














// let isLightOn = true
// let isRaining = false
// let isHungry = false
// let isMarried = true
// let truValue = 4 > 3    // true
// let falseValue = 4 < 3  // false

// console.log(truValue);













// let space = ' ' // an empty space string
// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// let country = 'Finland'
// let city = 'Helsinki'
// let language = 'JavaScript'
// let job = 'teacher'

// console.log(` i am ${lastName}`,firstName);















// let userOne = {
//     name: 'Asabeneh',
//     role: 'teaching',
//     country: 'Finland'
//   }
//   let userTrue = {
//     name:'karim',
//     country: 'Niamey',
//     role: 'teacher'
//   }
//   console.log(userOne==userTrue);
























// const PI = Math.PI
// console.log(PI) // 3.141592653589793
// console.log(Math.round(PI)) // 3; to round values to the nearest number
// console.log(Math.round(9.81)) // 10
// console.log(Math.floor(PI)) // 3; rounding down
// console.log(Math.ceil(PI)) // 4; rounding up
// console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value
// console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value

// const randNum = Math.random() // creates random number between 0 to 0.999999
// console.log(randNum)
// // Let create random number between 0 to 10
// const num = Math.floor(Math.random() * 11) // creates random number between 0 and 10
// console.log(num)

// //Absolute value
// console.log(Math.abs(-10)) //10
// //Square root
// console.log(Math.sqrt(100)) // 10
// console.log(Math.sqrt(2)) //1.4142135623730951
// // Power
// console.log(Math.pow(3, 2)) // 9
// console.log(Math.E) // 2.718

// // Logarithm
// //Returns the natural logarithm of base E of x, Math.log(x)
// console.log(Math.log(2)) // 0.6931471805599453
// console.log(Math.log(10)) // 2.302585092994046

// // Trigonometry
// console.log(Math.sin(0))
// console.log(Math.sin(60))
// console.log(Math.cos(0))
// console.log(Math.cos(60))














































// let num = '10'
// let numInt = Number(num)

// console.log(numInt) // 10
























































// let string = 'love'
// console.log(string.repeat(10)) // lovelovelovelovelovelovelovelovelovelove














// let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
// let regEx = /\d+/

// // d with escape character means d not a normal d instead acts a digit
// // + means one or more digit numbers,
// // if there is g after that it means global, search everywhere.

// console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
// console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]





























// let string = 'Love is the best to in this world'

// console.log(string.startsWith('Love'))   // true
// console.log(string.startsWith('love'))   // false
// console.log(string.startsWith('world'))  // false

// let country = 'Finland'

// console.log(country.startsWith('Fin'))   // true
// console.log(country.startsWith('fin'))   // false
// console.log(country.startsWith('land'))  //  false









































































// concat() : il prend plusieurs sous-chaînes et les joint.

// let string = '30'
// console.log(string.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript

// let country = 'Fin'
// console.log(country.concat("land")) // Finland






























// lastIndexOf() : Prend une sous-chaîne et si la sous-chaîne existe dans une chaîne, il renvoie la dernière position de la sous-chaîne si elle n'existe pas, il renvoie -1
// let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'

// console.log(string.lastIndexOf('love'))       // 67
// console.log(string.lastIndexOf('you'))        // 63
// console.log(string.lastIndexOf('JavaScript')) // 38

























// let string = '30 Days Of JavaScript'

// console.log(string.indexOf('D'))          // 3
// console.log(string.indexOf('Days'))       // 3
// console.log(string.indexOf('days'))       // -1
// console.log(string.indexOf('a'))          // 4
// console.log(string.indexOf('JavaScript')) // 11
// console.log(string.indexOf('Script'))     //15
// console.log(string.indexOf('script'))     // -1

























//  let string = '30 Days Of JavaScript'
//  console.log(string.charAt(0))        // 3

//  let lastIndex = string.length - 1
// console.log(string.charAt(lastIndex)) // t





































// replace() : prend en paramètre l'ancienne sous-chaîne et une nouvelle sous-chaîne.
// let string = '30 Days Of JavaScript'
// console.log(string.replace('JavaScript', 'Python')) // 30 Days Of Python

// let country = 'Finland'
// console.log(country.replace('Fin', 'Noman'))       // Nomanland























// includes() : Il prend un argument de sous-chaîne et vérifie si l'argument de sous-chaîne existe dans la chaîne. includes() renvoie un booléen. Si une sous-chaîne existe dans une chaîne, elle renvoie vrai, sinon elle renvoie faux.

// let string = '30 Days Of JavaScript'

// console.log(string.includes('Days'))     // true
// console.log(string.includes('days'))     // false - it is case sensitive!
// console.log(string.includes('Script'))   // true
// console.log(string.includes('script'))   // false
// console.log(string.includes('java'))     // false
// console.log(string.includes('Java'))     // true

// let country = 'Finland'

// console.log(country.includes('fin'))     // false
// console.log(country.includes('Fin'))     // true
// console.log(country.includes('land'))    // true
// console.log(country.includes('Land'))    // false





















// trim() : Supprime l'espace de fin au début ou à la fin d'une chaîne.

// let string = '   30 Days Of JavaScript   '

// console.log(string)
// console.log(string.trim(' '))

// let firstName = ' Asabeneh '

// console.log(firstName)
// console.log(firstName.trim())  // still removes spaces at the beginning and the end of the string




























// let string = '30 Days Of JavaScript'

// console.log(string.split())     // Changes to an array -> ["30 Days Of JavaScript"]
// console.log(string.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

// let firstName = 'Asabeneh'

// console.log(firstName.split())    // Change to an array - > ["Asabeneh"]
// console.log(firstName.split(''))  // Split to an array at each letter ->  ["A", "s", "a", "b", "e", "n", "e", "h"]

// let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'

// console.log(countries.split(','))  // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
// console.log(countries.split(', ')) //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]


// let firstNam = 'abdoulkarim';
// console.log(firstNam.split())






















// substring() : Il prend deux arguments, l'index de départ et l'index d'arrêt mais il n'inclut pas le caractère à l'index d'arrêt.
// let string = 'JavaScript'
// console.log(string.substr(4,6))    // Script

// let country = 'Finland'
// console.log(country.substr(3, 4)) //land


















// toLowerCase() : cette méthode change la chaîne en lettres minuscules.
// let string = 'JavasCript'

// console.log(string.toLowerCase())     // javascript

// let firstName = 'Asabeneh'

// console.log(firstName.toLowerCase())  // asabeneh

// let country = 'Finland'

// console.log(country.toLowerCase())
















// cette méthode change la chaîne en lettres majuscules
// let firstName = "Abdoul karim";
// console.log(firstName.toUpperCase());

// let lastName = "Niamey";
// console.log(lastName.toUpperCase());
















// String pour conter les lettres
// let firstName = "ABDOUL.KARIM";

// console.log(firstName.length);

















// mettre space sans utuluser let 
// let space = ' '
// let firstName = "ABDOUL"
// let lastName = "KARIM"
// let country = "Niamey"




// let fullName = `im from Niamey ${lastName}`; // concatenation, merging two string together.
// console.log(fullName);