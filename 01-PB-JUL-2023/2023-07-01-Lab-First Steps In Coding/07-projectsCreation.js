function projectsCreation (input) {
    let architect = input[0];
    let numberProjects = Number(input[1]);
    let workHours = numberProjects * 3;
    
    console.log(`The architect ${architect} will need ${workHours} hours to complete ${numberProjects} project/s.`);
}

projectsCreation (["George ", "4 "]);