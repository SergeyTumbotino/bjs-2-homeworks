// Задача №1  Печатное издание

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state *= 1.5;
  }

  set state(value) {
    if (value < 0) {
      this._state = 0;
    } else if (value > 100) {
      this._state = 100;
    } else {
      this._state = value;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "book";
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

// Задача №2  Библиотека

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }
  // Добавление книги в библиотеку
  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    const requiredBook = this.books.find((item) => item[type] === value);
    if (requiredBook) {
      return requiredBook;
    } else return null;
  }

  // Выдача книги читателю
  giveBookByName(bookName) {
    const book = this.findBookBy("name", bookName);
    const requiredBookIndex = this.books.findIndex(
      (item) => item.name === bookName
    );
    if (requiredBookIndex !== -1) {
      this.books.splice(requiredBookIndex, 1);
      return book;
    }
    return null;
  }
}

// Задача №3  Журнал успеваемости
class Student {
  constructor(studentName, gender, age) {
    this.studentName = studentName;
    this.gender = gender;
    this.age = age;
    this.subjects = {};
  }

  setSubject(subjectName) {
    if (subjectName in this.subjects) {
      console.log(`Предмет ${subjectName} уже существует!`);
      return;
    }
    this.subjects[subjectName] = [];
    return;
  }

  addMark(mark, subjectName) {
    if (this.subjects[subjectName] === undefined) {
      this.setSubject(subjectName);
    }
    if (mark === 1 || mark === 2 || mark === 3 || mark === 4 || mark === 5) {
      this.subjects[subjectName].push(mark);
    } else {
      console.log("Ошибка, оценка должна быть числом от 1 до 5");
    }
  }

  getAverageBySubject(subjectName) {
    let average;
    if (subjectName in this.subjects) {
      average =
        this.subjects[subjectName].reduce((sum, elem) => sum + elem, 0) /
        this.subjects[subjectName].length;
      console.log(`Средний балл по предмету ${subjectName} ` + average);
      return average;
    }
    console.log("Несуществующий предмет");
  }

  getAverage() {
    let marksSum = 0;
    let marksCount = 0;
    for (let subjectName in this.subjects) {
      marksSum += this.subjects[subjectName].reduce(
        (sum, elem) => sum + elem,
        0
      );
      marksCount += this.subjects[subjectName].length;
    }
    console.log("Средний балл по всем предметам " + marksSum / marksCount);
    return marksSum / marksCount;
  }

  exclude(reason) {
    delete this.subjects;
    this.excluded = reason;
  }
}
