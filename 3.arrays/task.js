function compareArrays(arr1, arr2) {
  let result;

  // Ваш код
  arr1.length >= arr2.length
    ? ((arrFirst = arr1), (arrSecond = arr2))
    : ((arrFirst = arr2), (arrSecond = arr1));
  result = arrFirst.every((elem, index) => elem === arrSecond[index]);

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  // Ваш код
  resultArr = arr
    .filter((elem) => elem > 0)
    .filter((elem) => elem % 3 === 0)
    .map((elem) => elem * 10);

  return resultArr; // array
}
