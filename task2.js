const person = {
    city: "Moscow"
}

const student = Object.create(person);

student.ownCity = "Piter";

student.age = 21;


function getProperty(obj, nameProperty) {
    return nameProperty in obj;  
}

console.log(getProperty(student, 'age'));
console.log(getProperty(student, 'aga'));