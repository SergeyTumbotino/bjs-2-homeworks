function compareArrays(arr1, arr2) {
  let result;

  // Ваш код
  return (
    arr1.length === arr2.length &&
    arr1.every((elem, index) => elem === arr2[index])
  ); // boolean
}

function advancedFilter(arr) {
  let resultArr;

  // Ваш код
  resultArr = arr
    .filter((elem) => elem > 0 && elem % 3 === 0)
    .map((elem) => elem * 10);

  return resultArr; // array
}
