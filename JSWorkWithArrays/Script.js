function sortArray(array) {
    var orderedArray = array.sort(function (e1, e2) {
        return e1 - e2;
    });

    console.log("Отсортированный массив: " + orderedArray.join(" "));
}

function getArrayFirstFiveElements(array) {
    var newArray = array.slice(0, 5);

    console.log("Первые 5 чисел в массиве: " + newArray.join(" "));
}

function getArrayLastFiveElements(array) {
    var arrayLength = array.length;

    if (arrayLength > 5) {
        var newArray = array.slice(arrayLength - 5, arrayLength);
        console.log("Последние 5 чисел в массиве: " + newArray.join(" "));
    }
    else {
        console.log("Массив меньше 5 элементов!");
    }
}

function getEvenElementsSum(array) {
    var sum = array.reduce((res, item, index) => {
        if (index % 2 === 0) {
            res += item;
        }
        return res;
    }, 0);

    console.log("Сумма четных элементов массива = " + sum);
}

function getArrayFrom1To100() {
    var array = [];

    for (var i = 1; i <= 100; i++) {
        array.push(i);
    }

    return array;
}

function getEvenNumbersSquaresList() {
    var array = getArrayFrom1To100();

    var newArray = array.reduce((res, item, index) => {
        if (item % 2 === 0) {
            res.push(Math.pow(item,2));
        }

        return res;
    }, []);

    console.log("Список квадратов четных чисел: " + newArray.join(" "));
}

sortArray([2, 3, 4, 1]);
getArrayFirstFiveElements([0, 1, 2, 3, 4, 5, 6]);
getArrayLastFiveElements([0, 1, 2, 3, 4, 5, 6]);
getEvenElementsSum([0, 1, 2, 3, 4, 5, 6]);
getEvenNumbersSquaresList();