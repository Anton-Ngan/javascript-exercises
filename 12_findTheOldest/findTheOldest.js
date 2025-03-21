const findTheOldest = function(people) {
    return people.reduce( (curOldestPerson, newPerson) => {
        let curAge, newAge;

        if (!curOldestPerson.hasOwnProperty("yearOfDeath")) {
            curAge = new Date().getFullYear() - curOldestPerson.yearOfBirth;
        } else {
            curAge = curOldestPerson.yearOfDeath - curOldestPerson.yearOfBirth;
        }
        if (!newPerson.hasOwnProperty("yearOfDeath")) {
            newAge = new Date().getFullYear() - newPerson.yearOfBirth;
        } else {
            newAge = newPerson.yearOfDeath - newPerson.yearOfBirth;
        }
        return (curAge > newAge ? curOldestPerson : newPerson);
    } )
};

// Do not edit below this line
module.exports = findTheOldest;
