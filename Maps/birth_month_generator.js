let individual = 0;
let birthMonthMap = new Map();

function generateBirthMonth(){
    return Math.floor(Math.random()* 12) +1;
}

while(individual != 50)
{
    individual++;
    let month = generateBirthMonth();
    console.log("Person : " + individual + "\tBirth Month : " + month);
    let people = new Array();

    if(birthMonthMap.has(month))
        people = birthMonthMap.get(month);
    
    people.push(individual);
    birthMonthMap.set(month,people);
}

console.log("\nPeople with same birthday month : ");
for(let [key,value] of birthMonthMap.entries()){
    console.log("Month : " + key + "\tPeople : [" + value + "]");
}