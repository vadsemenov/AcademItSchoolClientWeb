var countries = [
    {
        name: "Швейцария",
        cities: [
            { name: "Цюрих", population: 378884 },
            { name: "Женева", population: 188634 },
            { name: "Базель", population: 164937 }
        ]
    },
    {
        name: "Китай",
        cities: [
            { name: "Чунцин", population: 30165500 },
            { name: "Шанхай", population: 24150000 },
            { name: "Пекин", population: 21148000 }
        ]
    },
    {
        name: "Австралия",
        cities: [
            { name: "Мельбурн", population: 4529500 },
            { name: "Брисбен", population: 2308700 },
            { name: "Сидней", population: 4921000 },
            { name: "Перт", population: 2039200 }
        ]
    }
];

function getCountryWithMaximumCities() {
    var maximumCities = countries.reduce((citiesMaxCount, country) => { return Math.max(country.cities.length, citiesMaxCount) }, 0);

    var countriesWithMaximumCities = countries.filter((country) => country.cities.length === maximumCities);

    if (countriesWithMaximumCities.length > 0) {
        console.log("Страна с большим количеством городов: " + countriesWithMaximumCities.map((country) => country.name).join(" "));
    }
    else {
        console.log("Не найдено стран!");
    }
}

function getCountryPopulation() {
    var countriesPopulation = {};

    countries.forEach((country) => {
        countriesPopulation[country.name] = country.cities.reduce((result, city) => {
            result += city.population;
            return result;
        }, 0);
    });

    for (var field in countriesPopulation) {
        if (countriesPopulation.hasOwnProperty(field)) {
            console.log("Страна - " + field + ": население - " + countriesPopulation[field] + " человек");
        }
    }
}

getCountryWithMaximumCities();
getCountryPopulation();
