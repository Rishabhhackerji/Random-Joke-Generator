const jokeContainer = document.getElementById("joke");
// const btn = document.getElementById("btn");

// const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

// let getJoke = () => {
//     jokeContainer.classList.remove("fade");
//     fetch(url)
//     .then(data => data.json())
//     .then(item =>{
//         jokeContainer.textContent = `${item.joke}`;  
//         jokeContainer.classList.add("fade");
//     });
// }
// btn.addEventListener("click",getJoke);
// getJoke();
// Replace 'your_api_endpoint' with the actual API endpoint URL that provides random jokes.
// const apiEndpoint = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let flag="";
let  apiEndpoint = ``;
// Make a GET request to the API endpoint


function runon (){
    var dropdown = document.getElementById("menu");
    flag = dropdown.options[dropdown.selectedIndex].value;
    apiEndpoint = `https://v2.jokeapi.dev/joke/Any?category=${flag}&type=single`;
    jokeContainer.classList.remove("fade");
    fetch(apiEndpoint)
    .then(response => {
        // Check if the request was successful (status code 200)
        if (!response.ok) {
            throw new Error(`Failed to fetch jokes. Status: ${response.status}`);
        }
        // Parse the response body as JSON
        return response.json();
    })
    .then(data => {
        // Handle the data containing the random joke
        console.log('Random Joke:', data.joke);
        jokeContainer.innerHTML=data.joke;
        localStorage.setItem(`${flag}`, data.joke);
        jokeContainer.classList.add("fade");
        jokeContainer.style.color="White"
    })
    .catch(error => {
        // Handle errors
        console.error('Error fetching jokes:', error.message);
    });
    
}
runon()


