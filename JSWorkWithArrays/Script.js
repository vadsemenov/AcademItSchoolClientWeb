function sortArrayOrderByDescending(array) {
    array.sort((e1, e2) => {
        return e2 - e1;
    });

    console.log("Отсортированный массив: " + array.join(" "));
}

function arrayFirstFiveElements(array) {
    const newArray = array.slice(0, 5);

    console.log("Первые 5 чисел в массиве: " + newArray.join(" "));
}

function arrayLastFiveElements(array) {
    const arrayLength = array.length;

    if (arrayLength > 5) {
        const newArray = array.slice(array.length - 5);
        console.log("Последние 5 чисел в массиве: " + newArray.join(" "));
    } else {
        console.log("Массив меньше 5 элементов! " + array.join(" "));
    }
}

function evenElementsSum(array) {
    const sum = array.reduce((result, item) => {
        if (item % 2 === 0) {
            const value = item;

            result += value;
        }

        return result;
    }, 0);

    console.log("Сумма четных элементов массива = " + sum);
}

function getArrayFrom1To100() {
    const array = [];

    for (let i = 1; i <= 100; i++) {
        array.push(i);
    }

    return array;
}

function evenNumbersSquaresList() {
    const array = getArrayFrom1To100();

    const numberSquaresArray = array
        .filter((item) => {
            return item % 2 === 0;
        })
        .map((item) => {
            return item * item;
        });

    console.log("Список квадратов четных чисел: " + numberSquaresArray.join(" "));
}

sortArrayOrderByDescending([2, 3, 4, 1]);
arrayFirstFiveElements([0, 1, 2, 3, 4, 5, 6]);
arrayLastFiveElements([0, 1, 2, 3, 4, 5]);
evenElementsSum([0, 1, 2, 3, 4, 5, 6]);
evenNumbersSquaresList();