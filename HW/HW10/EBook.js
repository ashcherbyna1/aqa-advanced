import { Book, book1, book2, book3 } from './Book.js';

class EBook extends Book {
    constructor(title, author, year, format) {
        super(title, author, year);
        this.format = format;
    }

    get format() {
        return this._format;
    }

    set format(value) {
        if (typeof value !== 'string') {
            throw new Error('Format must be a string');
        }

        this._format = value;
    }

    printInfo() {
        super.printInfo();
        console.log(`Format: ${this.format}`);
    }

    static fromBook(book, format) {
        return new EBook(book.title, book.author, book.year, format);
    }
}

const ebook1 = EBook.fromBook(book1, 'PDF');

ebook1.printInfo();

const books = [book1, book2, book3, ebook1];

const oldestBook = Book.findOldestBook(books);

oldestBook.printInfo();
