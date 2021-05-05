// Get All Values
const inputTxt = document.querySelector('.inputTxt');
var button = document.querySelector('.btn');
const showData = document.querySelector('.showData');

// API
button.addEventListener('click', () => {

    //Get Input Value
    const cityInput = inputTxt.value;
    // console.log(cityInput);

    // Fetch through API
    fetch(`https://7ajk43.deta.dev/location/${cityInput}`)
    .then(res => res.json())
    .then(data => {
        // console.log(data);

        // Empty Input Field
        inputTxt.value = " ";

        // Show All Data Value
        showData.innerHTML = `
                            <div class="card">
                                <div class="cityHeading">
                                        <h4 class="country">
                                        ${data.weather_info.location.country}
                                        </h4>
                                        <h2 class="cityName">
                                        ${data.weather_info.location.city}
                                        </h2>
                                </div>
                                <div class="temp">
                                        <h2 class="button fast none stemp">${data.weather_info.current_observation.condition.temperature}° C</h2>
                                        <h3 class="desc">
                                        ${data.weather_info.current_observation.condition.text}
                                        </h3>
                                </div>
                            </div>
                            `;
        document.querySelectorAll('.button').forEach(button => button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>');
    });

});
