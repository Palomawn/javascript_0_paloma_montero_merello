// declare array with students (done)
// show requisites to the user so he can choose one of them (done)
// let the user press a number
// show rquesite 1 (table format)

const ps = require("prompt-sync");
const prompt = ps();

const students = [
  { name: "Will", age: 28, genre: "male" },
  { name: "Dustin", age: 24, genre: "male" },
  { name: "Steve", age: 32, genre: "male" },
  { name: "Mike", age: 21, genre: "male" },
  { name: "Max", age: 35, genre: "female" },
  { name: "Robin", age: 32, genre: "female" },
  { name: "Nancy", age: 22, genre: "female" },
  { name: "Eleven", age: 23, genre: "female" },
];

 // random name
 const namesi = ["Olek", "Anna", "Robert", "Nina"]
 function randomName(names) {
   for (let i = 0; i < 2; i++) {
       const random = namesi[Math.floor(Math.random() * namesi.length)];
       return random
   }
 }

 // random age
 const ages = []
 for (let i = 20; i <= 50; i++) {
     ages.push(i)
 }
 function randomAge(age) {

     for (let i = 0; i < 2; i++) {
         const random = ages[Math.floor(Math.random() * ages.length)];
         return random
     }
 }

 // random genre
 const genresi = [ 'Male', 'Female']
 function randomGenre(genre) {

   for(let i = 0; i<2; i++){
       const random = genresi[Math.floor(Math.random() * genresi.length)];
       return random
   }

  }





/// Input user

let input = parseInt(prompt('type a number between 1 to 15: '))

if (input === 1) {
    console.table(students);  
  } else if (input === 2) {
    // # 2- Show by console the number of students in the class.
    const names = students.filter(namesQuantity => namesQuantity.name )
    names.length > 0
    console.log('The number of students is', names.length)
  } else if (input === 3) {
    // # 3- Show by console all the names of the students.
    console.log(students.map(printNames => printNames.name))

  } else if (input === 4) {
    // # 4- Remove the last student from the class.
    console.log('This was the last student removed', students.pop())
    console.log(students)

  } else if (input === 5) {
    // # 5- Randomly remove a student from the class.
    console.log(students.splice((Math.random()*students.length),1)[0])    

  } else if (input === 6) {
    // # 6- Show by console all the data of the students who are girls.
    const females= students.filter(studentGenre => studentGenre.genre === 'female')
    females.length > 0
    console.log(females)  

  } else if (input === 7) {
    // # 7- Show by console the number of boys and girls in the class.
    const males = students.filter((studentGenremix => studentGenremix.genre ===  'male' && 'female'))
    males.length > 0
    console.log(males)
    console.log('There are:', males.length, 'boys, and there are', females.length, 'girls in the class' )

  } else if (input === 8) {
    // # 8- Show true or false by console if all the students in the class are girls.
    console.log('It is',(students.every(allFemale => allFemale === 'female')), 'that in tha class all are females')

  } else if (input === 9) {
    // # 9- Show by console the names of the students who are between 20 and 25 years old.
    let result = students.filter(rangeAge =>  rangeAge.age <= 25)
    console.log(result.map(printNames => printNames.name))

  } else if (input === 10) {
   
    // push to the main array
    let obj = {
      name: randomName(namesi),
      age: randomAge(ages),
      genre: randomGenre(genresi)
    };
    students.push(obj)
    console.log(students)
    
  } else if (input === 11) {
    // ## 11- Show by console the name of the youngest person in the class.
    //BEWARE, if several people in the class share the lowest age, any of them is a valid answer.
    const lowest = students.reduce((previous, current) => {
      return current.age < previous.age ? current : previous;
    }); console.log('The lowest age', lowest)

  } else if (input === 12) {
    // # 12- Show by console the average age of all the students in the class.
    const average = students.reduce((total, next) => total + next.age, 0) / students.length;
    console.log(average);
    
  } else if (input === 13) {
    // # 13- Show by console the average age of the girls in the class.
    const girlsAverage = females.reduce((total, next) => total + next.age, 0) / females.length;
    console.log(girlsAverage);
    
  } else if (input === 14) {
    console.log('no data to display yet')
    
  } else if (input === 15) {
    // # 15- Sort the array of students alphabetically according to their name.
    const sortedList = students.sort((a, b) => a.name.localeCompare(b.name))
    console.log(sortedList);
    
  } else{
    let = input = parseInt(prompt('type a number between 1 to 15: '))
  }
 

  






























 









/* # 10- Add a new student with the following data:

- random name.
- random age between 20 and 50 years.
- random gender.
- list of empty qualifications.

 EYE!, the name and gender have to be consistent.
 
*/
// random name













// #  14- Add a new note to the students. For each student in the class, we will have to calculate a grade randomly (number between 0 and 10) and add it to the list of grades for that student.

