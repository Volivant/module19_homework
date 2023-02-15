const person = {
    city: "Moscow"
}

const student = Object.create(person);

student.ownCity = "Piter";

student.age = 21;

function getOwnProperty(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key} = ${obj[key]}`);
        }   
    }
}

getOwnProperty(student);