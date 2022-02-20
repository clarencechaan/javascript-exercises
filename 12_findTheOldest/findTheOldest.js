const findTheOldest = function(people) {
    return people.reduce(
        (oldest, person) => {
            let oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
            let personAge = person.yearOfDeath - person.yearOfBirth;

            const currentYear = (new Date()).getFullYear();
            if (!('yearOfDeath' in oldest)) {
                oldestAge = currentYear - oldest.yearOfBirth;
            }
            if (!('yearOfDeath' in person)) {
                personAge = currentYear - personAge.yearOfBirth
            }
            
            return (oldestAge > personAge) ? oldest : person;
        }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
