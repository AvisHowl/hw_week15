const cities = [
	"Москва",
	"Санкт-Петербург",
	"Екатеринбург",
	"Улан-Удэ",
	"Владивосток",
];

const temperatures = [];

for (let i = 0; i < cities.length; i++) {
	let temperature = prompt(`Введите температуру для города ${cities[i]}`);
	temperatures.push(Number(temperature));
}

const temperatureContainer = document.querySelector(".temperature-info");
const temperatureElementList = document.createElement("ul");
for (let i = 0; i < cities.length; i++) {
	const temperatureElementItem = document.createElement("li");
	temperatureElementItem.textContent = `Температура в городе ${cities[i]}: ${temperatures[i]}°C`;
	temperatureElementList.appendChild(temperatureElementItem);
}
temperatureContainer.appendChild(temperatureElementList);

const minTemperature = Math.min(...temperatures);
const maxTemperature = Math.max(...temperatures);

const minMaxTemperatures = document.createElement("div");
minMaxTemperatures.textContent = `Минимальная температура: ${minTemperature}°C и
Максимальная температура: ${maxTemperature}°C`;
temperatureContainer.appendChild(minMaxTemperatures);
