const apiKey = "";
const apiCountryURL = "https://countryflagsapi.com/png/";
const apiUnsplash = "https://source.unsplash.com/1600x900/?";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("country");
const umidityElement = document.querySelector("umidity span");
const windElement = document.querySelector("wind span");

const weatherContainer = document.querySelector("#wearher-data");

const errorMessageContainer = document.querySelector("#suggestions");
const loader = document.querySelector("#loader");

const suggestionContainer = document.querySelector("#suggestions");
const suggestionButtons = document.querySelectorAll("#suggestions button");

// Loader
const toggleLoader () => {
    loader.classList.toggle("hide");
};

