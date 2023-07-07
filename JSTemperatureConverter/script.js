document.addEventListener("DOMContentLoaded", function () {
    var celsiusTemperatureInput = document.getElementById("celsius_temperature");
    var kelvinTemperatureInput = document.getElementById("kelvin_temperature");
    var fahrenheitTemperatureInput = document.getElementById("fahrenheit_temperature");
    var convertButton = document.getElementById("convert_button");

    convertButton.addEventListener("click", function () {
        celsiusTemperatureInput.classList.remove("invalid");

        var celsiusTemperature = Number(celsiusTemperatureInput.value.trim());

        if (celsiusTemperatureInput.value.trim().length === 0 || !Number.isInteger(celsiusTemperature)) {
            celsiusTemperatureInput.classList.add("invalid");
            return;
        }

        kelvinTemperatureInput.value = convertCelsiusToKelvin(celsiusTemperature);
        fahrenheitTemperatureInput.value = convertCelsiusToFahrenheit(celsiusTemperature);

    });

    function convertCelsiusToKelvin(celsiusTemperature) {
        return celsiusTemperature + 273.15;
    }

    function convertCelsiusToFahrenheit(celsiusTemperature) {
        return (celsiusTemperature * (9 / 5)) + 32;
    }
});