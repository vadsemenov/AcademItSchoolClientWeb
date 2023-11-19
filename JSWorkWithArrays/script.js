function getSortedArrayOrderedByDescending(array) {
    return array.sort((e1, e2) => e2 - e1);
}

function getArrayFirstFiveElements(array) {
    return array.slice(0, 5);
}

function getArrayLastFiveElements(array) {
    return array.slice(-5);
}

function getEvenElementsSum(array) {
    const evenElementsArray = array.filter(element => element % 2 === 0);

    return evenElementsArray.reduce((currentSum, currentNumber) => currentSum + currentNumber, 0);
}

function getArrayFrom1To100() {
    const array = [];

    for (let i = 1; i <= 100; i++) {
        array.push(i);
    }

    return array;
}

function getEvenNumbersSquaresList() {
    const array = getArrayFrom1To100();

    return array
        .filter(item => item % 2 === 0)
        .map(item => item * item);
}

var sortedArray = getSortedArrayOrderedByDescending([2, 3, 4, 1]);
console.log("Отсортированный массив по убыванию: " + sortedArray.join(" "));

var arrayFirstFiveElements = getArrayFirstFiveElements([0, 1, 2, 3, 4, 5, 6]);
console.log("Первые 5 чисел в массиве: " + arrayFirstFiveElements.join(" "));

var arrayLastFiveElements = getArrayLastFiveElements([0, 1, 2, 3, 4, 5, 6]);
console.log("Последние 5 чисел в массиве: " + arrayLastFiveElements.join(" "));

var evenElementsSum = getEvenElementsSum([0, 1, 2, 3, 4, 5, 6]);
console.log("Сумма четных элементов массива = " + evenElementsSum);

var evenNumbersSquaresList = getEvenNumbersSquaresList();
console.log("Список квадратов четных чисел: " + evenNumbersSquaresList.join(" "));