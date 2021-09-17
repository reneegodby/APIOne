//1
const baseURL = 'https://random.dog/woof.json?filter=mp4';

//2 create variables
let randomButton = document.querySelector('button');
let image = document.querySelector('img');

//3 create events
randomButton.addEventListener('click', getPicture);

//4 create functions and GET json info by fetching from url within the function
function getPicture(pic) {
    fetch(baseURL)                          //fetch requires one parameter which is the URL of the resource
        .then(function(randomPic){      //returns info in a json format as a promise
        return randomPic.json();
        // console.log(json)
    })
    .then(function(json){     //invokes results after promise resolves so we can use the json we get back
        displayResults(json);
        // console.log(json)
    })
    
}

//you've pulled info now, display it
function displayResults(json){      
    console.log(json.url);
    let imgUrl = json.url; //set variable to json data/results
    image.src = imgUrl;     //set source of html image to variable
    image.alt = 'random dog image';
    
} 
