function personInfo(firstName: string, lastName: string, age: string) {
    type person = {
        firstName: string,
        lastName: string,
        age: number
    }
    const personData: person = {
        firstName: firstName, 
        lastName: lastName,
        age: Number (age)
    }
    console.log(personData);
    ;
}
personInfo("Peter",
    "Pan",
    "20");
personInfo("George",
    "Smith",
    "18")