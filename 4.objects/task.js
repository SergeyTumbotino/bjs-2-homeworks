function Student(name, gender, age) {
  // Ваш код
  this.name = name;
  this.gender = gender;
  this.age = age;
}
firstStudent = new Student("Maria", "female", 20);
secondStudent = new Student("Nikolay", "male", 19);
thirdStudent = new Student("Anna", "female", 17);

Student.prototype.setSubject = function (subjectName) {
  //ваш код
  this.subject = subjectName;
};

// ваш код для остальных методов
Student.prototype.addMark = function (mark) {
  //ваш код
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
};

Student.prototype.addMarks = function (...someMarks) {
  //ваш код
  if (this.marks === undefined) {
    this.marks = [...someMarks];
  } else {
    this.marks.push(...someMarks);
  }
};

Student.prototype.getAverage = function () {
  return this.marks.reduce((sum, elem) => sum + elem, 0) / this.marks.length;
};

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};
