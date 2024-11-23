const apiKey = '95a86fc9638cc0d996c9c08e79e18eaa'; 
const city = 'London'; 

document.getElementById('getWeather').addEventListener('click', () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const { temp, humidity } = data.main;
            const { speed } = data.wind;

            document.getElementById('weatherOutput').innerHTML = `
                <p>Температура: ${temp}°C</p>
                <p>Вологість: ${humidity}%</p>
                <p>Швидкість вітру: ${speed} м/с</p>
            `;
        })
        .catch(error => console.error('Помилка отримання погоди:', error));
});
