function solveEquation(a, b, c) {
  "use strict";
  let arr;
  // код для задачи №1 писать здесь
  let discriminant = b ** 2 - 4 * a * c; // вычисление дискриминанта
  if (discriminant > 0) {
    arr = [
      (-b + Math.sqrt(discriminant)) / (2 * a),
      (-b - Math.sqrt(discriminant)) / (2 * a),
    ];
  } else if (discriminant === 0) {
    arr = [-b / (2 * a)];
  } else {
    arr = [];
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  "use strict";
  let totalAmount;

  // код для задачи №2 писать здесь
  // Приведение введенных значений к числу
  let percentNumber = Number(percent);
  let contributionNumber = Number(contribution);
  let amountNumber = Number(amount);

  // Проверка корректности введенных значений
  if (isNaN(percentNumber)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (isNaN(contributionNumber)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (isNaN(amountNumber)) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }

  let credit = amountNumber - contributionNumber; // Вычисление тела кредита
  let dateMonth = date.getMonth(); // Получение месяца, введенного пользователем
  let dateYear = date.getFullYear(); // Получение года, введенного пользователем
  let dateNow = new Date(); // Запрос текущей даты
  let nowDateMonth = dateNow.getMonth(); // Получение текущего месяца
  let nowDateYear = dateNow.getFullYear(); // Получение текущего года
  let month = (dateYear - nowDateYear) * 12 + (dateMonth - nowDateMonth); // Вычисление срока кредита в месяцах

  let payment =
    credit *
    (percentNumber / 12 / 100 +
      percentNumber / 12 / 100 / ((1 + percentNumber / 12 / 100) ** month - 1)); // Вычисление ежемесячного платежа

  totalAmount = payment * month; // Вычисление общей суммы к выплате
  return Number(totalAmount.toFixed(2)); // Возврат результата
}
