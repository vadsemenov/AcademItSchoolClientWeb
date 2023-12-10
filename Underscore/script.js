(function () {
    const people = [
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
    console.log(getAverageAge(people));
    console.log("----------------------");

    console.log("Люди в возрасте от 20 до 30 включительно, по возрастанию возраста:");
    console.log(getOrderedAscPeopleFrom20To30(people));
    console.log("----------------------");

    console.log("Cписок уникальных имен людей с возрастом от 20 до 30 включительно, отсортированный по именам:");
    console.log(getOrderedByDescendingUniquePeopleNamesFrom20To30(people));
    console.log("----------------------");

    console.log("Новый объект: имя - колличество людей с таким именем:");
    console.log(getNamesCounts(people));

    // Посчитать средний возраст всех людей
    function getAverageAge(people) {
        if (people.length === 0) {
            return null;
        }

        return _.reduce(people, (memo, person) => memo + person.age, 0) / people.length;
    }

    // Получить список людей с возрастом от 20 до 30
    // включительно, отсортировать их по возрастанию
    // возраста
    function getOrderedAscPeopleFrom20To30(people) {
        return _.chain(people)
            .filter(person => person.age >= 20 && person.age <= 30)
            .sortBy(person => person.age)
            .value();
    }

    // Получить список уникальных имен людей с возрастом
    // от 20 до 30 включительно, отсортировать его по
    // убыванию
    function getOrderedByDescendingUniquePeopleNamesFrom20To30(people) {
        return _.chain(people)
            .filter(person => person.age >= 20 && person.age <= 30)
            .pluck("name")
            .unique()
            .sortBy()
            .reverse()
            .value();
    }

    // Получить объект, в котором ключами будут имена
    // людей, а значениями – количество людей с этим
    // именем
    function getNamesCounts(people) {
        return _.countBy(people, "name");
    }
})();