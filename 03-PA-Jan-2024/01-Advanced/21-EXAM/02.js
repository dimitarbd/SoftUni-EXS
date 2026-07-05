class BookClub {
    constructor(library) {
        this.library = library;
        this.books = [];
        this.members = [];
    }
    addBook(title, author) {
        let data = this.books.find(p => p.title == title);
        if (data) {
            return `The book "${title}" by ${author} is already in ${this.library} library.`
        } else {
            this.books.push({
                title: title,
                author: author
            })
            return `The book "${title}" by ${author} has been added to ${this.library} library.`
        }
    }

    addMember(memberName) {
        let data = this.members.find(p => p.memberName == memberName);
        if (data) {
            return `Member ${memberName} is already a part of the book club.`
        } else {
            this.members.push({
                memberName: memberName,
            })
            return `Member ${memberName} has been joined to the book club.`
        }
    }

    assignBookToMember(memberName, bookTitle) {
        let dataName = this.members.find(p => p.memberName == memberName);
        let dataTitle = this.books.find(p => p.title == bookTitle);

        if (!dataName) {
            throw new Error(`Member ${memberName} not found.`)
        }

        if (!dataTitle) {
            throw new Error(`Book "${bookTitle}" not found.`)
        }
        this.books = this.books.filter(x => x.title !== bookTitle);
        return `Member ${memberName} has been assigned the book "${bookTitle}" by ${dataTitle.author}.`
    }

    generateReadingReport() {
        if (this.members.length == 0) {
            return "No members in the book club."
        }

        if (this.books.length == 0) {
            return "No available books in the library."
        }

        let buff = `Available Books in ${this.library} library:\n`;
        this.books.forEach(x => {
            buff += `"${x.title}" by ${x.author}\n`
        })
        return buff.trim();
    }

}


// const myBookClub = new BookClub('The Bookaholics');
// console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
// console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
// console.log(myBookClub.addBook("1984", "George Orwell"));
// console.log(myBookClub.addMember("Alice"));
// console.log(myBookClub.addMember("Peter"));
// console.log(myBookClub.assignBookToMember("Mary", "The Great Gatsby"));

const myBookClub = new BookClub('The Bookaholics');
console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub.addBook("1984", "George Orwell"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.assignBookToMember("Alice", "The Great Gatsby"));
console.log(myBookClub.generateReadingReport());