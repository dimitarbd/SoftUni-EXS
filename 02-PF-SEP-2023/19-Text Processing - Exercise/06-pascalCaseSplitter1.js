function pascalCaseSplitter(input) {
	console.log(input.split(/(?=[A-Z])/).join(", "))
}


pascalCaseSplitter('Spl5itMeIfYouCanHaHaYouCantOrYouCanU');
console.log('===============');
pascalCaseSplitter('HoldTheDoor');
console.log('===============');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');
console.log('===============');
pascalCaseSplitter('HoldT');
