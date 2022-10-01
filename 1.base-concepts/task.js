function solveEquation(a, b, c) {
  "use strict";
  let arr;
  // код для задачи №1 писать здесь
  let d = b ** 2 - 4 * a * c; // вычисление дискриминанта
  if (d > 0) {
    arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
  } else if (d === 0) {
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
    totalAmount = `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
  } else if (isNaN(contributionNumber)) {
    totalAmount = `Параметр "Начальный взнос" содержит неправильное значение ${contribution}`;
    return totalAmount;
  } else if (isNaN(amountNumber)) {
    totalAmount = `Параметр "Общая стоимость" содержит неправильное значение ${amount}`;
    return totalAmount;
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
  return totalAmount.toFixed(2); // Возврат результата
}
