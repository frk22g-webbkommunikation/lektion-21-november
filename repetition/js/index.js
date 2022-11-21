const BASE_URL = 'https://karljoke.herokuapp.com/jokes/programming/ten';
const bodyElem = document.querySelector('body');

async function getJokes() {
    try { // Försök göra ett anrop till API:et
        const response = await fetch(BASE_URL);
        const data = await response.json();
        return data;
    } catch (error) { // Ifall ex. servern ligger nere så hoppar den in här
        console.log(error);
    }
}

function displayJokes(jokesArray) {
    jokesArray.forEach((joke) => {
        console.log(joke);
        const jokeElem = `
            <article>
                <p>${joke.setup}</p>
                <p>${joke.punchline}</p>
            </article>
        `
        bodyElem.insertAdjacentHTML('beforeend', jokeElem);
    });
}

async function start() {
    const jokes = await getJokes();
    displayJokes(jokes);
}

start();


// function add(numberO, numberT) {
//     const sum = numberO + numberT;
//     return sum;
// }

// function start2() {
//     const numberOne = 5;
//     const numberTwo = 5;

//     const result = add(numberOne, numberTwo);
//     console.log(result);
// }

// start2();