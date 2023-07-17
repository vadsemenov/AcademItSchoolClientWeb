$(function () {
    var people = [
        { name: "Semen", age: 17 },
        { name: "Ivan", age: 20 },
        { name: "Petr", age: 30 },
        { name: "Vsevolod", age: 15 },
        { name: "Ivan", age: 28 },
        { name: "Ivan", age: 27 },
        { name: "Denis", age: 36 },
        { name: "Anna", age: 70 },
        { name: "Julia", age: 68 },
        { name: "Sergey", age: 56 },
        { name: "Svetlana", age: 35 }
    ];

    console.log("Средний возраст людей:");
    console.log(GetAverageAge(people));
    console.log("----------------------");

    console.log("Люди в возрасте от 20 до 30 включительно, по возрастанию возраста:");
    console.log(GetOrderedAscPeopleFrom20To30(people));
    console.log("----------------------");

    console.log("Люди в возрасте от 20 до 30 включительно,с уникальными именами по убыванию возраста:");
    console.log(GetOrderedDescUniqPeopleFrom20To30(people));
    console.log("----------------------");

    console.log("Новый объект: имя - колличество людей с таким именем:");
    console.log(GetNewObjectWithNamesAndCount(people));


    //Посчитать средний возраст всех людей
    function GetAverageAge(people) {
        var ages = _.pluck(people, "age");

        return (_.reduce(ages,
            function (memo, num) {
                return memo + num;
            },
            0) /
            (ages.length === 0 ? 1 : ages.length)).toFixed(0);
    }

    //Получить список людей с возрастом от 20 до 30
    //включительно, отсортировать их по возрастанию
    //возраста
    function GetOrderedAscPeopleFrom20To30(people) {
        var filteredPeople = _.filter(people,
            function (p) {
                return p.age >= 20 && p.age <= 30;
            });

        var orderedPeople = _.sortBy(filteredPeople,
            function (item) {
                return item.age;
            });

        return orderedPeople;
    }

    //Получить список уникальных имен людей с возрастом
    //от 20 до 30 включительно, отсортировать его по
    //убыванию
    function GetOrderedDescUniqPeopleFrom20To30(people) {
        var filteredPeople = _.filter(people,
            function (p) {
                return p.age >= 20 && p.age <= 30;
            });

        var uniqPeople = _.unique(filteredPeople,
            function (p) {
                return p.name;
            });

        var orderedPeople = _.sortBy(uniqPeople,
            function (p) {
                return -p.age;
            });

        return orderedPeople;
    }


    //Получить объект, в котором ключами будут имена
    //людей, а значениями – количество людей с этим
    //именем
    function GetNewObjectWithNamesAndCount(people) {

        return _.countBy(people, "name");
    }
});