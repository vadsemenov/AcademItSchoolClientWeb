const countries = [
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

function getCountriesWithMaxCitiesCount(countriesArray) {
    const maxCitiesCount = countriesArray.reduce(
        (citiesMaxCount, country) => Math.max(country.cities.length, citiesMaxCount),
        0);

    const countriesWithMaxCitiesCount = countriesArray.filter(country => country.cities.length === maxCitiesCount);

    return countriesWithMaxCitiesCount.map(country => country.name);
}

function getCountriesPopulation(countriesArray) {
    const countriesPopulation = {};

    countriesArray.forEach(country => {
        countriesPopulation[country.name] = country.cities.reduce((populationSum, city) => {
            const cityPopulation = city.population;

            populationSum += cityPopulation;
            return populationSum;
        }, 0);
    });

    return countriesPopulation;
}

const countriesWithMaxCitiesCount = getCountriesWithMaxCitiesCount(countries);
console.log("Страны с большим количеством городов: " + countriesWithMaxCitiesCount.join(" "));

const countriesPopulation = getCountriesPopulation(countries);
for (let field in countriesPopulation) {
    if (countriesPopulation.hasOwnProperty(field)) {
        console.log("Страна - " + field + ": население - " + countriesPopulation[field] + " человек");
    }
}
