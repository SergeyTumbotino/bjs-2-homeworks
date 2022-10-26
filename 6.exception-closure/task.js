// Задача №1. Форматтер чисел
function parseCount(numberToParse) {
  let number = parseInt(numberToParse);
  if (isNaN(number)) {
    throw new Error("Невалидное значение");
  }
  return number;
}

function validateCount(numberToValide) {
  try {
    return parseCount(numberToValide);
  } catch (error) {
    return error;
  }
}

// Задача №2. Треугольник
class Triangle {
  constructor(side1, side2, side3) {
    if (
      side1 + side2 <= side3 ||
      side1 + side3 <= side2 ||
      side2 + side3 <= side1
    ) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  getPerimeter() {
    let perimeter = 0;
    for (let item in this) {
      perimeter += this[item];
    }
    return perimeter;
  }

  getArea() {
    let p = (this.side1 + this.side2 + this.side3) / 2;
    return Number(
      Math.sqrt(
        p * (p - this.side1) * (p - this.side2) * (p - this.side3)
      ).toFixed(3)
    );
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    function getArea() {
      return "Ошибка! Треугольник не существует";
    }
    function getPerimeter() {
      return "Ошибка! Треугольник не существует";
    }
    triangleObject = {};
    triangleObject.getArea = getArea;
    triangleObject.getPerimeter = getPerimeter;
    return triangleObject;
  }
}
