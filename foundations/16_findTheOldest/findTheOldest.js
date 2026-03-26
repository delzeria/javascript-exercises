const findTheOldest = function(people = []) {
    oldest = people.sort((prev, next) => {
        yearNow = (new Date()).getFullYear();
        
        prevAge = (prev.yearOfDeath ?? yearNow) - prev.yearOfBirth;
        nextAge = (next.yearOfDeath ?? yearNow) - next.yearOfBirth;
        
        return prevAge > nextAge ? -1 : 1;
    });
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
