const jokeContainer = document.getElementById("joke");

let flag="";
let  apiEndpoint = ``;
// Make a GET request to the API endpoint
function runon (){
    var dropdown = document.getElementById("menu");
    flag = dropdown.options[dropdown.selectedIndex].value;
    apiEndpoint = `https://v2.jokeapi.dev/joke/Any?category=${flag}?lang=hi&type=single`;
    // apiEndpoint = `https://v2.jokeapi.dev/joke/${flag}?lang=hi&type=single`;

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
        jokeContainer.innerHTML=data.joke;
        localStorage.setItem(`${flag}`, data.joke);
        jokeContainer.classList.add("fade");
    })
    .catch(error => {
        // Handle errors
        console.error('Error fetching jokes:', error.message);
    });
    
}
runon()


