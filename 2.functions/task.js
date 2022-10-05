// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  // Ваш код
  max = -101;
  min = 101;
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  avg = sum / arr.length;
  avg = Number(avg.toFixed(2));
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  // Ваш код
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  let funcResult;

  // Ваш кода
  for (let i = 0; i < arrOfArr.length; i++) {
    funcResult = func(arrOfArr[i]);
    if (max < funcResult) {
      max = funcResult;
    }
  }

  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
  let max = -Infinity;
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return Math.abs(max - min);
}
