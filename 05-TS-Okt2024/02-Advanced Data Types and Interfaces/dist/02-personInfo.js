function personInfo(firstName, lastName, age) {
    const personData = {
        firstName: firstName,
        lastName: lastName,
        age: Number(age)
    };
    console.log(personData);
    ;
}
personInfo("Peter", "Pan", "20");
personInfo("George", "Smith", "18");
