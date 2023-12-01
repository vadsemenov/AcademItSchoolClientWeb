(function () {
    function sortArrayInDescendingOrder(array) {
        array.sort((e1, e2) => e2 - e1);
    }

    function getArrayFirstFiveElements(array) {
        return array.slice(0, 5);
    }

    function getArrayLastFiveElements(array) {
        return array.slice(-5);
    }

    function getEvenNumbersSum(array) {
        return array.filter(number => number % 2 === 0)
            .reduce((sum, number) => sum + number, 0);
    }

    function getFrom1To100Array() {
        const array = [];

        for (let i = 1; i <= 100; i++) {
            array.push(i);
        }

        return array;
    }

    function getEvenNumbersSquaresArray(array) {
        return array
            .filter(number => number % 2 === 0)
            .map(number => number * number);
    }

    const array1 = [2, 3, 4, 1];
    const array2 = [0, 1, 2, 3, 4, 5, 6];
    const array3 = getFrom1To100Array();

    sortArrayInDescendingOrder(array1);
    console.log("Отсортированный массив по убыванию: " + array1.join(" "));

    const arrayFirstFiveElements = getArrayFirstFiveElements(array2);
    console.log("Первые 5 чисел в массиве: " + arrayFirstFiveElements.join(" "));

    const arrayLastFiveElements = getArrayLastFiveElements(array2);
    console.log("Последние 5 чисел в массиве: " + arrayLastFiveElements.join(" "));

    const evenNumbersSum = getEvenNumbersSum(array2);
    console.log("Сумма четных элементов массива = " + evenNumbersSum);

    const evenNumbersSquaresList = getEvenNumbersSquaresArray(array3);
    console.log("Список квадратов четных чисел: " + evenNumbersSquaresList.join(" "));
})();