let jokeArea = document.querySelector(".joke_area")

let generatebtn = document.querySelector(".btn")

let API = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

function acquireJoke() {
    
    jokeArea.classList.remove("content-fade");
    
    fetch(API)
      .then((info) => info.json())
      .then((item) => {
        jokeArea.textContent = `${item.joke}`;
        
        jokeArea.classList.add("content-fade");
      });
  }

generatebtn.addEventListener("click", acquireJoke);