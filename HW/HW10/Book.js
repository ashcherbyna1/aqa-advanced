export class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    get title() {
        return this._title;
    }

    get author() {
        return this._author;
    }

    get year() {
        return this._year;
    }

    set title(value) {
        if (typeof value !== 'string') {
            throw new Error('Title must be a string');
        }

        this._title = value;
    }

    set author(value) {
        if (typeof value !== 'string') {
            throw new Error('Author must be a string');
        }

        this._author = value;
    }

    set year(value) {
        if (typeof value !== 'number' || !Number.isInteger(value)) {
            throw new Error('Year must be an integer');
        }

        this._year = value;
    }

    static findOldestBook(books) {
        return books.reduce((oldest, current) => {
            return current.year < oldest.year ? current : oldest;
        });
    }

    printInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
    }
}

export const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
export const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 1960);
export const book3 = new Book('1984', 'George Orwell', 1949);

book1.printInfo();
book2.printInfo();
book3.printInfo();
