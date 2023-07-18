document.addEventListener("DOMContentLoaded", () => {
    const celsiusTemperatureInput = document.getElementById("celsius_temperature");
    const kelvinTemperatureInput = document.getElementById("kelvin_temperature");
    const fahrenheitTemperatureInput = document.getElementById("fahrenheit_temperature");
    const convertButton = document.getElementById("convert_button");

    convertButton.addEventListener("click", () => {
        celsiusTemperatureInput.classList.remove("invalid");

        const celsiusTemperatureText = celsiusTemperatureInput.value.trim();
        const celsiusTemperature = Number(celsiusTemperatureText);

        if (celsiusTemperatureText.length === 0 || isNaN(celsiusTemperature)) {
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