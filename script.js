//1
const baseURL = 'https://random.dog/woof.json';
// const baseURL = 'https://api.thedogapi.com/v1/images/search';
// const key= 'bcc617c9-6dff-4ce8-863d-3b78116bfc0e';



//2 create variables
let randomButton = document.querySelector('button');
let image = document.querySelector('img');
let randomFact = document.querySelector('p');

//3 create events
randomButton.addEventListener('click', getPicture);

//4 create functions and GET json info by fetching from url within the function
function getPicture(pic) {
    fetch(baseURL)                          //fetch requires one parameter which is the URL of the resource
        .then(function(randomPic){      //returns info in a json format as a promise
        return randomPic.json();
        console.log(json)
    })
    .then(function(json){     //invokes results after promise resolves so we can use the json we get back
        displayResults(json);
        console.log(json)
    })
    
}

// function getFact(fact){
//     fetch(factURL + key)
//         .then(function(factoids){
//         return factoids.json();
//     }).then(function(data){
//         displayResults(data);
//         console.log(data)
//     })
// }

//you've pulled info now, display it
function displayResults(json){      
    console.log(json.url);
    let imgUrl = json.url; //set variable to json data/results
    image.src = imgUrl;     //set source of html image to variable
    image.alt = 'random dog image';
    
} 
// function displayResults(data){
//     console.log(data.url);
// }